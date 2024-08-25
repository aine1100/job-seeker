import Image from "next/image";
import imageOne from "../images/desc.png"
const Info = () => {
  return (
    <div className="md:p-20 p-10 flex gap-10 items-center flex-wrap justify-center">
        <div className="bg-[#EAF0FF] bg-opacity-5 p-10 rounded-md">
           <Image src={imageOne} className="w-[450px]" alt=""/>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex gap-3 items-center justify-center">
            <p className="text-blue-500 bg-[#828DA9] bg-opacity-20  rounded-md p-2">Profile</p>
            <p className="opacity-60">Stand out in the job market</p>
            </div>
            <h2 className="text-[30px] font-semibold">Be the candidate employers are <br/> looking for</h2>
            <p className="text-[19px] text-[#828DA9]">Create a comprehensive profile and start receiving<br/> interview invites and job offers that align with your<br/> unique skills.</p>
            <p className="text-[19px] text-[#828DA9]">Don’t miss out on your dream job get started today <br/> and make your profile stand out.</p>
            <button  className="bg-blue-600 p-4 w-[130px] rounded-xl font-medium">Create Now</button>
        </div>

    </div>
  )
}

export default Info