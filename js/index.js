console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Mauro";
console.log(`The drivers name is ${hacker1}.`);

let hacker2 = "Konrad";
console.log(`The navigators name is ${hacker2}.`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else { 
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};

// Iteration 3: Loops

//3.1. 

hacker1 = hacker1.toUpperCase()

console.log(hacker1[0] + " " + hacker1[1] + " " + hacker1[2] + " " + hacker1[3] + " " + hacker1[4] + " " );

// more common way: 

let result = hacker1.split('').join(' ');
console.log(result);

// another way is.... : 

let output = " "
for (let i = 0; i < hacker1.length; i++){
    output += hacker1[i].toUpperCase() + " "; 
}
console.log(output.slice(0, 8));


//3.2. 

// stupid way... : 

console.log(hacker2[5] + hacker2[4] + hacker2[3] + hacker2[2] + hacker2[1] + hacker2[0]);

// best way ... : 

for (let i = hacker1.length - 1; i >= 0; i++){
    console.log(hacker1[i]);
}

//3.3. 

// best way: with the localeCompare() !! 

if (hacker1.localeCompare(hacker2) ==1) {
    console.log('Yo, the navigator goes first definitely.')
}else if (hacker1.localeCompare(hacker2) ==-1) {
    console.log("The driver's name goes first.")
} else {
    console.log("What?! You both have the same name?")
};

// another way to work is with: 

"a" < "b"
"aa" < "ab"
"aaa" < "aab"

// BONUS 1:

// Nr. 1

// on our knowlage: 

let lorem = "the paragraphs";  

let wordCount = 1; 
for (let i = 0; i < lorem.length; i++){
    if (lorem[i] === " ") {
        wordCount++;
    }
}
console.log(wordCount);

// better way: 
function countWords(text) {
    const arr = text.split(' ');
  
    return arr.filter(word => word !== '').length;
  };

  console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit magna, eu feugiat velit blandit pellentesque. Nulla ut sem nec sapien dapibus lobortis. Ut cursus id felis eget molestie. Aenean tristique nec quam id interdum. Duis quis nulla eu nulla ornare eleifend sit amet id nulla. Suspendisse velit dui, mollis vitae turpis hendrerit, mollis dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Phasellus non urna ut orci bibendum iaculis. Donec a dignissim nunc. Sed ac finibus justo. Proin ornare posuere quam ullamcorper tempor. Fusce sapien sapien, sagittis non fringilla eget, rhoncus non libero. Curabitur mattis nisi non lobortis ullamcorper. Ut sit amet commodo odio, in ultrices odio. Donec maximus commodo suscipit. Aliquam ullamcorper erat in erat gravida tristique. Duis mauris dui, iaculis nec neque a, pretium varius erat. Pellentesque suscipit viverra ornare. Aenean sit amet tincidunt mi. Integer blandit diam velit, sit amet ultricies nunc scelerisque in. Etiam nunc odio, placerat euismod nisi ut, bibendum aliquet metus. Vivamus ipsum magna, auctor eget tellus et, bibendum volutpat ipsum. Etiam sit amet lectus ac leo tincidunt euismod. Phasellus commodo massa eget velit facilisis, interdum vulputate dolor lobortis. Quisque luctus auctor rutrum. Aliquam erat volutpat. Pellentesque nulla erat, venenatis feugiat commodo ac, dignissim a tortor. Nullam blandit ante sed ipsum egestas congue. Pellentesque vel vestibulum risus, ut vehicula nisi. Aliquam risus est, eleifend ac pretium eu, pretium ultricies mi. Mauris aliquam porttitor mauris id semper."));

// Nr. 2 
let et = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit magna, eu feugiat velit blandit pellentesque. Nulla ut sem nec sapien dapibus lobortis. Ut cursus id felis eget molestie. Aenean tristique nec quam id interdum. Duis quis nulla eu nulla ornare eleifend sit amet id nulla. Suspendisse velit dui, mollis vitae turpis hendrerit, mollis dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Phasellus non urna ut orci bibendum iaculis. Donec a dignissim nunc. Sed ac finibus justo. Proin ornare posuere quam ullamcorper tempor. Fusce sapien sapien, sagittis non fringilla eget, rhoncus non libero. Curabitur mattis nisi non lobortis ullamcorper. Ut sit amet commodo odio, in ultrices odio. Donec maximus commodo suscipit. Aliquam ullamcorper erat in erat gravida tristique. Duis mauris dui, iaculis nec neque a, pretium varius erat. Pellentesque suscipit viverra ornare. Aenean sit amet tincidunt mi. Integer blandit diam velit, sit amet ultricies nunc scelerisque in. Etiam nunc odio, placerat euismod nisi ut, bibendum aliquet metus. Vivamus ipsum magna, auctor eget tellus et, bibendum volutpat ipsum. Etiam sit amet lectus ac leo tincidunt euismod. Phasellus commodo massa eget velit facilisis, interdum vulputate dolor lobortis. Quisque luctus auctor rutrum. Aliquam erat volutpat. Pellentesque nulla erat, venenatis feugiat commodo ac, dignissim a tortor. Nullam blandit ante sed ipsum egestas congue. Pellentesque vel vestibulum risus, ut vehicula nisi. Aliquam risus est, eleifend ac pretium eu, pretium ultricies mi. Mauris aliquam porttitor mauris id semper."

let count = (et.match(/to/g) || []).length;
console.log(count);

// BONUS 2: 

let phraseToCheck = "anna"

let reversePhraseToCheck = ""
    for (let i = phraseToCheck.length - 1; i >= 0; i--) {
        reversePhraseToCheck+= phraseToCheck[i];
    } if (phraseToCheck == reversePhraseToCheck){
        console.log("It is a palindrome");
    } else {
        console.log("It is not a palindrome");
    }
    

