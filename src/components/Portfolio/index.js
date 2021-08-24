import React from 'react'
import Project from '../Project'

export default function Portfolio() {
    const projects = [
        {
            name: 'biobell',
            site: '',
            repo: ''
        },
        {
            name: "∇brüd",
            site: "brud.projectdel.com",
            repo: ''
        },
        {
            name: "Project ∇",
            site: "projectdel.com",
            repo: ''
        },
        {
            name: "Explaining Relativity",
            site: "",
            repo: ''
        },
        {
            name: "Blink",
            site: "",
            repo: 'https://github.com/ajmed/blink'
        },
        {
            name: "HandSight Color/Texture Module",
            site: "",
            repo: ''
        },
        {
            name: "Homemade Radio Transmitter/Receiver",
            site: '',
            repo: ''
        },
        {
            name: "LyriCloud",
            site: "",
            repo: ''
        },
        {
            name: "Search Audio By Text",
            site: "",
            repo: ''
        },
    ]
    return (
        <>
            <div>Portfolio</div>
            <div>list some projects</div>
            {projects.map((project, index) =>
                <Project project={project}/>
            )}
        </>
    )
}
