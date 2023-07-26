import { useEffect, useState } from 'react';
import { FaYoutube ,FaSearch } from 'react-icons/fa';
import {  useNavigate, useParams } from 'react-router-dom';


export default function Navbar() {
    const [ search ,setSearch] = useState('');
    const handleChange = (e)=>( setSearch(e.target.value));
    const navigate = useNavigate();
    const handleSumbit = (event)=>{
        event.preventDefault();
        navigate(`/videos/${search}`);
    }
    const handleHome =()=>{
        setSearch('');
        navigate('/');
        // 해당 방법도 가능하지만 , 
        // <Link to='/' > </Link> 태그로 감싸는 방법도 가능하다. 
    };
    const {searchName} = useParams();
    useEffect(()=>{
        setSearch(searchName || '');
    },[searchName]);
    return (
        <header className='flex w-full p-4 text-2xl border-b border-zinc-600 mb-4'>
            <div className='flex items-center cursor-pointer' onClick={handleHome}>
                <FaYoutube className='text-4xl text-brand'/>
                <span className='font-bold ml-2 text-3xl'>Youtube</span>
            </div>
            <form className='w-full flex justify-center' onSubmit={handleSumbit}>
                    <input className='w-7/12 p-2 outline-none bg-black text-gray-50' type='text' placeholder='검색' value={search} onChange={handleChange}/>
                    <button className='bg-zinc-600 px-4'><FaSearch/></button>
                
            </form>

        </header>
    );
}

