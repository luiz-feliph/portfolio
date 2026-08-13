import { useTranslation } from "react-i18next";
import NavBar from "./NavBar"

function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center bg-off-white h-[80px] px-[20px] lg:px-[40px]">
      <span className="font-bitter text-lg font-bold text-steel-blue md:hidden">
        {t("Full Stack Developer")}
      </span>
      <NavBar />
    </header>
  )
}

export default Header
