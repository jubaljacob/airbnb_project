import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid"


function Header() {
    return (
        <header className="stickey top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">

            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image 
                    src="http://links.papareact.com/qd3"
                    layout = "fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle -- Search*/}

            <div className="flex items-center border-2 rounded-full py-2 ">
                <input type="text" placeholder="Type in your search"/>
                <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer  "/>
            </div>
            {/* Riget */}
            <div></div>
            
            
        </header>
    )
}

export default Header
