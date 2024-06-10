import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { CiMobile2 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#6CB8EC] p-24">
      <div className="h-[600px] w-[850px] bg-white relative justify-center">
      <div className="h-[500px] w-[350px] bg-slate-900 absolute top-10 -left-20 ">
        <div className="p-5">
        <h1 className="text-white/70 font-custom-h1 text-center text-2xl ">Contact Us</h1>
        <div className=" absolute flex flex-col justify-items-center align-center gap-8 left-14 top-36 ">
        <div className="flex gap-3">
        <TfiLocationPin color="white" size='25' opacity='50%'/>
        <h2 className="text-white/70 text-2xl">Thrissur ,kerala</h2>
        </div>
        <div  className="flex gap-3">
        <CiMail color="white" size='25' opacity='50%' />
        <h2 className="text-white/70 text-2xl">toolsticks@gmail.com</h2>
        </div>
        <div  className="flex gap-3">
        <CiMobile2   color="white" size='25' opacity='50%'/>
        <h2 className="text-white/70 text-2xl">+91 9188056004</h2>
        </div>
        </div>
        
       
       
        <div class="flex gap-3 absolute bottom-9 left-24 ">
  <FaInstagram color="white" size="25" opacity="50%" />
  <FaTwitter color="white" size="25" opacity="50%" />
  <FaLinkedinIn color="white" size="25" opacity="50%" />
</div>
        </div>
       

</div>
<div className=" absolute top-10 right-0 m-5 h-600px w-[460px] p-5">
    <h1 className="font-custom-h1 text-2xl">Get in Touch</h1>
    <h3 className="pb-5 font-custom-h2 text-[#CDD0D9]">Feel free to drop us a line below! </h3>
    <input type='text' className="font-custom-h2 px-4 py-2 bg-[#EBF2FF] rounded-md  w-full" placeholder="Your name"></input>
    <input type='text' className="font-custom-h2 px-4 py-2 bg-[#EBF2FF] rounded-md  w-full mt-5" placeholder="Your Email"></input>
    <input type='textarea' className="font-custom-h2 p-2 text-start bg-[#EBF2FF] rounded-md mt-5 w-full h-[140px]" placeholder="Type your message here"></input>
    <button className="bg-[#7AC2F4] text-white font-bold py-2 px-4 rounded-3xl mt-5">SEND</button>
</div>
      </div>
      
     
    </main>
  );
}
