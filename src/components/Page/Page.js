import Button from '../Button/Button.js';
import styles from './Page.module.css';

const Page = ({ title, actions, children }) => {
    return(

        <>
            <div className={ styles.header }>
                <h2 className={ styles.title }> {title} </h2>
                { 
                    actions && 
                        actions.map((item, index) => <Button key={ index } type={ item.type ?? ''}> { item.label } </Button> )
                }
            </div>

            { children }
        </>

    ) 
}

export default Page;