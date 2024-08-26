import React from "react";

function Hero() {
  return (
    <div className="align-content ">
      <p className=" py-3">3 oyda Koreys tilida gaplashishni boshlang</p>
      <h1 className=" font-regular sm:text-2xl md:text-5xl md:max-w-[731px] max-w-60 w-full tracking-wide py-3">
        Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish
        imkoniyati
      </h1>

      <ul className="grid lg:grid-cols-2 gap-5 grid-cols-1 max-w-3xl">
        <li className="flex items-center gap-5">
          <img src="/decoration.svg" alt="" width={25} height={62} />{" "}
          <p className=" max-w-48 sm:text-xl text-sm">
            5oyda Topikdan 6 darajagacha olishda yordam beramiz{" "}
          </p>
        </li>
        <li className="flex items-center gap-5">
          <img src="/decoration.svg" alt="" width={25} height={62} />{" "}
          <p className=" max-w-80 sm:text-xl text-sm">
            Topikdan yuqori darajani qo'lga kiritib, Janubiy Koreada o'qish va
            ishlash imkoniyati
          </p>
        </li>
      </ul>

<img src="./mainbg.png" alt="" className=" md:absolute xl:top-16 right-0 xl:w-[750px] lg:w-[500px] lg:top-28 sm:w-[500px] sm: top-72 " />
      <a href="#" className="btn btn-accent text-white rounded-3xl mt-7 px-10 text-lg uppercase 5 ">
        {" "}
        Bepul darsga yozilish
      </a>
      <p className=" ml-3 mt-3">Birinchi darsga bepul yoziling!</p>
    </div>
  );
}

export default Hero;
