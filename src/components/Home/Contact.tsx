import { Mail } from "lucide-react";

function Contact() {
  return (
    <div
      className="bg-off-white px-[20px] py-[64px] sm:px-[40px] sm:py-[100px] lg:px-[60px] xl:pb-[148px] 2xl:pb-[200px]"
      id="contact"
    >
      <h1 className="self-start mb-[32px] font-dm-sans text-[60px] font-bold text-deep-teal cursor-default sm:mb-[48px] sm:text-[80px] lg:mb-[64px] lg:text-[100px] 2xl:text-[120px]">
        Let's Talk?
      </h1>
      <p
        className="font-bitter text-[14px] font-semibold text-deep-teal text-justify hyphens-auto mb-[32px] sm:text-[18px] md:mb-[48px] lg:mb-[64px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px]"
        lang="en"
      >
        I am currently available for new projects. Feel free to get in touch,
        and we can schedule a conversation.
      </p>
      <a
        href="mailto:luizfelipe01.2007@gmail.com"
        className="inline-flex items-center gap-[8px] bg-deep-teal font-dm-sans text-[18px] font-bold text-off-white px-[18px] py-[8px] rounded-full sm:px-[24px] sm:text-[22px] md:px-[28px] md:text-[24px] lg:px-[32px] lg:text-[28px]
        hover:bg-steel-blue duration-300
        "
      >
        <Mail className="lg:w-[30px] lg:h-[30px]"/>
        Contact me
      </a>
    </div>
  );
}

export default Contact;
