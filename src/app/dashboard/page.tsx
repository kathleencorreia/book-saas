import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashboard/book");
};

export default page;
