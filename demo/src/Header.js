//The usage of the keyword props allows us to use the data sent from the parent element.
/**
 * In this case the parent element is App
 * App can send title and desc to the Header.js
 * adn we can access the title adn desc using prop
 */
function Header(props)
{
    return(
        <div className = "place">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}
export default Header;