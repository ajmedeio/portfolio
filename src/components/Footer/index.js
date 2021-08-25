import React from 'react'

const style = {
    host: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '64px'
    },
    'social-logo': {
        width: '32px',
        margin: '16px'
    }
}

const githubLogo = require(`../../assets/github-logo.png`).default
const linkedInLogo = require(`../../assets/linked-in-logo.png`).default
const facebookLogo = require(`../../assets/facebook-logo.png`).default

export default function Footer() {
    return (
        <div style={style.host}>
            <a href='https://github.com/ajmed' target='_blank' rel="noreferrer">
                <img src={githubLogo} style={style['social-logo']} alt='github logo'/>
            </a>
            <a href='https://www.linkedin.com/in/ajmed/' target='_blank' rel="noreferrer">
                <img src={linkedInLogo} style={style['social-logo']} alt='linked in logo'/>
            </a>
            <a href='https://www.facebook.com/alexander.j.medeiros' target='_blank' rel="noreferrer">
                <img src={facebookLogo} style={style['social-logo']} alt='facebook logo'/>
            </a>
        </div>
    )
}
