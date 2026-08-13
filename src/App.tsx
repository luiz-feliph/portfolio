import { useTranslation } from "react-i18next";
import ScrollToTopButton from "./components/ScrollToTop"
import Home from "./pages/Home"

function App() {
  const { t } = useTranslation();

  return (
    <>
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000]
          focus:rounded-md focus:bg-deep-teal focus:px-4 focus:py-2
          focus:font-dm-sans focus:font-bold focus:text-off-white
        "
      >
        {t("SkipToContent")}
      </a>
      <Home />
      <ScrollToTopButton />
    </>
  )
}

export default App
