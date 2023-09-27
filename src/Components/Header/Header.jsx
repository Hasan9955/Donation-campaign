import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div className="my-5 md:px-5  navbar bg-base-100 flex flex-col md:flex-row gap-5 justify-between items-center">
            <img className="w-52" src="https://i.ibb.co/hWqqDmB/Logo.png" alt="" />

            <div id="navLink" className="flex gap-3 font-bold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donation">Donation</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
            </div>
        </div>
    );
};

export default Header;