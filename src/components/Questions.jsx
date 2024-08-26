import React from "react";

function Questions() {
  return (
    <div className="align-content " id="Questions">
      <h3 className="text-4xl text-center mb-5">Ko'p beriladigan savollar</h3>
      <ul className=" max-w-3xl ml-auto mr-auto">
        <hr />
        <li className="flex justify-between mt-5">
          <p className=" text-lg ">
            O'quv materiallari bilan ta'minlaysizlarmi yoki o'zim izlab
            topamanmi?
          </p>
          <span className=" bg-green-900 rounded-[50%] font-bold text-white text-2xl  px-2">
            +
          </span>
        </li>

        <hr />
        <li className="flex justify-between mt-5">
          <p className=" text-lg ">
            O'quv materiallari bilan ta'minlaysizlarmi yoki o'zim izlab
            topamanmi?
          </p>
          <span className=" bg-green-900 rounded-[50%] font-bold text-white text-2xl  px-2">
            +
          </span>
        </li>

        <hr />
        <li className="flex justify-between mt-5">
          <p className=" text-lg ">
            O'quv materiallari bilan ta'minlaysizlarmi yoki o'zim izlab
            topamanmi?
          </p>
          <span className=" bg-green-900 rounded-[50%] font-bold text-white text-2xl  px-2">
            +
          </span>
        </li>

        <hr />
        <li className="flex justify-between mt-5">
          <p className=" text-lg ">
            O'quv materiallari bilan ta'minlaysizlarmi yoki o'zim izlab
            topamanmi?
          </p>
          <span className=" bg-green-900 rounded-[50%] font-bold text-white text-2xl  px-2">
            +
          </span>
        </li>
      </ul>

      <div className=" bg-gray-200 px-32  py-6  bg-opacity-70 rounded-2xl mt-10 justify-center gap-40 grid grid-cols-1 sm:grid-cols-2">
        <div className="  max-w-60">
          <h2 className=" text-4xl mb-5">Savollaringiz qoldimi?</h2>
          <p>
            Ma'lumotlaringizni qoldiring siz bilan bog'lanib barcha
            savollaringizga javob beramiz.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Ismingiz"
            className="input input-bordered rounded-3xl input-primary mx-w-[350px] w-full bg-green-400 bg-opacity-60"
          />
          <input
            type="text"
            placeholder="+998 99-999-99-99"
            className="input input-bordered rounded-3xl input-primary mw-w-[350px] w-full bg-green-400 bg-opacity-60"
          />
          <button
            type="submit"
            className=" btn rounded-3xl btn-success text-white uppercase "
          >
            {" "}
            Savol berish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Questions;
