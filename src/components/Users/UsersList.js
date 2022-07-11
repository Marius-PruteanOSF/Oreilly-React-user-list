
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UserList = (props) => {
    return (
        <Card addedClassName={styles.users}>
            <ul>
                {
                    props.users.map(user => 
                        <li id={user.id}>
                            <span>{user.name}   </span>
                            <span>{user.age} years old</span>
                        </li>
                        )
                }

            </ul>
        </Card>
    )
}

export default UserList;