import decoration from "../../assets/icons/decoration.svg";

function About() {
  return (
    <div
      className="relative flex flex-col items-center bg-deep-teal px-[20px] sm:flex-row sm:px-[40px] sm:gap-[32px] sm:justify-between lg:px-[60px]"
      id="about"
    >
      <img
        className="absolute right-[20px] top-[-60px] w-[120px] md:w-[150px] md:top-auto md:bottom-[-75px] 2xl:right-[64px]"
        src={decoration}
        alt="decoration"
      />

      <div className="flex-1 text-off-white mt-[64px] mb-[48px] sm:my-[100px] xl:my-[148px] 2xl:my-[200px]">
        <h1 className="cursor-default font-dm-sans text-[60px] font-bold mb-[32px] sm:text-[80px] sm:mb-[48px] lg:text-[100px] lg:mb-[64px] 2xl:text-[120px]">
          About
        </h1>
        <p
          className="font-bitter text-[14px] font-semibold text-justify hyphens-auto sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]"
          lang="en"
        >
          Information Systems student with a technical background in IT and
          hands-on experience in web development and technical support. Focused
          on building and understanding scalable systems, with a strong ability
          to analyze complex problems and translate them into efficient,
          practical solutions. Learns new technologies quickly and approaches
          challenges with an engineering mindset grounded in real-world
          application.
        </p>
      </div>
      <div className="cursor-default flex-1 flex w-full justify-center">
        <div className="flex flex-col gap-[10px] items-center min-w-[200px] h-[350px] mb-[64px] sm:mb-0 sm:h-[400px] xl:min-w-[250px] xl:h-[500px]">
          <div className="flex flex-col items-center justify-between w-full h-[70%] p-[10px] text-steel-blue text-[24px] font-bold bg-light-sage rounded-xl xl:text-[28px]">
            <h3 className="font-bitter">Back-end</h3>
            <p className="font-dm-mono">70%</p>
          </div>
          <div className="flex flex-col items-center justify-between w-full h-[30%] p-[10px] text-light-sage text-[24px] font-bold bg-muted-teal rounded-xl xl:text-[28px]">
            <p className="font-dm-mono">30%</p>
            <h3 className="font-bitter">Front-end</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
