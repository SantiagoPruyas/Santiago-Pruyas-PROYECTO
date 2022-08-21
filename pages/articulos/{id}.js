import { useRouter } from "next/router";

export default function Id() {
    const { id } = useRouter().query
    
    return <h1> Pagina {id} </h1>
}