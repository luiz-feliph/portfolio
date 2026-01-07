import luizFelipeLogo from "../../assets/icons/luiz-felipe.svg";
import landscape from "../../assets/images/landscape.webp";

function Main() {
  return (
    <main className="bg-off-white">
      <section
        className="
          flex flex-col items-center justify-center
          gap-[60px] pt-[60px]
          md:pt-[80px]
          xl:gap-[40px] xl:pt-[60px]
        "
      >
        <div
          className="
            flex w-full justify-center
            px-[20px]
            md:px-[40px]
            lg:px-[60px]
          "
        >
          <img src={luizFelipeLogo} alt="Luiz Felipe Logo" className="w-full" />
        </div>

        <section
          className="
            grid h-[300px] w-full grid-cols-2 grid-rows-2
            gap-[8px] px-[40px]
            md:grid-cols-3 md:grid-rows-3
            lg:px-[100px]
            xl:grid-cols-4 xl:gap-[16px] xl:h-[400px]
          "
        >
          <figure className="col-span-full sm:col-1 sm:row-span-full">
            <img
              src={landscape}
              alt="Landscape"
              className="
                h-full w-full object-cover
                rounded-lg
                md:rounded-xl
              "
            />
          </figure>

          <div className="hidden row-start-1 row-end-3 md:items-center xl:flex">
            <h1
              className="
                font-bitter text-[80px] font-bold leading-none tracking-wide
                text-steel-blue
              "
            >
              Full
              <br />
              Stack
              <br />
              <span className="2xl:hidden">Dev</span>
              <span className="hidden 2xl:inline">Developer</span>
            </h1>
          </div>

          <article
            className="
              flex flex-col items-center justify-center
              rounded-lg bg-light-sage px-[10px]
              md:row-start-1 md:row-end-3 md:gap-6 md:rounded-xl
              xl:col-3
            "
          >
            <h2 className="font-bitter text-xl font-bold text-off-white md:text-4xl">
              Projects
            </h2>
            <p className="font-bitter text-8xl font-bold text-off-white md:text-[100px]">
              8
            </p>
          </article>

          <article
            className="
              flex flex-col items-center justify-center
              rounded-lg bg-light-sage px-[10px]
              md:row-start-1 md:row-end-3 md:gap-6 md:rounded-xl
              xl:col-4
            "
          >
            <h2 className="font-bitter text-xl font-bold text-off-white md:text-4xl">
              Experience
            </h2>

            <p className="relative font-bitter text-8xl font-bold text-off-white md:text-[100px]">
              2
              <span
                className="
                  absolute bottom-[12px] -right-[35px]
                  font-bitter text-sm font-bold text-off-white
                  md:-right-[42px] md:text-base
                "
              >
                years
              </span>
            </p>
          </article>

          <div
            className="
              hidden w-full rounded-xl bg-light-sage
              md:block md:col-start-2 md:col-end-4 md:row-3
              xl:col-end-5
            "
          />
        </section>
      </section>
    </main>
  );
}

export default Main;
