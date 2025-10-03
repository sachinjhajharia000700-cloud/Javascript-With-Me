let a = "saka";
let b = "kaka";
let c = a + b;
console.log(c); // ye to normal example hai and ye to saab janta bhi hai ki 2 string  ko add karne per  dono merge ho jati hai

let d = "raka";
let e = "laka";
console.log(`name = ${d}  class = ${e}`);

const gameName = new String("sachu");
console.log(gameName.length);
console.log(gameName.replace("a", "AAA"));
console.log(gameName.toUpperCase());

let smart = "                                                   ashish                                                                 ";
let extrasmart = "anup";
let mindperson = smart + extrasmart;
console.log(mindperson);
console.log(smart.includes(`sundar`));
console.log(smart[2]);
console.log(smart.slice(0, 4));
console.log(smart.substring(3,6));  //esme jo 2 value hai uss se 1 value kaam hi use hogi yaad rakhna always like esme 6 hai to 5 taak hi use me ayegi  ess me sidha sa hai ke 3 se suru hohi or 5 tak actual me chalegi jisme 3 include hoga 
console.log(extrasmart.indexOf("a"));
console.log(smart.repeat(10));
console.log(new Date (1/2/2025).toDateString());
console.log(smart.trimEnd());
console.log(smart.trimStart());
console.log(smart.toLocaleString());
let mytimestamp =  Date.now()