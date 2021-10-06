import { add } from 'date-fns';

import { Ticker } from 'components/Ticker';

import style from './App.module.scss';

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = add(new Date(), {
  days: 6,
  hours: 22,
  minutes: 40
});

function App() {  
  return (
    <div className={ style.pageContainer }>
      <h1>Join Our Event</h1>
      <p>Come check out our great event. It will be lots of fun.</p>
      <Ticker futureDate={futureDate} />
    </div>  
  );
}

export default App;
