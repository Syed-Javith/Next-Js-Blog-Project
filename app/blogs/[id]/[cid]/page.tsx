export default function Comment({params} : { params : { id : number , cid : number} }) {
    const cid = params.cid;
    return (
        <div>
            <h1>Comment {cid}</h1>
        </div>
    )
}