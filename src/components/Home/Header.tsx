import { useTranslation } from "react-i18next";
import NavBar from "./NavBar"

function Header() {
  const { t } = useTranslation();
  

  return (
    <header className="flex items-center bg-off-white h-[80px] px-[20px] lg:px-[40px]">
      <h3 className="font-bitter text-steel-blue min-w-full md:hidden">{t("Full Stack Developer")}</h3>
      <NavBar />
    </header>
  )
}

export default Header