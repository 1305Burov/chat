import './Avatar.scss'

export const Avatar = ({imageSrc, checked}) => {

    if (!imageSrc) {
        return checked ? <div className='avatar avatar_checked'><img src={`/images/default-user.svg`} alt="avatar" /></div>
        : <div className='avatar'><img src={`/images/default-user.svg`} alt="avatar" /></div>;
    }   

    return (    
        checked ? <div className='avatar avatar_checked'><img src={imageSrc} alt="avatar" /></div> 
        : <div className='avatar'><img src={imageSrc} alt="avatar" /></div> 
    );
}


