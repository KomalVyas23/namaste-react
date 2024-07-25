import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX!
    </h1>
);

const number = 10000;

// Component Composition: You can put one component into another component
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {Title()}
        <h2>{number}</h2>
        <h1 className="heading">Namaste React Functional component!</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);





