import React from 'react'
import {css, cx} from '@emotion/css'

const style = {
    host: css`
        margin: 5px;
        border: 2px #cccccc;
        &:hover {
            box-shadow: 1px 1px 1px 1px;
            text-decoration: none
        }
    `,
    img: {
        display: 'block',
        height: '256px',
        width: '256px',
        borderRadius: '16px 16px 0 0'
    },
    projectTitle: {
        textAlign: 'center',
        marginTop: '8px'
    }
}

export default function Project({project}) {
    const {name, site, repo, media, imgSrc} = project
    const link = site || repo || media || 'https://github.com/ajmed'
    return (
        <a className={style.host} href={link} target='_blank' rel="noreferrer">
            <img style={style.img} src={imgSrc} alt={`${name} banner`} />
            <div style={style.projectTitle}>{name}</div>
        </a>
    )
}
