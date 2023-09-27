/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const DonatedCards = ({ card }) => {
    const {id, Category, Picture, Title, Price, CardBackgroundColor, CategoryBackgroundColor, TextColor } = card;


    return (
        <div className="flex gap-3 justify-center items-center rounded-lg m-2" style={{backgroundColor: `${CardBackgroundColor}`}}>
            <div className="grow">
                <img className="w-56 h-40 lg:h-44 " src={Picture} alt="" />
            </div>
            <div className="p-1 md:p-2 ">
                <p className="w-20 rounded-lg p-1 " style={{color: `${TextColor}`, backgroundColor: `${CategoryBackgroundColor}`}}>{Category}</p>
                <h1 className="md:text-xl">{Title}</h1>
                <p className="" style={{color: `${TextColor}`}}>{Price}</p>
                <Link to= {`/card/${id}`}>
                    <button style={{backgroundColor: `${TextColor}`}} className="md:mt-2 px-2 md:py-1 rounded-lg text-white">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default DonatedCards;