const lib = require("../lib");

describe("absolute", () => {
    it("should return a positive when user gives positive value", () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    it("should return a positive when user gives negative value", () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it("should return a 0 when user gives 0 ", () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe("greet", () => {
    it("should return the greating message", () => {
        const result = lib.greet("Ikhtiyor");
        expect(result).toMatch("Ikhtiyor");
    });
});

describe("getCurrencies", () => {
    it("should return  supported currencies", () => {
        const result = lib.getCurrencies();

        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        expect(result[0]).toBe("USD");
        expect(result[1]).toBe("AUD");
        expect(result[2]).toBe("EUR");
        expect(result.length).toBe(3);

        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");

        expect(result).toEqual(["USD", "AUD", "EUR"]);
    });
});

describe("getProduct", () => {
    it("should return the product with given id", () => {
        const result = lib.getProduct(1);
        expect(result).toEqual({ id: 1, price: 10 });
    });
});

describe("registerUser", () => {
    it("should throw if you username is falsy", () => {
        const args = [null, undefined, NaN, "", 0, false];
        args.forEach((a) => {
            expect(() => {lib.registerUser(a)}).toThrow();
        });
    });
});

