import React from "react";

function Suggestion() {
  return (
    <div className="align-content text-center mt-10">
      {" "}
      <h2 className=" text-4xl font-semibold">
        TOPIK academiya aniq siz uchun agar siz:
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 max-w-5xl w-full justify-center ml-auto mr-auto ">
        <li className=" max-w-64 mt-10">
          <div
            className=" bg-blue-200 
            rounded-[50%] w-40 h-40 p-5 ml-auto mr-auto mb-5"
          >
            <img src="./chat.png" alt="" />
          </div>
          <p>
            <span className="text-blue-400">Qisqa</span> muddat ichida Koreys
            tilida gaplashishni istaysiz
          </p>
        </li>

        <li className=" max-w-64 mt-10">
          <div
            className=" bg-blue-200 
            rounded-[50%] w-40 h-40 p-5 ml-auto mr-auto mb-5"
          >
            <img src="./rocket.png" alt="" />
          </div>
          <p>
            Koreys tilini o'rganib o'z{" "}
            <span className="text-blue-400">karyerangizni</span> qurmochisz
          </p>
        </li>

        <li className=" max-w-64 mt-10">
          <div
            className=" bg-blue-200 
            rounded-[50%] w-40 h-40 p-5 ml-auto mr-auto mb-5"
          >
            <img src="./money.png" alt="" />
          </div>
          <p>
            Topik sertifikatini olib Koreyaning nufuzli universitetlariga{" "}
            <span className="text-blue-400">GRANT</span> yutmoqchisiz
          </p>
        </li>

        <li className=" max-w-64 mt-10">
          <div
            className=" bg-blue-200 
            rounded-[50%] w-40 h-40 p-5 ml-auto mr-auto mb-5"
          >
            <img src="./travel.png" alt="" />
          </div>
          <p>
            Janubiy Koreya davlatida{" "}
            <span className="text-blue-400">o’qish</span> va{" "}
            <span className=" text-blue-400">ishlash</span> uchun ketmoqchisiz
          </p>
        </li>

        <li className=" max-w-64 mt-10">
          <div
            className=" bg-blue-200 
            rounded-[50%] w-40 h-40 p-5 ml-auto mr-auto mb-5"
          >
            <img src="./target.png" alt="" />
          </div>
          <p>
            Koreys tilini o’rta darajda bilasiz va darajangizni{" "}
            <span className=" text-blue-400"> oshirmoqchisiz</span>
          </p>
        </li>

        <li className=" max-w-64 mt-10">
          <div
            className=" bg-blue-200 
            rounded-[50%] w-40 h-40 p-5 ml-auto mr-auto mb-5"
          >
            <img src="./key.png" alt="" />
          </div>
          <p>
            Ko’p yillardan buyon o’qib ham{" "}
            <span className=" text-blue-400">natijaga</span> chiqa olmayapsiz
          </p>
        </li>
      </ul>

      <button className=" btn uppercase btn-accent rounded-3xl px-16 text-white text-opacity-80">Ha,bu men</button>
    </div>
  );
}

export default Suggestion;
