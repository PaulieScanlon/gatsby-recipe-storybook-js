# gatsby-recipe-storybook-js

## A recipe to add Storybook to your **JavaScript** Gatsby project

There are two main problems with Gatsby and Storybook.

1. If you're using Link from Gatsby Storybook will throw errors
2. If you have components with embedded graphql queries Storybook will throw errors.

These are not _problems_ with Gatsby or Storybook but there are one or two things we need to do in order to get the two playing together nicely. The main points are below

1. Gatsby is compiled in ES6, Storybook expects commonjs so we need to transpile Gatsby code
2. Gatsby removes GraphQL queries for us in it's build step Storybook won't do this by default so we add that to a custom webpack config (main.js)

Wanna give it a try?

```sh

gatsby recipes https://raw.githubusercontent.com/PaulieScanlon/js-storybook-recipe/master/js-storybook-recipe.mdx
```
