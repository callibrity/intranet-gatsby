const React = require("react")
const gatsby = jest.requireActual("gatsby")

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
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  navigate: jest.fn(),
  useStaticQuery: () => ({
    "file": {
      "childImageSharp": {
        "fixed": {
          "src": "/static/675b0fdf6f8e852d801d16377b41af4a/dd1a0/callibrity-logo.png",
          "srcSet": "/static/675b0fdf6f8e852d801d16377b41af4a/dd1a0/callibrity-logo.png 1x",
          "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQY02NgAAKOGf9ZGWY+yxaa29XAkMwgygAFf/7+Yfn//78oEAsAsQgQM8PkgGwOEGZAAkA+I4TVc7dSbVLh7e5OhtRf///b//z9U+ffv78G//79swAqygFifyD2AvKrgbQUENsDsQOQnwWkXYFYCIjVgXx2Bob8BxwsNXMnR+XLdf8/vsESKJH199d3IyA9G4grgTgZiNOBOA+I64C4DcoPhfIzgbgd5AO4U+Vj8n2sAmyjls7qkAZKxP39+9cfaFsdEIPoYKBYNJAGubAEyI4AYhUgWwtIewOxLxCXgswBijGBDTRSNGZTMraWBjLZGEgEQEM0gQYqw8IQAOTM0Pb16v2CAAAAAElFTkSuQmCC",
          "width": 132,
          "height": 33
        }
      }
    }
  }),
}