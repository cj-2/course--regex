const text = "1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

const l = console.log;

const regNine = RegExp("9");

l("Methods of RegExp:");
l(regNine.test(text)); // true or false
l(regNine.exec(text)); // information about reg

const regLetter = /[a-f]/g; // all letters between a and f

l("Methods of String:");
l(text.match(regLetter));
l(text.search(regLetter)); // index of first match
l(text.replace(regLetter, "found"));
l(text.split(regLetter));
