import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

