import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class ExampleComponent extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const { text } = this.props;
    return <div className={styles.test}>Example Component: {text}</div>;
  }
}
