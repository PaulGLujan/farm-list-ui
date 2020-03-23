

### Project description

A project to provide an informal/non-bureaucratic, opensource food supplier portal to help our ranchers, fishers, farmers get through Covid19 and beyond.

### This is v0.0.1-(CRA)
(CRA is short for create-react-app, which is the reactjs dev environment which this version of the app runs on)

Note: Food-Supplier-App v0.0.2-(react-webpack) differs from v0.0.1-(CRA)that v0.0.2-(react-webpack) is configured & compiled via webpack, and it has a slightly different project structure.  In v0.0.2-(react-webpack) the main directory hosts the reactjs & webpack node_modules, and the reactjs components are in ./src/client/reactComponents.  Whereas v0.0.1-(CRA) uses create-react-app's built in compiling functionality to bundle components.  And, it features the clienside reactjsapp directory adjacent to the serverside directory.

In the case of vappv0.0.2-(react-webpack), its mostly just for tweaking the compilation of the reactjs component packages to prep them for production, and bundling UI use cases separately so they can be displayed to different categories of users (Such as adminstrators, employees, customers, etc.).


### Tech stack
Server: Ubuntu 18 + Nginx
App Serverside: ExpressJS
App Clientside: ReactJS
DB: PostgreSQL
