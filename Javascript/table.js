/*Print table*/
function tab(n)
{
    for(let i=1;i<=10;i++)
    {
        console.log(n,"x",i ,"=",n*i)
    }
}
tab(5)

/*Q2 Print each letter of string */
function letter(name)
{
    for(var i=0;i<name.length;i++)
    {
        console.log(name[i]);
    }
}
letter("Simran")

/*Q3 Create a loop*/

for(var i=1;i<=1;i++)
{
    for(var j=1;j<=2;j++)
    {
        for(var k=1;k<=3;k++)
        {
            console.log(i,j,k)
        }
    }
}
