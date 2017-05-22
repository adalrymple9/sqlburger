# ORM to Sequelize

* We have a todo list app that previously was using a simple ORM to communicate with a database, but now we're coming in to perform a few upgrades.

* By the end of class they will have fully converted this todo list app to use sequelize instead of the ORM it's currently using.

* This application makes use of each CRUD action. It allows the user to CREATE new todo items, it READS todos from the database, it allows the user to UPDATE current todo items, and allows a user to DELETE todos.

* You can toggle a todo's edit mode by clicking it. You will be converting one piece of functionality at a time per activity, and **things will inevitably break temporarily while we're doing that**.

* You won't need to (and shouldn't) touch any front end JavaScript or HTML.

- - -

## Activity 1

* INSTRUCTIONS:

  1) Create a new local MYSQL database called 'todolist', but don't create any tables.

  2) Delete any references to the orm.js file inside the `api-routes.js` file.

  3) Delete the config folder.

  4) While inside the activity folder, run npm install in terminal.

  5) In terminal, type in the following command: "sequelize init:models init:config". If this produces an error, then you may not have the sequelize-cli installed globally. If this is the case, for now you can run ./node_modules/.bin/sequelize init:config init:models

  6) Step 5 should have created a config and a models folder for us. Navigate to the config folder, open `config.json`, and modify the development object's "database","username" and "password" values to match your MYSQL database on your machine.

  7) Navigate to the models folder and create a new file called `todo.js`. Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

  8) Navigate to the server.js file and require all of our models by requiring the models folder. Save this to a variable and name it "db".

  9) Sync the models by running db.sequelize.sync() before we start the express server.

  10) In your terminal, run "node server". Check MYSQL Workbench to see if a Todos table was created. If so, you were successful. If not, check your terminal for any errors.

**Refer to the Sequelize Quick Start Guide if you experience any issues - <https://github.com/UCF-Coding-Boot-Camp/02-2017-FTL-Class-Content/blob/master/Classwork/15.1/Supplemental/SequelizeQuickStartGuide.pdf>**

- - -

## Activity 2

* INSTRUCTIONS:

  3) Navigate to the `api-routes.js` folder.

  4) Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.

  5) Add a Sequelize create method to the POST route to save a new todo to the database using the data sent to the server in req.body.

  6) To test if this worked, open your terminal and run `node server` and navigate to localhost:8080. If you are able to save new todos, you were successful.

  7) Hint: We can access the Todo model here with "db.Todo"

  If you get stuck or finish early, check out the Sequelize Star Wars solution from last class, or try and see if you and your partner can make sense of Sequelize's docs for the findAll and create methods

  <http://docs.sequelizejs.com/en/latest/api/model/#findalloptions-promisearrayinstance>

  <http://docs.sequelizejs.com/en/latest/api/model/#createvalues-options-promiseinstance>

- - -

## Activity 3

  * INSTRUCTIONS:

   4) Inside the `api-routes.js` file, look for the DELETE route and add a Sequelize method to delete the todo with the id available to us in `req.params.id`.

   5) Inside of the same file, look for the PUT route and add a Sequelize method to update a todo with the new todo data available to us inside req.body.

   6) Again, you won't need to touch the front end HTML or JavaScript to make any of this work.

   7) **HINT**: you will need to pass in an options object with a "where" attribute into both methods in order to filter these queries to target the Todos we want to update or delete.
   <http://docs.sequelizejs.com/en/latest/docs/querying/#where>

   8) Navigate to localhost:8080. If you can update and delete todos without errors, you were successful.

   9) If you get stuck or finish early, discuss the documentation for the `update` and `destroy` methods with your partner here:

   <http://docs.sequelizejs.com/en/latest/api/model/#updatevalues-options-promisearrayaffectedcount-affectedrows>

   <http://docs.sequelizejs.com/en/latest/api/model/#destroyoptions-promiseinteger>

- - -

## Activity 4

* INSTRUCTIONS:

  1) Open the folder slacked out to you.

  2) Run `npm install`.

  3) Update the `config.json` file's development object with your own local MYSQL database settings.

  4) Modify the `todo.js` file so that the Todo model has a flag to prevent the text field from being null. Also add a validation to make sure the text field is at least one character, but no more than 140 characters.

  5) Modify the complete field in our Todo model so that it supplies a default value of false if one is not supplied during Todo creation.

  6) Once a Sequelize model has been created and sync'ed for the first time, any changes we make to our Todo model won't be picked up by our database. The easiest way to get around this during the development process is to pass "{ force: true }" as an argument into our sync method inside `server.js` file. This will make it so that every time we run our app, our Todos table will be dropped and recreated with the new configuration. More info here: <http://docs.sequelizejs.com/en/latest/api/sequelize/#syncoptions-promise>

  7) Navigate to localhost:8080 to test that this worked. Try to save a Todo without any text in it, and then try and save a Todo with over 140 characters. If these didn't save and you see errors in your console that have to do with validation, you were successful.

  8) **Big Hint**: Sequelize documentation on validations with examples can be found here: <http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations>