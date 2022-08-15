import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { CreateAccountComponent } from "./pages/create_account/create_account.component";
import Clients from "./pages/general/pages/client/client.component";
import { Dashboard } from "./pages/general/pages/dashboard/dashboard.component";
import MaterialComponent from "./pages/general/pages/material/material.component";
import LoginComponent from "./pages/login/login.component";


export function AppRouting() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginComponent />}></Route>
                <Route path="/login" element={<LoginComponent />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/clients" element={<Clients />}></Route>
                <Route path="/material" element={ <MaterialComponent /> }></Route>
                <Route path="/create_account" element={ <CreateAccountComponent /> }></Route>
            </Routes>
        </Router>
    )
}