# Callibrity Intranet Frontend

## Technologies used
- React framework
- Gatsby for build/render optimization
- Axios for http requests
- Jest and Enzyme for testing

## Hosting
The site is currently hosted on Firebase at the following URL: https://intranet-277714.web.app/ 

If you would like to view the project in firebase, visit https://console.firebase.google.com/ (make sure you are signed in to your Callibrity google account).

## Google login
We are using the "Login with Google" feature to sign in to the website. Currently, only those within our Callibrity organization are allowed to sign in. 

To view the settings for our Google oauth client, go to https://console.developers.google.com/ \-> Credentials \-> Intranet client. This includes authorized uris so if the hosting location changes, we need to add the new address to this page or else the login will not work.
- Tip: Make sure you are using your Callibrity google account and that the intranet project is selected at the top. If you don't have access, ask Dillon to add you to the project.

## Environment Setup
### Prerequisites
- Install node.js (https://nodejs.org/en/download/)

### Set up
1. Open Powershell as admin and run "npm install --global windows-build-tools --vs2015" 
2. Clone repo
3. Open cloned project in IDE of choice (most use Visual Studio Code)
4. Delete node_modules, .cache, and public folders if they exist
5. Ask a team member to send you their .env.development file and place it in the project root folder (intranet-gatsby)
6. In a terminal, run "npm i" in the root folder
7. To run locally, run "npm start" and in a browser, navigate to localhost:3000 (incognito window is recommended)

### Tips / Troubleshooting
- **Refreshing app locally:** when making local changes that mostly impact display (changing/adding elements, text, styling, etc), the app will automatically refresh upon save. However, if the changes include more complex logic, you must stop and rerun 'npm start' to see the changes. 
