import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Home/>} />
            </WrapperRoutes>
        </BrowserRouter>
    );
};

export default Routes;