# AI Usage Report

## 1. Tools Used & Use Cases

I used **ChatGPT (GPT-6)** as an AI assistant throughout Assignment 3 to help me understand the requirements, plan new features, and improve my existing portfolio website.

I mainly used ChatGPT for the following purposes:

- **GitHub API Integration:** Understanding how to use the GitHub REST API with `fetch()` and `async/await` to retrieve and display public repositories.
- **Complex Logic:** Planning and implementing live search, language filtering, and sorting for GitHub repositories.
- **State Management:** Understanding how to save and restore multiple user preferences using `localStorage`, `JSON.stringify()`, and `JSON.parse()`.
- **Debugging and Styling:** Identifying layout problems and improving the positioning of GitHub repositories, search controls, and the Reset Filters button.
- **Documentation:** Drafting and reviewing the technical documentation, README, and AI usage report.

I used ChatGPT to explain proposed code and modifications before implementing them, allowing me to evaluate whether the suggestions were suitable for my portfolio.

## 2. Benefits & Challenges

### Benefits

ChatGPT helped me understand advanced JavaScript concepts and how to apply them to my existing portfolio.

It provided explanations of the GitHub API, array methods such as `map()`, `filter()`, and `sort()`, and state management using `localStorage`.

It also helped me organize the implementation into smaller steps, making it easier to review and test each feature before moving to the next.

It helped me ease the documentation part of the assignment 

### Challenges

One challenge was integrating new functionality without affecting the existing features from Assignment 2.

For example, after adding the GitHub repositories, I noticed that their position changed depending on the screen size. I reviewed the HTML structure and adjusted the placement of the GitHub section to keep it below my existing projects.

I also encountered an alignment issue with the Reset Filters button and results counter on larger screens. I reviewed the suggested layout changes to improve their positioning.

Another challenge was ensuring that saved preferences remained valid when the available GitHub repository languages changed.

These situations required reviewing the AI suggestions and considering how they would affect the existing code.

## 3. Learning Outcomes

Through this assignment, I improved my understanding of several JavaScript concepts and development practices.

I learned how to retrieve external data using `fetch()` and `async/await`, process JSON responses, and dynamically create HTML elements.

I also practiced using `map()`, `filter()`, `sort()`, `Set`, and logical operators to implement searching, filtering, and sorting.

For state management, I learned how to store multiple preferences in one object using `JSON.stringify()` and restore them using `JSON.parse()`.

Additionally, I gained experience handling API errors, loading states, empty results, and responsive layout issues.

Working with AI also helped me develop a more organized workflow by reviewing proposed changes, understanding their purpose, and testing the functionality before continuing.


## 4. Responsible Use & Modifications

I used ChatGPT as a learning and development assistant rather than accepting its suggestions without reviewing them.

Throughout the assignment, I proposed additions and improvements to my portfolio and discussed them with ChatGPT to evaluate their suitability. Before implementing new functionality, I asked ChatGPT to explain the proposed code, its purpose, and how it would affect my existing portfolio. I reviewed the suggestions and approved the changes that matched my requirements.

I also made decisions about the implementation. For example, I chose to combine my existing project cards with GitHub repositories instead of replacing them, and I selected a limit of 20 repositories for future expansion.

During development, I identified and addressed layout issues involving the GitHub section and Reset Filters button.

I tested the GitHub API using the browser console and verified the searching, filtering, sorting, and state management functionality in the browser.

I maintained my existing HTML, CSS, and JavaScript structure and built on the features developed in Assignments 1 and 2.

Through this process, I aimed to ensure that I understood the submitted code and that the final implementation reflected my own decisions and requirements.

## 5. AI Usage Log

| ID | Tool (Model) | Date | Purpose | Files Affected | What I Changed and How I Verified It |
| --- | --- | --- | --- | --- | --- |
| C01 | ChatGPT (GPT-6) | Nov. 20, 2026 | GitHub API integration | `index.html`, `script.js`, `styles.css` | Added a GitHub repositories section according to the layput i wanted, implemented API fetching and dynamic cards, and verified the API response in the browser console. |
| C01 | ChatGPT (GPT-6) | Nov. 20, 2026 | Complex logic | `index.html`, `script.js`, `styles.css` | Added live search, language filtering, and sorting. Tested the controls individually and together. |
| C01 | ChatGPT (GPT-6) | Nov. 21, 2026 | State management | `index.html`, `script.js`, `styles.css` | Added saving and restoring of GitHub preferences and a Reset Filters button. Checked preference persistence after refreshing the page. |
| C01 | ChatGPT (GPT-6) | Nov. 21, 2026 | Debugging and responsive styling | `index.html`, `styles.css` | Reviewed layout problems involving GitHub repositories and the Reset Filters button  and did the modifications that fixed the issue. |
| C01 | ChatGPT (GPT-6) | Nov. 21, 2026 | Documentation | `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | Used AI to draft and revise documentation, then reviewed the content against the implemented features and done neccessary modifications. |

**Note:** Rows are divided depending on parts of the conversation.

## 6. AI Usage Declaration

**Name:** Juana Hasan  
**Student ID:** 202341570  
**Date:** Nov. 21, 2026

 I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.