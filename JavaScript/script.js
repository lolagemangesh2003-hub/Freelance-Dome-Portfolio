// Secret signature — hi, curious dev 👋
      console.log(
        "%cBuilt by Mangesh 🚀",
        "color:#9b7bff; font-family:monospace; font-size:16px; font-weight:bold;",
      );

      // Mobile nav toggle
      const burger = document.getElementById("burgerBtn");
      const mobileNav = document.getElementById("mobileNav");
      burger.addEventListener("click", () => {
        mobileNav.style.display =
          mobileNav.style.display === "block" ? "none" : "block";
      });
      mobileNav
        .querySelectorAll("a")
        .forEach((a) =>
          a.addEventListener("click", () => (mobileNav.style.display = "none")),
        );

      // Scroll reveal
      const revealEls = document.querySelectorAll(".reveal");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealEls.forEach((el) => io.observe(el));
