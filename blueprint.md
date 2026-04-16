# Blueprint: Cerveceria 501 - Astro.js Website

## 1. Project Overview

This project is a modern, visually appealing, and content-focused website for "Cerveceria 501". It is built with Astro.js, emphasizing performance and a server-first approach. The site's content is designed to be fully dynamic, managed by an external CRM system and updated on the live site via a CI/CD pipeline.

## 2. Project Outline & Features

### 2.1. Core Technology
*   **Framework:** Astro.js
*   **Styling:** A modern, clean design implemented with utility-first CSS (like Tailwind CSS) and custom styles.
*   **Content Backend:** Firestore is used as the database to store website content.
*   **Image Backend:** Firebase Storage is used to host all website images, particularly for the gallery.
*   **Content Management:** An external CRM application (Next.js) is used to edit and manage the content and images.

### 2.2. Website Structure & Content
The website content is fetched from Firestore at build time. It includes the following sections:
*   **Site-wide:** `site.title`
*   **Header:** `header.title`
*   **Hero Section:** `hero.title`, `hero.subtitle`
*   **About Us:** `about.title`, `about.text`
*   **Image Gallery:** `gallery.title`. The images (`gallery.images`) are loaded dynamically by recursively scanning the `/gallery` directory in Firebase Storage.
*   **Events:** `events.title`, `events.list`
*   **Footer:** `footer.title`, `footer.address`, `footer.schedule`, `footer.social` links.

### 2.3. Deployment & CI/CD Pipeline
The project implements an automated deployment workflow to ensure content changes from the CRM are reflected on the live website instantly.
1.  **Trigger:** An editor saves new content in the external CRM.
2.  **Webhook:** The CRM calls a Firebase Cloud Function (`triggerPublish`).
3.  **Dispatch:** The Cloud Function sends a `repository_dispatch` event to the Astro website's GitHub repository (`raqferna/quini`), authenticated via a GitHub PAT stored securely in Google Secret Manager.
4.  **CI/CD:** A GitHub Action workflow listens for the `repository_dispatch` event.
5.  **Build & Deploy:** The GitHub Action builds the Astro site (pulling content from Firestore and images from Storage) and deploys the static output to its hosting environment.

## 3. Change History & Implemented Solutions

### 3.1. **Resolved:** CI/CD Pipeline Authentication
*   **Problem:** The `triggerPublish` Cloud Function was failing with a `401 Bad Credentials` error, preventing the automated deployment from starting.
*   **Solution:** The issue was traced to an incorrect or corrupted GitHub Personal Access Token (PAT) in Google Secret Manager. The problem was resolved by systematically regenerating the PAT with the correct `repo` scope, carefully updating it in Secret Manager, and adding diagnostic logging to the function to confirm the correct token was being loaded.

### 3.2. **Current Request:** Fix Dynamic Image Gallery
*   **Problem:** The image gallery was not displaying all images. Images were organized into multiple subdirectories within the `gallery/` path in Firebase Storage, but only images from some directories were appearing.
*   **Solution Implemented:** The recursive function `getAllImageUrls` in `src/pages/index.astro`, which is responsible for fetching images from Firebase Storage, has been enhanced with detailed diagnostic logging. It now prints a trace of its execution path to the console during the build process (`npm run dev`), showing which folders it explores and how many images it finds in each. This allows the user to check the terminal output and quickly identify if any directories are not being accessed, likely due to permission issues in Firebase Storage.
