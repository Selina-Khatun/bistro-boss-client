
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>

        <li><NavLink className='mr-5 font-bold uppercase' to={'/'}>Home</NavLink></li>
        <li><NavLink className='mr-5 font-bold uppercase' to={'/'}>CONTACT us</NavLink></li>
        <li><NavLink className='mr-5 font-bold uppercase' to={'/'}>DASHBOARD</NavLink></li>
        <li><NavLink className='mr-5 font-bold uppercase' to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink className='mr-5 font-bold uppercase' to={'/order/salad'}>Our Shop</NavLink></li>
        <li><NavLink className='mr-5 font-bold uppercase' to={'/login'}>Login</NavLink></li>
    </>
    return (
        <div className="navbar text-white  bg-opacity-30 lg:w-[90.5%] fixed z-10 bg-black">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
                        {navLinks}
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <a className="text-xl">BISTRO BOSS</a>
                    <p>Restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;