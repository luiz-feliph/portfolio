import Jobs from "./Jobs";
import Projects from "./Projects";
import Stack from "./Stack";

function Experience() {
  return (
    <div
      className="bg-light-sage px-[20px] py-[64px] sm:px-[40px] sm:py-[80px] lg:px-[60px]"
      id="experience"
    >
      <h1 className="font-dm-sans text-deep-teal text-[50px] font-bold mb-[32px] sm:text-[80px] sm:mb-[48px] lg:text-[100px] lg:mb-[64px] 2xl:text-[120px]">
        Experience
      </h1>
      <Jobs />
      <Stack />
      <Projects />
    </div>
  );
}

export default Experience;
