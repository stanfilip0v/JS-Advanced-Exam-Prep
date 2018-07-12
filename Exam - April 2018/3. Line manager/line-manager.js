class LineManager {
    constructor(stops) {
        for (let stop of stops) {
            if (typeof stop['name'] !== 'string' || typeof stop['timeToNext'] !== 'number' || stop['name'] === '' || stop['timeToNext'] < 0) {
                throw new Error;
            }
            this.stops = stops;
            this.currentStop = 0;
            this.timeOnCourse = 0;
            this.delay = 0;
        }
    }

    get atDepot() {
        if(this.currentStop === this.stops.length - 1) {
            return true;
        }
        else {
            return false;
        }
    }

    get nextStopName() {
        if (!this.atDepot) {
            return this.stops[this.currentStop + 1].name;
        }
        else {
            return `At depot`;
        }
    }

    get currentDelay() {
        return this.delay;
    }

    arriveAtStop(minutes) {
        if (minutes < 0 || this.currentStop === this.stops.length - 1) {
            throw Error();
        }

        this.delay += minutes - this.stops[this.currentStop].timeToNext;
        this.timeOnCourse += minutes;
        this.currentStop++;

        if(this.currentStop === this.stops.length - 1){
            return false;
        }
        else {
            return true;
        }
    }

    toString() {
        if (this.currentStop === this.stops.length -1) {
            return `Line summary
- Course completed
- Stops covered: ${this.currentStop}
- Time on course: ${this.timeOnCourse} minutes
- Delay: ${this.delay} minutes`;
        }
        return `Line summary
- Next stop: ${this.nextStopName}
- Stops covered: ${this.currentStop}
- Time on course: ${this.timeOnCourse} minutes
- Delay: ${this.delay} minutes`;
    }
}
