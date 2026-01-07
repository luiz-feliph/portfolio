import NavBar from "./NavBar"

function Header() {

  return (
    <header className="flex items-center bg-off-white h-[80px] px-[20px]">
      <h3 className="font-bitter text-steel-blue md:hidden">Full Stack Developer</h3>
      <NavBar />
    </header>
  )
}

export default Header