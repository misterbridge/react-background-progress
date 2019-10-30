import React, { useState, useEffect } from 'react';

import ReactBackgroundProgress, {
  DEFAULT_PROGRESS_ANIMATION_DURATION,
} from 'react-background-progress';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let updateTimeout;
    if (progress < 1) {
      updateTimeout = setTimeout(() => {
        const newProgress = Math.round(Math.min(progress + 0.1, 1) * 10) / 10;
        setProgress(newProgress);
      }, 1000);
    } else {
      setTimeout(() => {
        alert('Done !');
      }, DEFAULT_PROGRESS_ANIMATION_DURATION);
    }
    return () => {
      clearTimeout(updateTimeout);
    };
  }, [progress]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ReactBackgroundProgress progress={progress} />
    </div>
  );
};

export default App;
