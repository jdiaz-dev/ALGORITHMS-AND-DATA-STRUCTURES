//https://www.geeksforgeeks.org/maximum-cpu-load-from-the-given-list-of-jobs/
class Job {
    constructor(start, end, cpuLoad){
        this.start = start
        this.end = end
        this.cpuLoad = cpuLoad
    }
}


const findMaxCPULoad = (jobs) => {

    jobs.sort((a, b) => a.start - b.start)
    const minHeap = []
    let cpuLoad = 0, currentCpuLoad = 0
    for(const job of jobs){
        console.log(job)
        while(minHeap.length > 0 && job.start > minHeap[0].end){
            currentCpuLoad -= minHeap.shift().cpuLoad
        }
        minHeap.push(job)
        currentCpuLoad += job.cpuLoad
        cpuLoad = Math.max(cpuLoad, currentCpuLoad)
    }

    return cpuLoad
}

// const input = [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)];
const input = [new Job(1, 3, 3), new Job(4, 5, 4), new Job(7, 9, 6)];
console.log(
  "Maximum CPU load at any time: " + findMaxCPULoad(input)
);

// This code is contributed by anskalyan3.
