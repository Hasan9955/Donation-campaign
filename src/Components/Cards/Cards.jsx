
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {

    const [cards, setCards] = useState([]);
    

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className=" p-5 md:p-15 gap-2 md:gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;