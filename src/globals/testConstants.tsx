import React from 'react';

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

export const mockImageQuery = {
  "mugs": {
    "nodes": [
      {
        "childImageSharp": {
          "fixed": {
            "originalName": "testEmployeeId.jpg",
            "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAATABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAH/xAAXAQEBAQEAAAAAAAAAAAAAAAACAwEE/9oADAMBAAIQAxAAAAHWfS55vpejkPQ6hREV/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAEDAhIy/9oACAEBAAEFAra5Ja32X5RJLMxvoRDx/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/Aaj/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIQMf/aAAgBAgEBPwGkS0//xAAbEAABBAMAAAAAAAAAAAAAAAABAAIQESExQf/aAAgBAQAGPwJxWXWDDrKBPYs7n//EABsQAQACAgMAAAAAAAAAAAAAAAEAERAxIVGh/9oACAEBAAE/Iapl1HjuBhpSBlAIriGoittO5pF7n//aAAwDAQACAAMAAAAQ8Ne9/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQETH/2gAIAQMBAT8QATeG4v/EABcRAQEBAQAAAAAAAAAAAAAAAAEhABD/2gAIAQIBAT8QCM7N7//EABwQAQACAwEBAQAAAAAAAAAAAAEAESExYUFxgf/aAAgBAQABPxBjRXQfW6I522kdPDyBZBi6il38ihOCz+wWEYtYxa25mRG07ExvAw5P/9k=",
            "width": 133,
            "height": 124,
            "src": "/static/8a08feec982d6f56708e2d62d3bbb018/38306/12349.jpg",
            "srcSet": "/static/8a08feec982d6f56708e2d62d3bbb018/38306/12349.jpg 1x,\n/static/8a08feec982d6f56708e2d62d3bbb018/f836f/12349.jpg 1.5x,\n/static/8a08feec982d6f56708e2d62d3bbb018/910a9/12349.jpg 2x"
          }
        }
      },
      {
        "childImageSharp": {
          "fixed": {
            "originalName": "testEmployeeId2.jpg",
            "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAATABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAH/xAAXAQEBAQEAAAAAAAAAAAAAAAACAwEE/9oADAMBAAIQAxAAAAHWfS55vpejkPQ6hREV/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAEDAhIy/9oACAEBAAEFAra5Ja32X5RJLMxvoRDx/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/Aaj/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIQMf/aAAgBAgEBPwGkS0//xAAbEAABBAMAAAAAAAAAAAAAAAABAAIQESExQf/aAAgBAQAGPwJxWXWDDrKBPYs7n//EABsQAQACAgMAAAAAAAAAAAAAAAEAERAxIVGh/9oACAEBAAE/Iapl1HjuBhpSBlAIriGoittO5pF7n//aAAwDAQACAAMAAAAQ8Ne9/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQETH/2gAIAQMBAT8QATeG4v/EABcRAQEBAQAAAAAAAAAAAAAAAAEhABD/2gAIAQIBAT8QCM7N7//EABwQAQACAwEBAQAAAAAAAAAAAAEAESExYUFxgf/aAAgBAQABPxBjRXQfW6I522kdPDyBZBi6il38ihOCz+wWEYtYxa25mRG07ExvAw5P/9k=",
            "width": 133,
            "height": 124,
            "src": "/static/8a08feec982d6f56708e2d62d3bbb018/38306/12349.jpg",
            "srcSet": "/static/8a08feec982d6f56708e2d62d3bbb018/38306/12349.jpg 1x,\n/static/8a08feec982d6f56708e2d62d3bbb018/f836f/12349.jpg 1.5x,\n/static/8a08feec982d6f56708e2d62d3bbb018/910a9/12349.jpg 2x"
          }
        }
      },
    ]
  },
  "mugPlaceholder": {
    "childImageSharp": {
      "fixed": {
        "originalName": "mug-placeholder.png",
        "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB1ElEQVQ4y2NgGAWDFKz5ycC+7hqz8vppTEFbJOHCsqpOQOzIIKMCxDA2kAYBMF8FIQcTY2BY9Z8R3XxLbyMGKWkHBhklRwy7IQZADIJY6ogwWAWmfvl/boZ1HyPE18/2fPCfgRnZAKBiFqABzDIqTlxAF6PJOXEisSEMruX/2RnWvVprsa7idsNa63ReXx8lZTVHEVl1J0GgAVJAA5OBNvsAvWMIZGcA2bJAzAS0RB5I6wJxMJAtAfUyOwPD6v8hguvXPN20QmjGNDE9dUEFl3JFdUc9oMIyIK4CGpoJVBgJxDFAfi8QVwNxLRDnAnEEEHcCcTYQJwGxMcjAYPH1y56eWMnZ4CThaCGm5pwhp+poC7R1PhD3A11VDNVQDPRWM5AuAeJuoEVCQDmQJQVAbAnEy4GYjYF16X8OhnUPVnmtyT2+eomeOo+Uq62ChpMuUIMDUIEmEGsBsQkQKwHFzIG0PRDLACODF0hLAbECEHuAXIgI3ZX/eRnW3wnU21isR06qAxomCYw0QQhvNWqykbUPZZKRNGMEB7yKIyMUg9lALzPB2Yh0yIScpKAJ+w8D77pTzIYbSsCGS6+6ymC2OYAYl8FoRiTD3kLpN0jst6OlxwACAMW3ivxs3+RAAAAAAElFTkSuQmCC",
        "width": 133,
        "height": 133,
        "src": "/static/39cb6f25de44aaa0850e8b6cece9af47/e223a/mug-placeholder.png",
        "srcSet": "/static/39cb6f25de44aaa0850e8b6cece9af47/e223a/mug-placeholder.png 1x,\n/static/39cb6f25de44aaa0850e8b6cece9af47/69585/mug-placeholder.png 1.5x,\n/static/39cb6f25de44aaa0850e8b6cece9af47/1a02d/mug-placeholder.png 2x"
      }
    }
  }
}

export const mockUserDetails = {
  username: 'testUsername',
  userEmail: 'testUserEmail',
  userRole: 'testUserRole',
};

export const mockCredentials = {
  username: 'testUsername',
  userEmail: 'testUserEmail',
  userRole: 'testUserRole',
  signIn: jest.fn(),
  signOut: jest.fn(),
  loaded: true
}

export const mockLineItemProps = { label: 'testLabel', value: 'testValue' };

export const mockMetricsCardProps = {
  metrics: [
    { label: 'testLabel1', value: 'testValue1' },
    { label: 'testLabel2', value: 'testValue2' },
    { label: 'testLabel3', value: 'testValue3' }
  ],
  updatedAt: 'testUpdatedAt',
  title: 'testTitle'
};

export const mockEmployeeDetails = {
  employeeName: "testEmployeeName",
  employeeId: "testEmployeeId",
  role: 'testRole'
}

export const mockEmployeeImageProps = {
  img: {
    originalName: 'testOriginalName',
    src: 'testSrc',
    srcSet: 'testSrcSet',
    base64: 'testBase64',
    width: 132,
    height: 33,
  },
  ...mockEmployeeDetails,
  isLockedRow: false,
  lockToggle: jest.fn()
}

export interface BillableTypes {
  currentHours: string | number,
  currentTarget: string | number,
  totalTarget: string | number
}

export interface GrowthTypes {
  hoursUsed: string | number,
  hoursRemaining: string | number,
  totalGrowth: string | number
}

export const mockEmployeeMetricsProps = {
  billable: {
    currentHours: 1,
    currentTarget: 1,
    totalTarget: 1
  },
  growth: {
    hoursUsed: 1,
    hoursRemaining: 1,
    totalGrowth: 1
  },
  updatedAt: 'testUpdatedAt'
}

export const mockEmployeeCardRowProps = {
  employeeMetrics: {
    ...mockEmployeeMetricsProps
  },
  ...mockEmployeeImageProps
}

export const mockAllEmployeeList = [
  {
    ...mockEmployeeMetricsProps,
    ...mockEmployeeDetails
  },
  {
    ...mockEmployeeMetricsProps,
    ...mockEmployeeDetails,
    employeeId: "testEmployeeId2",
    employeeName: "testEmployeeName2"
  }
]

export const mockNavDropdownProps = {
  label: 'testLabel',
  items: [
    <div>testItem1</div>,
    <div>testItem2</div>,
    <div>testItem3</div>
  ]
}

const testName = 'testName';

export const mockContextValue = {
  username: 'testUsername',
  setUsername: jest.fn(),
  userEmail: 'testUserEmail',
  setUserEmail: jest.fn(),
  userRole: 'testUserRole',
  setUserRole: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn()
};

export const mockGoogleLoginOnSuccessResponse = {
  tokenId: 'testTokenId',
  profileObj: {
    name: 'testName',
    email: 'testEmail'
  }
}