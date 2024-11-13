import { Main } from "../src/app.js";

describe("getOneMinuteRow function should return the Berlin simple minutes of a digital hour", function () {
  const main = new Main();

  it("Test de 0 simple minutes", function () {
    const result = main.getOneMinuteRow(0);
    expect(result).toBe('OOOO');
  })

  it("Test de 1 simple minutes", function () {
    const result = main.getOneMinuteRow(1);
    expect(result).toBe('YOOO');
  })

  it("Test de 2 simple minutes", function () {
    const result = main.getOneMinuteRow(2);
    expect(result).toBe('YYOO');
  })

  it("Test de 3 simple minutes", function () {
    const result = main.getOneMinuteRow(3);
    expect(result).toBe('YYYO');
  })

  it("Test de 4 simple minutes", function () {
    const result = main.getOneMinuteRow(4);
    expect(result).toBe('YYYY');
  })

})

describe("getFiveMinutesRow function should return the Berlin five minutes of a digital hour", function () {

  const main = new Main();

  it("Test de 0 minutes", function () {
    const result = main.getFiveMinutesRow(0);
    expect(result).toBe('OOOOOOOOOOO');
  })

  it("Test de 5 minutes", function () {
    const result = main.getFiveMinutesRow(5);
    expect(result).toBe('YOOOOOOOOOO');
  })

  it("Test de 10 minutes", function () {
    const result = main.getFiveMinutesRow(10);
    expect(result).toBe('YYOOOOOOOOO');
  })

  it("Test de 15 minutes", function () {
    const result = main.getFiveMinutesRow(15);
    expect(result).toBe('YYROOOOOOOO');
  })

  it("Test de 20 minutes", function () {
    const result = main.getFiveMinutesRow(20);
    expect(result).toBe('YYRYOOOOOOO');
  })

  it("Test de 25 minutes", function () {
    const result = main.getFiveMinutesRow(25);
    expect(result).toBe('YYRYYOOOOOO');
  })

  it("Test de 30 minutes", function () {
    const result = main.getFiveMinutesRow(30);
    expect(result).toBe('YYRYYROOOOO');
  })

  it("Test de 35 minutes", function () {
    const result = main.getFiveMinutesRow(35);
    expect(result).toBe('YYRYYRYOOOO');
  })

  it("Test de 40 minutes", function () {
    const result = main.getFiveMinutesRow(40);
    expect(result).toBe('YYRYYRYYOOO');
  })

  it("Test de 45 minutes", function () {
    const result = main.getFiveMinutesRow(45);
    expect(result).toBe('YYRYYRYYROO');
  })

  it("Test de 50 minutes", function () {
    const result = main.getFiveMinutesRow(50);
    expect(result).toBe('YYRYYRYYRYO');
  })

  it("Test de 55 minutes", function () {
    const result = main.getFiveMinutesRow(55);
    expect(result).toBe('YYRYYRYYRYY');
  })


})

describe("getOneHourRow function should return the Berlin simple hours of a digital hour", function(){
    const main = new Main();

    it("Test de 0 simple heure", function(){
        const result = main.getOneHourRow(0);
        expect(result).toBe('OOOO');
    })
    it("Test de 1 simple heures", function(){
        const result = main.getOneHourRow(1);
        expect(result).toBe('ROOO');
    })
    it("Test de 2 simple heures", function(){
        const result = main.getOneHourRow(2);
        expect(result).toBe('RROO');
    })
    it("Test de 3 simple heures", function(){
        const result = main.getOneHourRow(3);
        expect(result).toBe('RRRO');
    })
    it("Test de 4 simple heures", function(){
        const result = main.getOneHourRow(4);
        expect(result).toBe('RRRR');
    })
})

describe("getFiveHourRow function should return the Berlin Five hours of a digital hour", function(){
    const main = new Main();

    it("Test of 0  heure", function(){
        const result = main.getOneHourRow(4);
        expect(result).toBe('RRRR');
    })

    

})