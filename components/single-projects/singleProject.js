import Image from "next/image"

export default function SingleProject({src}){

    return(
        
            <Image
            src={src}
            alt="image-alt-text"
            width={65}
            height={50} 
            />
        
        
        
        
    )


}