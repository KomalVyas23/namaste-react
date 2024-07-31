import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <>
        <div className="errorpage">
            <h1>Oops! Page not found.</h1>
            <p>{err.status} : {err.statusText}</p>
            </div>
        </>
    )
}

export default Error;