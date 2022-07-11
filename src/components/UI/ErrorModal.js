
import ReactDom from 'react-dom';

import styles from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

let closeModal;

const Backdrop = (props) => {
    closeModal = () => {
        console.log('innn');
        console.log(props);
        props.closeModal1(null)
    }
    console.log('backdrop:', props);
    return <div className={styles.backdrop} onClick={closeModal}></div>
}

const ModalOverlay = (props) => {
        return (
        <Card addedClassName={styles.modal}>
            <div className={styles.header}>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <div className={styles.actions}>
            <Button type={'button'} onClick={closeModal}>Okay</Button>
            </div>
        </Card>
    )
}

const ErrorModal = (props) => {
  console.log('error M :' , props);
    return (
        <>
            {ReactDom.createPortal(<Backdrop className={styles.backdrop} closeModal1={props.closeModal}/>, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} closeModal={props.closeModal}/>, document.getElementById('modal-root'))}
          
        </>
       
    )
}

export default ErrorModal;
//Please enter a valid name and age (non-empty values).