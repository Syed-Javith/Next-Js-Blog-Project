import { notFound } from "next/navigation";

export default function Blog({ params }: {
    params: {
        id: number
    }
}) 
{
    const id = params.id;
    return <div>
        <h1>Blog {id} </h1>
    </div>
}