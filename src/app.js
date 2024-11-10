export class Main{
    getSimpleMinutes(minutes) {
        const lamps = ['O', 'O', 'O', 'O'];

        for(let i = 0; i<minutes; i++){
            lamps[i] = 'Y';
        }

        return lamps;
    }
}