import Cards from "../Cards/Cards";


const Home = () => {
    return (
        <div className="">
            <header className=" flex justify-center items-center flex-col gap-5">
                <h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>
                <div className="flex gap-3">
                    <input className="input md:w-60 border-2 border-gray-300" type="text" placeholder="Search here...." />
                    <button className="btn bg-[#FF444A] p-3 hover:bg-[#fb7a7e] text-white rounded-lg">Search</button>
                </div>
            </header>
            <Cards></Cards>
        </div>
    );
};

export default Home;