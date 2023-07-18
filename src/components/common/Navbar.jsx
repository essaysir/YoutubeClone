import { FaYoutube ,FaSearch } from 'react-icons/fa';
import { useSearch } from '../../context/SearchContext';

export default function Navbar() {
    const {search, setSearch} = useSearch();
    const handleChange = (e)=>( setSearch(e.target.value));
    const handleSubmit = (event) =>{
        event.preventDefault();
        // 이 이후에, 다시 값을 부르고 
    }
    return (
        <section className='w-100 flex items-center space-x-40 flex-shrink-0'>
            <div className='flex items-center'>
                <FaYoutube color='red' size='50'/>
                <span className='text-2xl'>Youtube</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='border border-white rounded-3xl flex items-center w-[640px] p-4'>
                    <input className='flex-grow bg-black' type='text' placeholder='검색' value={search} onChange={handleChange}/>
                    <span className='' onClick={handleSubmit}><FaSearch/></span>
                </div>
            </form>

        </section>
    );
}

