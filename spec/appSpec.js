import { Main } from "../src/app.js";

describe("getOneMinuteRow function should return the Berlin simple minutes of a digital hour", function(){
    const main = new Main();

    it("Test de 0 simple minutes", function(){
        const result = main.getOneMinuteRow(0);
        expect(result).toBe('OOOO');
    })

})