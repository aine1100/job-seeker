import { FaStar } from "react-icons/fa";

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

  return (
    <div className="pt-20 flex flex-col items-center">
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
      </div>
    </div>
  );
};

export default Hero;
