import { FiArrowDownRight } from "react-icons/fi";

function Links({ ink, img, name, number }) {
  return (
    <div className="wrapper relative  h-32 w-full bg-white justify-between items-center cursor-pointer">
      <div className="background-hover-img hidden">
        <img src={img} alt="" />
      </div>
      <div className="upper-div h-full w-full relative bg-slate-200 px-5 flex justify-between items-center">
        <div className="text-2xl font-main">{number}</div>
        <div className="project-name-box overflow-hidden border-b-2 pb-1 ">
          <h1 className="project-txt text-2xl font-primary uppercase">{name}</h1>
        </div>
        <div className="icon text-3xl">
          <FiArrowDownRight />
        </div>
      </div>
    </div>
  );
}

export default Links;
