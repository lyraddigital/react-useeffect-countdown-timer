import { intervalToDuration, isBefore } from 'date-fns';


import { TickerCell } from 'components/TickerCell';
import { TickerSeparator } from 'components/TickerSeparator';

import style from './Ticker.module.scss';

export const Ticker = ({ futureDate }) => {
    const now = new Date();
    const isTimeUp = isBefore(futureDate, now);
    let days = 0; 
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (!isTimeUp) {
        const duration = intervalToDuration({
            start: now,
            end: futureDate
        });

        days = duration.days;
        hours = duration.days;
        minutes = duration.days;
        seconds = duration.days;
    }

    const tickerContents = isTimeUp ? (
        <div className={ style.timeIsUp }>Time is up!!!</div>
    ) : (
        <>
            <TickerCell value={days} label="Days" />
            <TickerSeparator />
            <TickerCell value={hours} label="Hours" />
            <TickerSeparator />
            <TickerCell value={minutes} label="Minutes" />
            <TickerSeparator />
            <TickerCell value={seconds} label="Seconds" />
        </>
    );

    return (
        <div className={ style.tickerShell }>
            { tickerContents }           
        </div>              
    );
}