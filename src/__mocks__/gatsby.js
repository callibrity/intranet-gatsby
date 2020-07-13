const React = require("react")

const gatsby = jest.requireActual("gatsby")
const { mockGraphQLImage } = require("@globals/testConstants")

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) => React.createElement("a", {
      ...rest,
      href: to,
    }),
  ),
  StaticQuery: jest.fn(),
  navigate: jest.fn(),
  useStaticQuery: () => mockGraphQLImage,
}
