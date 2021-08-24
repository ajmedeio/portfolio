import React from 'react'

export default function Project({project}) {
    const {name} = project
    return (
        <>
            <div>{name}</div>
        </>
    )
}
