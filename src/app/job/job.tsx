import Image from "next/image"; // Import the Image component from next/image
import countryimage from "../images/farm.jpg";
import { FaCarSide } from "react-icons/fa";
import america from "../images/america.jpeg";
import canada from "../images/canada.jpeg";
import germany from "../images/germany.png";
const Job = () => {
  const countries = [
    {
      flag: america,
      name: "United States us",
      description:
        "A land of opportunity with a diverse job market and a wide range of industries offering countless career paths.",
      jobnumber: "450,000+",
      jobDesc: "High",
    },
    {
      flag: canada,
      name: "Canada ca",
      description:
        "A land of opportunity with a diverse job market and a wide range of industries offering countless career paths.",
      jobnumber: "200,000+",
      jobDesc: "Moderate",
    },
    {
      flag: germany,
      name: "United Kingdom uk",
      description:
        "A land of opportunity with a diverse job market and a wide range of industries offering countless career paths.",
      jobnumber: "450,000+",
      jobDesc: "High",
    },
    {
      flag: america,
      name: "United States us",
      description:
        "A land of opportunity with a diverse job market and a wide range of industries offering countless career paths.",
      jobnumber: "450,000+",
      jobDesc: "High",
    },
    {
      flag: canada,
      name: "Canada ca",
      description:
        "A land of opportunity with a diverse job market and a wide range of industries offering countless career paths.",
      jobnumber: "200,000+",
      jobDesc: "Moderate",
    },
    {
      flag: germany,
      name: "United Kingdom uk",
      description:
        "A land of opportunity with a diverse job market and a wide range of industries offering countless career paths.",
      jobnumber: "450,000+",
      jobDesc: "High",
    },
  ];

  return (
    <div className="pt-10 flex items-center justify-center flex-wrap">
      <div
        className="bg-[#EAF0FF] bg-opacity-5 xl:w-[18
      00px] max-w-[1000px] flex flex-wrap flex-col items-center justify-center p-10 rounded-md gap-10"
      >
        <h1 className="text-white text-[22px] font-semibold">
          Countries For Job Seekers
        </h1>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {countries.map((item, index) => (
            <div
              key={index}
              className="w-[270px] pl-8 pr-8 pt-4 pb-4 flex flex-wrap bg-[#EAF0FF] bg-opacity-10 flex-col gap-8 rounded-md"
            >
              <Image
                src={item.flag}
                alt={`${item.name} flag`}
                className="w-8 h-8 rounded-md"
              />
              <h2 className="font-medium text-[20px] opacity-90">
                {item.name}
              </h2>
              <p className="text-[16px]  text-[#828DA9]">{item.description}</p>
              <div className="flex gap-6 items-center text-[#828DA9]">
                <div className="flex gap-2 items-center">
                  <FaCarSide className="w-5" />
                  <p className="text-[12px]">{item.jobnumber}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCarSide className="w-5" />
                  <p className="text-[12px]">{item.jobDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
