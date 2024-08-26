function Helping() {
  return (
    <div className="align-content mt-10">
      <h3 className="text-4xl font-semibold max-w-[751px] ml-auto mr-auto text-center mb-10">
        Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda
        yordam beramiz
      </h3>
      <div className=" flex flex-col sm:flex-row gap-5 ">
        {" "}
        <div className="max-w-[400px]">
          {" "}
          <h6 className=" text-2xl mb-10">
            <span className=" text-accent">TOPIK academy consulting</span>{" "}
            jamoasi sizga universitet tanlash, visa olish va grant yutishingizda
            yaqindan ko’maklashadi
          </h6>
          <p className=" text-lg font-sans mb-5">
            Ko'proq ma'lumot olish uchun bepul konsultatsiyaga yoziling!
          </p>
          <button className="btn btn-accent text-white px-10">
            Ariza qoldirish
          </button>
        </div>
        <div className="carousel rounded-box gap-2">
          <div className="carousel-item">
            <img src="./forma2.png" alt="forma" />
          </div>
          <div className="carousel-item">
            <img src="./forma2.png" alt="forma" />
          </div>{" "}
          <div className="carousel-item">
            <img src="./forma2.png" alt="forma" />
          </div>{" "}
          <div className="carousel-item">
            <img src="./forma2.png" alt="forma" />
          </div>{" "}
          <div className="carousel-item">
            <img src="./forma2.png" alt="forma" />
          </div>{" "}
          <div className="carousel-item">
            <img src="./forma2.png" alt="forma" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helping;
