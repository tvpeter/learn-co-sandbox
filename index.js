var word

word = "bird"

word = "dog"

//console.log(window.word)

const person = {
  name: "Awesome name",
  occupation: {
    title: "senior manager of Awesome",
    yearsHeld : 2
  },
  pets : [
    {
      kind: "dog",
      name : "fiona"
    },
    {
      kind: "cat",
      name : "ralph"
    }
    ]
  
}

console.log(person.occupation.yearsHeld);

function find(array, criteriaFn){
  let current = array
  let next = []
  
  while(current){
    
    if(criteriaFn(current)){
      return current
    }
    
    if(Array.isArray(current)){
    
    for(let i=0; i<current.length; i++){
      next.push(current[i])
    }
    
   
    current = next.shift()
  }
  return null
}}


















