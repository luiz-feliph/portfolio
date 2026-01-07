import luizFelipeLogo from "../../assets/icons/luiz-felipe.svg";
import landscape from "../../assets/images/landscape.webp";

function Main() {
  return(
    <main className="bg-off-white">
      <div className="flex flex-col items-center justify-center pt-[60px] gap-[60px]">
        <div className="flex justify-center">
          <img src={luizFelipeLogo} alt="" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-[8px] px-[40px] w-full h-[300px]">
          <div className="col-span-full ">
            <img className="w-full h-full object-cover rounded-lg" src={landscape} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center bg-light-sage rounded-lg px-[10px]">
            <h2 className="font-bitter font-bold text-off-white text-xl">Projects</h2>
            <p className="font-bitter font-bold text-off-white text-8xl">8</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-light-sage rounded-lg px-[10px]">
            <h2 className="font-bitter font-bold text-off-white text-xl">Experience</h2>
            <p className="font-bitter font-bold text-off-white text-8xl">2</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main