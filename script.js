let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function Allvoices() {
    voices = window.speechSynthesis.getVoices();

    console.log("Voices:", voices);
    speech.voice = voices[0];


// clear existing options
    voiceSelect.innerHTML = "";


// Filter voices for English language
    const englishVoices = voices.filter(voice => voice.lang.startsWith('en'));

    englishVoices.forEach((voice, i) => {
        let option = document.createElement("option");
        option.value = i;
        option.text = voice.name;
        voiceSelect.appendChild(option);
    });

// Update the speech voice when the select option changes
    voiceSelect.addEventListener("change", () => {
        speech.voice = englishVoices[voiceSelect.selectedIndex];
    });
}


// Wait for voices to be available
window.speechSynthesis.onvoiceschanged = Allvoices();



Allvoices();

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
