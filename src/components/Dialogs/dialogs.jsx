import styles from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.userLogo}>
                <p>{props.logo}</p>
            </div>
            <div className={styles.userName}>
                <NavLink activeClassName={styles.active} to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            <p className={styles.message}>{props.text}</p>
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "April K", logo: ":-)"},
        {id: 2, name: "Meredith G.", logo: ";*)"},
        {id: 3, name: "Christina Y.", logo: "0:-|"},
    ];

    let messagesData = [
        {id: 1, text: "Hello", datetime: 120520182204},
        {id: 2, text: "How are you?", datetime: 120520182204},
        {id: 3, text: "Fine!", datetime: 120520182205},
        {id: 4, text: "Let's go to Martha's tonight", datetime: 120520182205},
        {id: 5, text: "When they start?", datetime: 120520182207},
    ];

    return (
        <div className={styles.chatsPage_wrapper}>
            <div className={styles.chatsList_wrapper}>
                <User name={dialogsData[0].name} id={dialogsData[0].id} logo={dialogsData[0].logo} />
                <User name={dialogsData[1].name} id={dialogsData[1].id} logo={dialogsData[1].logo} />
                <User name={dialogsData[2].name} id={dialogsData[2].id} logo={dialogsData[2].logo} />
            </div>
        
            <div className={styles.chatWindow_wrapper}>
                <Message id={messagesData[0].id} text={messagesData[0].text} datetime={messagesData[0].datetime} />
                <Message id={messagesData[1].id} text={messagesData[1].text} datetime={messagesData[1].datetime} />
                <Message id={messagesData[2].id} text={messagesData[2].text} datetime={messagesData[2].datetime} />
                <Message id={messagesData[3].id} text={messagesData[3].text} datetime={messagesData[3].datetime} />
                <Message id={messagesData[4].id} text={messagesData[4].text} datetime={messagesData[4].datetime} />
            </div>
        </div>
    )
}
export default Dialogs;