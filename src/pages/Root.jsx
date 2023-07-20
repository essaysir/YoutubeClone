import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import {QueryClientProvider  , QueryClient} from 'react-query';
export default function Root() {
    // Create a client
    const queryClient = new QueryClient();

    return (
        <div>
            <Navbar/>
            {/* 위의 Navbar 를 포함시키지 않는 이유는 navbar 에는 
            가져와야 할 데이터가 존재하지 않기 때문이다.  */}
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider >
        </div>
    );
}

