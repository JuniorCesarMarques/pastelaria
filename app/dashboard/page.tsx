import { getSession } from "@/services/auth.service";
import { redirect } from "next/navigation";

export default async function Dashboard(){

    const session = await getSession();


    if(!session){
        redirect("/login");
    }

    return(
        <div>
            Dashboard
        </div>
    )
}