// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Least Nutrify",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Food Prices",
      open: false,
      pages: [
        { name: "Grains", path: "/fp/grains" },
        { name: "Starchy Roots and Tubers", path: "/fp/starchy" },
        { name: "Plantain", path: "/fp/plantain" },
        { name: "Flour", path: "/fp/flour" },
        { name: "Beans & Lentils", path: "/fp/beans" },
        { name: "Animal Products", path: "/fp/animal" },
        { name: "Fish", path: "/fp/fish" },
        { name: "Meat", path: "/fp/meat" },
        { name: "Milk", path: "/fp/milk" },
        { name: "Healthy Fats", path: "/fp/oils" },
        { name: "Vegetables", path: "/fp/vegetables" },
        { name: "Fruits", path: "/fp/fruits" },
      ],
    },
    {
      name: "About Us",
      path: "/about-us",
    },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="leastnutrify.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "light", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs
};
