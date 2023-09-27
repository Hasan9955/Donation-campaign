import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div className="my-5 md:px-5  navbar bg-base-100 flex flex-col md:flex-row gap-5 justify-between items-center">
            <a className="">
                <div className="flex  justify-center">
                    <img className="h-14 w-14" src={'https://i.ibb.co/3dtph10/Group.png'} alt="" />
                    <div className="">
                        <h2 className="text-2xl font-bold text-[#ff444a]">Donation</h2>
                        <p >C a m p a i g n</p>
                    </div>
                </div>
            </a>

            <div id="navLink" className="flex gap-3 font-bold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donation">Donation</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
            </div>
        </div>
    );
};

export default Header;