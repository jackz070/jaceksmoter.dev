export const projects = [
  {
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
      "Typescript",
      "Tailwindcss",
      "CSS",
      "HTML",
      "React Router",
      "Auth0",
      "Cypress",
      "REST API",
    ],
    liveLink: "https://radiant-choux-0a80ea.netlify.app/",
    githubLink: "https://github.com/jackz070/pokeapp3",
    description:
      "This app uses react-query to display list of all Pokemon fetching details only when needed / in view. List can be searched by name & filtered by type, user can mark Pokemon as caught to create a collection. There's also Auth0 authentication (login with Google), dark mode (with a cute switch I've built), toast notifications. Now all in TypeScript. E2E testing with Cypress.",
  },
  {
    title: "MusicStats",
    images: [
      "/MusicStats/gif-musicstats-1.gif",
      "/MusicStats/gif-musicstats-2.gif",
      "/MusicStats/mobile-musicStats.png",
    ],
    tech: ["React", "TypeScript", "SASS", "HTML", "Framer Motion", "REST API"],
    liveLink: "https://github.com/jackz070/MusicStats",
    githubLink: "https://github.com/jackz070/MusicStats",
    description:
      "This app utilizes Spotify Web API to display info about users favourite tracks, artists and genres. It provides recommendations based on that data. User can play previews of tracks, add them to playlists (including creating new ones!), like and unlike them. The app follows Spotify Development Guidelines, but still awaits acceptance to move out of development mode. Because of this there is no live version as of yet.",
  },
  {
    title: "jaceksmoter.com",
    images: [
      "/jaceksmoter.com/webm-jaceksmotercom.webm",
      "/jaceksmoter.com/mobile-jaceksmotercom-1.png",
      "/jaceksmoter.com/mobile-jaceksmotercom-2.png",
    ],
    tech: ["Astro", "HTML", "CSS", "JavaScript"],
    liveLink: "https://www.jaceksmoter.com/",
    githubLink: "https://github.com/jackz070/jaceksmoter.com-astro",
    description:
      "My photography portfolio website. Challenges included coming up with consistent, minimal, monochrome design and performant display of high resolution image files and adapting the design for mobile devices. Recently migrated to Astro.build, which is a tool I've wanted to learn for a long time.",
  },
  {
    title: "This website",
    images: [
      "/jaceksmoterdev/webm-jaceksmoterdev.webm",
      "/jaceksmoterdev/mobile-jaceksmoterdev-1.png",
      "/jaceksmoterdev/mobile-jaceksmoterdev-2.png",
    ],
    tech: ["React", "TypeScript", "Tailwindcss", "HTML", "Framer Motion"],
    liveLink: "https://dev.jaceksmoter.com/",
    githubLink: "https://github.com/jackz070/jaceksmoter.dev",
    description:
      "A website that I've created to share some information about myself, showcase some of my projects and provide a handful of ways to contact me. Also an opportunity to learn framer-motion animation library. One of the most important features of the site are dog pictures. Can you find them?",
  },
  {
    title: "Multistep form",
    images: [
      "/multistep/gif-multistepBooking.gif",
      "/multistep/mobile-multistep.png",
    ],
    tech: ["TypeScript", "React", "TailwindCSS", "HTML", "Vitest"],
    liveLink: "https://regal-dango-7e1dfe.netlify.app/",
    githubLink: "https://github.com/jackz070/bookingMultistep",
    description:
      "A multistep form with validation for booking a bus seat. First approached with react-hook-form, but halfway through I've decided that I actually prefer to implement all the data-storing and validation functionality myself because the library made it almost too easy. Was fun to find out how crucial form functions work behind the scenes.",
  },
  {
    title: "Linear copy",
    images: ["/linear/webm-linear.webm", "/linear/webm-linear-2.webm"],
    tech: ["Next.js", "TypeScript", "Tailwindcss", "CSS", "HTML"],
    liveLink: "https://exquisite-chaja-3633de.netlify.app/",
    githubLink: "https://github.com/jackz070/linear-copy",
    description:
      "Recreation of Linear's beautiful website. Based on tutorial from @frontendfyi on YT with my own improvements. It was a great project to learn more about CSS animations, Tailwind and reusable compound components.",
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
      "REST API",
    ],
    liveLink: "https://fastidious-cat-04476b.netlify.app/",
    githubLink: "https://github.com/jackz070/countries-rest-api",
    description:
      "App uses Countries REST API to allow searching through all the countries, filtering them by geographical region. The project is a Frontend Mentor challenge, so the functionality and UI reflect provided specification. It features unit / integration tests written with Jest / RTL and E2E tests in Cypress.",
  },

  // {
  //   title: "Product page",
  //   images: [
  //     "/productPage/gif-ecommerceProduct.gif",
  //     "/productPage/mobile-ecommerceProduct-1.png",
  //     "/productPage/mobile-ecommerceProduct-2.png",
  //   ],
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   liveLink: "https://jackz070.github.io/ecommerce-product-page-main/",
  //   githubLink: "https://github.com/jackz070/ecommerce-product-page-main",
  //   description:
  //     "Product page for a pair of sneakers. User can browse product images in the main view or in a larger modal, add chosen amount of items to the cart and remove cart items.",
  // },
];
