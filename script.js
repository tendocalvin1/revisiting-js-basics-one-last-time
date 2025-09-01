// CALL AND APPLY METHOD. 
const person1 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }

}

const person2 = {
    firstName: "John",
    lastName: "Doe"

}


console.log(person1.fullName.call(person2, "Oslo", "Norway"));
console.log(person1.fullName.apply(person2, ["Oslo", "Norway"]));