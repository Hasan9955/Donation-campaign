import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCards } from "../../LocalStorage/LocalStorage";

const Donation = () => {

    const cards = useLoaderData();
    
    const [donations, setDonations] = useState();
    
    useEffect(() => {
        const storedCardId = getStoredCards();
        
        if(cards.length > 0 ) {
            const filterCards = cards.map(card => storedCardId.includes(card.id))
            setDonations(filterCards)
        }
    },[cards])

    return (
        <div>
            this is donation
        </div>
    );
};

export default Donation;