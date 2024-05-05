import supabase from "./Supabase";
import { toast } from 'react-toastify';
export const insertData = async (newData) => {
  const { data, error } = await supabase.from("Response").insert([newData]).select();

  if (error) {
   toast.error("We have an Error!!")
  }

  if(!error) {
    toast.success("I got your message")
  }
};
