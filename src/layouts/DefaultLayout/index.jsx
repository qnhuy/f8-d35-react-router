import { Outlet } from "react-router"
import Navigation from "../../components/Navigation"

function DefaultLayout() {

    return <div style={{ display: 'flex'}}>
        <Navigation />

        <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Outlet />
        </div>
    </div>
}

export default DefaultLayout