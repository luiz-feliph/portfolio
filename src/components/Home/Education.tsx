import EducationCard from "./EducationCard";
import { Languages, BookCheck } from "lucide-react";

function Education() {
  return (
    <div
      className="flex flex-col items-center gap-[32px] cursor-default bg-deep-teal px-[20px] py-[64px] sm:px-[40px] sm:py-[100px] lg:px-[60px] xl:pb-[148px] 2xl:pb-[200px]"
      id="education"
    >
      <h1 className="self-start mb-[32px] font-dm-sans text-[60px] font-bold text-off-white sm:mb-[48px] sm:text-[80px] lg:mb-[64px] lg:text-[100px] 2xl:text-[120px]">
        Education
      </h1>

      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[20px] md:flex-row lg:gap-[32px] 2xl:gap-[48px]">
          <EducationCard
            period="2022-2025"
            degree="Technical High School"
            course="Computer Maintence and Support"
            api="8.4"
            institute="IFS"
          />
          <EducationCard
            period="2025-2028"
            degree="Bachelor"
            course="Information Systems"
            api="8.0"
            institute="UFS"
          />
        </div>

        <div className="flex flex-col gap-[20px] md:flex-row">
          <div className="flex text-off-white md:flex-1">
            <div>
              <Languages className="h-[40px] w-[40px] mr-[8px] mt-[6px] text-sage sm:h-[60px] sm:w-[60px] sm:mr-[12px] lg:h-[80px] lg:w-[80px] lg:mt-[8px]" />
            </div>

            <div>
              <h2 className="mb-[6px] font-dm-sans text-[36px] font-bold sm:text-[48px] lg:text-[64px]">
                Languages
              </h2>

              <ul className="font-bitter text-[20px] sm:text-[24px] lg:text-[28px]">
                <li>
                  Portuguese <span className="text-sage">| Native</span>
                </li>
                <li>
                  English <span className="text-sage">| B2</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex text-off-white md:flex-1">
            <div>
              <BookCheck className="h-[40px] w-[40px] mr-[8px] mt-[6px] text-sage sm:h-[60px] sm:w-[60px] sm:mr-[12px] lg:h-[80px] lg:w-[80px] lg:mt-[8px]" />
            </div>

            <div>
              <h2 className="mb-[6px] font-dm-sans text-[36px] font-bold sm:text-[48px] lg:text-[64px]">
                Courses
              </h2>

              <ul className="font-bitter text-[20px] sm:text-[24px] lg:text-[28px]">
                <li>
                  React <span className="text-sage">| 50h</span>
                </li>
                <li>
                  Java <span className="text-sage">| 54h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;