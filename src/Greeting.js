import React, {useState} from "react";

function Greeting (props) {
    const [name, setName] = useState("World");
    
    function newName() {
        setName(props.name)
    }
  
        return (
            <>
                <h2>Hello {name}</h2>
                <button onClick={newName}>Hello!</button>

            </>
      );
    }
  
  
  export default Greeting;
  