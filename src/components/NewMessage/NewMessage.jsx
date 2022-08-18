import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/user/selectors';
import { getUserThunk, updateUserThunk } from '../../store/user/thunk';
import './NewMessage.scss';

export const NewMessage = ({contact}) => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    function sendMessage(e) {
        e.preventDefault();

        console.log(user);
        console.log(contact);

        const NewMessage = {
            userId: user.id,
            text: e.target.message.value.trim(),
            date: new Date (Date.now()),
            time: new Date (Date.now()).toLocaleString('en-Latn-US', { timeStyle: 'short'})
        }

        if (NewMessage.text) {
            user.contacts[contact].messages = [...user.contacts[contact].messages, NewMessage];
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(updateUserThunk(user));
            dispatch(getUserThunk());
        }

        e.target.message.value = '';
    }

    return (
        <div className='new-message'>
            <form  className='new-message__form form' onSubmit={sendMessage}>
                <input type="text" className='form__input' name='message' placeholder='Type your message' />
                <button className="form__button"></button>
            </form>
        </div>
    );
}

