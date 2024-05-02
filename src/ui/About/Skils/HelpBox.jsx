import Card from "./Card"
function HelpBox({children}) {
  return (
    <div className="relative help-box  flex flex-col gap-3  mt-4 sm:gap-10  md:flex-row xl:mt-10">
     {children}
  </div>
  )
}

export default HelpBox