# Technical Documentation

## 1. Introduction

This document describes the technical implementation of my personal portfolio website for SWE 363 Assignment 3. The project builds on the portfolio developed in Assignments 1 and 2 by adding advanced JavaScript functionality, external API integration, and improved state management.

The main goal of this assignment was to make the portfolio more dynamic and interactive while maintaining the existing design and functionality.

The new features include:

- Integration with the GitHub REST API to display public repositories.
- Live searching, filtering, and sorting of GitHub repositories.
- Saving and restoring user preferences using `localStorage`.
- Handling API errors, loading states, and empty results.
- Reviewing the website's performance and efficiency.

The website was developed using HTML, CSS, and JavaScript without additional frameworks.


## 2. GitHub API Integration

### 2.1 API Selection

I integrated the GitHub REST API to dynamically display my public repositories on my portfolio website.

The API endpoint used is:

```text
https://api.github.com/users/juana300/repos?sort=updated&per_page=20
```

The `sort=updated` parameter requests repositories ordered by their latest updates, while `per_page=20` limits the response to 20 repositories.

### 2.2 Fetching and Displaying Repositories

I used `fetch()` with `async/await` to retrieve repository information from GitHub. The application checks `response.ok` to verify that the request was successful and uses `response.json()` to process the returned data.

The repositories are stored in a JavaScript array and displayed dynamically using `forEach()`, `document.createElement()`, and DOM manipulation.

Each repository card displays its name, description, primary programming language, number of stars, and a link to GitHub.

### 2.3 Error and Empty-State Handling

I used `try...catch` to handle API errors and display a user-friendly message if the request fails.

While the repositories are loading, the website displays a loading message and disables the search, filtering, and sorting controls.

I also added conditions to handle accounts with no public repositories and searches with no matching results. Missing repository descriptions or programming languages are replaced with default messages.

## 3. Complex Logic

For the Complex Logic requirement, I implemented live search, language filtering, and sorting for GitHub repositories.

### 3.1 Live Search and Language Filtering

Visitors can search for repositories by name, with results updating automatically as they type. I used `toLowerCase()`, `trim()`, and `includes()` to make searching case-insensitive.

The language dropdown is generated dynamically using `map()` and `Set` to extract unique programming languages from the GitHub data.

I used `filter()` and the `&&` operator to combine search and language filtering, ensuring that repositories satisfy both conditions before being displayed.

### 3.2 Repository Sorting

Visitors can sort repositories by:

- Recently Updated.
- Name (A–Z).
- Most Stars.

I used `sort()` with `localeCompare()` for alphabetical sorting, star counts for popularity, and `Date` objects for update dates.

The search, filtering, and sorting features work together, and the results counter updates to show the number of matching repositories.

## 4. State Management

I extended the `localStorage` functionality from Assignment 2 to remember visitors' GitHub repository preferences.

### 4.1 Saving and Restoring Preferences

The application saves the search text, selected language, and sorting option using `JSON.stringify()` and `localStorage.setItem()`.

When the webpage is refreshed, `JSON.parse()` retrieves the saved preferences, which are restored after the GitHub repositories load.

I also added validation to handle invalid or outdated preferences. If a saved language is no longer available, the application uses All Languages by default.

### 4.2 Reset Filters

I added a Reset Filters button that clears the search text, selects All Languages, and restores Recently Updated sorting.

The button also removes the saved GitHub preferences using `localStorage.removeItem()`, without affecting the saved dark/light mode preference.

## 5. Performance Optimization

I reviewed the website's images, code, and resource usage to identify possible performance improvements.

The portfolio contains only two small project images, so additional compression was not necessary.

For the GitHub API, repository data is fetched once and stored in a JavaScript array. Searching, filtering, and sorting reuse this data without making additional API requests.

I also organized the JavaScript into reusable functions to reduce code repetition and improve maintainability.

I used Google Chrome Lighthouse to evaluate the website's performance in desktop and mobile view. It reported good performance results in both cases.

The website uses HTML, CSS, and JavaScript without additional frameworks or libraries.

## 6. Testing and Debugging

I tested the GitHub API using Chrome Developer Tools and verified that the repository information was retrieved and displayed correctly.

I tested live search, language filtering, and sorting to confirm that they worked individually and together.

For state management, I changed the repository preferences and refreshed the webpage to verify that they were restored. I also tested the Reset Filters button.

I reviewed the responsive layout and corrected an issue where GitHub repositories appeared beside the existing project cards on larger screens. I also adjusted the alignment of the Reset Filters button and results counter.

The application includes handling for API failures, loading states, and empty search results.

## 7. Conclusion

Assignment 3 helped me improve my understanding of API integration, asynchronous JavaScript, complex logic, and state management.

I learned how to fetch and display external data, combine searching, filtering, and sorting, and save user preferences using `localStorage`.

I also gained experience handling errors, debugging layout issues, and improving code efficiency while maintaining the features developed in previous assignments.
