'use client'

import React, { useState, useEffect, FC } from 'react';

interface PageProps {
    date: string
    heading: string
    body: string
    subtitle: string
}

const Event: FC<PageProps> = ({ date, heading, body, subtitle }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;
    const displayBody = isExpanded ? body : body.substring(0, maxLength) + '...';

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <main className='my-8'>
            <div className='flex w-full justify-center items-center'>
                <div className='w-10/12 flex flex-col lg:flex-row justify-evenly items-start'>
                    {isMobile ? (
                        <div>
                            <h1 className='text-3xl text-white font-medium mb-4'>Date: {date}</h1>
                            <h1 className='text-3xl text-white mb-4'>{heading}</h1>
                            <p className='text-gray-400 text-md mb-4'>{subtitle}</p>
                            <p className='text-md text-gray-400'>{displayBody}</p>
                            {body.length > maxLength && (
                                <button onClick={handleToggle}>
                                    {isExpanded ? 'Show Less' : 'Read More'}
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className='flex justify-evenly flex-row w-full'>
                            <h1 className='text-3xl text-white font-medium mb-4 w-1/3'>Date: {date}</h1>
                            <div className='flex flex-col w-1/3'>
                                <h1 className='text-3xl text-white mb-4'>{heading}</h1>
                                <p className='text-md text-gray-400'>{displayBody}</p>
                                {body.length > maxLength && (
                                    <button onClick={handleToggle}>
                                        <p className='text-gray-400 text-left'>{isExpanded ? 'Show Less' : 'Read More'}</p>
                                    </button>
                                )}
                            </div>
                            <div className='flex flex-col w-1/3'>
                                <p className='text-gray-400 text-md mb-4 text-right'>{subtitle}</p>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </main>
    );
}

export default Event;