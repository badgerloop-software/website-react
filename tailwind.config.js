module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,html}"],
    theme: {
        extend: {
            colors: {
                "uw-red": "#c5050c",
            },
            backgroundImage: {
                "hero-background":
                    "linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.2)), url('/src/assets/img/solar1.jpg')",
            },
            scale: {
                101: "1.01",
            },
        },
    },
};

// colors: {
//   light: "#fee2e2",
//   dark: "#b91c1c",
//   white: "#ffffff",
//   title: "#ef4444",
//   "button-selected": "#0ea5e9",
//   "button-hover": "#bae6fd",
//   "secondary-button": "#ef4444",
//   "secondary-button-hover": "#dc2626",
//   "secondary-button-disabled": "#71717a",
// },

// module.exports = {
//   mode: "jit",
//   purge: ["./src/**/*.js", "./public/index.html"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     fontFamily: {
//       sans: ["Roboto", "sans-serif"],
//       serif: ['"Roboto Slab"', "serif"],
//       body: ["Roboto", "sans-serif"],
//     },
//     extend: {
//       backgroundImage: () => ({
//         "login-background":
//           "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
//         "landing-background0":
//           'linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.2)), url("/src/assets/img/solar1.jpg")',
//         "landing-background1":
//           'linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url("/src/assets/img/solar1.jpg")',
//         "profile-background":
//           "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
//       }),
//     },
//     colors: {
//       "uw-red": "#c5050c",
//       "uw-red-dark": "#9b0000",
//       light: "#f7f7f7",
//       gray: "#adadad",
//       dark: "#646569",
//       darker: "#282728",
//       white: "#ffffff",
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
