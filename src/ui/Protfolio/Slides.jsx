

function Slides({box}) {
  return (
    <div className="warpper" ref={box}>
       
      <div className="slide h-screen w-full bg-red-500">1</div>
      <div className="slide h-screen w-full bg-blue-500">2</div>
      <div className="slide h-screen w-full bg-green-500">3</div>
      <div className="slide h-screen w-full bg-yellow-500">3</div>
    </div>
  );
}

export default Slides;
