// Mark Chester Santos Portfolio - Interactive Controller
document.addEventListener("DOMContentLoaded", () => {
  // 1. Project Category Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });

  // 2. Blueprint Tab Switching
  const bpTabs = document.querySelectorAll(".bp-tab");
  const bpContents = document.querySelectorAll(".blueprint-content");

  bpTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      bpTabs.forEach(t => t.classList.remove("active"));
      bpContents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  // 3. Navbar scroll subtle shadow
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 30) {
      navbar.style.borderBottomColor = "rgba(56, 189, 248, 0.2)";
      navbar.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.5)";
    } else {
      navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.07)";
      navbar.style.boxShadow = "none";
    }
  });
});