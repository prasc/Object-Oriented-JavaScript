class StopWatch {
    constructor() {
        let startime, endTime, running, duration = 0;

        this.start = function () {
            if (running)
                throw new Error('Stopwatch has already started.');

            running = true;

            startTime = new Date();
        };

        this.stop = function () {
            if (!running)
                throw new Error('Stopwatch is not started.');

            runninf = false;

            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        };

        this.reset = function () {
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;
        };

        Object.defineProperty(this, 'duration', {
            get: function () { return duration; }
        })
    }
}


const sw = new StopWatch();

//duration
// reset
//start
// stop

// initially duration = 0;
// sw.start() can only be called once
// sw.stop()

// sw.duration should be how many seconds passed

// sw.reset will take it back to 0