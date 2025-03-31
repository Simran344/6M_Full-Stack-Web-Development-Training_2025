let songs=[
    {
        song_name:"Chaleya",singer:"Arijit Singh",language:"Hindi"
    }
]
songs.push({song_name:"Rattan Lambiyaa",singer:"AP Dhillon",language:"Punjabi"},
{song_name:"Kesariya",singer:"Arijit Singh",language:"Hindi"},
{song_name:"Vibe",singer:"Diljit Dosanjh",language:"Punjabi"},
{song_name:"Tera Ban Jaunga",singer:"Akhil Sachdeva",language:"Hindi"},
{song_name:"Lehnga",singer:"Jass Manak",language:"Hindi"})

/*print song,singer name,language by for of loop*/
for(let i of songs)
{
    console.log(i)
}
/*print song,singer name,language by for in loop*/
for(let i in songs)
{
    console.log(songs[i])
}
/*print song,singer name,language by for loop*/
for(let i=0;i<songs.length;i++)
{
    console.log(songs[i].song_name+" "+songs[i].singer+" "+songs[i].language)
}

/*Print song name at location 3*/

console.log(songs[2].song_name)


/*Q2 create a three dimensional array */

let arr=[
    [[1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
    ],
    [[16,17,18],
    [19,20,21],
    [22,23,24]],
    [
        ["simran","khushi","purva","sharan","jashan"],
        ["apple","pear","banana","grapes","strawberry"]
    ]
]
/*Print elements of three dimensional array*/
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
       
        for(let k=0;k<arr[i][j].length;k++)
        {
            console.log(arr[i][j][k])
        }
    }
}

/*Q3 Create an object of food items*/
let foodItems={
    veg:{
        w:"wheat",
        c:"cheese"
    },
    non_veg:{
        ck:"chicken kabab",
        ec:"egg cury"

    }
}
/*Write syntax for printing cheese*/
console.log(foodItems.veg.c)

/*Q4*/
 function flatten(Array){
        let flatArray=Array.flat(3)
        console.log(flatArray)

}
 const nestedArray=[1,[2,[3,[4,5]]]]
 flatten(nestedArray)
