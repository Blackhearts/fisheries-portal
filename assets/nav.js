(function () {
  const items = document.querySelectorAll("[data-dropdown]");
  const closeAll = () => items.forEach(li => li.classList.remove("open"));

  items.forEach(li => {
    const btn = li.querySelector("button");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = li.classList.contains("open");
      closeAll();
      if (!isOpen) li.classList.add("open");
    });
  });

  document.addEventListener("click", (e) => {
    // click outside closes dropdowns
    if (!e.target.closest("[data-dropdown]")) closeAll();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
})();