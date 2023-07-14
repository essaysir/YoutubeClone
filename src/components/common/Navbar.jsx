import React, { useState } from 'react';
import { FaYoutube ,FaSearch } from 'react-icons/fa';


export default function Navbar() {
    const [ search ,setSearch] = useState('');
    const handleChange = (e)=>( setSearch(e.target.value));

    return (
        <section className='w-100 flex items-center space-x-40 flex-shrink-0'>
            <div className='flex items-center'>
                <FaYoutube color='red' size='50'/>
                <span className='text-2xl'>Youtube</span>
            </div>
            <form>
                <div className='border border-white rounded-3xl flex items-center w-[640px] p-4'>
                    <input className='flex-grow bg-black' type='text' placeholder='검색' value={search} onChange={handleChange}/>
                    <span className=''><FaSearch/></span>
                </div>
            </form>

        </section>
    );
}

