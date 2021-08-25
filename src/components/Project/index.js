import React from 'react'

const style = {
    host: {
        margin: '5px'
    },
    img: {
        display: 'block',
        height: '256px',
        width: '256px',
        borderRadius: '16px 16px 0 0'
    },
    projectTitle: {
        textAlign: 'center'
    }
}

export default function Project({project}) {
    const {name, site, repo, imgSrc} = project
    const link = site || repo || 'https://github.com/ajmed'
    return (
        <a style={style.host} href={link} target='_blank'>
            <img style={style.img} src={imgSrc} alt={`${name} banner`} />
            <div style={style.projectTitle}>{name}</div>
        </a>
    )
}
