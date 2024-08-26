import React from "react";

function Grant() {
  return (
    <div className="align-content ">
      <h3 className=" text-3xl max-w-xl ml-auto mr-auto text-center my-10">
        Koreya Universitetlariga 100% gacha grant yutish imkoniyati
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <img src="./GKS-image.png" alt="" width={441} />
        <div>
          <h5 className="font-semibold text-xl mb-5">
            GKS (Global Korean Scholarship){" "}
            <span className=" text-green-400 ">$70.000</span> lik Grant
          </h5>
          <p>
            Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning
            Xalqaro ta'lim bo'yicha milliy instituti tomonidan{" "}
            <span className="text-blue-400">xorijiy </span>
            talabalarning Koreyada bakalavr va <br /> magistratura bosqichida{" "}
            <span className="text-blue-400"> 100% gacha to’liq grant</span>{" "}
            <br /> va oylik stipendiya olish imkoniyatingiz bor
          </p>
          <h5 className=" text-xl font-semibold my-5">
            GKS granti sizga nima beradi
          </h5>
          <div>
            <li>
              Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan
              qaytish xarajatlari qoplanadi.
            </li>
            <li>
              Koreyaga yetib borganda joylashib olish uchun bir martalik
              to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh
              dollari).
            </li>
            <li>
              Til kursi va universitetning kontrak to'lovi to'liq to'lab
              beriladi (faqat magistr va doktorantlarga)... <span className=" text-blue-300">ko’proq</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grant;
