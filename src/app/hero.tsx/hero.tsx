import { FaChevronDown, FaSearch, FaStar } from "react-icons/fa";

const Hero = () => {
  const rating = [
    {
      stars: 5,
      text: "Superb text matching",
    },
    {
      stars: 5,
      text: "Wow, this is an amazing job",
    },
    {
      stars: 5,
      text: "Cool text matching",
    },
  ];
  const jobType=[
    "Remote","Work From Home","Part Time","Design"
  ]

  return (
    <div className="pt-20 flex flex-col items-center p-4 md:p-0">
      <div className="flex xl:gap-20 gap-10 items-center justify-center flex-wrap">
        {rating.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-0 flex-wrap items-center text-center justify-center bg-slate-500 bg-opacity-20 w-[300px] h-[100px] text-[20px] rounded-xl"
          >
            <p className="flex gap-2">
              {[...Array(item.stars)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 flex gap-2" />
              ))}
            </p>
            <p>{item.text}</p>
          </div>
        ))}
        <p className="md:text-[65px] text-[30px] text-center font-semibold">
          <span className="text-blue-600">Explore New </span> Job Vacancies
          <br /> all over the world
        </p>
        <p className="text-center md:text-[26px] text-[20px] opacity-40">
          Our platform features more than 1.2 million job vacancies worldwide
          connecting <br /> you with employers who value your skills and
          experience
        </p>
      <div className="flex items-center justify-center gap-10 md:flex-row flex-col ">
      <form action="" className="md:w-[500px] w-[320px]">
          <div className="relative">
            <input
              type="search"
              className=" w-full pl-8 pr-8 pt-4 pb-4 bg-slate-600  rounded-lg focus:outline-none placeholder:text-[#828DA9]"
              placeholder="Company or Industry"
            />
            <button className="absolute left-1 top-1/2 -translate-y-1/2 p-2 ">
              <FaSearch className="text-[#828DA9]" />
            </button>
            <div className="flex absolute right-1 top-1/2 -translate-y-1/2 p-2 items-center justify-center gap-2 text-[#828DA9]">
              <div className=" border-l-2 border-l-[#828DA9] p-4 bg-slate-600">
              </div>
              <p>20 mi</p>
              <FaChevronDown/>
            </div>
          </div>
        </form>
        <button className="bg-blue-600 p-4 w-[130px] rounded-md font-medium">Search</button>

      </div>
     
      </div>
      <div className="flex items-center justify-center gap-10 pt-5 flex-wrap">
             {
              jobType.map((item,index)=>(
                <p key={index} className="text-blue-500 bg-[#828DA9] bg-opacity-20 p-2 rounded-md ">{item}</p>
              ))
             }
      </div>
    </div>
  );
};

export default Hero;
