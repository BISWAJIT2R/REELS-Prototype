import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { timeLine } from "../../../../utils/index";
function TodoList() {
  const [open, isOpen] = useState();

  function handelOpen(id) {
    if (id != open) {
      isOpen(id);
    } else {
      isOpen(null);
    }
  }

  return (
    <>
     <div className=" timeline">
     <ul className="">
        {timeLine.map(({ Date, content, YGPA }, i) => (
          <div key={i}>
            <div
              className="heading p-4 w-full flex justify-between items-center cursor-pointer text-xl font-primary font-bold "
              onClick={() => handelOpen(i)}
            >
              <h1>{Date}</h1>
              <span className="text-2xl cursor-pointer">
               {open === i? <HiChevronUp/> : <HiChevronDown />}
              </span>
            </div>
            {open === i && (
              <div className="p-4">
                <p className="text-lg">{content}</p>{" "}
                <p className="relative float-right p-1">
                  {i === 0 ? `Y.G.P.A: ${YGPA}` : `Percentage: ${YGPA}`}
                </p>
              </div>
            )}
          </div>
        ))}
      </ul>
     </div>
    </>
  );
}

export default TodoList;
