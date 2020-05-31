App deployed on Heroku : 
https://dashboard.heroku.com/apps/buildtheburger/activity


How to Deploy React app using express server
https://www.freecodecamp.org/news/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250/


Scripts
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start":"npx nodemon server.js", 
        "start:client": "cd burger-builder && npm run start",
        "start:dev": "concurrently \"npm run start \" \"npm run start:client\"",
        "installPackage": "npm i && npm i --prefix ./burger-builder",
        "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix burger-builder && npm run build --prefix burger-builder"
    }

  Heroku looks for "start" and "heroku-postbuild"


