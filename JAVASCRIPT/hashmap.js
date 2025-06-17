// Find oun if two words are anagrams

let firstStr = "sale";
let secondStr = "sale";
let fMap = {};
let sMap = {};

firstStr.split().forEach(character => {
    fMap[character] ++;
});

secondStr.split().forEach(character => {
    sMap[character]++;
});

if(fMap === sMap){
    console.log("true");
    
} else {
    console.log("false");
    
};

