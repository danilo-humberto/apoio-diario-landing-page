const CONFIG = {
  GOOGLE_FORMS_URL: "https://forms.gle/tfx29Uk6wMihBeGf8",
  CONTACT_EMAIL: "apoiodiariotcc@gmail.com",
  FOOTER: {
    university: "Instituto Federal de Pernambuco - IFPE",
    authors: [
      {
        key: "danilo",
        name: "Danilo Humberto",
        githubUrl: "https://github.com/danilo-humberto",
        linkedinUrl: "https://www.linkedin.com/in/danilo-humberto-28a771215/",
      },
      {
        key: "juliana",
        name: "Juliana Felix",
        githubUrl: "https://github.com/feliixjuliana",
        linkedinUrl: "https://www.linkedin.com/in/feliixjuliana/",
      },
    ],
  },
};

const STORAGE_KEY = "apoiodiario_lang";

const translations = {
  pt: {
    a11y: {
      skipToContent: "Pular para o conteúdo",
      goHome: "Ir para o topo",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    lang: { pt: "Português", en: "English" },
    nav: {
      problem: "Problema",
      solution: "Solução",
      features: "Recursos",
      how: "Como funciona",
      preview: "Preview",
      validation: "Validação",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Acessibilidade • Rotinas Visuais",
      tagline:
        "Rotinas previsíveis e visuais para apoiar crianças neurodivergentes.",
      desc: "Um aplicativo mobile para pais, cuidadores e educadores criarem atividades estruturadas — ajudando a reduzir ansiedade, melhorar transições e dar mais autonomia no dia a dia.",
      cta: "Participar da Validação do App",
      note: "Leva menos de 2 minutos para se cadastrar como tester.",
      videoLabel: "Apresentação do App",
      videoAria: "Área do vídeo de apresentação do Apoio Diário",
      videoStatus: "Em andamento",
      videoPlaceholderTitle: "Vídeo de apresentação em andamento",
      videoPlaceholderDesc:
        "Estamos preparando uma demonstração do app para publicar aqui em breve.",
    },
    problem: {
      title: "O desafio das rotinas no dia a dia",
      subtitle:
        "Para muitas crianças neurodivergentes, previsibilidade e apoio visual fazem toda a diferença.",
      items: {
        organize: {
          title: "Dificuldade em organizar atividades",
          desc: "Sequências longas e sem estrutura podem gerar confusão e resistência.",
        },
        transition: {
          title: "Dificuldade em transições",
          desc: "Trocar de uma tarefa para outra pode causar ansiedade e crises.",
        },
        visual: {
          title: "Necessidade de suporte visual",
          desc: "Imagens e passos claros ajudam na compreensão e na comunicação.",
        },
        predictable: {
          title: "Rotinas previsíveis",
          desc: "Estrutura reduz incertezas e aumenta autonomia ao longo do dia.",
        },
      },
    },
    solution: {
      title: "Uma solução visual, simples e flexível",
      subtitle:
        "Apoio Diário transforma rotinas em passos claros, com imagens e repetição — no ritmo de cada criança.",
      items: {
        visualRoutines: {
          title: "Rotinas visuais",
          desc: "Atividades organizadas com imagens e sequência, facilitando o entendimento.",
        },
        structuredTasks: {
          title: "Tarefas estruturadas",
          desc: "Cada rotina pode ser dividida em etapas para reduzir fricção e aumentar autonomia.",
        },
        recurring: {
          title: "Atividades recorrentes",
          desc: "Repetição diária ou semanal com poucos toques, mantendo consistência.",
        },
        parental: {
          title: "Controle parental",
          desc: "Responsáveis configuram rotinas e acompanham progresso com segurança.",
        },
        images: {
          title: "Imagens e apoio visual",
          desc: "Use imagens do ARASAAC, câmera ou galeria para representar atividades.",
        },
        outcome: {
          title: "Mais previsibilidade",
          desc: "Rotinas claras ajudam a reduzir ansiedade e melhoram a transição entre tarefas.",
        },
      },
    },
    features: {
      title: "Recursos principais",
      subtitle:
        "Tudo o que você precisa para criar rotinas consistentes e fáceis de acompanhar.",
      items: {
        daily: {
          title: "Tarefas diárias",
          desc: "Monte listas de atividades para manhã, tarde e noite.",
        },
        recurring: {
          title: "Rotinas recorrentes",
          desc: "Repetição semanal/mensal para manter previsibilidade.",
        },
        templates: {
          title: "Templates",
          desc: "Modelos prontos para começar rápido e ajustar conforme necessidade.",
        },
        images: {
          title: "Imagens (ARASAAC, câmera e galeria)",
          desc: "Use imagens para representar atividades e facilitar a compreensão.",
        },
        parental: {
          title: "Controle parental",
          desc: "Área de configuração protegida para responsáveis e educadores.",
        },
        progress: {
          title: "Acompanhamento",
          desc: "Visualize o que foi concluído ao longo do dia (quando disponível).",
        },
      },
    },
    how: {
      title: "Como funciona",
      subtitle:
        "Um fluxo simples para criar rotinas claras e acompanhar o dia.",
      steps: {
        profile: {
          title: "1. Criar o perfil da criança",
          desc: "Defina nome e preferências para personalizar a experiência.",
        },
        add: {
          title: "2. Adicionar atividades e rotinas",
          desc: "Crie tarefas com imagens e organize em sequência.",
        },
        complete: {
          title: "3. A criança conclui durante o dia",
          desc: "Acompanhe o progresso e facilite transições com previsibilidade.",
        },
      },
    },
    preview: {
      title: "Prévia do app",
      shots: {
        routine: "Rotina do dia",
        activity: "Atividade com etapas",
        parental: "Configuração (responsáveis)",
      },
    },
    validation: {
      title: "Ajude a validar o Apoio Diário",
      subtitle:
        "O projeto está em fase de validação. Pais, cuidadores e educadores podem testar o app e enviar feedback.",
      bullets: {
        0: "Você ajuda a melhorar acessibilidade e usabilidade.",
        1: "Seu feedback nos ajuda a validar o app.",
        2: "Participação rápida e gratuita.",
      },
      cta: "Quero Testar o App",
      meta: "Abre um formulário no Google Forms em uma nova aba.",
    },
    about: {
      title: "Sobre o projeto",
      subtitle:
        "Um app focado em acessibilidade e apoio para crianças neurodivergentes (TEA, TDAH e deficiências intelectuais).",
      mission: {
        title: "Objetivo",
        desc: "Melhorar organização de rotinas, previsibilidade e autonomia com tarefas visuais e atividades estruturadas.",
      },
      stack: {
        title: "Tecnologias",
        desc: "React Native, Expo, NestJS, PostgreSQL e AWS.",
      },
    },
    contact: {
      title: "Contato",
      subtitle:
        "Quer participar, sugerir melhorias ou tirar dúvidas? Fale com a gente.",
      meta: "Abrirá seu cliente de email padrão.",
      cta: "Enviar Email",
    },
    footer: {
      tagline: "Rotinas visuais para apoio no dia a dia",
      validation: "Validação",
      contact: "Contato",
      github: "GitHub",
      linkedin: "LinkedIn",
      authorsLabel: "Autores:",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    a11y: {
      skipToContent: "Skip to content",
      goHome: "Go to top",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    lang: { pt: "Portuguese", en: "English" },
    nav: {
      problem: "Problem",
      solution: "Solution",
      features: "Features",
      how: "How it works",
      preview: "Preview",
      validation: "Validation",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Accessibility • Visual routines",
      tagline:
        "Predictable, visual routines to support neurodivergent children.",
      desc: "A mobile app for parents, caregivers, and educators to create structured activities — helping reduce anxiety, improve transitions, and build daily independence.",
      cta: "Join the App Validation",
      note: "It takes less than 2 minutes to sign up as a tester.",
      videoLabel: "App presentation",
      videoAria: "Apoio Diário presentation video area",
      videoStatus: "In progress",
      videoPlaceholderTitle: "Presentation video in progress",
      videoPlaceholderDesc:
        "We are preparing an app walkthrough to publish here soon.",
    },
    problem: {
      title: "Daily routines can be challenging",
      subtitle:
        "For many neurodivergent children, predictability and visual support make a real difference.",
      items: {
        organize: {
          title: "Difficulty organizing activities",
          desc: "Long, unstructured sequences can cause confusion and resistance.",
        },
        transition: {
          title: "Difficulty transitioning",
          desc: "Moving from one task to another can trigger anxiety and meltdowns.",
        },
        visual: {
          title: "Need for visual support",
          desc: "Images and clear steps improve understanding and communication.",
        },
        predictable: {
          title: "Need predictable routines",
          desc: "Structure reduces uncertainty and supports independence throughout the day.",
        },
      },
    },
    solution: {
      title: "A visual, simple, flexible solution",
      subtitle:
        "Apoio Diário turns routines into clear steps, with images and repetition — at each child’s pace.",
      items: {
        visualRoutines: {
          title: "Visual routines",
          desc: "Image-based sequences that make routines easier to understand.",
        },
        structuredTasks: {
          title: "Structured tasks",
          desc: "Break routines into steps to reduce friction and build independence.",
        },
        recurring: {
          title: "Recurring activities",
          desc: "Set daily or weekly repetition with just a few taps.",
        },
        parental: {
          title: "Parental controls",
          desc: "Caregivers set up routines and follow progress safely.",
        },
        images: {
          title: "Images & visual support",
          desc: "Use ARASAAC images, camera, or gallery to represent activities.",
        },
        outcome: {
          title: "More predictability",
          desc: "Clear routines help reduce anxiety and improve task transitions.",
        },
      },
    },
    features: {
      title: "Core features",
      subtitle:
        "Everything you need to create consistent, easy-to-follow routines.",
      items: {
        daily: {
          title: "Daily tasks",
          desc: "Build activity lists for morning, afternoon, and evening.",
        },
        recurring: {
          title: "Recurring routines",
          desc: "Weekly/monthly repetition to keep predictability.",
        },
        templates: {
          title: "Templates",
          desc: "Starter models to move fast and customize as needed.",
        },
        images: {
          title: "Images (ARASAAC, camera, gallery)",
          desc: "Use images to represent tasks and improve comprehension.",
        },
        parental: {
          title: "Parental controls",
          desc: "Protected setup area for caregivers and educators.",
        },
        progress: {
          title: "Progress",
          desc: "See what was completed throughout the day (when available).",
        },
      },
    },
    how: {
      title: "How it works",
      subtitle: "A simple flow to create clear routines and support the day.",
      steps: {
        profile: {
          title: "1. Create the child profile",
          desc: "Set name and preferences to personalize the experience.",
        },
        add: {
          title: "2. Add activities and routines",
          desc: "Create tasks with images and order them into a sequence.",
        },
        complete: {
          title: "3. The child completes tasks",
          desc: "Follow progress and ease transitions with predictability.",
        },
      },
    },
    preview: {
      title: "App preview",
      shots: {
        routine: "Daily routine",
        activity: "Activity steps",
        parental: "Caregiver settings",
      },
    },
    validation: {
      title: "Help validate Apoio Diário",
      subtitle:
        "The project is currently being validated. Parents and educators can test the app and share feedback.",
      bullets: {
        0: "Help improve accessibility and usability.",
        1: "Your feedback helps us validate the app.",
        2: "Quick, free participation.",
      },
      cta: "I want to test the app",
      meta: "Opens a Google Forms link in a new tab.",
    },
    about: {
      title: "About the project",
      subtitle:
        "An app focused on accessibility and support for neurodivergent children (ASD, ADHD, and intellectual disabilities).",
      mission: {
        title: "Goal",
        desc: "Improve routine organization, predictability, and independence with visual tasks and structured activities.",
      },
      stack: {
        title: "Tech stack",
        desc: "React Native, Expo, NestJS, PostgreSQL, and AWS.",
      },
    },
    contact: {
      title: "Contact",
      subtitle:
        "Want to participate, suggest improvements, or ask questions? Reach out.",
      meta: "Opens your default email client.",
      cta: "Send email",
    },
    footer: {
      tagline: "Visual routines for daily support",
      validation: "Validation",
      contact: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      authorsLabel: "Authors:",
      rights: "All rights reserved.",
    },
  },
};

function getByPath(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.pt;

  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getByPath(dict, key);
    if (typeof value !== "string") return;

    const attr = el.getAttribute("data-i18n-attr");
    if (attr) el.setAttribute(attr, value);
    else el.textContent = value;
  });
}

function setLanguage(lang) {
  const normalized = lang === "en" ? "en" : "pt";
  localStorage.setItem(STORAGE_KEY, normalized);

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === normalized;
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  applyTranslations(normalized);
}

async function loadComponent(targetSelector, url) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`);
  target.innerHTML = await res.text();
}

async function loadPage() {
  await loadComponent("#header", "./components/header.html");

  const main = document.querySelector("#main");
  if (!main) return;

  const sectionFiles = [
    "hero.html",
    "problem.html",
    "solution.html",
    "features.html",
    "how-it-works.html",
    "preview.html",
    "validation.html",
    "about.html",
    "contact.html",
  ];

  const sectionHtml = await Promise.all(
    sectionFiles.map(async (file) => {
      const res = await fetch(`./components/${file}`, { cache: "no-cache" });
      if (!res.ok)
        throw new Error(`Failed to load components/${file} (${res.status})`);
      return res.text();
    }),
  );

  main.innerHTML = sectionHtml.join("\n");

  await loadComponent("#footer", "./components/footer.html");
}

function initConfigBindings() {
  const validationLink = document.getElementById("validation-form-link");
  if (validationLink) validationLink.href = CONFIG.GOOGLE_FORMS_URL;

  const contactLink = document.getElementById("contact-email-link");
  if (contactLink) contactLink.href = `mailto:${CONFIG.CONTACT_EMAIL}`;

  const contactText = document.getElementById("contact-email-text");
  if (contactText) contactText.textContent = CONFIG.CONTACT_EMAIL;

  const uni = document.getElementById("footer-university");
  if (uni) uni.textContent = CONFIG.FOOTER.university;

  const year = document.getElementById("footer-year");
  if (year) year.textContent = String(new Date().getFullYear());

  const daniloName = document.getElementById("footer-author-danilo");
  const julianaName = document.getElementById("footer-author-juliana");
  const danilo = CONFIG.FOOTER.authors.find((a) => a.key === "danilo");
  const juliana = CONFIG.FOOTER.authors.find((a) => a.key === "juliana");

  if (danilo && daniloName) daniloName.textContent = danilo.name;
  if (juliana && julianaName) julianaName.textContent = juliana.name;

  const ghDanilo = document.getElementById("footer-github-danilo");
  const liDanilo = document.getElementById("footer-linkedin-danilo");
  const ghJuliana = document.getElementById("footer-github-juliana");
  const liJuliana = document.getElementById("footer-linkedin-juliana");

  if (danilo && ghDanilo) ghDanilo.href = danilo.githubUrl;
  if (danilo && liDanilo) liDanilo.href = danilo.linkedinUrl;
  if (juliana && ghJuliana) ghJuliana.href = juliana.githubUrl;
  if (juliana && liJuliana) liJuliana.href = juliana.linkedinUrl;
}

function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-scroll-to]");
    if (!link) return;

    const id = link.getAttribute("data-scroll-to");
    if (!id) return;
    e.preventDefault();

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function initReveal() {
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  const updateLabel = (isOpen) => {
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute(
      "data-i18n",
      isOpen ? "a11y.closeMenu" : "a11y.openMenu",
    );
  };

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    updateLabel(open);
    // Re-apply translations because we swap the key above.
    applyTranslations(localStorage.getItem(STORAGE_KEY) || "pt");
  };

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function initLanguageSwitcher() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lang]");
    if (!btn) return;
    setLanguage(btn.getAttribute("data-lang"));
  });
}

async function main() {
  await loadPage();
  initConfigBindings();

  const initialLang = localStorage.getItem(STORAGE_KEY) || "pt";
  setLanguage(initialLang);

  initLanguageSwitcher();
  initSmoothScroll();
  initMobileNav();
  initReveal();
}

main().catch((err) => {
  console.error(err);
});
