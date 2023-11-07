# VVerse Components Library

VVerse is a versatile components library built using Next.js, TailwindCSS, React, and various technologies and libraries, including Clerk, Radix UI, Shadcn-UI, clsx, twMerge, Flowbite (or Embla for carousels), Flatpickr for the calendar, Lucide-React for SVGs and icons, Zod Resolver for form validation, and more.

## Overview

All components within this library are designed with modularity in mind. They are highly customizable through props and utilize mock backend data for testing. The library includes master components for different modules like VGuide, VTube Profile, VNation, VJobs, and more. These components are built with accessibility in mind, incorporating aria-labels, tab-indexes, and proper HTML syntax for SEO.

## Features

- **Profile Banners:** Display profile data points with icons, titles, and data. Includes a rank system for subscription-based medals.

- **Asset Banners:** For various modules, these banners come with badges and can be added or called modularly.

- **Badges:** These badges can be used for personal profile cards, VTube, and more.

- **Navigation and Footer:** The navigation and footer components are available, with ongoing updates.

- **Alert Center:** A notification center is in place, though it was scratched but functional.

- **Video Component Customization:** Easily customize video component buttons, slider, and icons.

- **Modal Dialog Styles:** Customizable modal dialog styles are included.

- **Special Buttons:** Various special buttons are available.

- **Class Variance:** Smaller components support class variance, making it easy to override default styles.

- **Documentation:** Extensive documentation for the UI folder can be found in Shadcn-UI.

## Usage

To use this library, follow these steps:

1. **Installation:** Install the required dependencies using `npm i`.

2. **Configuration:**
   - Sign up for Clerk and obtain an API key.
   - Create a `.env` file in the project's root folder.
   - Add your Clerk API key to the `.env` file like this:
     ```
     CLERK_FRONTEND_API_KEY=your-api-key-here
     ```

3. **Run the Development Server:** Start the development server using `npm run dev`. This will allow you to explore and test the demo components with mock data.

## Project Structure

- `public`: Contains SVGs, demo videos, images, and SVG backgrounds.

- `constants.ts`: Holds navigation routes for the website.

- `src`: Contains the main source code.
  - `app`: The app directory holds layouts for different modules.
  - `auth`: Handles Clerk's login functionality.
  - `components`: Houses base UI elements.
  - `v-ui`: Customized VVerse components with specific data and styles.

## Notes

- The provided information includes the library's structure and available components.
- The public folder includes assets for use in your project.
- Clerk's authentication is set up in the auth folder.
- Data for mock backend testing is available.
- The UI folder contains base UI elements.
- V-ui holds VVerse-specific components.

Feel free to remove unused components or modules and update the colors in the `Globals.css` and `tailwind.config.ts` files as needed.

This README provides an overview of the project. For detailed documentation on each component, refer to the individual component files.

---

**Note:** This README provides an overview of the project, serving as a guide for the next developer who will work with these components. It specifies the technologies used and how to set up the development environment.
