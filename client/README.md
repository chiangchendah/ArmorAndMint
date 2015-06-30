# client side layout/framework
  - the lightCMS client uses angular to power its clientside behavior
  - features should exist in their own directorys which can have
  whatever views/controllers/directives they require
  - modules must be loaded from the base client html page
        - in this case: server/views/index.ejs
  - There is currently one services.js file, but it may be better to let modules
  have thier own local services files.

### app.js
- sets up state routing with ui router
- loads modules (which should first be linked/loaded in index.html script tags..)

### services.js:
   - has an Articles service which returns promises from the server api
  this allows each controller to use the service and deal with the results
  in its own way.
  - has a user service which deals with signin/signout/auth stuff

## article module

#### .html files:
Article currently consists of 4 html 'partials' which are various templates for displaying and interacting with article data

#### article.js:
contains a handful of controllers that in most cases correspond to one of the .html files.
generally these controllers are connecting the templates/views to the data (on the server via services.js)

Originally the articles module was built with 1 controller and only 1 or two views/partials/templates, but in an effort to keep things simple, and have a proper browser history things were
organized as they are now. It could benefit from a refactor im sure.
