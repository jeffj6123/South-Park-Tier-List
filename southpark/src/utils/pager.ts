export class Pager {
    activeIndex: number = 0;
    currentCursor: string;
    hasNext: boolean;

    previousPages: [];

    constructor(public params) {

    }



    reset() {
        this.previousPages = [];
        this.activeIndex = 0;
    }

}