
function Card({h1, p}) {
  return (
    <div className=" relative  w-full  border-t-2 border-slate-600">
        <h1 className=" font-primary capitalize text-3xl py-5">{h1}</h1>
        <p className=" font-primary text-lg">{p}</p>
    </div>
  )
}

export default Card