export const getUser = (userData) => {
    if (!localStorage.getItem('user')) {
        const user = {
            id: 1,
            name: userData.displayName,
            avatar: userData.photoURL,
            contacts : [
                {
                    id: 2,
                    name: 'Josefina',
                    avatar: '/images/girl-1.webp',
                    messages: [
                        {
                            userId: 2,
                            text: 'Quickly come to the meeting room 1B, we have a big server issue!',
                            date: '4/20/17.',
                            time: '4:00 AM'
                        }, 
                        {
                            userId: 1,
                            text: 'I\'m having breakdast now, can\'t you wait for a 10 minutes?',
                            date: '4/20/17.',
                            time: '4:05 AM'
                        },
                        {
                            userId: 2,
                            text: 'We are losing money!',
                            date: '4/20/17.',
                            time: '4:10 AM'
                        }
                        
                    ]
                },
                {
                    id: 3,
                    name: 'Alice',
                    avatar: '/images/girl-2.webp',
                    messages: [
                        {
                            
                            userId: 2,
                            text: 'Life is like a box of chocolates.',
                            date: '4/22/17.',
                            time: '4:00 AM'
                        }, 
                        {
                            
                            userId: 1,
                            text: 'You say that every time I buy you these… ',
                            date: '4/22/17.',
                            time: '4:05 AM'
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Maria',
                    avatar: '/images/girl-3.webp',
                    messages: [
                        {
                            
                            userId: 2,
                            text: 'Can you go to the store and buy some chips?',
                            date: '4/22/17.',
                            time: '4:00 AM'
                        }, 
                        {
                            
                            userId: 1,
                            text: 'Sure…I’ll be back!',
                            date: '4/24/17.',
                            time: '4:05 AM'
                        }
                    ]
                }
            ]
        }
        
        localStorage.setItem('user', JSON.stringify(user));
    }

    return JSON.parse(localStorage.getItem('user'));
}