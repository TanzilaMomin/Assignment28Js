const  objnames=[
    {fname:"Ayushman",lname:"Khurana"},
    {fname:"Sunny",lname:"Deol"},
    {fname:"Rajkumar",lname:"Rao"}, 
    {fname:"Annu",lname:"Kapoor"}, 
    {fname:"Ajit",lname:"Khan"} ,
    
]
const result=objnames.map((item)=>`${item.fname} ${item.lname}`);
console.log(result);

const mrresult=objnames.map((item)=>`Mr.${item.fname} ${item.lname}`);
console.log(mrresult);

const sirresult=objnames.map((item)=>`Mr.${item.fname} ${item.lname} Sir`);
console.log(sirresult);