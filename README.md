<h1> user-register </h1>

<h2> Basic API with user register feature, you can try out with insomnia </h2>
<h3 align="center"> 🚧 Caution: Not finished yet  🚧 </h3>


<p align="center">
 <a href="#heavy_check_mark-features">Features</a> •
 <a href="#checkered_flag-get-started">Get Started</a> • 
 <a href="#arrow_forward-run">Run</a> • 
 <a href="#beetle-debug">Debug</a> • 
 <a href="#incoming_envelope-test-it">Test it</a> •
 <a href="#gear-technologies">Technologies</a> •
 <a href="#open_book-styleguides">Styleguides</a> •
 <a href="#made-with">Author</a>
</p>



### :heavy_check_mark: Features

- [x] User Register
- [x] Authenticate session
- [x] User update
- [x] User delete
- [x] User index
- [x] User list
- [x] Tests
  

### :checkered_flag: Get started 

Install:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

I recommend the use of VSCode as IDE:
[VSCode](https://code.visualstudio.com/)


### :arrow_forward: Run

```bash
# Clone it
$ git clone <https://github.com/araujoizabelle/user-register>

# On your cmd/bash
$ cd user-register

# Install the packages
$ npm install

# Run as development
$ npm run dev

# It will start at port:3333 - go for it! <http://localhost:3333>
```

### :beetle: Debug

```bash
# To debug the application correctly I recommend you:
    1 - Add a new configuration on your VSCode
    2 - You can follow mine - index.js is where our server.js is started! 
         {  "configurations": [
              {
                "type": "node",
                "request": "launch",
                "name": "Launch Program",
                "skipFiles": [
                  "<node_internals>/**"
                ],
                "program": "${workspaceFolder}/index.js"
              }
            ]
          }

$ npm run dev:debug

```

### :incoming_envelope: Test it
[Insomnia](https://insomnia.rest/)
See [import and export request on insomnia](https://support.insomnia.rest/article/52-importing-and-exporting-data)
```
  With insomnia you can test the api whitout a frontend
  Just download the json file I left in the code, and import on insomnia
  
  If you want to, you can write more tests on the test folder 
  $ npm run test
  
``` 
```
```

### :gear: Technologies

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Sucrase](https://sucrase.io/)
- [Sequelize](https://sequelize.org/) - see the seeds sections too!
- [Mysql](https://www.mysql.com/)
- [Express](https://expressjs.com/pt-br/)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)


### :open_book: Styleguides
#### Remember to install the VSCode plugins

 - [Prettier](https://prettier.io/)
 - [Eslint - Air bnb](https://eslint.org/)


# Made with :purple_heart: by [Izabelle](https://github.com/araujoizabelle)
