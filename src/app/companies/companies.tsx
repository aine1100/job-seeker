import Image from "next/image";
import imageOne from "../images/desc.png";

const Companies = () => {
  const companies = [
    {
      number: 1,
      description: "Over 150,000 new job postings added every month",
    },
    {
      number: 2,
      description: "Over 150,000 new job postings added every month",
    },
    {
      number: 3,
      description: "Over 150,000 new job postings added every month",
    },
  ];

  return (
    <div className="md:p-20 p-10 flex gap-16 items-center flex-wrap justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-3 items-center justify-center">
          <p className="text-blue-500 bg-[#828DA9] bg-opacity-20 rounded-md p-2">
            Companies
          </p>
          <p className="opacity-60">Trusted by top companies</p>
        </div>
        <h2 className="text-[30px] font-semibold">
          Get noticed by leading  Companies
        </h2>
        <p className="text-[19px] text-[#828DA9]">
          Create a comprehensive profile and start receiving
          <br /> interview invites and job offers that align with your
          <br /> unique skills.
        </p>
        <div className="flex gap-4 flex-col">
          {companies.map((item, index) => (
            <div key={index} className="flex  items-center justify-center gap-4">
              <p className=" font-medium flex items-center justify-center w-7 h-7 bg-blue-600 text-white p-2 rounded-[50%]">{item.number}</p>
              <p className="text-[#828DA9]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#EAF0FF] bg-opacity-5 p-10 rounded-md">
        <Image src={imageOne} className="w-[450px]" alt="Company description" />
      </div>
    </div>
  );
};

export default Companies;
