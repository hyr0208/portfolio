import emoge from "../../assets/image/emoge.png";

function AboutMe() {
  return (
    <div className="">
      <div className=" relative h-screen bg-[#232323]  px-10 pt-10 z-1 max-lg:h-auto max-lg:py-20">
        <h2 className="text-white text-6xl ">About me</h2>

        <div className="flex flex-col gap-10 items-center pt-10">
          <img src={emoge} alt="" className="w-[500px] h-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
