
import TextChange from '../TextChange';
import avatarImg from '../../assets/image1.png';
export default function Home(){
 return (


<div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-5 ">
         This is Rashcode software developer dedicated my time to learn this project impressed
          with the support of the following technologies and time spending.
        </p>
        <button className="mt-5 md:mt-10 text-white py-3 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
         duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>











 )





}