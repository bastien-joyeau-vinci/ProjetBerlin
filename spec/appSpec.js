import { Main } from "../src/app.js";

describe("Berlin function should return the Berlin hour of digital hour", function(){

    it("Test de 0 simples minutes", function(){
        const main = new Main();
        const result = main.getSimpleMinutes(0);
        expect(result).toEqual(['O', 'O', 'O', 'O'])
    })

    it("Test de 1 simples minutes", function(){
        const main = new Main();
        const result = main.getSimpleMinutes(1);
        expect(result).toEqual(['Y', 'O', 'O', 'O'])
    })

    it("Test de 2 simples minutes", function(){
        const main = new Main();
        const result = main.getSimpleMinutes(2);
        expect(result).toEqual(['Y', 'Y', 'O', 'O'])
    })

    it("Test de 3 simples minutes", function(){
        const main = new Main();
        const result = main.getSimpleMinutes(3);
        expect(result).toEqual(['Y', 'Y', 'Y', 'O'])
    })

    it("Test de 4 simples minutes", function(){
        const main = new Main();
        const result = main.getSimpleMinutes(4);
        expect(result).toEqual(['Y', 'Y', 'Y', 'Y'])
    })



})