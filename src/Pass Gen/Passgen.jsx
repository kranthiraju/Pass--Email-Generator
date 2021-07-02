import React, { useRef, useState ,useEffect} from 'react';
import './Passgen.css';

const Passgen=()=>{
    const slideRef= useRef();

    const [islower,setIslower]= useState(false);

    const [isupper,setIsupper] = useState(false);

    const [length,setLength]= useState(0);

    const [pass,setPass]=useState('. . . . . . . . . . . .');

    // program to generate random strings

    // declare all characters
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    //declare small characters
    const small='abcdefghijklmnopqrstuvwxyz0123456789';

    const generateall=(length)=> {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setPass(result);
    }

    const generateSmall=(length)=>{
        let result = ' ';
        const charactersLength = small.length;
        for ( let i = 0; i < length; i++ ) {
            result += small.charAt(Math.floor(Math.random() * charactersLength));
        }
        setPass(result);
    }

    const lenHandle=()=>{
        setLength(slideRef.current.value);
    }

    const upperHandle=(e)=>{
        setIsupper(!isupper);
        if (isupper===false){
            generateall(length);
        }        
        document.getElementById('pass').innerHTML="Click To Copy";
    }

    const lowerHandle=(e)=>{
        setIslower(!islower);
        if (islower===false){
            generateSmall(length);
        }
        else{
            return;
        }
        document.getElementById('pass').innerHTML="Click To Copy";
    }

    const randomNum=()=>{
        document.getElementById('pass').innerHTML="Click To Copy";
        setPass(Math.floor((Math.random()*(Math.pow(10,length)))));
    }
    
    const copyHandle=()=>{
        navigator.clipboard.writeText(pass);
        document.getElementById('pass').innerHTML="Copied!";
        setIslower(false);
        setIsupper(false);
    }

    return (
        <div className="passgen">
            <h1>Password Generator</h1>
            <label onClick={copyHandle}>{pass}</label>
            <label className="tooltip" id="pass">Click To Copy</label>
            <label className="head">length :</label>
            <p>{length}</p>
            <div className="slider">
                <p>4</p>
                <input type="range" ref={slideRef} onChange={lenHandle} min="4" max="20"/>
                <p>20</p>
            </div>
            <label className="head">settings :</label>
            <div className="options">
                <p>Include UpperCase</p>
                <input type="checkbox" name="upper" onClick={upperHandle} checked={isupper}/>
            </div>
            <div className="options">
                <p>Include LowerCase</p>
                <input type="checkbox" name="lower" onClick={lowerHandle} checked={islower}/>
            </div>
            <div className="options">
                <p>Include Numbers</p>
                <input type="checkbox" name="num" defaultChecked disabled/>
            </div>
            <button onClick={randomNum}>generate password</button>
        </div>
    )
}
export default Passgen;