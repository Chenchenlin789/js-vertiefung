//Lev1_1
//Gib mit Hilfe von String concatenation oder Template literals einen Satz in der Konsole und in der HTML aus, der diese Variablen nutzt.
let Name = "chen"
let Alter = 30
let Geburtsort = "Asia" 
let Größe = "164cm" 
let Hobbys = "yoga"
let Lieblingsessen = "japanese food"
let Lieblingsjahreszeit = "summer"
//String concatenation
console.log("my name is" + Name + "and I am " + Alter+ " old.")
document.write("my name is" + Name + "and I am" + Alter+ " old." + "<br>")
//Template literals
console.log (`my name is ${Name} I am from ${Geburtsort} and my favorite food is ${Lieblingsessen}. I enjoy practicing ${Hobbys} `)
document.write (`my name is ${Name} I am from ${Geburtsort} and my favorite food is ${Lieblingsessen}. I enjoy practicing ${Hobbys} <br> <br> <br>`)



//Lev1_2
//Schreibe mit Hilfe von String concatenation und Template literals. Jeder sich wiederholende Reim und Refrain soll durch eine Variable ersetzt werden. 
let lunatic = "lunatic is";
let Ai = "And if "
let darkSide = "I'll see you on the dark side of the moon";
let hall = "hall";
let head = "in my head";
let door = "You lock the door";
let paperboy = "the paperboy brings more";
let and = "And";
let the = "The";
let first = "Remembering games and daisy chains and laughs"
let second = "The paper holds their folded faces to the floor"
let fourth = "You raise the blade, you make the change"


document.write (the+ " "+ lunatic + "is on the grass"+ "<br>" + the+ " "+ lunatic + "is on the grass"+ "<br>")
document.write (`${first} <br> Got to keep the loonies on the path <br><br>`)

document.write (the+ " "+ lunatic + " in the " + hall + "<br>" + the+ " "+ lunatic+  " in my " + hall +"<br>")
document.write (`${second}  <br>${and} every day  ${paperboy} <br><br>`)

document.write (Ai + "the dam breaks open many years too soon" +"<br>"+ Ai + "there is no room upon the hill"+"<br>")
document.write (`${Ai} your head explodes with dark forebodings too <br> ${darkSide} <br><br>`)

document.write (`${the} ${lunatic} is ${head} <br> ${the} ${lunatic} is ${head}<br>`)
document.write (`${fourth} <br> You rearrange me 'til I'm sane ${door} <br> ${and} throw away the key  <br> ${the}re's someone ${head} but it's not me`)







