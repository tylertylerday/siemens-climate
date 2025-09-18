# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (web + Electron apps for Mac/Windows)
- `npm run dockerbuild` - Build web version only (for Docker deployment)
- `npm run preview` - Preview production build

### Platform-specific builds
- `npm run build-mac` - Build Electron app for macOS only
- `npm run build-win` - Build Electron app for Windows only

### Code Quality
- `npm run lint` - Run ESLint with TypeScript support

### Docker
- `docker build -t ascentdigital/siemens-climate-docker:test .` - Build Docker image

## Project Architecture

This is a **React + TypeScript + Electron** application built for **Climate Week presentations**. It's designed as an interactive kiosk/presentation application showcasing climate-focused projects and Siemens partnerships.

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Desktop**: Electron (cross-platform desktop app)
- **UI Libraries**: Swiper.js for carousels, Animate.css for animations
- **Styling**: CSS modules + custom CSS

### Key Components

**FeatureCarousel** (`src/FeatureCarousel.tsx`)
- Main navigation component using Swiper.js
- Displays grid of project tiles with background images
- Responsive design (2-5 slides per view based on screen size)
- Auto-advance carousel with manual navigation
- Handles navigation to individual projects

**Project Data Structure**
- Projects stored as JSON files in `src/projects/` (project-1.json, project-2.json, etc.)
- Each project contains:
  - Metadata (title, description, hero media)
  - Tab-based content with images/videos and text
  - Support for both static images and video content

**Screensaver** (`src/Screensaver.tsx`)
- Video-based screensaver functionality
- Uses `src/assets/screensaver.webm`

### Asset Organization
- **Hero Images**: `src/assets/heroImages/` - Main project header images
- **Grid Images**: `src/assets/gridImages/` - Thumbnail images for carousel
- **Project Media**: `src/assets/projects/[Company Name]/` - Tab content media
- **QR Codes**: `src/assets/qrcodes/` - QR codes for additional content
- **Icons**: `src/icons/` - Application icons for Electron builds
- **Fonts**: `src/assets/fonts/SiemensSans/` - Custom Siemens brand fonts

### Electron Configuration
- **Main Process**: `electron/main.ts` - Window management, fullscreen support
- **Preload**: `electron/preload.ts` - IPC bridge
- **Build Config**: `electron-builder.json5` - Cross-platform build settings
- Supports kiosk mode with fullscreen functionality

### Content Management
Projects are data-driven through JSON files. Each project follows this structure:
- `projectId`: Unique identifier
- `title`: Display name
- `heroMedia`: Path to header image/video
- `tabs[]`: Array of content tabs with images, headings, and text (supports HTML)

The application maps project grid positions to JSON files, enabling easy content updates without code changes.

### Development Notes
- Uses ES modules (`"type": "module"` in package.json)
- ESLint configured for React + TypeScript
- Vite handles both web and Electron builds
- Assets are optimized for presentation display (high-quality images/videos)
- Responsive design supports various screen sizes for kiosk deployment