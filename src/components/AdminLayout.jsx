// import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {
  // const location = useLocation()
  // console.log(location.pathname)

  return (
    <div className='md:flex md:minmax-h-screen'>
      <aside className='md:w-1/4 bg-yellow-400 px-5 py-10'>
      <NavLink className='text-3xl font-extrabold block mt-2 hover:text-blue-300' to='/'>GYM</NavLink>
        <h2 className='text-4xl font-black text-center '>
          Control Panel
        </h2>
        <nav className='mt-10'>
          <NavLink className={({ isActive }) => `${isActive ? 'text-blue-300' : 'text-black' } text-2xl block mt-2 hover:text-blue-300`} to='/'>Clients</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`} to='/admin/registerclient'>New Client</NavLink>
        </nav>
      </aside>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  )
}