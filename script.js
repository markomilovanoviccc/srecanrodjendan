const heartButton = document.getElementById("heartButton");
const loveMessage = document.getElementById("loveMessage");
const giftBox = document.getElementById("giftBox");
const giftOverlay = document.getElementById("giftOverlay");
const mainContent = document.getElementById("mainContent");
const backToStart = document.getElementById("backToStart");

const messages = [
  "Tvoje oči su prelpe 🤎",
  "Tvoj osmeh mi ulepšava dan 🌞",
  "Volim tvoj glas 🎶",
  "Uvek me nasmeješ, moj komidien 😂",
  "Ti si moj mir 🕊️",
  "Tvoj zagrljaj je dom 🏡",
  "Najlepše trenutke imam s tobom ⏳",
  "Tvoja duša je predivna ✨",
  "Tvoja ljubav prema prirodi me inspiriše 🌿",
  "Zajedno smo najbolji tim (TeamDuse)👫",
  "Bez tebe dan nije potpun 💫",
  "Naši dejtovi su kao mini avanture 🎬🍷",
  "Zajedno i najobičniji dani postaju posebni ✨",
  "Ti si moj omiljeni plan za vikend 🤎",
  "Gledati serije s tobom je moje omiljeno vreme 📺❤️",
  "Ponosan sam što te imam, danas i svaki dan 🥹",
  "Na tvoj rođendan svet sija jače jer si ti rođena 🎂",
  "Volim način na koji me gledaš, čak i kad ćutimo 🤎",
  "Tvoje prisustvo je moj mir i moja snaga 🙏",
  "Kad zajedno jedemo, čak i hrana ima više ukusa 🍝❤️",
  "Volim kad zajedno biramo šta ćemo da gledamo (i 100x menjamo 😅)",
  "Tvoj smeh je moj omiljeni zvuk 🔊",
  "Tvoja snaga me svakog dana inspiriše 💪",
  "Kako uspevaš biti tako pametna i tako lepa u isto vreme? 🤯",
  "Ti si najlepši deo mog dana ☀️",
  "Tvoja energija me vuče kao magnet 🧲❤️",
  "Zaljubljujem se u tebe iznova svaki dan 💫",
  "Da moram da biram ponovo, opet bih izabrao tebe. Uvek. 🤎",
  "Volim te i kad mi pojedeš Kebab bez pitanja 🍟😤❤️",
  "Volim te više nego što volim spavanje. A to je ozbiljno! 😴💕",
  "Zajedno smo kao čaj i med... slatko i pomalo haotično 🍯🫖",
  "Bez tebe, moj Netflix algoritam ne bi znao šta želi 😜📽️",
  "Kad kažeš 'brzo se spremam', znam da imam vreme da završim sezonu serije 😆⏳",
  "Volim te čak i kad mi ispraviš svaku sitnicu… skoro 😇📝",
  "Tvoj smeh me leči… ali tvoji hladni stopala me šokiraju 🦶🧊",

];

let clickCount = 0;

heartButton.addEventListener("click", () => {
  if (clickCount < messages.length) {
    loveMessage.textContent = messages[clickCount];
    loveMessage.style.opacity = 1;
    clickCount++;
  }

  if (clickCount === 10) {
    giftBox.style.display = "block";
  }
});

giftBox.addEventListener("click", () => {
  mainContent.style.display = "none";
  giftOverlay.style.display = "flex";
});

backToStart.addEventListener("click", () => {
  giftOverlay.style.display = "none";
  mainContent.style.display = "block";
  loveMessage.textContent = "";
  loveMessage.style.opacity = 0;
  clickCount = 0;
  giftBox.style.display = "none";
});
