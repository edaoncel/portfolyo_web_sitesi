const wordsTR = ["yaratıcı", "inovatif", "çığır açan", "orijinal"];
const wordsEN = ["creative", "innovative", "groundbreaking", "original"];

    let currentIndex = 0;
    const lang = document.documentElement.lang;
    const words = lang === 'tr' ? wordsTR : wordsEN;
    let index = 0;

    function changeWord() {
        let wordElement = document.getElementById("changing-word");
        wordElement.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 2000);
    changeWord();