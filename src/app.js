export class Main{
    getOneMinuteRow(minutes) {
        let res = ["O", "O", "O", "O"];
        let simpleMinutes = minutes % 5;
        for (let j = 0; j < simpleMinutes; j++) {
            res[j] = "Y";
        }
        return res.join("");
    }

    getFiveMinutesRow(minutes){
        let res = ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"];
        let fiveMinute = Math.floor(minutes / 5);
        for (let j = 0; j < fiveMinute; j++) {
            if((j+1) % 3 == 0) res[j] = "R";
            else res[j] = "Y";
        }
        return res.join("");
    }
    getOneHourRow(hours) {
        let res = ["O", "O", "O", "O"];
        let hoursOn = hours % 5;
        for (let j = 0; j < hoursOn; j++) {
            res[j] = "R";
        }
        return res.join("");
    }
    getFiveHoursRow(hours){
        let res = ["O", "O", "O", "O"];
        let fiveHoursOn = Math.floor(hours / 5);
        for (let j = 0; j < fiveHoursOn; j++) {
            res[j] = "R";
        }
        return res.join("");
    }

    getSeconds(seconds) { 
        if(seconds%2 == 0) return "R"; return "O"; 
        }
    
    getWholeClock(timestamp){
        let date = new Date(timestamp*1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let res = [];
        res.push(this.getSeconds(seconds));
        res.push(this.getFiveHoursRow(hours));
        res.push(this.getOneHourRow(hours));
        res.push(this.getFiveMinutesRow(minutes));
        res.push(this.getOneMinuteRow(minutes));
        return res.join("\n");
    }
}