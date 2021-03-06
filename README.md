#### About :
- A simple Ract app, built with an intention of learning React.

#### App deployed on Heroku :
- [Go to live app - Burger builder](https://buildtheburger.herokuapp.com/)

#### Scripts :
```json
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
        "start":"npx nodemon server.js", 
        "start:client": "cd burger-builder && npm run start",
        "start:dev": "concurrently \"npm run start \" \"npm run start:client\"",
        "installPackage": "npm i && npm i --prefix ./burger-builder",
        "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix burger-builder && npm run build --prefix burger-builder"
        }
  ```

#### Notes :

- Heroku looks for "start" and "heroku-postbuild" scripts
- Connect mongo db compass to Atlas (remote DB) using the conncetion string provided by Atlas 

#### References :
- [How to Deploy React app using express server](https://www.freecodecamp.org/news/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250/)

- [How to setup a remote DB using MLab/Atlas ](https://www.youtube.com/watch?v=KKyag6t98g8)

- [How to set/unset ENVIRONMENT VARIABLES in Heroku](https://devcenter.heroku.com/articles/config-vars#managing-config-vars)

