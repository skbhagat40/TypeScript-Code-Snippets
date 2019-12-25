/**
 * Person class
 */
var Person = /** @class */ (function () {
    function Person(person) {
        this.name = person.name;
        this.age = person.age;
    }
    return Person;
}());
/**
 * Implement builder pattern
 */
var Builder = /** @class */ (function () {
    function Builder(name, age) {
        if (name === void 0) { name = ''; }
        if (age === void 0) { age = 0; }
        this.name = name;
        this.age = age;
    }
    Builder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Builder.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    Builder.prototype.build = function () {
        return new Person(this);
    };
    return Builder;
}());
var builder = new Builder();
var person = builder.setName('Shailesh').setAge(20).build();
console.log('person after building');
console.log(person);
console.log(person.constructor.name);
