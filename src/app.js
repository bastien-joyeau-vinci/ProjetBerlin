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
}