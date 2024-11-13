import { Main } from "../src/app.js";

describe("getOneMinuteRow function should return the Berlin simple minutes of a digital hour", function(){
    const main = new Main();

    it("Test de 0 simple minutes", function(){
        const result = main.getOneMinuteRow(0);
        expect(result).toBe('OOOO');
    })

    it("Test de 1 simple minutes", function(){
        const result = main.getOneMinuteRow(1);
        expect(result).toBe('YOOO');
    })

})