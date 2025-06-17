
  let string = "the child walked to the market"
    let result = string.charAt(0).toUpperCase() + string.slice(1);
    console.log({result})

    let characterToAdd = "m";
    let answer = string.slice(0, 2) + characterToAdd + string.slice(2) 
    console.log({answer})

    let intro = "hello world, hello Javascript!"
    let count = (intro.match(/hello/g) || []).length;
    console.log({count})

    let lastThree = string.slice( -3);
    console.log(lastThree);

    let firstThree = string.slice(0, 3)
    console.log({firstThree});


    let sortString = string.split("").sort().join("");
    console.log(sortString)

    let removeSpaces = string.replace(/\s/g, "");
    console.log({removeSpaces});

    let salutation = "greeting";
    let index = salutation.indexOf("t")
    console.log({index});

    let deletionBegin = string.slice(2);
    console.log({deletionBegin});


    let deletionLast = string.slice(0, -2)
    console.log({deletionLast})