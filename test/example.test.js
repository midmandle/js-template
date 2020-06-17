import Example from "../src/example";
describe('Example', () => {
    it("should do a thing", () => {
        const example = Example();
        expect(example.doAThing()).toEqual(true);
    });
});