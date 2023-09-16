import Image from 'next/image';

export default function Header(){
    return (
           <header>
            <aside class="profile">
                <Image
                width={150}
                height={150}
                src="/images/profilebw.jpg"
                />
                
                <div class="mask">
                    
                </div>
               
            </aside>
            <h1>Andrew Watts Development</h1>
            </header> 
    )
}