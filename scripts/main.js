/* Given two options of data structures - array or object - which should you use? 
You need to represent a red 2015 Ford Mustang in your code. */

// Answer: Object

/* Given two options of data structures - array or object - which should you use? 
You need to store list of animal names in a shelter. 
The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".*/

//Answer: Array

/*
Define an object for four family members, and put each object in an array 
named familyMembers. Each family member object that you create should have 
the same keys on them, but the values will be different. */

const familyMembers =
    [
        {
            name: "John",
            age:37,
            title: "Father"
        },
        {
            name: "Lorain",
            age:34,
            title: "Mother"
        },
        {
            name: "Austin",
            age:8,
            title: "Son"
        },
        {
            name: "Lilly",
            age: 3,
            title: "Daught"
        }
    ]


/* Given the object below, output each of the values to the console using dot notation. */
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

// console.log(wardrobe.height)
// console.log(wardrobe.manufacturer)
// console.log(wardrobe.contents)
// console.log(wardrobe.depth)
// console.log(wardrobe.width)

/* Add to the object */
// wardrobe.material = "Cedar"
// console.log(wardrobe.material)


/* Time to practice dot and square-bracket notation. 
Use the following object to complete the lightning exercises below. */

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

/* Use dot notation to output all of the dimensions of the 
Empire State Building to the console. */

// console.log(empireStateBuilding.height)
// console.log(empireStateBuilding.eastWestLength)
// console.log(empireStateBuilding.northSouthLength)

// const stories = "stories"
// console.log(empireStateBuilding[stories])
// const address = "address"
// console.log(empireStateBuilding[address])
// const squareFeet = "squareFeet"
// console.log(empireStateBuilding[squareFeet])
// const cost = "cost"
// console.log(empireStateBuilding[cost])
// const owner = "owner"
// console.log(empireStateBuilding[owner])
// const architect = "architect"
// console.log(empireStateBuilding[architect])

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

/* Output the names of the part-time instructors followed by the names of the full-time 
instructors in the console. */

// const partInstructors = nashvilleSoftwareSchool.instructors["partTime"]

// for (let i = 0; i < partInstructors.length; i++) {
//     console.log(partInstructors[i])
// }

// const fullTimeInstructors = nashvilleSoftwareSchool.instructors["fullTime"]
// for (let i = 0; i < fullTimeInstructors.length; i++) {
//     console.log(fullTimeInstructors[i])
// }

// const zoe = nashvilleSoftwareSchool.instructors["partTime"][0]
// console.log(zoe)

// const andy = nashvilleSoftwareSchool.instructors['fullTime'][4]
// console.log(andy)

console.log(`Hello`)