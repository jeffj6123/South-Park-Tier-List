import React from "react";
import { IEvent, Subject } from "../utils/subject";

interface NotificationEventInternal {
    event: INotificationEvent;
    id: string;
}

export interface INotificationEvent extends IEvent {    
    data: {
        display: React.ReactNode,
        durationInMs?: number;
    }
}

export class NotificationService extends Subject {
    notifications: 
    constructor() {
        super()
    }

    addNotification(notification: INotificationEvent) {
        // this.notifyObservers(notification);

        
        setTimeout(() => {
            removeNotification(id);
            console.log(id)
        }, event.data.durationInMs || defaultTimeLimitForNotification)

    }

    removeNotification(id): string{
        setState({
            ...state,
            notifications: state.notifications.filter(notification => notification.id !== id)
        })
    }


}

export const NotificationServiceContext = React.createContext<NotificationService>(new NotificationService());