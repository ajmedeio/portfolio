import React from 'react'
import Project from '../Project'

const style = {
    host: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '64px auto',
        maxWidth: '1024px',
        padding: '5px'
    }
}

export default function Portfolio() {
    const projects = [
        {
            name: "∇brüd",
            site: "https://brud.projectdel.com/account",
            repo: '',
            media: '',
            imgSrc: require('../../assets/projects/brud-banner.png').default
        },
        {
            name: "Blink",
            site: "",
            repo: 'https://github.com/ajmed/blink',
            media: '',
            imgSrc: require('../../assets/projects/blink-banner.png').default
        },
        {
            name: 'Kid Claw',
            site: 'https://twitter.com/ClawDynamics',
            repo: 'https://github.com/ajmed/kid-claw-s1-e1',
            media: '',
            imgSrc: require('../../assets/projects/kid-claw-banner.jpeg').default
        },
        {
            name: 'biobell',
            site: '',
            repo: '',
            media: '',
            imgSrc: require('../../assets/projects/biobell-banner.jpeg').default
        },
        {
            name: "Project ∇",
            site: "https://projectdel.com",
            repo: '',
            media: '',
            imgSrc: require('../../assets/projects/projectdel-banner.png').default
        },
        {
            name: 'LyriCloud',
            site: '',
            repo: 'https://github.com/ajmed/lyricloud',
            media: '',
            imgSrc: require('../../assets/projects/lyricloud-banner.png').default
        },

    ]
    return (
        <div style={style.host}>
            {projects.map((project, index) =>
                <Project project={project}/>
            )}
        </div>
    )
}
