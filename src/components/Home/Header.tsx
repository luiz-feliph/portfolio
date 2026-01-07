import NavBar from "./NavBar"

function Header() {

  return (
    <header className="flex items-center bg-off-white h-[80px] px-[20px] lg:px-[40px]">
      <h3 className="font-bitter text-steel-blue w-full md:hidden">Full Stack Developer</h3>
      <NavBar />
    </header>
  )
}

export default Header