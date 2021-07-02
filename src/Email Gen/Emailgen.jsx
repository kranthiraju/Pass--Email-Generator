import React, { useRef, useState , useEffect} from 'react';
import './Emailgen.css';

const Emailgen=()=>{
    const firstRef= useRef('');
    const lastRef= useRef('');
    const favRef= useRef();

    const [list,setList]= useState([]);

    const [emails,setEmails] =useState([]);

    const [final,setFinal]= useState('Take Better Email. . .');

    const suggestemail=()=>{
        if (firstRef.current.value==="" || lastRef.current.value==="" || favRef.current.value===""){
            alert("Enter all Values");
        }
        else{
            document.getElementById('suggest').style.display="flex";
            document.getElementById('email').style.top="10%";
            setList({first:firstRef.current.value.toLowerCase(),last:lastRef.current.value.toLowerCase(),fav:favRef.current.value});    
        }
    }

    const output=()=>{
        document.getElementById('suggest').style.display="none";
        document.getElementById('email').style.top="25%";
        navigator.clipboard.writeText(final);
        document.getElementById('pass').innerHTML="Copied!";
    }

    useEffect(() => {
        generateEmail()
    }, [list]);

    const generateEmail=()=>{
        setEmails(
             {
                a:list.first+list.last+list.fav+Math.floor(Math.random()*100)+'@gmail.com',
             
             
                 b:list.last+list.first+list.fav+Math.floor(Math.random()*100)+'@gmail.com',
             
             
                 c:list.first+list.last+Math.floor(Math.random()*100)+list.fav+'@gmail.com',
             
             
                 d:list.last+list.first+Math.floor(Math.random()*100)+list.fav+'@gmail.com',
             }
             );
    }

    const pasteHandle=(e)=>{
        setFinal(e.target.closest('li').innerHTML);
        document.getElementById('pass').innerHTML="Click To Copy";
    }

    return (
        <div className="email" id="email">
            <h1>Email Generator</h1>
            <label onClick={output}>{final}</label>
            <label className="tooltip" id="pass">Click To Copy</label>
            <div className="suggestions" id="suggest" onClick={pasteHandle}>
                <li>{emails.a}</li>
                <li>{emails.b}</li>
                <li>{emails.c}</li>
                <li>{emails.d}</li>
            </div>
            <input type="text" placeholder="First Name :" ref={firstRef}/>
            <input type="text" placeholder="Last Name :" ref={lastRef}/>
            <input type="number" placeholder="Fav :" min="0" max="99" ref={favRef}/>
            <button onClick={suggestemail}>Suggest Email</button>
        </div>
    )
}

export default Emailgen;