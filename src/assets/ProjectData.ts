export const projects = [
  {
    // TODO setup image structure and integrate it with gallery component
    title: "Pokemon App",
    images: [
      "/pokeapp3/gif-pokeapp-1.gif",
      "/pokeapp3/gif-pokeapp-2.gif",
      "/pokeapp3/mobile-pokeapp-1.png",
      "/pokeapp3/mobile-pokeapp-2.png",
    ],

    tech: [
      "React",
      "React-query",
      "Tailwindcss",
      "CSS",
      "HTML",
      "React Router",
      "Auth0",
    ],
    liveLink: "https://radiant-choux-0a80ea.netlify.app/",
    githubLink: "https://github.com/jackz070/pokeapp3",
    description:
      "This app uses react-query to display list of all Pokemon fetching details only when needed / in view. List can be searched by name & filtered by type, user can mark Pokemon as caught to create a collection. There's also Auth0 authentication, dark mode (with a cute switch I've built), toast notifications.",
  },
  {
    title: "jaceksmoter.com",
    images: [
      "/jaceksmoter.com/gif-jaceksmotercom.gif",
      "/jaceksmoter.com/mobile-jaceksmotercom-1.png",
      "/jaceksmoter.com/mobile-jaceksmotercom-2.png",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.jaceksmoter.com/",
    githubLink: "https://github.com/jackz070/jaceksmoter.com",
    description:
      "My photography portfolio website. Challenges included coming up with consistent, minimal, monochrome design and performant display of high resolution image files and adapting the design for mobile devices.",
  },
  {
    title: "This website",
    images: [
      "/jaceksmoterdev/gif-jaceksmoterdev-1.gif",
      "/jaceksmoterdev/mobile-jaceksmoterdev-1.png",
      "/jaceksmoterdev/mobile-jaceksmoterdev-2.png",
    ],
    tech: ["React", "TypeScript", "Tailwindcss", "HTML", "Framer Motion"],
    liveLink: "https://dev.jaceksmoter.com/",
    githubLink: "https://github.com/jackz070/jaceksmoter.dev",
    description:
      "A website that I've created to share some information about myself, showcase some of my projects and provide a handful of ways to contact me. One of the most important features are dog pictures. Can you find them?",
  },
  {
    title: "QuickTODO",
    images: ["/quickTODO/gif-quickTODO.gif", "/quickTODO/mobile-quickTODO.png"],
    tech: [
      "React",
      "TypeScript",
      "Tailwindcss",
      "CSS",
      "HTML",
      "Vitest",
      "React Testing Library",
    ],
    liveLink: "https://beautiful-fairy-ee9b71.netlify.app/",
    githubLink: "https://github.com/jackz070/QuickTODO",
    description:
      "This simple todo app features drag and drop movement of items within lists and between them, ability to edit them, persistance with local storage. Part of the app operation is covered by tests written in Vitest / React Testing Library.",
  },

  {
    title: "Country App",
    images: [
      "/countryapp/gif-countries.gif",
      "/countryapp/mobile-countries-1.png",
      "/countryapp/mobile-countries-2.png",
    ],
    tech: [
      "React",
      "Tailwindcss",
      "HTML",
      "Cypress",
      "Jest",
      "React Testing Library",
      "React Router",
      "React Query",
    ],
    liveLink: "https://fastidious-cat-04476b.netlify.app/",
    githubLink: "https://github.com/jackz070/countries-rest-api",
    description:
      "App uses Countries REST API to allow searching through all the countries, filtering them by geographical region. It features unit / integration tests written with Jest / RTL and E2E tests in Cypress.",
  },
  {
    title: "Product page",
    images: [
      "/productPage/gif-ecommerceProduct.gif",
      "/productPage/mobile-ecommerceProduct-1.png",
      "/productPage/mobile-ecommerceProduct-2.png",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://jackz070.github.io/ecommerce-product-page-main/",
    githubLink: "https://github.com/jackz070/ecommerce-product-page-main",
    description:
      "Product page for a pair of sneakers. User can browse product images in the main view or in a larger modal, add chosen amount of items to the cart and remove cart items.",
  },
];
