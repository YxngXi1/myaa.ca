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
        <div className='z-10'>
            <canvas ref={canvasRef} className='border-2 absolute w-full' style={{height: '40vh'}}></canvas>
        </div>
    );
}

export default Space