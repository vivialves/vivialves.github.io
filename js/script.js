// Vanilla JS for interactivity
function openProject(project) {
  switch (project) {
    case "sound":
      alert("Sound Recognition Project - Coming soon!");
      break;
    case "breast-cancer":
      alert("Breast Cancer Classifier - Version 2 - Coming soon!");
      break;
    case "meal":
      alert("Meal Planner App - Coming soon!");
      break;
    default:
      alert("Project not found!");
  }
}

// GitHub integration
document.addEventListener("DOMContentLoaded", () => {
  const ul = document.getElementById('github-repos');
  if (!ul) return;

  fetch('https://api.github.com/users/vivialves/repos?sort=updated')
    .then(response => response.json())
    .then(repos => {
      repos.slice(0,5).forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - Updated: ${new Date(repo.updated_at).toLocaleDateString()}`;
        ul.appendChild(li);
      });
    })
    .catch(err => console.error('GitHub API Error:', err));
});

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});

// Example dynamic behavior
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded ✅");

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove highlight from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active-btn"));

      // Highlight clicked button
      button.classList.add("active-btn");

      const category = button.getAttribute("data-category");

      // Show/hide projects
      projectCards.forEach((card) => {
        if (category === "all" || card.classList.contains(category)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 👉 Highlight "All" by default on load
  document.querySelector('.filter-btn[data-category="all"]').classList.add("active-btn");
});

