import type { ReactElement } from 'react';
import styles from './App.module.css';

export function App(): ReactElement {
  return (
    <div>
      <h1 className={styles.title}>Hello, Tandem</h1>
    </div>
  );
}
