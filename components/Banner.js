import Image from "next/image";
function Banner() {
    return (
        <div className=" relative h-[300px] sm:h-[400px] lg:h-[625px] xl:h-[800] 2xl:h-[900px] ">
            <Image src="https://links.papareact.com/0fm" layout="fill"
            objectFit="cover"
            />
            <img src="public\hero.jpg" alt="" />

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">
                    Not sure where to go ? perfect!
                </p>
                <button className=" text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 duration-150" >I'm flexible</button>
            </div>


        </div>
    )
}

export default Banner
