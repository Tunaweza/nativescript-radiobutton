var RadioGroup = require("@webileapps/nativescript-radiobutton").RadioGroup;
var radiogroup = new RadioGroup();

describe("greet function", function() {
    it("exists", function() {
        expect(radiogroup.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(radiogroup.greet()).toEqual("Hello, NS");
    });
});