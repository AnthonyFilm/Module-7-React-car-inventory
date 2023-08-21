// import React from "react";
import Backround from "../assets/images/car.jpg"

function Home() {
    return (
        <div
            style={ { backgroundImage: `url(${ Backround})`}}
            className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
            >
                <div className="flex place-items-center h-screen">
                    <h3 className="p-5 bg-pink-400 bg-opacity-80 text-black rounded">
                        Welcome to the Car Inventory Database
                    </h3>
                </div>
                
        </div>
    )
}

export default Home