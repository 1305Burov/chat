import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userSelector } from '../../store/user/selectors';
import { Avatar } from '../Avatar/Avatar';
import { NewMessage } from '../NewMessage/NewMessage';
import './Chat.scss';

export const Chat = () => {
    const user = useSelector(userSelector);
    const { id } = useParams();

    if (user.id) {
        const contactIdx = user.contacts.findIndex(contact => contact.id === Number(id));
        const contact = user.contacts[contactIdx];
        
        return (
            
            <div className="chat">
                <header className='chat__header header'>
                    <Avatar imageSrc={contact.avatar} checked={true} />
                    <span className='header__name'>{contact.name}</span>
                </header>
    
                <div className='chat__field field'>
                    {contact.messages.map((message) => {
                        return message.userId === user.id ? 
                            <div className='field__message field__message_own message' key={message.text}>
                                {/* <Avatar imageSrc={user.avatar} checked={false} /> */}
                                <div className='message__content content'>
                                    <p className='content__text content__text_own'>{message.text}</p>
                                    <span className='content__date content__date_own'>
                                        { new Date (message.date).toLocaleString('en-Latn-US', { month: '2-digit', day: '2-digit', year: '2-digit', hour12: true }) + ' ' + message.time}
                                        </span>
                                </div>
                            </div>
                            : 
                            <div className='field__message' key={message.text}>
                                <Avatar imageSrc={contact.avatar} checked={false} />
                                <div className='message__content'>
                                    <p className='content__text'>{message.text}</p>
                                    <span className='content__date'>{message.date + ' ' + message.time}</span>
                                </div>
                            </div>
                    })}
                </div>
    
                <NewMessage user={user} contact={contactIdx} />
            </div>
        );
    }
}


