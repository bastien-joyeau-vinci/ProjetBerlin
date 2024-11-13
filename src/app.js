export class Main{
    getOneMinuteRow(minutes) {
        let res = ["O", "O", "O", "O"];
        let i = minutes % 5;
        for (let j = 0; j < i; j++) {
            res[j] = "Y";
        }
        return res.join("");
    }
}