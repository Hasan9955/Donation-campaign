import Cards from "../Cards/Cards";
import './Home.css'

const Home = () => {
    return (
        <div className="">
            <div className="flex">
                <div className="hidden md:flex justify-center opacity-10 ">
                    <img src='https://i.ibb.co/MnT1Bfb/doctors-group.jpg' alt="" />
                </div>
                <header id="header" className="md:absolute text-center flex justify-center items-center flex-col gap-5 md:mt-32 md:ml-48 lg:mt-56 lg:ml-64  xl:ml-96">
                    <h1 className="p-3 text-2xl text-center md:text-3xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex gap-3">
                        <input className="input md:w-60 border-2 border-gray-300" type="text" placeholder="Search here...." />
                        <button className="btn bg-[#FF444A] p-3 hover:bg-[#fb7a7e] text-white rounded-lg">Search</button>
                    </div>
                </header>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Home;