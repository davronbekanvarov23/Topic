import React from "react";

function Register() {
  return (
    <div className="  align-content" id="Register">
      <h2 className=" text-4xl my-10 text-center ">
        O'zingizga mos kursga ro'yhatdan o'ting
      </h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5">
        
        <li className="bg-base-200 max-w-72 rounded-2xl pb-5 ">
          <img src="./course1.png" alt="" className=" max-w-80" />
          <div className=" px-5 ">
            <span className="flex justify-between mb-5">
              <h3 className=" text-xl">Intensive</h3>
              <p className="text-center bg-accent rounded-3xl max-w-24 text-[10px] text-white py-1 px-3 ">
                Davomiyligi:5oy
              </p>
            </span>
            <p className=" text-sm mb-5 max-h-[88px]">
              <span className=" text-yellow-600 ">Koreys tilini</span> chuqur
              o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan
              intensive kurs.
            </p>
            <span className=" flex items-center gap-8 ">
              {" "}
              <button className="btn btn-accent rounded-3xl px-7  text-[10px] text-white">
                Ro'yhatdan o'tish
              </button>
              <p className=" text-xs text-green-700 font-semibold">970.000 so'm/oy</p>
            </span>
          </div>
        </li>


        <li className="bg-base-200 max-w-72 rounded-2xl pb-5 ">
          <img src="./course2.png" alt="" className=" max-w-80" />
          <div className=" px-5 ">
            <span className="flex justify-between mb-5">
              <h3 className=" text-xl">Odatiy</h3>
              <p className="text-center bg-accent rounded-3xl max-w-24 text-[10px] text-white py-1 px-3 ">
                Davomiyligi:5oy
              </p>
            </span>
            <p className=" text-sm mb-5 max-h-[88px]">
            Haftada 3 kun 1.5 soatdan <br /> iborat odatiy Koreys tili <br /> darslari.
            </p>
            <span className=" flex items-center gap-8 ">
              {" "}
              <button className="btn btn-accent rounded-3xl px-7  text-[10px] text-white">
                Ro'yhatdan o'tish
              </button>
              <p className=" text-xs text-green-700 font-semibold">560.000 so'm/oy</p>
            </span>
          </div>
        </li>

        <li className="bg-base-200 max-w-72 rounded-2xl pb-5 ">
          <img src="./course3.png" alt="" className=" max-w-80" />
          <div className=" px-5 ">
            <span className="flex justify-between mb-5">
              <h3 className=" text-xl">Individual</h3>
              <p className="text-center bg-accent rounded-3xl max-w-24 text-[10px] text-white py-1 px-3 ">
                Davomiyligi:5oy
              </p>
            </span>
            <p className=" text-sm  max-h-[88px]">
            O’qituvchidan <span className=" text-yellow-600">individual</span> dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.
            </p>
            <span className=" flex items-center gap-8 ">
              {" "}
              <button className="btn btn-accent rounded-3xl px-7  text-[10px] text-white">
                Ro'yhatdan o'tish
              </button>
              <p className=" text-xs text-green-700 font-semibold">1.800.000 so'm/oy</p>
            </span>
          </div>
        </li>



      </ul>
    </div>
  );
}

export default Register;
