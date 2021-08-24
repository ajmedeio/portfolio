import React from 'react'
import resume from '../../assets/resume-2021.06.24.pdf'

export default function Footer() {
    return (
        <div style={{textAlign: 'center'}}>
            <a href={resume} download='ajm-resume' target='_blank' rel="noreferrer">Resume Download</a>
        </div>
    )
}
