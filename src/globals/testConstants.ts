export const mockGraphQLImage = {
  file: {
    childImageSharp: {
      fixed: {
        src: '/static/675b0fdf6f8e852d801d16377b41af4a/dd1a0/callibrity-logo.png',
        srcSet: '/static/675b0fdf6f8e852d801d16377b41af4a/dd1a0/callibrity-logo.png 1x',
        base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQY02NgAAKOGf9ZGWY+yxaa29XAkMwgygAFf/7+Yfn//78oEAsAsQgQM8PkgGwOEGZAAkA+I4TVc7dSbVLh7e5OhtRf///b//z9U+ffv78G//79swAqygFifyD2AvKrgbQUENsDsQOQnwWkXYFYCIjVgXx2Bob8BxwsNXMnR+XLdf8/vsESKJH199d3IyA9G4grgTgZiNOBOA+I64C4DcoPhfIzgbgd5AO4U+Vj8n2sAmyjls7qkAZKxP39+9cfaFsdEIPoYKBYNJAGubAEyI4AYhUgWwtIewOxLxCXgswBijGBDTRSNGZTMraWBjLZGEgEQEM0gQYqw8IQAOTM0Pb16v2CAAAAAElFTkSuQmCC',
        width: 132,
        height: 33,
      },
    },
  },
};

export const mockUserContext = {
  username: 'test',
  setUsername: jest.fn(),
  userEmail: 'test',
  setUserEmail: jest.fn(),
  userRole: 'Developer',
  setUserRole: jest.fn(),
};

const testName = 'testName';

export const mockLoginResponse = { profileObj: { name: testName, email: 'test' } };