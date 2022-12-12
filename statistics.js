class Statistics {

    constructor(...datas){
        this.datas = datas
    }

    // Counting the total number given
    nTotal(){
        if(this.datas == null) return 0;
        let count = 0;
        for (let i = 0; i < this.datas.length; i++)
            count++;
        return count
    }

    // Summing the given data
    sumNumber(){
        if(this.datas == null) return 0;
        let sum = 0;
        for (let i = 0; i < this.datas.length; i++)
            sum += this.datas[i];
        return sum;
    }

    // counting number of occurance of each item
    mostOccuringValue(){
        if(this.datas == null) return null;
        let modeDict = {}, modeArray = [], maxCount = 1
        for(let i = 0; i < this.datas.length; i++){
            var value = this.datas[i];
        if(modeDict[value] == null) modeDict[value] = 1;
        else modeDict[value]++;

        if(modeDict[value] > maxCount){
            modeArray = [value]
            maxCount = modeDict[value]
        } else if (modeDict[value] == maxCount){
            modeArray.push(value);
            maxCount = modeDict[value];
        }
      }
      return modeArray;
    }

    sortArray(){
        return this.datas.sort();
    }

    mode(){
        let number = this.mostOccuringValue();
        console.log(`The mode is: ${number}`);
    }

    mean(){
        let n = this.nTotal(), sum =this.sumNumber();
        console.log(`Mean is: ${sum / n}`);
    }

    median(){
        let n = this.nTotal();
        if(n % 2 == 0){
            let result = ((n / 2) + ((n / 2) + 1)) / 2
            console.log(`Median is: ${result}`);
        } else {
            let result = ((n +1) / 2)
            console.log(`Median is: ${result}`);
        }
    }

    range(){
        let arr = this.sortArray();
        let result = arr[arr.length - 1] - arr[0];
        console.log(`The range is: ${result}`);
    }

    squareDevition(){
        let sumQ = 0, num = this.nTotal(), mean = this.sumNumber()/num;
        let arr = this.datas;
        for (let i = 0; i < this.datas.length; i++){
            sumQ += Math.pow((arr[i] - mean), 2)
        }
        return sumQ;
    }

    varianceP(){
        let n = this.nTotal(), result = this.squareDevition() / n
        console.log(`population variance is: ${result}`);
    }
    varianceS(){
        let n = this.nTotal(), result = this.squareDevition() / (n - 1)
        console.log(`sample variance is: ${result}`);
    }
    SDsample(){
        console.log(`sample SD is: ${Math.sqrt((this.squareDevition()) / (this.nTotal() - 1))}`);
    }
    SDpopulation(){
        console.log(`sample SD is: ${Math.sqrt((this.squareDevition()) / this.nTotal())}`);
    }
}

const sta = new Statistics(1,3,3,4,2,2);
sta.mean();
sta.mode();
sta.median();
sta.range()
sta.varianceP();
sta.varianceS();
sta.SDsample();
sta.SDpopulation();
