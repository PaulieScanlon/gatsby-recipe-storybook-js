<a href="https://paulie.dev/posts/2020/04/gatsby-recipe-storybook-js/" target="_blank">
<img src="https://github.com/PaulieScanlon/paulie-dev-2019/blob/master/src/posts/2020/04/gatsby-recipe-storybook-js.jpg" alt="gatsby-recipe-storybook-js"/></a>

# gatsby-recipe-storybook-js

There are two main _problems_ with Gatsby and Storybook, you'll most likely experience Storybook build errors if you're doing either of the following.

1. You're using `<Link />` imported from `gatsby`
2. You have components with embedded GraphQL queries

These are not _problems_ with either Gatsby or Storybook but there are one or two things we need to do in order to get the two playing nicely together. The main reasons we get Storybook build errors are outlined below.

- Gatsby exports as ES6 and Storybook by default expects all code to be ES5 / CommonJs.
- The `gatsby develop` and `gatsby build` steps remove GraphQL queries, Storybook by default does not.

This recipe will automate the following steps

- Install babel plugins and presets
- Install Storybook React NPM packages and addons
- Create custom Storybook webpack config (main.js)
- Configure Storybook / Gatsby Link settings (preview.js)
- Create example Link stories
- Add Storybook npm scripts to `package.json`

Wanna give it a try?

```sh

gatsby recipes https://raw.githubusercontent.com/PaulieScanlon/gatsby-recipe-storybook-js/master/gatsby-recipe-storybook-js.mdx
```

I've written a blog post about this recipe if you're looking for a little more information: [https://paulie.dev/posts/2020/04/gatsby-recipe-storybook-js/](https://paulie.dev/posts/2020/04/gatsby-recipe-storybook-js/)
