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
            "originalName": "12349.jpg",
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
            "originalName": "99999.jpg",
            "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB98bYRezpLkZkFf/EABkQAAIDAQAAAAAAAAAAAAAAAAABAiExEv/aAAgBAQABBQKWUmaX2LGrP//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAZEAEAAgMAAAAAAAAAAAAAAAABABARICH/2gAIAQEABj8CnFvCuv8A/8QAGxABAAIDAQEAAAAAAAAAAAAAAREhABAxQWH/2gAIAQEAAT8hSCPUM7GSxauo4MKJA+1oYC3uv//aAAwDAQACAAMAAAAQywj8/8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAEDAQE/EIhp/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAFB/9oACAECAQE/EKYf/8QAHBABAAMBAAMBAAAAAAAAAAAAAQARITEQQWFx/9oACAEBAAE/ENglohaC7CqsvAH3vJUWHonZgLojp+Hgi/tlvW11YtLP/9k=",
            "width": 133,
            "height": 133,
            "src": "/static/f7a4ca3189befe02c26a59645cb80474/38306/99999.jpg",
            "srcSet": "/static/f7a4ca3189befe02c26a59645cb80474/38306/99999.jpg 1x,\n/static/f7a4ca3189befe02c26a59645cb80474/f836f/99999.jpg 1.5x,\n/static/f7a4ca3189befe02c26a59645cb80474/910a9/99999.jpg 2x"
          }
        }
      },
      {
        "childImageSharp": {
          "fixed": {
            "originalName": "12345.jpg",
            "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMFAgQG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGxgkwHaFc9GOb4Gv/EABsQAQACAgMAAAAAAAAAAAAAAAIBAwAQEhMz/9oACAEBAAEFArFxMJROWok9g01KWVeX/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAEAIhIkFx/9oACAEBAAY/AnA8m65QM66NM1j5P//EAB0QAAIBBAMAAAAAAAAAAAAAAAERABAhMUFhcYH/2gAIAQEAAT8hZ7YEtESSWKNfgS4Vx0UIisucahknj//aAAwDAQACAAMAAAAQNAjA/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEg/9oACAEDAQE/EIGP/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8QY//EABwQAQEBAAIDAQAAAAAAAAAAAAERACFhMVFxsf/aAAgBAQABPxBTC0B26Xg6S8u9NeAtG/Kj5PmBGV5G0fmHjjX+EfD0as5NNneUTWd//9k=",
            "width": 133,
            "height": 133,
            "src": "/static/a9736bc5848b1b9a7a0f1a17226eca19/38306/12345.jpg",
            "srcSet": "/static/a9736bc5848b1b9a7a0f1a17226eca19/38306/12345.jpg 1x,\n/static/a9736bc5848b1b9a7a0f1a17226eca19/f836f/12345.jpg 1.5x,\n/static/a9736bc5848b1b9a7a0f1a17226eca19/910a9/12345.jpg 2x"
          }
        }
      },
      {
        "childImageSharp": {
          "fixed": {
            "originalName": "12346.jpg",
            "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMFAQIE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAbaFEPYwSp0KztBKn//EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMREiEy/9oACAEBAAEFAmOKpbZZYFAsHKE95E8f/8QAFhEAAwAAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/AQo//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAgEFAQAAAAAAAAAAAAAAAAERAhAgIkFh/9oACAEBAAY/ApNqk7R0XuCP/8QAGxABAAIDAQEAAAAAAAAAAAAAAQAREDFBIVH/2gAIAQEAAT8hZhvk8iz1RVY7B8R5Xg1nrEDojV3dT//aAAwDAQACAAMAAAAQbNc8/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPxBod1H/xAAXEQEBAQEAAAAAAAAAAAAAAAABMQAQ/9oACAECAQE/EEb1u//EABwQAQADAAMBAQAAAAAAAAAAAAEAESExQVFhwf/aAAgBAQABPxATRJh4tahiVvy1PyMVDc4dHrM1ENK5fnxlxDdTV7llCU1qOpaNs//Z",
            "width": 133,
            "height": 133,
            "src": "/static/389118d86fd46e8451497a27445ea9f9/38306/12346.jpg",
            "srcSet": "/static/389118d86fd46e8451497a27445ea9f9/38306/12346.jpg 1x,\n/static/389118d86fd46e8451497a27445ea9f9/f836f/12346.jpg 1.5x,\n/static/389118d86fd46e8451497a27445ea9f9/910a9/12346.jpg 2x"
          }
        }
      },
      {
        "childImageSharp": {
          "fixed": {
            "originalName": "12348.jpg",
            "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAAB6S4C2iysikAr/8QAGBABAQEBAQAAAAAAAAAAAAAAARECEAD/2gAIAQEAAQUC2oZvEpm3x3//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAACAwAAAAAAAAAAAAAAAAABIQAQIP/aAAgBAQAGPwJRkG3n/8QAGhAAAgMBAQAAAAAAAAAAAAAAASEAEBExQf/aAAgBAQABPyEbXSccPeJPKMjscZeGuJlf/9oADAMBAAIAAwAAABDv2AD/xAAWEQEBAQAAAAAAAAAAAAAAAAARASD/2gAIAQMBAT8QgY//xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQIBAT8QRmT/xAAcEAACAwEAAwAAAAAAAAAAAAABEQAhMUEQYYH/2gAIAQEAAT8QREhwOB7mg9h2IoQDKwTwx9KioXxeM4gaAsXHP//Z",
            "width": 133,
            "height": 133,
            "src": "/static/a8a7ee2295b7a30c74f1129912d13b02/38306/12348.jpg",
            "srcSet": "/static/a8a7ee2295b7a30c74f1129912d13b02/38306/12348.jpg 1x,\n/static/a8a7ee2295b7a30c74f1129912d13b02/f836f/12348.jpg 1.5x,\n/static/a8a7ee2295b7a30c74f1129912d13b02/910a9/12348.jpg 2x"
          }
        }
      }
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
    currentTarget: 2,
    totalTarget: 3
  },
  growth: {
    hoursUsed: 3,
    hoursRemaining: 2,
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
    ...mockEmployeeDetails
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