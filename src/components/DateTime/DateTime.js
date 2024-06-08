'use client';

import {useState, useEffect} from 'react';
import styles from './DateTime.module.css';

const DateTime = () => {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString('us-US'));

    useEffect(() => {
        const interval = setInterval(() => {
          setDateTime(new Date().toLocaleString('us-US'));
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

      return(<span className={ styles.dateTime } suppressHydrationWarning> { dateTime } </span>)
}

export default DateTime;