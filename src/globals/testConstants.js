export const mockNewsResponse = {data: [
  {
    date: "May 3",
    event: "Alex, Alex, and Alec became acquainted"
  },
  {
    date: "May 4",
    event: "Alex, Alex, and Alec confused everyone with their names"
  },
  {
    date: "May 5",
    event: "Alex, Alex, and Alec thought everyone should change their names to Ale*"
  }
]}

export const mockEmployeeResponse =
{data: [
  {
    "id": 0,
    "name": "Alec",
    "role": "Software Developer",
    "office": "Cincinnati",
    "email": "123.456@callibrity.com",
    "skills": ["React", "Java", "TDD"],
    "interests": ["skiing", "dogs"],
    "bio": "Alec graduated with a BS in Computer Engineering from the University of Cincinnati in 2018. He has multiple years of experience developing web applications using technologies like React/Redux, C#/.NET, and SQL Server. He enjoys watching and playing sports, traveling, and spending time with friends.",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/DSC04255%20(1).jpg?width=900&height=900&name=DSC04255%20(1).jpg"
  },
  {
    "id": 1,
    "name": "Allen",
    "role": "Senior Software Developer",
    "office": "Cincinnati",
    "email": "123.456@callibrity.com",
    "skills": ["React", "Java", "TDD"],
    "interests": ["skiing", "dogs"],
    "bio": "Allen graduated from Miami University with a BS in Software Engineering. He's been developing in the professional world for over two years and specializes in .NET, C#, and MySQL. In his free time, he enjoys working out, playing video games, and riding motorcycles. He's ambitious to find that million-dollar idea.",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/Callibrity_December2018%20Theme/Images/allen-h.jpg?width=900&height=900&name=allen-h.jpg"
  },
  {
    "id": 2,
    "name": "Andrew",
    "role": "Financial Analyst",
    "office": "Cincinnati",
    "email": "123.456@callibrity.com",
    "skills": ["React", "Java", "TDD"],
    "interests": ["skiing", "dogs"],
    "bio": "Andrew recently graduated from the University of Cincinnati with a degree in finance and a minor in business analytics. Outside of work Andrew enjoys playing/watching basketball, visiting amusement parks and attending UC sporting events.",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/Callibrity_December2018%20Theme/Images/andrew-b.jpg?width=900&height=900&name=andrew-b.jpg"
  },
  {
    "id": 3,
    "name": "Andy",
    "role": "Software Developer",
    "office": "Columbus",
    "email": "123.456@callibrity.com",
    "skills": ["React", "Java", "TDD"],
    "interests": ["skiing", "dogs"],
    "bio": "Andy is an NKU graduate with a BS in Computer Science as well as a BA in Media Informatics. He has a love for video games and spends most of his free time either playing, creating, or collecting them. During the rare occasions when Andy is not developing or messing with video games, he is probably outside playing disc golf.",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/Callibrity_December2018%20Theme/Images/andy-g.jpg?width=900&height=900&name=andy-g.jpg"
  },
  {
    "id": 4,
    "name": "Aric",
    "role": "Associate Software Developer",
    "office": "Columbus",
    "email": "123.456@callibrity.com",
    "skills": ["React", "Java", "TDD"],
    "interests": ["skiing", "dogs"],
    "bio": "Aric has 2+ years of full-stack software development experience. He enjoys learning new technologies that he can add to his tool belt, but usually writes Javascript with the help of Angular and React on the front end and uses Node.js for the back end. When not writing code, you'll find him gaming, cooking with his girlfriend, or practicing photography.",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/DSC04244%20(1).jpg?width=900&height=900&name=DSC04244%20(1).jpg"
  },
  {
    "id": 5,
    "name": "Aubrey",
    "role": "Software Developer",
    "office": "Columbus",
    "email": "123.456@callibrity.com",
    "skills": ["React", "Java", "TDD"],
    "interests": ["skiing", "dogs"],
    "bio": "Aubrey graduated from NKU with a BS in Computer Science and a BA in Applied Mathematics. She is passionate about promoting the growth of women in STEM careers. Aubrey enjoys volunteering, playing board games, and spending time with her family.",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/Callibrity_December2018%20Theme/Images/aubrey-f.jpg?width=900&height=900&name=aubrey-f.jpg"
  }
]}

export const mockGraphQLImage = {
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
}

const testName = "testName"

export const mockLoginResponse = {profileObj: {name: testName, email: "test"}}

export function queryElements(app){
  return {
    callibrityLogo: () => app.queryByAltText(/callibrity logo/i),
    signInButton: () => app.queryByText(/sign in/i),
    signOutButton: () => app.queryByText(/sign out/i),
    navbarUsername: () => app.queryByText(testName),
    pageLinks: () => app.queryByText(/wiki/i),
    newsSection: () => app.queryByText(/news/i),
    calendarSection: () => app.queryByText(/calendar/i),
  }
}