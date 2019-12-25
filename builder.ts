/**
 * Person class
 */

class Person {
    name: string;
    age: number;

    constructor(person: Person) {
        this.name = person.name;
        this.age = person.age;

    }
}

export declare interface Builder {
    build: () => any;
}

/**
 * Implement builder pattern
 */
class PersonBuilder implements Builder{
    name: string;
    age: number;

    constructor(name = '', age = 0) {
        this.name = name;
        this.age = age;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    build() {
        return new Person(this);
    }
}

const builder = new PersonBuilder();
const person: any = builder.setName('Shailesh').setAge(20).build();
console.log('person after building');
console.log(person);
console.log(person.constructor.name);
