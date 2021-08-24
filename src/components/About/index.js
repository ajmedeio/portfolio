import React from 'react'

const styles = {
    'about-container': {
        display: 'block',
        textAlign: 'center',
        color: 'var(--light)'
    }
}

const About = () => {
    return (
        <section style={styles['about-container']}>
            <h1 id="about">Alexander J Medeiros (@ajmed)</h1>
            <img src={require(`../../assets/profile-circle.png`).default}
                 className="profile-img mx-1"></img>
            <p>
                I build things that engage and delight my audience
            </p>
        </section>
    )
}

export default About
