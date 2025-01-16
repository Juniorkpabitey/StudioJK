import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white'>
       <ul>
        <li className='inline-block py-4'>
            <Link to={'/'} className='pl-6 pr-8'>Home</Link>
        </li>
        <li className='inline-block py-4'>
            <Link to={'/about'} className='pl-6 pr-8'>About</Link>
        </li>
        <li className='inline-block py-4'>
            <Link to={'/article'} className='pl-6 pr-8'>Article</Link>
        </li>
        <li className='inline-block py-4'>
            <Link to={'/articlelist'} className='pl-6 pr-8'>ArticleList</Link>
        </li>
        
       </ul>
       
       {/*--- <ul className='flex justify-around'>
          <li className='p-4'>
            <a href='/' className='hover:text-green-300'>Home</a>
          </li>
          <li className='p-4'>
            <a href='/about' className='hover:text-green-300'>About</a>
          </li>
          <li className='p-4'>
            <a href='/article' className='hover:text-green-300'>Article</a>
          </li>
          <li className='p-4'>
            <a href='/articlelist' className='hover:text-green-300'>Articles List</a>
          </li>
        </ul> */}
      </nav>
    </div>
  )
}

export default Navbar
