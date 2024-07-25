Chapter 2 "Igniting our app"

NPM - helps managing packages used in our app.
npm init - Initial npm
package.json : It has all the configuration of our dependencies.

Webpack, Parcel, Vite
Bundler -  a tool which allows to package code into a single file or bundle. Due to this size of code will reduce and so performance of application will improve. Common bundlers used with React are Webpack and Parcel.

We are using Parcel
Install parcel as Dev Dependency - npm i -D parcel

What is Dev Dependency?
Dependencies which are used during development phase.

What is ^(caret) and ~(tilde)?
^ - parcel can upgrade its minor version
~ - parcel will upgrade its major version

What is the difference between package.json and package-lock.js?
The package.json is used for more than dependencies like defining project properties, description, author and license information, scripts, approx versions of dependencies (like ^v20.1.0 ) etc.

While package-lock.json is solely used to lock dependencies to a specific version number. It saves the exact version of dependencies (like v20.0.1).

The above two files should never be put inside gitignore.

They always need to be committed.

What is node modules?
It contains all the packages that we install from npm. We should not commit this folder into our version controlled repository or production, because it is too heavy. Always put it in .gitignore.

*We can create node modules with package.json and package-lock.json.

In our project how many package.json are there?
This is more than one. Every packages we install has there own package.json. They have there own dependencies. These are known as transitive dependencies.

# Ignite Our App
npx parcel index.js

What's the difference between npm and npx?
When we need to install a package, we use npm commands.
While when we need to execute a package, we write npx.

# Install React
npm i react
npm i react-dom

# Parcel is a beast

Dev Build
Local server
HMR = Hot Module Replacement
File watching Algo - written in C++
Caching things in .parcel-cache
Image Optimization
Minify our files
Bundling
Compress
Consistent Hashing
Code Splitting
differential Bundling - support older browser
Diagnostic
Error Handling
Different dev and prod bundles

# dist folder
npx parcel build index.html

We don't have to put node_modules, dist, parcel-cache into git

# browserslist

With These things, we have created our own create-react-app