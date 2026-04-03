import JobItem from "./JobItem";
import JobsJson from "../../data/jobs.json";
import type { JobItemData } from "../../types/JobItemData";

function Jobs() {
  return (
    <div className="relative max-w-[1200px] mb-[64px] md:mb-[80px] xl:mb-[100px] 2xl:mb-[120px]">
      <span className="absolute inset-y-[8px] left-[8px] w-[3px] bg-off-white lg:w-[5px] lg:left-[12px]"></span>

      <section className="h-[250px] overflow-y-scroll scrollbar lg:h-[400px] xl:h-[500px]">
        {JobsJson.map((item: JobItemData, index) => {
          return (
            <JobItem
              period={item.period}
              organization={item.organization}
              role={item.role}
              responsibilities={item.responsibilities}
              key={index}
            />
          );
        })}
      </section>

      <span className="absolute bottom-0 left-0 right-[12px] h-[50px] bg-gradient-to-t from-light-sage to-transparent lg:h-[80px]"></span>
    </div>
  );
}

export default Jobs;
