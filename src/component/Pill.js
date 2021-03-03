import React,{useState,useEffect} from 'react'
import './Pill.css'
import {Link} from 'react-router-dom'
import { FaListAlt } from "react-icons/fa";
function Pill() {

    const [act,setAct] = useState(true)
    const [name,setName] = useState("tech")
    const [ssize] = useState(window.screen.width)
    const [tgl,setTgl] = useState(true)    

    const changeState = (dt) => {
        setAct(!act)
        setName(dt)
    }

    const handleClick = () => {
        setTgl(!tgl)
    }

    useEffect(() => {
        ssize <= 540 ? setTgl(false) : setTgl(true)
    },[ssize])

    return (
        <>  
            <div className='cat-menuvk'>
                <button className="btn" onClick={() => {handleClick()}}><FaListAlt size={35}/> <span className="tgl-font">Blog Site</span></button>
                <ul className={`${tgl ? 'nav-pill-manvk' : 'hide'}`}>
                    <li ><Link to="/all-blogs/technology" onClick={() => changeState('tech')} className={`linkvk ${name === 'tech' ? 'active' : 'deactive'}`}>Technology</Link></li>
                    <li><Link to="/all-blogs/health" onClick={() => changeState('health')} className={`linkvk ${name === 'health' ? 'active' : 'deactive'}`}>Health</Link></li>
                    <li><Link to="/all-blogs/travel" onClick={() => changeState('travel')} className={`linkvk ${name === 'travel' ? 'active' : 'deactive'}`}>Travel</Link></li>
                    <li><Link to="/all-blogs/religion" onClick={() => changeState('reli')} className={`linkvk ${name === 'reli' ? 'active' : 'deactive'}`}>Religion</Link></li>
                </ul>
                <hr />
            </div>
        </>
    )
}

export default Pill