/*Q1*/
let i_am_array=[];
for(let i=1;i<=20;i++)
{
    i_am_array.push(i);
}

/*Print i_am_array*/
console.log(i_am_array)

/*Print each element of array*/
i_am_array.forEach((ele,index)=>
{
    console.log(ele)
})

/*Create a new array named teen_guna*/
let teen_guna=i_am_array.map((ele,index)=>{
    return ele*3
})

/*Print teen_guna array*/
console.log(teen_guna)

/*print length of teen_guna array*/
console.log(teen_guna.length)

/*Print type of both arrays*/
console.log("teen_guna array type is:",typeof(teen_guna))
console.log("i_am_array type is:",typeof(i_am_array))

/*Q2*/
let array_forty=[]
for(let i=1;i<=40;i++)
{
    array_forty.push(i)
}

/*Print array_forty with its length*/
console.log(array_forty)

/*Create chhotu_array*/
let chotu_array=array_forty.filter((ele,index)=>{
    if(ele%2==0)
        return ele
})

/*Print chotu_array with its length*/
console.log(chotu_array)

/*Q3*/
let country=["United States","India","Austrailia","Brazil","Germany"]

country.forEach((ele,index)=>{
    console.log(ele)
})

/*Q5*/

setInterval(() => {
    let date=new Date()
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    console.log("current time:",hours,":",minutes,":",seconds)
    
},1000);