# XeroCodee

XeroCodee is a responsive and dynamic website built using React JS. It utilizes Redux to track the login status of users and stores JWT tokens on the frontend in cookies with HTTP only, providing security against hackers.

## Getting Started

To get started using XeroCodee, simply visit our website at https://xerocodeee.netlify.app/.

## Demo

Check out the XeroCodee demo video at https://www.youtube.com/watch?v=TcI8243Qi9o

## Features

- Responsive design
- Dynamic webpages
- Login tracking using Redux
- Secure token storage with HTTP only cookies

## Technologies Used

- React JS
- Redux
- React-Router-Dom

## Security

XeroCodee takes security seriously and has implemented measures to protect user data. The use of JWT tokens stored in HTTP only cookies ensures that attackers cannot access sensitive information.

## Environment Variables

#####Setting up project:

- Clone the project
- npm install
- Create .env file on root directory of the folder
- Add environmental variable as:

| Key           | Value      |
| ------------- | ---------- |
| VITE_NODE_ENV | production |

- Also setup src/config/serverConfig.js by putting the backend api as baseUrl

---

## For Backend refer:

Check out the XeroCodee demo video at https://github.com/tautik/AuthServiceMongoDB
