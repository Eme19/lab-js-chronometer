class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId =null;
   
  }

  start(printTimeCallback) {
    this.currentTime = 0;
    this.intervalId=null;

     this.intervalId = setInterval(
      () => {
        if(printTimeCallback){
          printTimeCallback();
        }
      
         this.currentTime +=1;
    },1000);
    
 }
 
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  
  }

  getSeconds() {
  return  this.currentTime % 60; 
  
}

  computeTwoDigitNumber(value) {
    value = value.toString();
       if(value.length === 1){
        return `0${value}`;
       }
       else if (value.length === 2){
        return value;
       }
    
  }

  stop() {
    this.intervalId; 
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    if(this.currentTime == 8){
      this.currentTime = 0
      return 0;
    }
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    return mm + ':' + ss;
  }
}

