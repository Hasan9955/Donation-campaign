import { Link } from "react-router-dom";

const Card = ({ card }) => {

    
    const { Category, CategoryBackgroundColor, TextColor, id, CardBackgroundColor, Description, Picture, Price, Title } = card || {};


    return (
        <Link to= {`/card/${id}`}>
            <div style={{ backgroundColor: `${CardBackgroundColor}`, color: `${TextColor}` }} className='rounded-lg'>
                <img src={Picture} alt="" />
                <div className="m-2">
                    <p style={{ backgroundColor: `${CategoryBackgroundColor}` }} className="p-2 rounded-lg font-semibold md:font-bold  w-24 h-10">{Category}</p>
                    <h1 id='title' className="md:text-xl font-semibold">{Title}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Card;