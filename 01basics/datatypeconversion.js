let  score = "33abd";
console.log(typeof score);
console.log((score));



// abb 1 example dekhe ge jisme ki hum 1 important concept samjhe ge 
// let see what happen 


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// lets see some points ager me score me true 
//  likhu to typeof karne me 1 ayega  and false ka 0 ayega second ye  hai ke ager me null likhu to type of 0 ayega and undefined likhu to NaN ayega
//  lets see with example:--
// true => 1 
// 1 =>true
// 0=>false
// false=> 0  
// null => NaN
// undefined => NaN
// string =>number
// number =>string 




// ****************************OPERATIONS**********************************



let value = 3;
let negvalue = -value;
console.log(negvalue);



let str1 = "hello";
let str2 =  " hitesh";
 let str3 = str1 + str2;
console.log(str3);


// aab kuch condition dekhte hai jo important bhi hai 
 console.log("1"+ 2);   //12 ager string phele hai to second number ko bhi as astring conert kar ke merge ho jayegi jese ki example me dekh sakte hai 1 string and 2 no. hai and output 12 hai 
console.log(1+ "2");  //12 ager baad me bhi string hai to vo phele wali value ko string me convert karta hai add merge ho jata hai 
console.log("1" + 2 + 2);  //122  ager 3 values hai and phele hi value string hai to fer age vali dono values ko vo string me convert karke merge kar legi and at the end answer aap dekh hi sakte hai 
console.log(1 + 2 + "2");  //32 esme aap dekh sakte hai ki last value string hai esme kuch alag ye hua hai ki phele 2 no values ko vo number hi rhene degi but at the end vo dono ko add karegi and last me merge karegi 



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



//stack(primitive),heap(non - primitive )
//primitive data type = boleant ,null ,undefined,bolean ,etc
//non - primitive data type = function ,objecty &arrays


let aUser = "kaka";
let bUser = aUser ;
bUser = "saka";
console.log(bUser);
console.log(aUser);
// ess se ye pata chalta hai ki aap primitive datatype me kuch bhi change karlo but uski main value change nhi hoti jese ki aap ees example dekh sakte hai ki aUser ki value change nhi hui hai baas usne  apna  1 copy   diya hai only 

let userone = {
    email: "user@gmail.com",
    upi :"user@ybl"
} 


let usertwo =  userone;
 usertwo.email = "ashiy@google.com";
 console.log(userone);
 console.log(usertwo);

 //esme haam log ye dekh sakte hai ke dono ko last me console karaya gay to dono ki value sepreate nhi ayyi eska mtlaab non - primitive me 1 data apni refrence deta hai na ki apni copy 
 




