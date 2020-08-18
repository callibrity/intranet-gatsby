![Callibrity Logo](/screenshots/CallibrityLogoNavy.png)
# Callibrity Intranet Frontend

## Technologies used
![GitHub Logo](/screenshots/StackOverview.png)
- [Gatsby](https://www.gatsbyjs.com/docs/) for build/render optimization
- [React](https://reactjs.org/docs/hello-world.html) framework + [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) Components
- [Typescript](https://www.typescriptlang.org/docs)
- [Jest](https://jestjs.io/docs/en/getting-started) and [Enzyme](https://www.npmjs.com/package/enzyme) for unit testing
- [Docker](https://docs.docker.com/) for containerization
- [NGINX](https://docs.nginx.com/) to serve Gatsby's output in the Docker environment

## Environments
We currently have 3 Google Cloud Platform (GCP) projects associated with this site. 
- [intranet](https://console.cloud.google.com/run?organizationId=876666147511&project=intranet-277714) is where we store items that are shared among environments (credentials, container images, etc).
- [intranet-staging](https://console.cloud.google.com/run?organizationId=876666147511&project=intranet-staging-285714) is where images get deployed automaticallty when they are merged into master in this repository. It interacts with staging environments for the backend of the application and is useful for end to end testing before deploying to production
- [intranet-production](https://console.cloud.google.com/run?project=intranet-production-285714) is meant to be the "live" site in which deployments will only be made manually when it is deemed appropriate.

## Hosting
The site is currently hosted on Google Cloud Run at the following URL's: 


- [Staging](https://intranet-app-uxl72aopia-uk.a.run.app)
- [Production](https://intranet-app-yygv4n2zyq-uk.a.run.app)

To view the Cloud Run instances, go to https://console.cloud.google.com/ -> Cloud Run -> intranet-app within the respective project/environment.

## Deployment
Staging is automatically deployed upon a push to the master branch.  

To deploy to production, go to the github repository then under Code -> Tags -> Releases, click "Draft a New Release." Once you create a new release, github actions will deploy it to production. 

For both scenarios, github will create an image within the GCP [Container Registry](https://console.cloud.google.com/gcr/images/intranet-277714/GLOBAL/intranet-app?project=intranet-277714&gcrImageListsize=30) which will then be deployed to the appropriate environment.

## Google login
We are using the "Login with Google" feature to sign in to the website. Currently, only those within our Callibrity organization are allowed to sign in. 

To view the settings for our Google oauth client, go to https://console.developers.google.com/ \-> Credentials \-> Intranet client. This includes authorized uris so if the hosting location changes, we need to add the new address to this page or else the login will not work.
- Tip: Make sure you are using your Callibrity google account and that the intranet project is selected at the top. If you don't have access, ask Dillon to add you to the project.

## Environment Setup
### Prerequisites
- Install node.js (https://nodejs.org/en/download/)
- Install Docker Desktop 
follow the most current documentation here to get started with docker.
it's recommended to try their hello-world project first to make sure it is running on your machine.
(https://www.docker.com/get-started)
- Pull down the [backend](https://github.com/callibrity/ETT-Backend) of this project and the [database migration repository](https://github.com/callibrity/ETT_Database) - follow the documentation in those repo's to spin up these services before running the front end. The backend also utilizes docker-compose and setup should be minimal.

### Start the app locally
With the backend running and a locally populated database run the following in the terminal from the root directory of this project:

```
docker-compose up
```

### Tips / Troubleshooting
- **Refreshing app locally:** when making local changes that mostly impact display (changing/adding elements, text, styling, etc), the app will automatically refresh upon save. 

- However, if the changes include more complex logic, and you don't see the changes you expect first run the following from the root of this project:

```
docker-compose down && docker-compose up
```

if this still doesn't work try the following from the root of this project:

```
docker-compose down && docker-compose build --no-cache docker-compose up
```
