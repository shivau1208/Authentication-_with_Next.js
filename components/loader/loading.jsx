import React from 'react';
import styles from '../../styles/Loading.module.scss';
export default function Loading() {
  return (
    <div className={`${styles.flexbox} loader`}>
      <div>
        <div class={`${styles.circleLoader}`}>
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
