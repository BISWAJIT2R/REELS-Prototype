import { useForm } from "react-hook-form";

function From({containerBox}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // console.log(x);

  function onSubmit(data) {
    console.log(data);
  }

  function onError (data) {
    alert("Please")
  }

  return (
    <div className=" relative font-main text-3xl  md:pt-24" >
      <form  ref={containerBox}  onSubmit={handleSubmit(onSubmit, onError
      )}>
        <p className="font-main text-3xl md:inline">My name is </p> <input className="bg-transparent border-b-2 w-full p-2 text-xl font-primary outline-none md:inline" type="text" id="name" {...register("name",{required: "Please Enter name"})} placeholder="Roni Ray"/>{" "}
        <p>and i have a</p>{" "}
        <input className="bg-transparent border-b-2 w-full p-2 text-xl font-primary outline-none"   type="text" placeholder="WebFlow & 3d websites" id="description" {...register("description", {required: "Please Enter description"})} />{" "}
        <p>that need help.</p>
        <p className=" md:pt-5">You can reach me at </p>{" "}
        <input className="bg-transparent border-b-2 w-full p-2 text-xl font-primary outline-none"  type="email" placeholder="example@gmail.com" id="email" {...register("email", {required: "Please Enter email"})} />{" "}
        <p>to get things statred.</p>
        <input type="submit" className="py-4 px-10 bg-blue-600 rounded-full mt-12 text-xl cursor-pointer text-white"
        />
      </form>
    </div>
  );
}

export default From;
