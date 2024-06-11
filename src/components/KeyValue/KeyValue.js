import styles from './KeyValue.module.css';

const KeyValue = ({ label, value, badge }) => {

    return(
        <div className={ styles.keyValue }>
            <div className={ styles.key }> { label } </div>
            <div className={ styles.value }> { badge } { value } </div>
        </div>    
    )
}

export default KeyValue;