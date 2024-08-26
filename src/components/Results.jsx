import Marquee from "react-fast-marquee";

function Results() {
  return (
    <div id="Results">
      <h4 className=" align-content text-center text-4xl my-5">
        O’quvchilarimizning natijalari TOPIK 6 gacha
      </h4>
      <Marquee className=" mb-10">
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
      </Marquee>

      {/*carousel top start */}

      {/*carousel bottom start */}
      <Marquee direction="right">
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
        <img src="forma2.png" alt="forma" />
      </Marquee>
    </div>
  );
}

export default Results;
