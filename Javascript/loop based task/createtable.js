function table(){
    let num=parseInt(document.getElementById("n1").value)
    let start=parseInt(document.getElementById("s1").value)
    let end=parseInt(document.getElementById("e1").value)
    for(let i=start;i<=end;i++)
    {   console.log(i)
        document.getElementById("id1").innerHTML+=num+"*"+i+"="+num*i+"<br>"
        
    }

}