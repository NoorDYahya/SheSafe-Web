
const Navbar = () => {
    const handleScrollTo = (sectionId)=>{
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return ( 
        <nav className="navbar">
            
            <h1 onClick={() => handleScrollTo('home')}>SheSafe</h1>
            <div className="links">
                <button onClick={() => handleScrollTo('home')}>Home</button>
                <button >Game</button>
                <button onClick={() => handleScrollTo('questions')}>Frequent Questions</button>
                <button onClick={() => handleScrollTo('about')}>About</button>
            </div>
        </nav>
     );
}
 
export default Navbar;