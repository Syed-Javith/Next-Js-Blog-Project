"use client";

export default function Button({ label , color  } : {
    label : string , color : string
}){
    console.log(`bg-${color}-600`);
    const className = `bg-${color}-600`;
    const hoverColor = `hover:bg-${color}-400`;
    
    return (
        <button className={className+" rounded-md p-4 text-white "+hoverColor}>
            {label}
        </button>
    )
}