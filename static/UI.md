## Required Files ##

   * `package.json` - npm packages
   * `bower.json` - bower packages
   * `Gruntfile.js` - Grunt configuation
   * `.bowerrc` - bower path


## Setting up Grunt, Bower ##
The UI development environment is best kept isolated in its own virtual environment, so as to prevent conflicts with the server environment. The UI dev environment is only required for UI development and when touching files in the /static directory. It is not required as part of deployment.
Only for UI Packaging, js, css minification and compilation


#### Virtual-node ####

   * `pip install virtual-node`
   * make sure virtual node is activated

#### Install Bower ####
`npm install -g bower`

#### Install Grunt ####
`npm install -g grunt-cli`


## To install dependencies
   * `npm install`
   * `bower install`
   * `grunt`

#### Grunt watch ####
Helps for JIT minification, auto task running. Run `grunt watch` to watch files needed for the build as you develop. Grunt will run the associated tasks as files are changed.