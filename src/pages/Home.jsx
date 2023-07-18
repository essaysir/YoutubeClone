import Navbar from '../components/common/Navbar';
import MainVideo from '../components/home/MainVideo';
import { SearchContextProvider } from '../context/SearchContext';

export default function Home() {
    return (
        
        <SearchContextProvider>
                <Navbar/>
                <MainVideo/>
        </SearchContextProvider>
    );
}

