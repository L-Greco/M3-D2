let songs = []
window.onload = () => {
    fetchAlbums()
}
const fetchAlbums = () => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "68d37cf143msh657f425833acafdp1a1084jsne318559991e9",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then((res)    =>  res.json()  )
    .then( (res) => {
        console.log("resolved")
        console.log(res)
        songs = res.data
    } )
}

const fetchEminem = function () {
    const main = document.getElementById("related")
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "68d37cf143msh657f425833acafdp1a1084jsne318559991e9",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }).then(res=>res.json())
      .then(data => {
        const row = document.getElementById("row")
        main.classList.remove("d-none")
        row.innerText = ""
        
        for (let i = 0; i <songs.length; i++){
            const song = songs[i]
            const songDiv = document.createElement("div")
            songDiv.classList.add("col-12","col-sm-6","col-md-3","col-lg-2","pr-0","pl-0","pl-sm-2","text-center")
            const songImg = document.createElement("img")
            songImg.src= song.album.cover_big
            songImg.classList.add("img-fluid","albumImg")
            songDiv.appendChild(songImg)
            const songPar = document.createElement("p")
            songPar.classList.add("title","text-center","mt-4","mb-1","mt-md-2")
            songPar.innerText= song.title
            songDiv.appendChild(songPar)
            row.appendChild(songDiv)

        }
        main.classList.remove("d-none")
      })
      .catch(err => {
        const row = document.querySelector("#row")
        row.innerText = "Cannot load the books list"
        console.log("THIS IS THE CATCH CLAUSE", err)
        // main.classList.add("d-none")
    })
}
