function divCreate() {
    let num = parseInt(document.getElementById("id1").value)

    if (num % 2 == 0) {
        for (let i = 1; i <= num; i++) {
            let div = document.createElement("div")
            div.style.backgroundColor = "red"
            div.style.height = "100px"
            div.style.width = "200px"
            div.style.margin="20px"
            document.getElementById("id2").appendChild(div)
        }
    }
    else{
        for(let i=1;i<=num;i++){
            let div = document.createElement("div")
            div.style.backgroundColor = "yellow"
            div.style.height = "100px"
            div.style.width = "200px"
            div.style.margin="20px"
            document.getElementById("id2").appendChild(div)

        }
    }
}