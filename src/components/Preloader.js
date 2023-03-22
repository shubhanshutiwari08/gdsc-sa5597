import React, { useEffect } from 'react'
import {preLoaderAnim} from '../animation'
import './preloader.css'

const Preloader = ()=>{
    
    useEffect(()=>{
        preLoaderAnim()
    })
    
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Plan</span>
                <span>Your</span>
                <span>Day!! </span>
            </div>
        </div>
    )
}

export default Preloader
