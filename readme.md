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


# Chapter 3
JSX - HTML like syntax

Is JSX pure JS?
No, Because JS Engine can't read this code.

JSX => Transpiled before it reaches JS Engine (Parcel handles this job to Babel) => JS Engine understandable code.

Babel is a transpiler.

# //React.createElement => Object => HTML Element(render)
# //JSX => React.createElement => Object => HTML Element(render)

- JSX attributes follow camel case
- class becomes className in JSX
- If we are writing JSX in multiple line, we must use ()
- We can write JS expression inside {} in JSX
- JSX even sanitizes the data.

# Chapter 4 Talk is cheap, Show me the Code
- Planning of Food Ordering App

-Header
    - Logo
    - Nav Items - Home,About, Cart
-Body
    - Search Bar
    - Card Container
        - Restaurants Cards
            - Image
            - Name
            - Cuisines
            - Rating
- Footer
    - Copyright
    - Links
    - Address

Concept of Props
Destructuring props on the fly
Config-driven UI
Dynamic Cards with Map() concept
Key concept. Why it is needed?
Index as a key is an anti-pattern
not using key (not acceptable) << Indexes (acceptable but not recommended) << Unique Ids (best practice)

# Chapter 5 Let's get Hooked

Folder structure
Default and named export imports
Feature - Top Rated Restaurants

useState()
useEffect()

Reconciliation Algorithm (React Fiber)

Lets say we have 7 cards in res-container and we filtered data and we got 3 cards as a result of filter.

Virtual DOM is a representation of actual dom.
Diff Algorithm
React Fiber


# Chapter 6 Explore the world

Monolith and Microservices Architecture
How the communication happens between microservices
Fetching data from API
1st approach : Page Loads -> API(500ms) -> Render
2nd approach : Loads -> Render -> API -> Render

In React, we will always use 2nd approach

Shimmer Effect

Why we use state variable?

Login-Logout toggling button
Search Functionality

CORS Issue Solution:
corsproxy.io

# Chapter 7 - Finding the path
useEffect

Rules for Hooks-
Create state variable inside components
Don't create it inside if-else or for loop
Always keep then first in the component

Routing Config
CreateBrowserRouter takes a list of path
Basic path
Children path
Link to
SPA
Types of Routing:
 client side routing - In react we do not load whole page, we only update the component
 server side routing - refreshes whole page
 Restaurant-Menu Page
 Dynamic Routing

 # Chapter 8 Lets get classy

 API Calls-
 ComponentDidMount() 

 In case of 2 children components (Just an example of react lifecycle flow)
 - Parent Constructor
 - Parent render
 - First Child Constructor
 - First Child render
 - Second Child Constructor
 - Second child render
 - First Child componentDidMount
 - second child componentDidMount
 - parent componentDidMount

 Refer lifecycle method

 # chapter 9 Optimizing Our App

 Principle of single responsibility
 Modularity - Break down your code into smaller chunks
 App becomes reuseable, maintainable and testable

 Custom Hooks
 Online/ Offline Feature
 ESLint - To read

 How to make large apps performant?
 Lazy Loading

 # chapter 10 Jo dikhta hai, vo bikta hai
 CSS
 SASS, SCSS - add super powers to CSS
 Recommended One -
 Styled Components
 Material UI
 Bootstrap
 Chakra UI
 AntDesign UI

 Tailwind - Rapidly build modern websites without ever leaving your HTML.

 PostCSS - a tool for transforming CS with JS

 # chapter11 Data is the new oil

 Higher order component
 - takes a component and returns a component
 - Promoted Feature
 - React Dev Tools
 - UseContext

 # chapter 12 Let's Build Our Store
 When you hit the add button, it dispatches an action, which calls a reducer function, which updates the slice our store.

 We select a select to read data from the store. This phenomena is called subscribing to the store

 
Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build store
- Connect store to the app
- Create Cart Slice
- Dispatch action
- Selector

# Chapter 13 Time For Test
- Manual testing
- Unit Testing - Components are checked in isolation
- Integration Testing - Multiple component talking to each other and the flow is tested
- End to End Testing (e2e) : Testing overall applications 


- Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom













 

