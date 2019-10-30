import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const DEFAULT_PROGRESS_ANIMATION_DURATION = 300;

function getRotation(progress) {
  return Math.min(180 * progress, 180);
}

const ReactBackgroundProgress = ({
  progress,
  animationDuration,
  className,
}) => {
  const rotate = getRotation(progress);

  const rootClasses = [styles.root, className];
  // Hide if not active at
  if (rotate !== 0) {
    rootClasses.push(styles.visible);
  }

  return (
    <div className={styles.wrapper}>
      <div className={rootClasses.join(' ')}>
        <div className={styles.half}>
          <div
            className={[styles.fill, styles.rotate].join(' ')}
            style={{
              transform: `rotate(${rotate}deg)`,
              transition: `transform ${animationDuration}ms linear`,
            }}
          />
        </div>
        <div
          className={[styles.half, styles.rotate].join(' ')}
          style={{
            transform: `rotate(${rotate}deg)`,
            transition: `transform ${animationDuration}ms linear`,
          }}
        >
          <div
            className={[styles.fill, styles.rotate].join(' ')}
            style={{
              transform: `rotate(${rotate}deg)`,
              transition: `transform ${animationDuration}ms linear`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

ReactBackgroundProgress.propTypes = {
  progress: PropTypes.number.isRequired, // 0 to 1
  // Animation needs an additionnal X ms to reach progress value
  animationDuration: PropTypes.number,
  // Styles
  className: PropTypes.string,
};

ReactBackgroundProgress.defaultProps = {
  animationDuration: DEFAULT_PROGRESS_ANIMATION_DURATION,
  className: '',
};

export default ReactBackgroundProgress;
export { DEFAULT_PROGRESS_ANIMATION_DURATION };
