import Header from "./header"
import Link from "next/link"
import Footer from "./footer"

export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <nav>
        </nav>

        <main>
        
        </main>
        
        </>
    )
}