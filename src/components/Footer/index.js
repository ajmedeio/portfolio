import React from 'react'

const style = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    'social-logo': {
        width: '32px',
        margin: '16px'
    }
}

export default function Footer() {
    return (
        <div style={style.container}>
            <a href='https://github.com/ajmed' target='_blank' rel="noreferrer">
                <img src={require(`../../assets/github-logo.png`).default} style={style['social-logo']} alt='github logo'/>
            </a>
            <a href='https://www.linkedin.com/in/ajmed/' target='_blank' rel="noreferrer">
                <img src={require(`../../assets/linked-in-logo.png`).default} style={style['social-logo']} alt='linked in logo'/>
            </a>
            <a href='https://www.facebook.com/alexander.j.medeiros' target='_blank' rel="noreferrer">
                <img src={require(`../../assets/facebook-logo.png`).default} style={style['social-logo']} alt='facebook logo'/>
            </a>
        </div>
    )
}
