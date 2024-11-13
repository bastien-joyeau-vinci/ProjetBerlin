import { Main } from "../src/app.js";

describe("getOneMinuteRow function should return the Berlin simple minutes of a digital hour", function () {
    const main = new Main();

    it("Test of 0 simple minutes", function () {
        const result = main.getOneMinuteRow(0);
        expect(result).toBe("OOOO");
    });

    it("Test of 1 simple minute", function () {
        const result = main.getOneMinuteRow(1);
        expect(result).toBe("YOOO");
    });

    it("Test of 2 simple minutes", function () {
        const result = main.getOneMinuteRow(2);
        expect(result).toBe("YYOO");
    });

    it("Test of 3 simple minutes", function () {
        const result = main.getOneMinuteRow(3);
        expect(result).toBe("YYYO");
    });

    it("Test of 4 simple minutes", function () {
        const result = main.getOneMinuteRow(4);
        expect(result).toBe("YYYY");
    });
});

describe("getFiveMinutesRow function should return the Berlin five minutes of a digital hour", function () {
    const main = new Main();

    it("Test of 0 minutes", function () {
        const result = main.getFiveMinutesRow(0);
        expect(result).toBe("OOOOOOOOOOO");
    });

    it("Test of 5 minutes", function () {
        const result = main.getFiveMinutesRow(5);
        expect(result).toBe("YOOOOOOOOOO");
    });

    it("Test of 10 minutes", function () {
        const result = main.getFiveMinutesRow(10);
        expect(result).toBe("YYOOOOOOOOO");
    });

    it("Test of 15 minutes", function () {
        const result = main.getFiveMinutesRow(15);
        expect(result).toBe("YYROOOOOOOO");
    });

    it("Test of 20 minutes", function () {
        const result = main.getFiveMinutesRow(20);
        expect(result).toBe("YYRYOOOOOOO");
    });

    it("Test of 25 minutes", function () {
        const result = main.getFiveMinutesRow(25);
        expect(result).toBe("YYRYYOOOOOO");
    });

    it("Test of 30 minutes", function () {
        const result = main.getFiveMinutesRow(30);
        expect(result).toBe("YYRYYROOOOO");
    });

    it("Test of 35 minutes", function () {
        const result = main.getFiveMinutesRow(35);
        expect(result).toBe("YYRYYRYOOOO");
    });

    it("Test of 40 minutes", function () {
        const result = main.getFiveMinutesRow(40);
        expect(result).toBe("YYRYYRYYOOO");
    });

    it("Test of 45 minutes", function () {
        const result = main.getFiveMinutesRow(45);
        expect(result).toBe("YYRYYRYYROO");
    });

    it("Test of 50 minutes", function () {
        const result = main.getFiveMinutesRow(50);
        expect(result).toBe("YYRYYRYYRYO");
    });

    it("Test of 55 minutes", function () {
        const result = main.getFiveMinutesRow(55);
        expect(result).toBe("YYRYYRYYRYY");
    });
});

describe("getOneHourRow function should return the Berlin simple hours of a digital hour", function () {
    const main = new Main();

    it("Test of 0 simple hours", function () {
        const result = main.getOneHourRow(0);
        expect(result).toBe("OOOO");
    });
    it("Test of 1 simple hour", function () {
        const result = main.getOneHourRow(1);
        expect(result).toBe("ROOO");
    });
    it("Test of 2 simple hours", function () {
        const result = main.getOneHourRow(2);
        expect(result).toBe("RROO");
    });
    it("Test of 3 simple hours", function () {
        const result = main.getOneHourRow(3);
        expect(result).toBe("RRRO");
    });
    it("Test of 4 simple hours", function () {
        const result = main.getOneHourRow(4);
        expect(result).toBe("RRRR");
    });
});

describe("getFiveHourRow function should return the Berlin Five hours of a digital hour", function () {
    const main = new Main();

    it("Test of 0 hours", function () {
        const result = main.getFiveHoursRow(0);
        expect(result).toBe("OOOO");
    });
    it("Test of 5 hours", function () {
        const result = main.getFiveHoursRow(5);
        expect(result).toBe("ROOO");
    });
    it("Test of 10 hours", function () {
        const result = main.getFiveHoursRow(10);
        expect(result).toBe("RROO");
    });
    it("Test of 15 hours", function () {
        const result = main.getFiveHoursRow(15);
        expect(result).toBe("RRRO");
    });
    it("Test of 20 hours", function () {
        const result = main.getFiveHoursRow(20);
        expect(result).toBe("RRRR");
    });
});

describe("getSeconds function should return the Berlin seconds of a digital hour", function () {
    const main = new Main();

    it("Test of 0 seconds", function () {
        const result = main.getSeconds(0);
        expect(result).toBe("R");
    });

    it("Test of 1 second", function () {
        const result = main.getSeconds(1);
        expect(result).toBe("O");
    });

    it("Test of 2 seconds", function () {
        const result = main.getSeconds(2);
        expect(result).toBe("R");
    });
});

describe("getWholeClock function should return the Berlin clock of a digital hour", function () {
    const main = new Main();

    it("Test of 20:36:37", function () {
        const result = main.getWholeClock(70597);
        expect(result).toBe("O\nRRRR\nOOOO\nYYRYYRYOOOO\nYOOO");
    });

});
