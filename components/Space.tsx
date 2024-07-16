'use client'

import React, { useEffect, useRef } from 'react';
import { initializeSpaceAnimation } from './spaceAnimation';

const Space = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const cleanup = initializeSpaceAnimation(canvas);

        return cleanup; 
    }, []);

    return (
        <div className='relative'>
            <canvas ref={canvasRef} className=' absolute w-full' style={{height: '40vh'}}></canvas>
        </div>
    );
}

export default Space