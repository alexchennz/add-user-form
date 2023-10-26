import classes from './UsersList.module.css';
import Card from '../UI/Card/Card';

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.data.map((u) => (
                    <li key={u.id}>{u.username} ({u.age} years old)</li> 
                ))}
            </ul>
        </Card>
    )
}

export default UsersList;