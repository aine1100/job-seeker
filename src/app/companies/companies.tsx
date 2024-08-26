import Image from "next/image";
import imageOne from "../images/farm.jpg";


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
  const TechComp = [
    {
      logo: imageOne,
      name: "slack",
    },
    {
      logo: imageOne,
      name: "shopify",
    },
    {
      logo: imageOne,
      name: "medium",
    },
    {
      logo: imageOne,
      name: "Pinterest",
    },
    {
      logo: imageOne,
      name: "wise",
    },
    {
      logo: imageOne,
      name: "amazon",
    },
    {
      logo: imageOne,
      name: "Spotify",
    },
    {
      logo: imageOne,
      name: "walmart",
    },
    {
      logo: imageOne,
      name: "DocuSign",
    },
    {
      logo: imageOne,
      name: "Framer",
    },
    {
      logo: imageOne,
      name: "webflow",
    },
    {
      logo: imageOne,
      name: "notion",
    },
  ];
  const jobOne = [
    "Project Manager",
    "Data Entry",
    "Customer Service",
    "Web Design",
    "Bookkeeping",
    "App Development",
  ];
  const jobTwo = [
    "Project Manager",
    "Data Entry",
    "Customer Service",
    "Web Design",
   
  ];
  const jobThree = [
    "Project Manager",
    "Data Entry",
    "Customer Service",
   
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
          Get noticed by leading Companies
        </h2>
        <p className="text-[19px] text-[#828DA9]">
          Create a comprehensive profile and start receiving
          <br /> interview invites and job offers that align with your
          <br /> unique skills.
        </p>
        <div className="flex gap-4 flex-col">
          {companies.map((item, index) => (
            <div
              key={index}
              className="flex  items-center justify-center gap-4"
            >
              <p className=" font-medium flex items-center justify-center w-7 h-7 bg-blue-600 text-white p-2 rounded-[50%]">
                {item.number}
              </p>
              <p className="text-[#828DA9]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#EAF0FF] bg-opacity-5 p-10 rounded-md items-center md:w-[500px] max-w-[500px]  flex flex-col  gap-5">
        <h2 className="text-white pb-2">Top Companies</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center text-[#828DA9]">
          {TechComp.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 ">
              {/* <Image src={item.logo} className="w-4 h-4" alt="" /> */}
              <p className="text-[20px]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-20 flex flex-col items-center flex-wrap gap-2">
        <h3 className="text-[40px] font-semibold text-center">Popular Jobs in Usa</h3>
        <div className="flex  gap-4 flex-wrap items-center justify-center pt-10">
          {
            jobOne.map((item,index)=>(
             <div key={index} className="flex flex-wrap gap-5 items-center justify-center">
               <p className="text-blue-500 bg-[#828DA9] bg-opacity-20 rounded-md p-3">{item}</p>

             </div>

            ))
          }
        </div>
        <div className="flex flex-wrap items-center justify-center  gap-4 pt-4">
          {
            jobTwo.map((item,index)=>(
             <div key={index} className="flex flex-wrap gap-5 items-center justify-center">
               <p className="text-blue-500 bg-[#828DA9] bg-opacity-20 rounded-md p-3">{item}</p>

             </div>

            ))
          }
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {
            jobThree.map((item,index)=>(
             <div key={index} className="flex flex-wrap gap-5 items-center justify-center">
               <p className="text-blue-500 bg-[#828DA9] bg-opacity-20 rounded-md p-3">{item}</p>

             </div>

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Companies;
