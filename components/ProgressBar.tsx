"use client"

import { useEffect, useState } from "react";
import React from 'react'

export default function ProgressBar({className} : {className? : string}) {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter: number) => {
        if (counter < 448) {
            return counter + 4
        }
        clearInterval(interval)
        return 0
      });
    }, 1);

  }, []);


    
    return (
    <div style={{width: `${counter}px`}} className={`absolute h-0.5 bg-blue-400 ${className}`}>  </div>)

}