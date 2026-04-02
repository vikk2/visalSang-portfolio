const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");
});

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("is-visible"));
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = contactForm.querySelector("button");

    if (button) {
      const previousText = button.textContent;
      button.textContent = "Message Ready";

      window.setTimeout(() => {
        button.textContent = previousText;
      }, 1800);
    }
  });
}

const tokenForm = document.querySelector(".token-form");
const tokenInput = document.querySelector("#token-input");
const tokenStatus = document.querySelector("#token-status");
const clearTokenButton = document.querySelector("#clear-token");
const tokenStorageKey = "portfolio_local_token";

const updateTokenStatus = () => {
  if (!tokenStatus) {
    return;
  }

  const savedToken = window.localStorage.getItem(tokenStorageKey);
  tokenStatus.textContent = savedToken
    ? "A token is saved locally in this browser."
    : "No token saved yet.";
};

if (tokenForm && tokenInput) {
  updateTokenStatus();

  tokenForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const token = tokenInput.value.trim();

    if (!token) {
      tokenStatus.textContent = "Enter a token before saving.";
      return;
    }

    window.localStorage.setItem(tokenStorageKey, token);
    tokenInput.value = "";
    updateTokenStatus();
  });
}

if (clearTokenButton) {
  clearTokenButton.addEventListener("click", () => {
    window.localStorage.removeItem(tokenStorageKey);
    if (tokenInput) {
      tokenInput.value = "";
    }
    updateTokenStatus();
  });
}
