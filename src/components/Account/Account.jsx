import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSelector } from "../../store/user/selectors";
import { Avatar } from "../Avatar/Avatar";
import './Account.scss';

export const Account = () => {
    const user = useSelector(userSelector);
    const [searchedValue, setSearchedValue] = useState('');

    user.id && user.contacts.sort((a, b) => new Date(`${b.messages[b.messages.length - 1].date}`) - new Date(`${a.messages[a.messages.length - 1].date}`));
    return (
        user.id && <div className="account">
            <header className="account__header">
                <div className="header__profile profile">
                    <div className="profile__avatar">
                        <Avatar imageSrc={user.avatar} checked={true} />
                    </div>
                    <div className="profile__name">
                        <span>{user.name}</span>
                    </div>
                </div>
                
                <div className="header__search search">
                    <input type="search" className="search__input" placeholder="Search or start new chat" onInput={(e) => setSearchedValue(p => p = e.target.value.toLowerCase())} />
                    <i className="search__icon"></i>
                </div>
            </header>
            
            <div className="account__contacts contacts">
                <h2 className="contacts__title">Chats</h2>
                <div className="contacts__block">{user.contacts.map((contact) => {
                    if (contact.name.toLowerCase().includes(searchedValue) || searchedValue === '') {
                        return <Link to={`chat/${contact.id}`} key={contact.id} className="contacts__box"> 
                            <Avatar imageSrc={contact.avatar} checked={true} />
                            <div className="contacts__user-wrapper">
                                <div className="contacts__user user">
                                    <span className="user__name">{contact.name}</span> 
                                    <p className="user__text">{contact.messages[contact.messages.length - 1].text}</p> 
                                </div>
                                <div className="contacts__date">{ new Date(contact.messages[contact.messages.length - 1].date).toLocaleString('en-Latn-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                            </div>
                        </Link>
                    } 
                })}</div>
            </div>
        </div>
    );
}


