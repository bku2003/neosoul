const neoSoulSongs = [
    "Bag Lady by Erykah Badu",
    "Untitled (How Does It Feel) by D'Angelo",
    "Brown Sugar by D'Angelo",
    "On & On by Erykah Badu",
    "Ascension by Maxwell",
    "He Loves Me by Jill Scott",
    "Lady by D'Angelo",
    "Golden by Jill Scott",
    "All That I Can Say by Mary J. Blige",
    "Say Yes by Floetry"
];

function generate() {
    const name = document.getElementById("nameInput").value;
    const songRecommendation = document.getElementById("songInput").value;
    
    if (!name || !songRecommendation) {
        document.getElementById("output").textContent = "plz provide both your name and a song recommendation !";
        return;
    }

    const randomSong = neoSoulSongs[Math.floor(Math.random() * neoSoulSongs.length)];
    document.getElementById("output").textContent = `thtx for putting me on, ${name}! check this out: ${randomSong}`;

    restyle();
}

function restyle() {
    const output = document.getElementById("output");
    

    const colors = ["#ff6347", "#4682b4", "#6a5acd", "#32cd32", "#ffd700", "#8a2be2"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];



    output.style.color = randomColor;
    output.style.fontSize = Math.floor(Math.random() * 10 + 20) + "px";
    output.style.transform = `rotate(${Math.floor(Math.random() * 10 - 5)}deg)`;
}