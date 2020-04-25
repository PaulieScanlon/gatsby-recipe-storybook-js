import React from "react";
import { Link } from "gatsby";

export default {
  title: "Link",
  parameters: {
    component: Link,
    componentSubtitle: "Example stories for the Gatsby <Link /> component",
  },
};

export const usage = () => <Link to="/">Click Me</Link>;

export const attributes = () => (
  <Link to="/" title="Link Title">
    Some Link
  </Link>
);

attributes.story = {
  parameters: {
    docs: {
      storyDescription: "Legitimate `AnchorHTMLAttributes` can be applied",
    },
  },
};
