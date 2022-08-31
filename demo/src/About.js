import {useState} from "react";
function About(props)
{
    let [song,setSong] = useState("I am a god.");

    function doSomething(){
        setSong("Still a god.");
        //alert("The button was clicked.");
    }
    function doSomething1(text){
        setSong(text);
    }
    return(
        <div className = "about"><h1>{song}</h1>
        <div>
        <button className = "button" onClick = {doSomething}>Click Here</button>
        </div>

        <button className = "button" onClick = {()=>
            {doSomething1("Always a god.");
        }
            }>Here Click</button>
        </div>
    )
}
export default About;