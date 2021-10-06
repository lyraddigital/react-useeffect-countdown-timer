import { Ticker } from 'components/Ticker';

import style from './App.module.scss';

const futureDate = new Date();

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
