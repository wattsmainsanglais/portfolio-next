import Image from "next/image"

export default function SingleProject({heading ,src, alt, desc}){

    return(
        
        <section>

            <h2>{heading}</h2>

            <article>
            <Image
            src={src}
            alt={alt}
            width={320}
            
            height={200} 
            />

            <p>{desc}</p>
            </article>
        
        </section>
        
    )


}