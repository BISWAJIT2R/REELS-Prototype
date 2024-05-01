import Card from "./Card"
function HelpBox() {
  return (
    <div className="relative help-box  flex flex-col gap-3  mt-4 sm:gap-10  md:flex-row xl:mt-10">
   <Card  h1="Design" p="With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)">hello</Card>
   <Card  h1="Development" p="I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction.">hello</Card>
   <Card  h1=" The full package" p="A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects."></Card>
  </div>
  )
}

export default HelpBox