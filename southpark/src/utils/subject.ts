export type SubjectCallBacK = (IEvent) => void

export interface IEvent {
    data: any;
}

export class Subject {
    observers: ((event: IEvent) => void)[] = [];
    subMap: Record<string, SubjectCallBacK> = {};

    addObserver(obs: SubjectCallBacK): number {
        this.observers.push(obs);
        const id = Math.random();
        this.subMap[id] = obs;
        return id;
    }

    notifyObservers(event: IEvent) {
        this.observers.forEach(o => o(event))
    }

    removeObserver(id: number) {
        this.observers = this.observers.filter(obs => obs !== this.subMap[id]);
    }
}