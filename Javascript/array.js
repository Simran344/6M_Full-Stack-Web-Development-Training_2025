/*Q1 Create an array named 5 country*/
let country=["United States","India","Germany","Japan","Brazil"]

/*Print the entire array and its length*/
console.log(country);
console.log("length of array is:",country.length)

/*Print the country at position 3*/
console.log("country at position 3 is:",country[2])

/*Remove First country*/
country.shift()
/*Add a new country at the end*/
country.push("Canada")

/*Traverse the array*/
for(let i=0;i<country.length;i++)
{
    console.log(country[i])
}



/*Q2 Create an object named employee with keys*/
let employee={employee_name:"Sharan",dept:"Sales",join_year:2013}

/*Print object*/
console.log(employee)

/*Print dept of the employee*/
console.log(employee.dept)

/*delete join_year*/
delete employee.join_year

/*replace employee_name with your own name*/
country.employee_name="Simran"



/*Q3 Create a function with rest parameter*/
function rest(...others)
{
    for(let i=0;i<others.length;i++)
    {
        console.log(others[i])
    }
}
rest(2,3,4,5,6,7)


/*Q4 Create an array named numbers containing 50 numbers */
let numbers=[];
for(let i=1;i<=50;i++)
{
    numbers.push(i);
}
let small=[];
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]%3==0)
    {
        small.push(numbers[i])

    }
}
for(let j=0;j<small.length;j++)
{
    console.log(small[j])
}


/*Q5 Create an array named i_am_array of 20 elements*/
let i_am_array=[2,3,5,7,9,1,4,6,10,12,15,16,17,19,11,13,14,20,8,18]
/*Print i_am_array*/
console.log(i_am_array)

/*Print each element of i_am_array*/
for(let i=0;i<i_am_array.length;i++)
{
    console.log(i_am_array[i])
}

/*Create a new array named teen_gauna*/
let teen_gauna=[];
for(let i=0;i<i_am_array.length;i++)
{
    teen_gauna.push(i_am_array[i]*3)
}

/*Print teen_gauna array*/
console.log(teen_gauna)

/*Print length of teen_gauna array*/
console.log("length of teen_gauna array is",teen_gauna.length)

/*Print type of i_am_array and teen_gauna array*/
console.log("i_am_array type is:",typeof(i_am_array))
console.log("teen_gauna type is:",typeof(teen_gauna))

