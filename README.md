# Personal Portfolio Website – Assignment 3

## Project Description

This project is a personal portfolio website developed for SWE 363. It was initially created in Assignment 1 and progressively enhanced in Assignments 2 and 3.

The website introduces my background, interests, and projects while demonstrating front-end web development skills using HTML, CSS, and JavaScript.

Assignment 3 focuses on advanced functionality, including external API integration, complex JavaScript logic, state management, and performance considerations.

## Features

### 1. Portfolio Features

- About Me section
- Projects section with project screenshots and descriptions
- Interactive project filtering (All Projects, Web Apps, and Visualization)
- Contact form with name, email, and message fields
- Form validation with error and confirmation messages
- Responsive design for desktop, tablet, and mobile devices
- Light and dark mode toggle with theme preference saved using localStorage
- Smooth scrolling between sections
- Hover effects on buttons and project cards
- Animated form feedback messages


### 2. GitHub API Integration

- Fetches up to 20 public repositories using the GitHub REST API.
- Dynamically displays repository names, descriptions, programming languages, stars, and links.
- Handles loading states, API errors, and empty results.

### 3. Advanced JavaScript Functionality

- Live repository search by name.
- Dynamic filtering by programming language.
- Sorting by last update, alphabetical order, or number of stars.
- Combined searching, filtering, and sorting.
- Results counter showing the number of matching repositories.

### 4. State Management

- Saves search, language, and sorting preferences using `localStorage`.
- Restores saved preferences when the page is refreshed.
- Provides a Reset Filters button to restore default settings.
- Validates saved preferences to handle outdated or invalid values.

## Technologies Used

- HTML
- CSS
- JavaScript
- CSS Flexbox
- CSS Media Queries
- CSS Transitions and Animations
- Browser localStorage
- Git and GitHub
- GitHub REST API and API integration 


## Project Structure

    id-name-assignment3/
    ├── README.md
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    ├── assets/
    │   └── images/
    │       ├── project1.png
    │       └── project2.png
    └── docs/
        ├── ai-usage-report.md
        └── technical-documentation.md

## How to Run

1. Clone or download the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension or another local development server.
4. The portfolio will load in the browser, and the GitHub repositories will be retrieved automatically.

An internet connection is required to load the GitHub repository information.

## Testing

The website was tested to verify the following functionality:

- GitHub API integration and dynamic repository display.
- Live search, language filtering, and sorting.
- Saving and restoring preferences after refreshing the page.
- Reset Filters functionality.
- Dark/light mode persistence.
- Contact form validation.
- Responsive layout on different screen sizes.

## Performance

The website uses a lightweight structure with HTML, CSS, and JavaScript.

GitHub repository information is fetched once per page load and reused for searching, filtering, and sorting to avoid unnecessary API requests.

The project also uses a small number of images and reusable JavaScript functions to maintain efficiency.

Google Chrome Lighthouse was used to evaluate the website's performance in mobile view and desktop view.

## Documentation

Additional documentation is available in the `docs/` folder:

- **technical-documentation.md:** Explains the implementation of the API integration, complex logic, state management, performance evaluation, and testing.
- **ai-usage-report.md:** Documents the use of AI assistance during development, including the evaluation and modification of suggestions.

