import { TickerCell } from 'components/TickerCell';
import { TickerSeparator } from 'components/TickerSeparator';

import style from './Ticker.module.scss';

export const Ticker = () => {
    const days = 6;
    const hours = 22;
    const minutes = 40;
    const seconds = 0;
    const isTimeUp = false;

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