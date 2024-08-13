export default function Navbar(){
    return(
        <nav className="nav" >
            <a href="/" className="site-title">Site Scanner AI</a>
            <ul>
                <li className="active">
                    <a href="/Tech-Stack-Recommender">Tech Stack Recommender</a>
                </li>
                <li>    
                    <a href="/Site-Scanner">Site Scanner</a>
                </li>
            </ul>
        </nav>
    )
}