const fs = require("fs-extra");

fs.remove(".storybook", (err) => {
  if (err) return console.error(err);

  console.log(".storybook removed ok!");
});

fs.remove("src/components/Link.stories.js", (err) => {
  if (err) return console.error(err);

  console.log("Link.stories.js removed ok!");
});
