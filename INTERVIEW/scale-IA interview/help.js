const linkedList = {
    value: 0,
    next: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: { value: 0, next: null },
            },
          },
        },
      },
    },
  };


const isPalindrome = (linkedList) => {

    let low = linkedList, high = linkedList

    while(high && high.next ){    
        low = low.next
        high = high.next.next 
    }

    let prev = null, current = low
    while(current !== null){
        let nextTemp = current.next
        current.next = prev
        prev = current
        current = nextTemp
    }

    while(prev != null){
        if(prev.value !== linkedList.value) return false
        prev = prev.next
        linkedList = linkedList.next 
    }
    return true
}

const res = isPalindrome(linkedList)
console.log(res)


class Job {
  constructor(start, end, job){
    this.start = start
    this.end = end
    this.job = job
  }
}

const maxCPUload = (jobs) => {

  jobs.sort((first, second) => first.start > second.start? 1: -1)

  const minHeap = []
  let cpuLoad = 0, currentCpuLoad = 0
  for(const job of jobs){
    while(minHeap.length > 0 && job.start > minHeap[0].end){
      currentCpuLoad -= minHeap.shift().job
      job
    }
    minHeap.push(job)
    currentCpuLoad += job.job
    currentCpuLoad
    cpuLoad = Math.max(cpuLoad, currentCpuLoad)
  }
  cpuLoad
  return cpuLoad
}

const input = [ new Job(1, 3, 3), new Job(2, 5, 4), new Job(1, 9, 6)];
maxCPUload(input)