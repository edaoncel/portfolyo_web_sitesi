const quotesTR = [
    "Bir yazılım dili insanla bilgisayar arasında bir köprüdür.",
    "Kod yazmak sanattır ve her sanatçı kendi eserini yaratır.",
    "Yazılım dünyası sürekli gelişir, öğrenmeyi bırakma.",
    "Bugün bir hata bulmak, yarının başarısını getirir.",
    "Basit kod, büyük fikirlerin temelidir.",
    "Yazılım, insan zihninin en yaratıcı ifade biçimlerinden biridir.",
    "Kod yazarken kendinizi ifade edersiniz, her satırda bir parça sizden vardır.",
    "Bir yazılım geliştiricinin en güçlü silahı, öğrenmeye olan tutkusudur.",
    "Hata yapmak öğrenmenin en etkili yoludur, yazılım geliştirmede hatalardan korkmayın.",
    "Her büyük yazılım, küçük bir fikirle başlar."
];

const quotesEN = [
    "A programming language is a bridge between humans and computers.",
    "Writing code is an art, and every artist creates their own masterpiece.",
    "The software world is constantly evolving, never stop learning.",
    "Finding a bug today brings tomorrow's success.",
    "Simple code is the foundation of great ideas.",
    "Software is one of the most creative expressions of the human mind.",
    "When you write code, you express yourself; there's a piece of you in every line.",
    "A software developer's most powerful weapon is their passion for learning.",
    "Making mistakes is the most effective way to learn; don't fear mistakes in software development.",
    "Every great software starts with a small idea."
];

let currentIndex = 0;
const lang = document.documentElement.lang;
const quotes = lang === 'tr' ? quotesTR : quotesEN;

function changeQuote() {
    document.getElementById("quote").innerText = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length;
}

setInterval(changeQuote, 5000);
changeQuote();