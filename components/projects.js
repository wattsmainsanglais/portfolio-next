import SingleProject from "./single-projects/singleProject"
import ndLogo from '../public/images/ndlogomini.png'

export default function Projects({src}){

    return(
        <section class='projects'>
            <h2>Current Projects</h2>

             <SingleProject src={ndLogo} />   



        </section>
    )
}