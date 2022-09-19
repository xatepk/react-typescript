import React from "react";

export function Modal() {
    return(
        <>
        <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0'
        />
        <div
            className='w-[550px] p-5 rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2'
        >
            <h1>Modal</h1>
        </div>
        </>
    )

}