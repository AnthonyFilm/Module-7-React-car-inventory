
import Backround from "../assets/images/car.jpg"

function About() {
  return (
    <div
    style={ { backgroundImage: `url(${ Backround})`}}
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
    >
        <div className="flex place-items-center h-screen">
            <h1 className="p-5 bg-pink-400 bg-opacity-80 text-black rounded">
            It's all about cars!
            </h1>
            <br />
            <p className="p-5 bg-pink-400 bg-opacity-80 text-black rounded m-5">This application is provided for you to keep track of your many cars, so, yes, this can only be used by 
      a heartless person destroying the Earth, i.e., Jay Leno. </p>
        </div>
    </div>
  )
}

export default About