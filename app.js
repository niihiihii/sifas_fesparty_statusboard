const cards = document.querySelectorAll(".card");

const count = [];

for (let i = 0; i < cards.length; i++) {
    count.push(0);
}

function changeCard(num) {
    count[num]++;
        if (count[num] % 7 === 0) {
            cards[num].children[0].style.opacity = "30%";
            cards[num].children[1].style.opacity = "0%";
            cards[num].children[2].style.opacity = "0%";
            cards[num].children[3].style.opacity = "0%";
            cards[num].children[4].style.opacity = "0%";
            cards[num].children[5].style.opacity = "0%";
            cards[num].children[6].style.opacity = "0%";
            cards[num].children[7].style.opacity = "0%";
        } else if (count[num] % 7 === 1) {
            cards[num].children[0].style.opacity = "100%";
            cards[num].children[1].style.opacity = "0%";
            cards[num].children[2].style.opacity = "100%";
            cards[num].children[3].style.opacity = "0%";
            cards[num].children[4].style.opacity = "0%";
            cards[num].children[5].style.opacity = "0%";
            cards[num].children[6].style.opacity = "0%";
            cards[num].children[7].style.opacity = "0%";
        } else if (count[num] % 7 === 2) {
            cards[num].children[0].style.opacity = "100%";
            cards[num].children[1].style.opacity = "0%";
            cards[num].children[2].style.opacity = "0%";
            cards[num].children[3].style.opacity = "100%";
            cards[num].children[4].style.opacity = "0%";
            cards[num].children[5].style.opacity = "0%";
            cards[num].children[6].style.opacity = "0%";
            cards[num].children[7].style.opacity = "0%";
        } else if (count[num] % 7 === 3) {
            cards[num].children[0].style.opacity = "100%";
            cards[num].children[1].style.opacity = "0%";
            cards[num].children[2].style.opacity = "0%";
            cards[num].children[3].style.opacity = "0%";
            cards[num].children[4].style.opacity = "100%";
            cards[num].children[5].style.opacity = "0%";
            cards[num].children[6].style.opacity = "0%";
            cards[num].children[7].style.opacity = "0%";
        } else if (count[num] % 7 === 4) {
            cards[num].children[0].style.opacity = "100%";
            cards[num].children[1].style.opacity = "0%";
            cards[num].children[2].style.opacity = "0%";
            cards[num].children[3].style.opacity = "0%";
            cards[num].children[4].style.opacity = "0%";
            cards[num].children[5].style.opacity = "100%";
            cards[num].children[6].style.opacity = "0%";
            cards[num].children[7].style.opacity = "0%";
        } else if (count[num] % 7 === 5) {
            cards[num].children[0].style.opacity = "100%";
            cards[num].children[1].style.opacity = "0%";
            cards[num].children[2].style.opacity = "0%";
            cards[num].children[3].style.opacity = "0%";
            cards[num].children[4].style.opacity = "0%";
            cards[num].children[5].style.opacity = "0%";
            cards[num].children[6].style.opacity = "100%";
            cards[num].children[7].style.opacity = "0%";
        } else {
            cards[num].children[0].style.opacity = "100%";
            cards[num].children[1].style.opacity = "100%";
            cards[num].children[2].style.opacity = "0%";
            cards[num].children[3].style.opacity = "0%";
            cards[num].children[4].style.opacity = "0%";
            cards[num].children[5].style.opacity = "0%";
            cards[num].children[6].style.opacity = "0%";
            cards[num].children[7].style.opacity = "100%";
        }
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => changeCard(i));
}
