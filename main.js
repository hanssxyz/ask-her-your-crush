onload = () =>{
        document.body.classList.remove("container");
};

// Select the audio element
const audio = new Audio("./music/fav.mpeg");

// Ensure the music loops
audio.loop = true;

// Automatically play music when the page loads
window.addEventListener("load", () => {
    audio.play().catch(error => console.log("Playback error:", error));
});