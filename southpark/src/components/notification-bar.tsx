import React, { useContext, useEffect, useState } from 'react';
import { defaultTimeLimitForNotification } from '../constants';
import { INotificationEvent, NotificationService, NotificationServiceContext } from '../services/notification.service';


export function NotificationHandler() {
    const notificationService = useContext(NotificationServiceContext);
    const [state, setState] = useState<any>({
        notifications: []
    });

    const removeNotification = (id) => {
        setState({
            ...state,
            notifications: state.notifications.filter(notification => notification.id !== id)
        })
    }

    const addNotification = (event: INotificationEvent) => {

        const id = Math.random();
        state.notifications.push({event, id})
        setState({
            ...state,
            notifications: state.notifications
        })

    }

    useEffect(() => {
        const id = notificationService.addObserver((event) => { addNotification(event)});

        return () => notificationService.removeObserver(id);
    }, [])

    console.log(state.notifications)

    return (<div className='notification-container'>
            {state.notifications.map(notification => (<div key={notification.event.id} className="notification">
                {notification.event.data.display}
            </div>))}
    </div>)

}