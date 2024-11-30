// script.js
const funFactButton = document.getElementById('funFactButton');
const funFact = document.getElementById('funFact');

const facts = [
    " البوتس ينقي الهواء من السموم مثل الفورمالديهايد والبنزين!",
    "يمكن للبوتس أن ينمو بدون تربة في الزراعة المائية.",
    "أوراق البوتس تأخذ شكل القلب، مما يزيد جمالها!",
    "البوتس يتحمل الإضاءة المنخفضة ولكنه ينمو أفضل في الإضاءة غير المباشرة.",
    "أثبتت الدراسات أن وجود نباتات مثل البوتس يعزز المزاج."
];

funFactButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    funFact.textContent = facts[randomIndex];
});
