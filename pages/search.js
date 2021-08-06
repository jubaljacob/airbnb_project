import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

function Search({searchResults}) {
    const router = useRouter();

    console.log(searchResults);
    
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {range} - for {noOfGuests} guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in {location}
                    </h1>


                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">

                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms</p>
                        <p className="button">Beds</p>

                    </div>
                </section>


            </main>
            <Footer/>
        </div>
    )
}

export default Search


export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz").
    then(res => res.json());

    return{
        props:{
            searchResults: searchResults,
        },
    };
}