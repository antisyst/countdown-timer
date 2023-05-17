
import React from 'react';
import AdvancedCountdownTimer from './countdown';

const App: React.FC = () => {
  const handleTimerEnd = () => {
    alert('Time is up!');
  };

  return (
    <div>
      <h1 className='first-content'>Advanced Countdown</h1>
      <h3 className='creator-content'>Developed by <a href="https://rmzn.netlify.app" target='_blank'>Ramazan Azimli</a></h3>
      <AdvancedCountdownTimer onTimerEnd={handleTimerEnd} />
    </div>
  );
};

export default App;

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, temporibus. Minima quaerat aut veritatis nihil distinctio. Ullam eum aliquam possimus mollitia maxime numquam suscipit quos iure, quasi, magni minus quia quaerat incidunt maiores sequi soluta quam architecto ab quae doloribus minima assumenda! Molestias magni expedita aut omnis amet quibusdam, delectus minima, id accusamus similique excepturi dignissimos! Fuga delectus repellat quibusdam. Perspiciatis error nesciunt fuga nostrum repellat, aliquid obcaecati eos ut dignissimos officiis quam ab aperiam id? Fugit sunt maxime corrupti, aliquam numquam eligendi iure cupiditate accusamus, quia, sequi libero labore quae! Veritatis ab, saepe deleniti reiciendis velit expedita inventore alias.