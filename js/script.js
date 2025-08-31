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

