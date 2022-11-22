export const RoadmapTimeLine = ({ data }) => {
  let isEven = false;
  return data.map((d, key) => (
    <div className="roadmap-time-line-container grid grid-cols-2" key={key}>
      <section
        className={`basis-1/2 w-full h-full py-4 flex flex-col ${
          isEven ? "order-2 items-start" : "order-1 items-end"
        }`}
      >
        <div className="roadmap-heading border-b-4 border-[#EB6440] relative px-20">
          <h2 className="text-2xl">Juli - September Q3</h2>
          <span
            className={`roadmap-bullet-shape flex w-[30px] h-[30px] absolute bg-[#EB6440] rounded-full -bottom-4 -${
              isEven ? "left" : "right"
            }-4`}
          ></span>
        </div>
        <div className="roadmap-contents border-4 border-[#EB6440] p-4  m-4 rounded-3xl mt-12 w-fit">
          <ul className="list-decimal flex gap-1 flex-col font-[VarelaR] list-inside">
            {data.map((d, key) => (
              <div
                className={`flex bg-[#D6E4E5] p-1 w-fit m${
                  isEven ? "r" : "l"
                }-auto items-center rounded-full p${isEven ? "r" : "l"}-6`}
                key={key}
              >
                <span className={`${isEven ? "order-2" : "order-1"}`}>
                  10% pcs BETA sale offering and soft launching
                </span>
                <li
                  className={`bg-[#D6E4E5] p-1 w-fit m-auto ${
                    isEven ? "order-1" : "order-2"
                  }`}
                ></li>
              </div>
            ))}
          </ul>
        </div>
      </section>
      <section
        className={`basis-1/2 border-l-4 border-dashed border-[#D6E4E5] w-full h-full p-4 ${
          isEven ? "order-1" : "order-2"
        } `}
      ></section>
      {(() => {
        console.log(isEven ? "even" : "odd");
        isEven = !isEven;
      })()}
    </div>
  ));
};
