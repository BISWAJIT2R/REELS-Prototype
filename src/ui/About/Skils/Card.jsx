function Card({ h1, p, i }) {
  return (
    <div className="card overflow-hidden relative  w-full ">
      <div className="relative hidden md:block text-8xl font-sign p-2">{i}</div>
      <div className="relative overflow-hidden  border-t-2 border-slate-600">
        {" "}
        <h1 className="card-h1 font-primary capitalize text-3xl py-5 overflow-hidden ">
          {h1}
        </h1>
      </div>
      <div className="relative overflow-hidden">
        {" "}
        <p className="card-p font-primary text-lg">{p}</p>
      </div>
    </div>
  );
}

export default Card;
