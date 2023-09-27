import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveCard } from "../../LocalStorage/LocalStorage";


const CardDetails = () => {
    const cardsData = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id)

    const card = cardsData.find(card => card.id === intId)
    const { Description, Details, Price, Title } = card;


    const handleDonation = () => {
        saveCard(intId)
        toast("Donation Successful!!!")

    }
    return (
        <main className="flex justify-center">
            <div className="m-5 md:m-10 ">
                <img className="lg:w-[1200px] lg:h-[500px]" src={Details} alt="photo" />
                <div style={{backgroundColor: "rgba(11, 11, 11, 0.50)" }} className="lg:w-11/12 xl:w-[1200px] lg:absolute lg:-mt-20 rounded-lg p-4">
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