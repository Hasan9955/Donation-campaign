import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCards } from "../../LocalStorage/LocalStorage";
import DonatedCards from "../DonatedCards/DonatedCards";

const Donation = () => {

    const cards = useLoaderData();


    const [donations, setDonations] = useState([]);
    const [showCard, setShowCard] = useState(4);


    useEffect(() => {
        const storedCardId = getStoredCards();


        if (cards.length > 0) {
            const filterCards = cards.filter(card => storedCardId.includes(card.id))
            setDonations(filterCards)
        }
    }, [cards])

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="lg:px-32 xl:px-44 grid grid-cols-1 md:grid-cols-2 md:gap-3 m-5 md:m-10">
                {
                    donations.slice(0, showCard).map(card => <DonatedCards key={card.id} card={card}></DonatedCards>)
                }

            </div>
            <div className={showCard === donations.length || donations.length<4 ? 'hidden' : ""}>
                <button  onClick={() => setShowCard(donations.length)} className={`btn bg-[#009444] text-white `}>Show all</button>
            </div>
        </div>
    );
};

export default Donation;