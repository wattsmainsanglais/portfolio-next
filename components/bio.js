

import styles from './bio.module.css'

export default function Bio(){
    return(
        <section className={styles.bio}>  
                <article className={styles.about}>
                    <h2 className={styles.animatedHeader}>About Me</h2>
                    <p>Hi i'm Andrew, i'm an English speaking web developer based in South West France.
                    I'm proficient in full stack development and can get your project off the ground from front-end to back.
                    I'm on Github under the username 'wattsmainsanglais'. Please contact me using the below contact form for any and all enquiries. </p>
                
                </article>
                <hr />
                   
                <article className={styles.skills}>
                    <h2 className={styles.animatedHeader}>Skills</h2>
                    <aside className={styles.skillsLogo}>
                        <img className={styles.skillsImg} src="images/social_html5_html_71.png" aria-label="html logo" />
                        <img  className={styles.skillsImg} src="images/css_3721.png" aria-label="css logo" />
                        <img className={styles.skillsImg} src="images/javascript_logo_icon_145155.png" aria-label="Javascript logo" />
                        <img  className={styles.skillsImg} src="images/expressjs_logo_icon_169185.png" aria-label="express js logo" />
                        <img  className={styles.skillsImg} src="images/node_icon_196185.png" aria-label="node js logo" />
                    </aside>
                </article>
                    <hr />
        </section>
    )
}