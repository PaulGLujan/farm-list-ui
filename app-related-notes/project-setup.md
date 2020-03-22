##### Ch1.B.

Edited nginx .conf file to send visitors to our lp/landingpage expressjs route, which will serve static content (our landing page)
- https://testsite007.ml/ is now showing a static content page.  
  - We can start building out a landing page here.  
  - Nginx proxy_passed to localhost:3000/lp/landingpage which is an expressjs route, which the visitor is passed to, when they access "/" which is the domain root
  - Example:  
``` 
location / {
  ...other_settings...
  proxy_pass http://localhost:3000/lp/landingpage;
  ...other_settings...
}
```
______________________________________
##### Ch1.A. Getting setup
(note: using mac os)

Move into your project directory and create a directory for app project directories. Alongside it you might also want a directory for project-notes, test-projects, etc.

cd 1-proj-app
mkdir project-notes
mkdir app-related
cd app-related

### Clientside setup
[Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)

Ok, now we have a folder for notes, alongside our main app directory.  
In the app-related directory, we'll auto-generate a ReactJS scaffold and an ExpressJS scaffold.

For the ReactJS project, this command creates a scaffold in a directory named "clientside-reactjs"

Here, npx creates a reactjs app using yarn.  For consistency, we'll stick to using yarn, and we'll add it into directory name as a reminder:

```linux
npx create-react-app clientside-reactjs
cd clientside-reactjs
rm -rf .git

```

### Clientside Deployment

https://coderrocketfuel.com/article/deploy-a-create-react-app-website-to-digitalocean#create-site-section

run: `npm run build` then copy content of reactjs app's public directory into the public directory of the expressjs  app
favicon.ico
manifest.json
logo512.png
logo192.png
index.html
service-worker.js
robots.txt
asset-manifest.json
static
precache-manifest.3feb991588678a7c1620b2f79b366b18.js

No need to install react on the server.  The build bundle should just run-- like magic.

### Severside setup
[Express application generator](https://expressjs.com/en/starter/generator.html)

Here, npx creates an expressjs app using npm (notice no yarn.lock file).  For consistency, we'll stick to using npm, and we'll add it into directory name as a reminder:


```linux
cd ..
npx express-generator --view=ejs serverside-expressjs-npm
cd serverside-expressjs-npm
npm i
```

For both projects, I'd like to stick to a single package manager (i.e. yarn vs npm).  NPM is the default.  So, we'll delete the yarn.lock and `node_modules` folder in the reactjs app, and reinstall those `node_modules` with npm, using the command `npm i` which is short for `npm install`
