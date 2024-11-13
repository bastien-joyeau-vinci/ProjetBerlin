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

    it("Test de 2 simple minutes", function(){
        const result = main.getOneMinuteRow(2);
        expect(result).toBe('YYOO');
    })

    it("Test de 3 simple minutes", function(){
        const result = main.getOneMinuteRow(3);
        expect(result).toBe('YYYO');
    })

})