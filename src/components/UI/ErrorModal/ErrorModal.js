import classes from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
    const hideModal = () => {
        props.removeModal();
    }
    return (
        <div>
            <Card className={classes.modal}>
                <div className={classes.header}>
                    <h2>{props.heading}</h2>
                </div>
                <div className={classes.content}>
                    {props.content}
                </div>
                <div className={classes.actions}>
                    <Button onClick={hideModal}>Okay</Button>
                </div>
                
            </Card>
            <div className={classes.backdrop} onClick={hideModal}></div>
        </div>
    )
}

export default ErrorModal;