import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Home.css'
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
    const [cards, setCards] = useState([]);
    const [searchCard, setSearchCard] = useState([])
    
    
    
    
    const handleSearch = () => {
        const searchValue = document.getElementById('search')
       
        const filterCard = searchCard.filter(card => card.Category === searchValue.value)
        if(filterCard.length>0){
            setCards(filterCard)
            searchValue.value = '';
        }
        else if(!searchValue.value){
            toast('Write Category Name')
        }
        else{
            toast('No match found')
            searchValue.value = '';
        }
        
    }

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {setCards(data); setSearchCard(data)})
    },[])
    
    
    
    return (
        <div className="">
            <div className="flex">
                <div className="hidden md:flex justify-center opacity-10 ">
                    <img src='https://i.ibb.co/v1Rz228/doctors-group.jpg' alt="" />
                </div>
                <header id="header" className="md:absolute text-center flex justify-center items-center flex-col gap-5 md:mt-32 md:ml-48 lg:mt-56 lg:ml-64  xl:ml-96">
                    <h1 className="p-3 text-2xl text-center md:text-3xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex gap-3">
                        <input id="search" className="input md:w-60 border-2 border-gray-300" type="text" placeholder="Search here...." />
                        <button onClick={() =>handleSearch()} className="btn bg-[#FF444A] p-3 hover:bg-[#fb7a7e] text-white rounded-lg">Search</button>
                    </div>
                </header>
            </div>
            <div className=" p-5 md:p-15 gap-2 md:gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;