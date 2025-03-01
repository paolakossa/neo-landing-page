// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // =====================================================
  // SLIDER / CAROUSEL LOGIC
  // =====================================================
  const slides = document.querySelectorAll(".slider__item");
  let currentSlide = 0;
  const slideInterval = 5000; // Time (in ms) between slide transitions

  // Function to move to the next slide
  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Start automatic slide rotation
  setInterval(nextSlide, slideInterval);

  // =====================================================
  // SCROLL ANIMATION USING INTERSECTION OBSERVER
  // =====================================================
  // Select all elements that should animate when they enter the viewport
  const allAnimatedElements = document.querySelectorAll(
    '[data-animate="fade-in"], .step, .card, .slot-card'
  );
  const observerOptions = { threshold: 0.1 }; // Trigger when 10% is visible

  // Create an Intersection Observer to add the "fade-in" class when an element enters the viewport
  const unifiedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        unifiedObserver.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  }, observerOptions);

  // Observe each animated element
  allAnimatedElements.forEach((el) => {
    unifiedObserver.observe(el);
  });

  // =====================================================
  // FALLING COINS (INTERACTIVE BACKGROUND) LOGIC
  // =====================================================
  const coinContainer = document.getElementById("falling-coins");

  // Function to create and animate a coin
  function createCoin() {
    const coin = document.createElement("div");
    coin.classList.add("coin");

    // Set a random horizontal position (0% to 90%) within the slider
    coin.style.left = Math.random() * 90 + "%";

    // Randomize the animation duration between 3s and 7s
    const duration = Math.random() * 4 + 3;
    coin.style.animationDuration = duration + "s";

    // Randomize the animation delay up to 2s
    coin.style.animationDelay = Math.random() * 2 + "s";

    // Append the coin to the container
    coinContainer.appendChild(coin);

    // Remove the coin after the animation ends to keep the DOM clean
    coin.addEventListener("animationend", () => {
      coin.remove();
    });
  }

  // Create a new coin every 500ms
  setInterval(createCoin, 500);

  // =====================================================
  // THEME TOGGLE (DARK/LIGHT MODE) LOGIC
  // =====================================================
  // Function to update slider images based on the theme
  function updateSliderImages() {
    const isLightMode = document.body.classList.contains("light-mode");
    const imagesToToggle = document.querySelectorAll(
      "img[data-dark-src][data-light-src]"
    );

    imagesToToggle.forEach((img) => {
      // If light mode is active, set the image source to the light version; otherwise, use the dark version.
      if (isLightMode) {
        img.src = img.getAttribute("data-light-src");
      } else {
        img.src = img.getAttribute("data-dark-src");
      }
    });
  }

  // Get the theme toggle checkbox
  const themeToggleCheckbox = document.getElementById("theme-toggle");

  // Listen for changes on the theme toggle
  themeToggleCheckbox.addEventListener("change", () => {
    // Toggle the "light-mode" class on the body based on the checkbox state
    document.body.classList.toggle("light-mode", themeToggleCheckbox.checked);
    // Update slider images accordingly
    updateSliderImages();
  });

  // =====================================================
  // MOBILE MENU TOGGLE LOGIC
  // =====================================================
  const toggleBtn = document.querySelector(".navbar__toggle");
  const menu = document.querySelector(".navbar__menu");

  // Toggle the mobile menu visibility when the toggle button is clicked
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // =====================================================
  // LANGUAGE TOGGLE & TEXT UPDATE LOGIC
  // =====================================================
  // Translation object with keys for Portuguese and English
  const translations = {
    pt: {
      header: {
        jogos: "Jogos",
        promocoes: "Promoções",
        casinoAoVivo: "Casino ao Vivo",
        suporte: "Suporte",
        login: "Login",
        registreSe: "Registre-se",
      },
      slider: {
        title1: "3000€",
        description1: "no Casino e Casino ao vivo <br />+ 100 Rodadas Grátis",
        title2: "Bônus Especial",
        description2:
          "Aproveite promoções exclusivas <br />e jogue com mais chances!",
        title3: "Torneios Diários",
        description3:
          "Participe das nossas competições <br />e dispute grandes prêmios todos os dias!",
        registreSe: "Registre-se",
      },
      threeSteps: {
        title: "Como começar?",
        step1Title: "1. Registre-se",
        step1Text:
          "Junte-se à família Leon, completando o nosso processo de registro rápido e fácil.",
        step2Title: "2. Deposite",
        step2Text:
          "Conte com processamentos/métodos de pagamentos rápidos e variados!",
        step3Title: "3. Jogue",
        step3Text: "A sua aventura pessoal na Leon começa a partir daqui!",
      },
      features: {
        title: "O que você encontra na Leon",
        slotsTitle: "Slots",
        slotsText: "Mais de 4.500 jogos à sua escolha!",
        liveGamesTitle: "Jogos ao vivo",
        liveGamesText:
          "Sinta a emoção de jogar num excelente casino online, com os nossos dealers ao vivo!",
        serviceTitle: "Serviço de excelência",
        serviceText:
          "Pagamentos rápidos, atendimento ao cliente 24 horas por dia, 7 dias por semana.",
      },
      gameCards: {
        title: "Slots em Destaque",
      },
      cta: {
        title: "Pronto para começar?",
        text: "Registre-se agora e receba até 3000€ + 100 Rodadas Grátis!",
        button: "Registre-se",
      },
      footer: {
        rights: "© 2023 Leon. Todos os direitos reservados.",
      },
    },
    en: {
      header: {
        jogos: "Games",
        promocoes: "Promotions",
        casinoAoVivo: "Live Casino",
        suporte: "Support",
        login: "Login",
        registreSe: "Sign Up",
      },
      slider: {
        title1: "3000€",
        description1: "at the Casino and Live Casino <br />+ 100 Free Spins",
        title2: "Special Bonus",
        description2:
          "Enjoy exclusive promotions <br />and play with more chances!",
        title3: "Daily Tournaments",
        description3:
          "Join our competitions <br />and win big prizes every day!",
        registreSe: "Sign Up",
      },
      threeSteps: {
        title: "How to get started?",
        step1Title: "1. Sign Up",
        step1Text:
          "Join the Leon family by completing our quick and easy registration process.",
        step2Title: "2. Deposit",
        step2Text: "Enjoy fast and varied payment methods!",
        step3Title: "3. Play",
        step3Text: "Your personal adventure at Leon starts here!",
      },
      features: {
        title: "What you find at Leon",
        slotsTitle: "Slots",
        slotsText: "More than 4,500 games to choose from!",
        liveGamesTitle: "Live Casino",
        liveGamesText:
          "Feel the thrill of playing in an excellent online casino with our live dealers!",
        serviceTitle: "Excellent Service",
        serviceText: "Fast payments, 24/7 customer support.",
      },
      gameCards: {
        title: "Featured Slots",
      },
      cta: {
        title: "Ready to get started?",
        text: "Sign up now and receive up to 3000€ + 100 Free Spins!",
        button: "Sign Up",
      },
      footer: {
        rights: "© 2023 Leon. All rights reserved.",
      },
    },
  };

  // Function to update text content based on selected language
  function updateTexts(lang) {
    // Select all elements that have a data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((el) => {
      // Split the data-i18n value by '.' to support nested keys (e.g., "slider.title1")
      const keyParts = el.getAttribute("data-i18n").split(".");
      let translation = translations[lang];

      // Traverse the translation object using the key parts
      keyParts.forEach((part) => {
        if (translation) {
          translation = translation[part];
        }
      });

      // If a translation is found, update the element's innerHTML
      if (translation) {
        // Replace newline characters with <br> for line breaks
        el.innerHTML = translation.replace(/\n/g, "<br />");
      }
    });
  }

  // =====================================================
  // LANGUAGE TOGGLE LOGIC
  // =====================================================
  const langToggle = document.getElementById("lang-toggle");
  langToggle.addEventListener("change", () => {
    if (langToggle.checked) {
      // If checked, set language to English
      document.body.classList.add("lang-en");
      document.documentElement.lang = "en";
      updateTexts("en");
    } else {
      // Otherwise, revert to Portuguese (default)
      document.body.classList.remove("lang-en");
      document.documentElement.lang = "pt";
      updateTexts("pt");
    }
  });

  // Initialize texts in the default language (Portuguese)
  updateTexts("pt");
});
