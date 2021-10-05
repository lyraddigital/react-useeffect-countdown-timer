import { useEffect, useState } from "react";

const TICKS_TO_DAYS = 1000 * 60 * 60 * 24;
const TICKS_TO_HOURS = 1000 * 60 * 60;
const TICKS_TO_MINUTES = 1000 * 60;
const TICKS_TO_SECONDS = 1000;

export const useTicker = (futureDate) => {
    const [currentDate, setCurrentDate] =  useState(new Date());

    const diff = futureDate - currentDate;
    const isTimeUp = diff < 0;
    const days = isTimeUp ? 0 : Math.floor(diff / TICKS_TO_DAYS);
    const hours = isTimeUp ? 0 : Math.floor((diff % TICKS_TO_DAYS) / TICKS_TO_HOURS);
    const minutes = isTimeUp ? 0 : Math.floor((diff % TICKS_TO_HOURS) / TICKS_TO_MINUTES);
    const seconds = isTimeUp ? 0 : Math.floor((diff % TICKS_TO_MINUTES) / TICKS_TO_SECONDS);

    useEffect(() => {        
        const interval = setInterval(() => {
            setCurrentDate(new Date());          
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, [futureDate]);

    return { days, hours, minutes, seconds, isTimeUp };
};