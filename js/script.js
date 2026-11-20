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


// Fetch GitHub repositories

async function loadGitHubProjects() {
    const username = "juana300";
    const container = document.getElementById("github-repos");

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch GitHub repositories.");
        }

        const repositories = await response.json();

        
        container.innerHTML = "";

        if (repositories.length === 0) {
            container.textContent = "No public repositories found.";
            return;
        }

        repositories.forEach(function (repo) {
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

            container.appendChild(card);
});


    } catch (error) {
        console.error("GitHub API Error:", error);

        container.textContent =
            "Unable to load GitHub projects. Please try again later.";
    }
}

loadGitHubProjects();
