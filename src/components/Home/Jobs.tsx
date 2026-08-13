import JobItem from "./JobItem";
import JobsJsonEn from "../../data/jobs-en.json";
import JobsJsonPt from "../../data/jobs-pt.json";
import type { JobItemData } from "../../types/JobItemData";
import { useTranslation } from "react-i18next";

function Jobs() {
  const { i18n } = useTranslation();
  const JobsJson = i18n.language.startsWith("en")
    ? JobsJsonEn
    : JobsJsonPt;

  return (
    <div className="relative max-w-[1200px] mb-[64px] md:mb-[80px] xl:mb-[100px] 2xl:mb-[120px]">
      <span
        aria-hidden="true"
        className="absolute inset-y-[8px] left-[8px] w-[3px] bg-off-white lg:w-[5px] lg:left-[12px]"
      />

      <ol className="h-[250px] overflow-y-scroll scrollbar lg:h-[400px] xl:h-[500px] list-none p-0">
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
      </ol>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-[12px] h-[50px] bg-gradient-to-t from-light-sage to-transparent lg:h-[80px]"
      />
    </div>
  );
}

export default Jobs;
