/* // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
    if(name == contacts['firstName'] && prop == contacts['prop']){
  
      return contacts['firstName']
  
    }else if(name != contacts['firstName']){
  
      return 'No such contact'
  
    }else {
  
      return 'No such property'
  
    }
  
    // Only change code above this line
  } */
  
  //lookUpProfile('Bob', 'potato');


  let num =1;

function show(){

    console.log("HI", num);
    num++;
    show();
};

show()