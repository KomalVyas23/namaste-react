/**
 * 
 * <div id="parent">
 *  <div id="child">
 *  <h1>I am h1!</h1>
 * <h2>I am h2!</h2>
 * </div>
 * </div>
 * 
 */

const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!");
//console.log(heading); //Returns an Object

//Nested Element
const parent = React.createElement("div", {id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "I am h1!"),
            React.createElement("h2", {}, "I am h2!")]
    )
);

//Above code is bit complex,
// JSX will simplify it.
// But, React is also possible without JSX.
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// The function of render method is to convert the heading object into h1 element 
//and show that into the browser
