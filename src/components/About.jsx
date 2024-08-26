import React from "react";

function About() {
  return (
    <div className="align-content my-10">
      <h3 className=" text-4xl text-center mb-20 ">
        Nima uchun aynan TOPIK academy?
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-16">
        <div className="card w-[340px] shadow-xl min-h-48">
          <img
            src="test1.svg"
            alt=""
            width={64}
            height={64}
            className=" absolute top-[-35px] left-6"
          />
          <div className="card-body px-6">
            <h5 className="card-title">Professional ustozlar</h5>
            <p>
              Sizga 4yildan ortiq tajriba va Topik darajasi 6 bo'lgan
              o'qituvchilar dars beradi
            </p>
          </div>
        </div>

        <div className="card w-[340px] shadow-xl min-h-48">
          <img
            src="test2.svg"
            alt=""
            width={64}
            height={64}
            className=" absolute top-[-35px] left-6"
          />
          <div className="card-body px-6">
            <h5 className="card-title">Bepu coworking zonalari</h5>
            <p>
              Erkin dars qilish, networking va o'z ustingizda ishlash uchun
              bepul coworking zonalarimz mavjud
            </p>
          </div>
        </div>

        <div className="card w-[340px] shadow-xl min-h-48">
          <img
            src="test3.svg"
            alt=""
            width={64}
            height={64}
            className=" absolute top-[-35px] left-6"
          />
          <div className="card-body px-6">
            <h5 className="card-title">Haftalik tadbirlar </h5>
            <p>
              TOPIC academy jamoasi o'uvchilari uchun doimiy ravishda qo'shimcha
              tadbirlar tashkillab beradi
            </p>
          </div>
        </div>
        <div className="card w-[340px] shadow-xl min-h-48">
          <img
            src="test4.svg"
            alt=""
            width={64}
            height={64}
            className=" absolute top-[-35px] left-6"
          />
          <div className="card-body px-6">
            <h5 className="card-title">Bepul sinov imtihonlari </h5>
            <p>
              Har oy davomida tashkillanadigan sinov imtihonlarida qatnashib o'z
              darajangizni bilib borasiz
            </p>
          </div>
        </div>
        <div className="card w-[340px] shadow-xl min-h-48">
          <img
            src="test5.svg"
            alt=""
            width={64}
            height={64}
            className=" absolute top-[-35px] left-6"
          />
          <div className="card-body px-6">
            <h5 className="card-title">Uordamchi kuratorlar </h5>
            <p>
              Darslarni o'zlashtirishda qiyinchilik bo'lsa sizga yordam
              beradigan kuratoringiz bo'ladi
            </p>
          </div>
        </div>
        <div className="card w-[340px] shadow-xl min-h-48">
          <img
            src="test6.svg"
            alt=""
            width={64}
            height={64}
            className=" absolute top-[-35px] left-6"
          />
          <div className="card-body px-6">
            <h5 className="card-title">Konsulting hizmati </h5>
            <p>
              Muvaffaqiyatli bitirgan talabalarimizga Janubiy Koreada o'qishi
              uchun viza olishda,universitet tanlash va grant yutishda yordam
              beramiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
