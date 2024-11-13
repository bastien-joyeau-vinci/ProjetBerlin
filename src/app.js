export class Main{
    getOneMinuteRow(minutes) {
        let res = ["O", "O", "O", "O"];
        let simpleMinutes = minutes % 5;
        for (let j = 0; j < simpleMinutes; j++) {
            res[j] = "Y";
        }
        return res.join("");
    }
}