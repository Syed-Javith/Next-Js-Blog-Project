"use client";

export default function Button({ label  } : {
    label : string
}){ 
    return (
        <button className={"bg-green-400 hover:bg-green-300 rounded-md p-4 text-white "}>
            {label}
        </button>
    )
}