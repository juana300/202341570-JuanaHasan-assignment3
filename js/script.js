// Dark mode with localStorage
const themeButton = document.getElementById("theme-toggle");

// Load the saved theme when the page opens
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
} else {
    themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filter;

        // Update the active button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        // Show or hide projects
        projectCards.forEach(function (card) {
            const category = card.dataset.category;

            if (selectedFilter === "all" || category === selectedFilter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

// Set the initial active filter
filterButtons[0].classList.add("active");
filterButtons[0].setAttribute("aria-pressed", "true");

// Contact form validation
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formFeedback.textContent = "";
    formFeedback.className = "";

    let isValid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate message
    if (message === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    // Show confirmation if all inputs are valid
    if (isValid) {
        formFeedback.textContent =
            "Your message has been validated successfully! This is a demo form; no message was sent.";

        formFeedback.className = "success";
        contactForm.reset();
    } else {
        formFeedback.textContent =
            "Please correct the highlighted fields and try again.";

        formFeedback.className = "error";
    }
});



const githubContainer = document.getElementById("github-repos");
const githubSearch = document.getElementById("github-search");
const githubLanguage = document.getElementById("github-language");
const githubSort = document.getElementById("github-sort");
const githubResults = document.getElementById("github-results");

let githubRepositories = [];

// Fetch repositories from GitHub
async function loadGitHubProjects() {
    const username = "juana300";

    githubSearch.disabled = true;
    githubLanguage.disabled = true;
    githubSort.disabled = true;

    githubContainer.textContent = "Loading GitHub repositories...";
    githubResults.textContent = "";

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch GitHub repositories.");
        }

        githubRepositories = await response.json();

        // Handle an account with no public repositories
        if (githubRepositories.length === 0) {
            githubContainer.textContent =
                "No public repositories available.";

            githubResults.textContent = "Showing 0 repositories";
            return;
        }

        // Get unique programming languages
        const languages = [
            ...new Set(
                githubRepositories.map(function(repo) {
                    return repo.language || "Not specified";
                })
            )
        ];

        // Reset the language dropdown before populating it
        githubLanguage.innerHTML =
            '<option value="all">All Languages</option>';

        // Add programming languages to the dropdown
        languages.sort().forEach(function(language) {
            const option = document.createElement("option");
            option.value = language;
            option.textContent = language;
            githubLanguage.appendChild(option);
        });

        // Enable controls after successful loading
        githubSearch.disabled = false;
        githubLanguage.disabled = false;
        githubSort.disabled = false;

        updateGitHubProjects();

    } catch (error) {
        console.error("GitHub API Error:", error);

        githubContainer.textContent =
            "Unable to load GitHub repositories. Please try again later.";

        githubResults.textContent = "";

        githubSearch.disabled = true;
        githubLanguage.disabled = true;
        githubSort.disabled = true;
    }
}

// Apply searching, filtering, and sorting
function updateGitHubProjects() {
    const searchText = githubSearch.value.toLowerCase().trim();
    const selectedLanguage = githubLanguage.value;
    const selectedSort = githubSort.value;

    let filteredRepos = githubRepositories.filter(function(repo) {
        const matchesSearch = repo.name
            .toLowerCase()
            .includes(searchText);

        const matchesLanguage =
            selectedLanguage === "all" ||
            (repo.language || "Not specified") === selectedLanguage;

        return matchesSearch && matchesLanguage;
    });

    // Sort the matching repositories
    if (selectedSort === "name") {
        filteredRepos.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

    } else if (selectedSort === "stars") {
        filteredRepos.sort(function(a, b) {
            return b.stargazers_count - a.stargazers_count;
        });

    } else if (selectedSort === "updated") {
        filteredRepos.sort(function(a, b) {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
    }

    displayGitHubProjects(filteredRepos);

    // Update the results counter
    githubResults.textContent =
        `Showing ${filteredRepos.length} of ${githubRepositories.length} repositories`;
}

// Display GitHub repository cards
function displayGitHubProjects(repositories) {
    githubContainer.innerHTML = "";

    // Handle search or filter with no matching results
    if (repositories.length === 0) {
        githubContainer.textContent =
            "No repositories match your search or filter.";
        return;
    }

    repositories.forEach(function(repo) {
        const card = document.createElement("article");
        card.className = "github-card";

        const title = document.createElement("h3");
        title.textContent = repo.name;

        const description = document.createElement("p");
        description.textContent =
            repo.description || "No description available.";

        const language = document.createElement("p");
        language.textContent =
            "Language: " + (repo.language || "Not specified");

        const stars = document.createElement("p");
        stars.textContent = "Stars: " + repo.stargazers_count;

        const link = document.createElement("a");
        link.href = repo.html_url;
        link.textContent = "View on GitHub";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.append(title, description, language, stars, link);
        githubContainer.appendChild(card);
    });
}

// Event listeners for the controls
githubSearch.addEventListener("input", updateGitHubProjects);
githubLanguage.addEventListener("change", updateGitHubProjects);
githubSort.addEventListener("change", updateGitHubProjects);

// Load repositories when the page opens
loadGitHubProjects();