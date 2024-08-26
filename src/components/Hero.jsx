import React from "react";

function Hero() {
  return (
    <div className="align-content ">
      <p className=" py-3">3 oyda Koreys tilida gaplashishni boshlang</p>
      <h1 className=" font-regular text-6xl max-w-[930px] w-full tracking-wide py-3">
        Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish
        imkoniyati
      </h1>

      <ul className="flex gap-16">
        <li className="flex items-center gap-5">
          <img src="/decoration.svg" alt="" width={25} height={62} />{" "}
          <p className=" max-w-44">
            5oyda Topikdan 6 darajagacha olishda yordam beramiz{" "}
          </p>
        </li>
        <li className="flex items-center gap-5">
          <img src="/decoration.svg" alt="" width={25} height={62} />{" "}
          <p className=" max-w-56">
            Topikdan yuqori darajani qo'lga kiritib, Janubiy Koreada o'qish va
            ishlash imkoniyati
          </p>
        </li>
      </ul>

      <a href="#" className="btn btn-accent text-white rounded-3xl mt-7 text-lg uppercase ">
        {" "}
        Bepul darsga yozilish
      </a>
      <p className=" ml-3 mt-3">Birinchi darsga bepul yoziling!</p>
    </div>
  );
}

export default Hero;
