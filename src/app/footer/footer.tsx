import Logo from "../images/image.png";
import Image from "next/image";
const Footer = () => {
  const FooterContent = [
    {
      Head: "Help & Support",
      info: [
        "Blog",
        "Resources",
        "Contact Us",
        "Support Center",
        "User Guides",
      ],
    },
    {
      Head: "Employers",
      info: [
        "Blog",
        "Resources",
        "Contact Us",
        "Support Center",
        "User Guides",
      ],
    },
    {
      Head: "Job Seekers",
      info: [
        "Blog",
        "Resources",
        "Contact Us",
        "Support Center",
        "User Guides",
      ],
    },
    {
      Head: "Helpful Resources",
      info: [
        "Blog",
        "Resources",
        "Contact Us",
        "Support Center",
        "User Guides",
      ],
    },
  ];
  return (
    <div className="bg-[#0A111C] w-full p-10 flex items-center justify-center">
      <div className=" flex md:gap-24 gap-10 flex-wrap  justify-center">
        <div className="flex flex-col gap-4 ">
          <Image src={Logo} className="w-[200px]" alt="" />
          <p className="w-[300px] text-[16px] opacity-60">
            Your career companion. Access the latest job listings, create a
            standout profile, and land your dream job.
          </p>
        </div>
        <div className="flex md:gap-24 gap-10 items-center justify-center text-center flex-wrap">
          {FooterContent.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <h2 className="text-[18px] text-semibold">{item.Head}</h2>
              {item.info.map((desc, i) => (
                <p key={i} className="opacity-60">{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
