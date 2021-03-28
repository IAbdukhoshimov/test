const exercise = require("../exercise1");

describe("answer", () => {
    it("should return a fizzbuzz when user gives 15 ", () => {
        const result = exercise.fizzBuzz(15);
        expect(result).toMatch(/FizzBuzz/);
    });

    it("should return a Fizz when user gives 3 ", () => {
        const result = exercise.fizzBuzz(3);
        expect(result).toMatch(/Fizz/);
    });

    it("should return a Buzz when user gives 5 ", () => {
        const result = exercise.fizzBuzz(5);
        expect(result).toMatch(/Buzz/);
    });
});
