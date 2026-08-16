import StorePage from "@/components/StorePage";
import { getSession } from "@/services/auth.service"


export default async function StorePageServer(){

    const session = await getSession();

    const canManageStore = !!session;

    return (
        <StorePage canManageStore={canManageStore} />
    )
};