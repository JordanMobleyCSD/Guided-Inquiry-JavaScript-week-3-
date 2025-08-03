function piiDatabase(firstName, lastName, email, ssn) {
    // creating object to host the information/data
    const pii = {
        firstName: firstName,
        lastName: lastName, 
        email: email, 
        ssn: ssn
    };
    // When pulling the person's information you get general information based on the GI example of only getting generic info for shipping 
    // or email purposes. Only get access to ssn if running specific command, otherwise you will not see ssn data retrieved 
    return {
        getName: function() {
            return `Name: ${pii.firstName} ${pii.lastName}, Email: ${pii.email}`;
        },
        getSSN: function() {
            return `SSN: ${pii.ssn}`;
        }
    };
}

const apprentice1 = piiDatabase("Jordan", "Mobley", "jmob@gmail.com", "123-123-1234");
const apprentice2 = piiDatabase("Latori", "Miller", "lmil@gmail.com", "321-321-4321");

console.log(apprentice1.getName())
console.log(apprentice2.getName())
console.log(apprentice1.ssn)
console.log(apprentice2.ssn)
console.log(apprentice1.getSSN())
console.log(apprentice2.getSSN())