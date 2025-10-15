import { getPages } from "@/api/getPages";

interface PageProps {
    params: any;
}
export default async function Page({params} : PageProps){
    const {id} = params;

    const anime = await getPages({variable: id})
    return <div>{JSON.stringify(anime)}</div>
}