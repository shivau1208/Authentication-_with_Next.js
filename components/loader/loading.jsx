import React from 'react';
import styles from '../../styles/Loading.module.scss';
export default function Loading() {
  return (
    <div className={`${styles.flexbox} loader`}>
      <div>
        <div className={`${styles.circleLoader}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
