import React, { useContext, useEffect, useState } from 'react';
import { INotificationListEvent, NotificationServiceContext } from '../services/notification.service';


export function NotificationHandler() {
    const notificationService = useContext(NotificationServiceContext);
    const [state, setState] = useState<any>({
        notifications: []
    });

    useEffect(() => {
        const id = notificationService.addObserver((event: INotificationListEvent) => { 
            setState({
                ...state,
                notifications: event.data
            })
        });

        return () => notificationService.removeObserver(id);
    }, [])

    return (<div className='notification-container'>
            {state.notifications.map(notification => (<div key={notification.event.id} className="notification slide-in">
                {notification.event.data.display}
            </div>))}
    </div>)

}