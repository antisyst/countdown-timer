
import React, { useState, useEffect, useRef } from 'react';

interface AdvancedCountdownTimerProps {
  onTimerEnd: () => void;
}

const AdvancedCountdownTimer: React.FC<AdvancedCountdownTimerProps> = ({ onTimerEnd }) => {
  const [duration, setDuration] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState('');

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeLeft <= 0 && isRunning) {
      setIsRunning(false);
      onTimerEnd();
    }
  }, [timeLeft, isRunning, onTimerEnd]);

  const startTimer = () => {
    if (isRunning) return;

    const durationInSeconds = parseInt(duration, 10);
    if (isNaN(durationInSeconds) || durationInSeconds <= 0) {
      setError('Please enter a valid duration in seconds.');
      return;
    }

    setError('');
    setTimeLeft(durationInSeconds);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setProgress(0);
  };

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1;
        setProgress(((parseInt(duration, 10) - newTimeLeft) / parseInt(duration, 10)) * 100);
        return newTimeLeft;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, duration]);

  return (
    <div>
      <div>
        <label htmlFor="duration" className='require-timer'>Duration ( seconds ): </label>
        <input
          id="duration"
          type="number" min={0}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          disabled={isRunning}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div className='time-action'>Time left: <span className='action-mvp'>{timeLeft}</span> seconds</div>
      <progress value={progress} max="100" style={{ width: '100%' }} />
      <div className='button-container'>
    <button onClick={startTimer}>
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">Start</span>
    </button>
    <button onClick={pauseTimer}>
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">Pause</span>
    </button>
    <button onClick={resetTimer}>
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">Reset</span>
    </button>
      </div>
    </div>
  );
};

export default AdvancedCountdownTimer;
