# Online Library System

A modern online library application with a sleek dark theme UI for browsing and exploring books across various categories.

## Features

- **Dark Theme UI**: Clean modern interface with black background and white text
- **Category Browsing**: Browse books by categories including Fiction, Non-Fiction, Sci-Fi, Mystery, Romance, Biography, History, and Fantasy
- **Book Catalog**: 16 curated books with detailed information including descriptions, ratings, and cover images
- **Responsive Design**: Grid-based layout that adapts to different screen sizes

## Project Structure

- **src/components**: Contains the main UI components for the library system.
  - **Body.jsx**: Main homepage layout featuring categories and popular books
  - **BookDetail.jsx**: Displays detailed information about a selected book
  - **BrowseBooks.jsx**: Component for browsing the complete book catalog
  - **Header.jsx**: Contains the navigation elements with dark theme styling
  - **FilterByCategory.jsx**: Provides functionality to filter books by categories

- **src/utils**: Contains utility files.
  - **bookSlice.js**: Redux slice managing the book catalog data with 16 books across categories
  - **popularBooks.js**: Data file containing the complete book collection

## Technologies Used

- React
- Redux Toolkit
- React Router
- Tailwind CSS

## Requirements

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm 

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Aman218/OnlineLibrary.git
```

2. Navigate into the project directory:
```bash
cd OnlineLibrary
```

3. Install the dependencies:
```bash
npm install

```

4. To run the development server with Vite:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173/
```

## Project Links

- **GitHub Repository**: https://github.com/Aman218/OnlineLibrary
- **Deployed Application**: https://online-library-peach.vercel.app/