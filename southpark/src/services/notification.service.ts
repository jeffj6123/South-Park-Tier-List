import React from "react";
import { defaultTimeLimitForNotification } from "../constants";
import { IEvent, Subject } from "../utils/subject";

interface NotificationEventWithId {
    event: INotificationEvent;
    id: string;
}

export interface INotificationListEvent {
    data: NotificationEventWithId[];
}

export interface INotificationEvent extends IEvent {    
    data: {
        display: React.ReactNode,
        durationInMs?: number;
    }
}

export class NotificationService extends Subject {
    notifications: NotificationEventWithId[] = [];
    constructor() {
        super()
    }

    addNotification(notification: INotificationEvent) {
        const id = Math.random().toString();
        
        this.notifications.push({
            event: notification,
            id
        })

        setTimeout(() => {
            this.removeNotification(id);
        }, notification.data.durationInMs || defaultTimeLimitForNotification)

        this.sendNotifications();
    }

    removeNotification(id: string){
        this.notifications = this.notifications.filter(notification => notification.id !== id)
        this.sendNotifications();
    }

    private sendNotifications() {
        this.notifyObservers({
            data: this.notifications
        });
    }
}

export const NotificationServiceContext = React.createContext<NotificationService>(new NotificationService());