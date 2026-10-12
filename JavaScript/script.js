
document.addEventListener("DOMContentLoaded", () => {
  // MOBILE NAVIGATION
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");

      burgerBtn.setAttribute("aria-expanded", String(isOpen));
      burgerBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        burgerBtn.setAttribute("aria-expanded", "false");
        burgerBtn.setAttribute("aria-label", "Open navigation");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        mobileNav.classList.remove("open");
        burgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // FOOTER YEAR
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // CENTER-FOCUSED PROJECT CAROUSEL
  const track = document.getElementById("projectsTrack");
  const viewport = document.getElementById("projectsViewport");
  const prevBtn = document.getElementById("projectsPrev");
  const nextBtn = document.getElementById("projectsNext");
  const dotsContainer = document.getElementById("projectsDots");
  const currentProject = document.getElementById("currentProject");
  const totalProjects = document.getElementById("totalProjects");

  if (
    !track ||
    !viewport ||
    !prevBtn ||
    !nextBtn ||
    !dotsContainer
  ) {
    return;
  }

  let activeIndex = 0;
  let resizeFrame = null;

  const getCards = () =>
    Array.from(track.querySelectorAll(".project-card"));

  const formatNumber = (number) =>
    String(number).padStart(2, "0");

  function buildDots() {
    const cards = getCards();
    dotsContainer.replaceChildren();

    cards.forEach((_, index) => {
      const dot = document.createElement("button");

      dot.type = "button";
      dot.className = "carousel-dot";
      dot.setAttribute("aria-label", `Show project ${index + 1}`);
      dot.setAttribute("aria-controls", "projectsTrack");

      dot.addEventListener("click", () => {
        activeIndex = index;
        updateCarousel();
      });

      dotsContainer.appendChild(dot);
    });
  }

  function updateCarousel() {
    const cards = getCards();

    if (!cards.length) {
      track.style.transform = "translateX(0)";
      prevBtn.disabled = true;
      nextBtn.disabled = true;

      if (currentProject) currentProject.textContent = "00";
      if (totalProjects) totalProjects.textContent = "00";

      dotsContainer.replaceChildren();
      return;
    }

    activeIndex = (activeIndex + cards.length) % cards.length;

    cards.forEach((card, index) => {
      const isActive = index === activeIndex;

      card.classList.toggle("is-active", isActive);
      card.classList.toggle("is-side", !isActive);

      card.setAttribute("aria-current", isActive ? "true" : "false");
    });

    /*
      Center the active card inside the visible carousel viewport.
      offsetLeft is relative to the track's layout container.
    */
    const activeCard = cards[activeIndex];

    const cardCenter =
      activeCard.offsetLeft + activeCard.offsetWidth / 2;

    const viewportCenter = viewport.clientWidth / 2;

    const translateX = viewportCenter - cardCenter;

    track.style.transform = `translateX(${translateX}px)`;

    // Pagination dots
    Array.from(dotsContainer.children).forEach((dot, index) => {
      const isActive = index === activeIndex;

      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    // Project counter
    if (currentProject) {
      currentProject.textContent = formatNumber(activeIndex + 1);
    }

    if (totalProjects) {
      totalProjects.textContent = formatNumber(cards.length);
    }

    // Wrap around to the first/last project, so arrows stay enabled.
    prevBtn.disabled = cards.length < 2;
    nextBtn.disabled = cards.length < 2;
  }

  prevBtn.addEventListener("click", () => {
    activeIndex--;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    activeIndex++;
    updateCarousel();
  });

  // Keyboard navigation when the carousel is focused
  viewport.setAttribute("tabindex", "0");
  viewport.setAttribute("aria-label", "Project carousel");

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      activeIndex--;
      updateCarousel();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      activeIndex++;
      updateCarousel();
    }
  });

  // Recalculate centering when screen size changes
  window.addEventListener("resize", () => {
    if (resizeFrame) {
      cancelAnimationFrame(resizeFrame);
    }

    resizeFrame = requestAnimationFrame(() => {
      updateCarousel();
      resizeFrame = null;
    });
  });

  // Recalculate automatically if project cards are added or removed
  const observer = new MutationObserver(() => {
    const cards = getCards();

    if (activeIndex >= cards.length) {
      activeIndex = Math.max(0, cards.length - 1);
    }

    buildDots();
    updateCarousel();
  });

  observer.observe(track, { childList: true });

  // Initialize carousel
  buildDots();
  updateCarousel();
});
