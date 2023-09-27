import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getStoredCards, saveCard } from "../../LocalStorage/LocalStorage";


const CardDetails = () => {
    const cardsData = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id)

    const card = cardsData.find(card => card.id === intId)
    const { Description, Details, Price, Title } = card;


    const handleDonation = () => {
        const storedCard = getStoredCards()
        const filterCard = storedCard.find(id => id === intId)
        if (!filterCard) {
            saveCard(intId)
            toast.success("Donation Successful!!!")
        }
        else{
            toast.warn("Already Donated")
        }


    }
    return (
        <main className="flex justify-center items-center">
            <div className="m-5 md:m-10 ">
                <img className="md:w-[700px] lg:w-[1200px] lg:h-[500px]" src={Details} alt="photo" />
                <div style={{ backgroundColor: "rgba(11, 11, 11, 0.50)" }} className=" md:w-[89.6%] lg:w-[92.2%] xl:w-[1200px] absolute -mt-12 md:-mt-20 rounded-lg md:p-4">
                    <button onClick={handleDonation}
                        className="btn bg-gradient-to-r from-red-400 to-red-500 hover:from-pink-500 hover:to-pink-500
                     border-0  text-white ">Donate {Price}</button>


                </div>
                <div className=" mt-10 space-y-2">
                    <h1 className="text-2xl font-semibold">{Title}</h1>
                    <p>{Description}</p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </main>
    );
};

export default CardDetails;