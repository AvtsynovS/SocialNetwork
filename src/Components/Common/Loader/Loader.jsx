import React from 'react';
import styles from './styles.module.scss';
import loader from './../../../icons/loader.svg'


const Loader = () => {
    return <div className={styles.container}>
        <img src={loader} alt="loader" />
    </div>
}

export default Loader;