const fes_cards = document.querySelectorAll(".fes-card");
const party_cards = document.querySelectorAll(".party-card");
const normal_cards = document.querySelectorAll(".normal-card");

const fes_count = [];

for (let i = 0; i < fes_cards.length; i++) {
    fes_count.push(0);
}

const party_count = [];

for (let i = 0; i < party_cards.length; i++) {
    party_count.push(0);
}

const normal_count = [];

for (let i = 0; i < normal_cards.length; i++) {
    normal_count.push(0);
}

//fes_count, party_count, normal_count를 db에 저장하면 됨

function displayFesCard(num) {
        if (fes_count[num] % 7 === 0) {
            fes_cards[num].children[0].style.opacity = "30%";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
            fes_cards[num].children[3].style.opacity = "0%";
            fes_cards[num].children[4].style.opacity = "0%";
            fes_cards[num].children[5].style.opacity = "0%";
            fes_cards[num].children[6].style.opacity = "0%";
            fes_cards[num].children[7].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 1) {
            fes_cards[num].children[0].style.opacity = "100%";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "100%";
            fes_cards[num].children[3].style.opacity = "0%";
            fes_cards[num].children[4].style.opacity = "0%";
            fes_cards[num].children[5].style.opacity = "0%";
            fes_cards[num].children[6].style.opacity = "0%";
            fes_cards[num].children[7].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 2) {
            fes_cards[num].children[0].style.opacity = "100%";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
            fes_cards[num].children[3].style.opacity = "100%";
            fes_cards[num].children[4].style.opacity = "0%";
            fes_cards[num].children[5].style.opacity = "0%";
            fes_cards[num].children[6].style.opacity = "0%";
            fes_cards[num].children[7].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 3) {
            fes_cards[num].children[0].style.opacity = "100%";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
            fes_cards[num].children[3].style.opacity = "0%";
            fes_cards[num].children[4].style.opacity = "100%";
            fes_cards[num].children[5].style.opacity = "0%";
            fes_cards[num].children[6].style.opacity = "0%";
            fes_cards[num].children[7].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 4) {
            fes_cards[num].children[0].style.opacity = "100%";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
            fes_cards[num].children[3].style.opacity = "0%";
            fes_cards[num].children[4].style.opacity = "0%";
            fes_cards[num].children[5].style.opacity = "100%";
            fes_cards[num].children[6].style.opacity = "0%";
            fes_cards[num].children[7].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 5) {
            fes_cards[num].children[0].style.opacity = "100%";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
            fes_cards[num].children[3].style.opacity = "0%";
            fes_cards[num].children[4].style.opacity = "0%";
            fes_cards[num].children[5].style.opacity = "0%";
            fes_cards[num].children[6].style.opacity = "100%";
            fes_cards[num].children[7].style.opacity = "0%";
        } else {
            fes_cards[num].children[0].style.opacity = "100%";
            fes_cards[num].children[1].style.opacity = "100%";
            fes_cards[num].children[2].style.opacity = "0%";
            fes_cards[num].children[3].style.opacity = "0%";
            fes_cards[num].children[4].style.opacity = "0%";
            fes_cards[num].children[5].style.opacity = "0%";
            fes_cards[num].children[6].style.opacity = "0%";
            fes_cards[num].children[7].style.opacity = "100%";
        }
}
function changeFesCard(num) {
    fes_count[num]++;
    displayFesCard(num);
}

function displayPartyCard(num) {
    if (party_count[num] % 7 === 0) {
        party_cards[num].children[0].style.opacity = "30%";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
        party_cards[num].children[3].style.opacity = "0%";
        party_cards[num].children[4].style.opacity = "0%";
        party_cards[num].children[5].style.opacity = "0%";
        party_cards[num].children[6].style.opacity = "0%";
        party_cards[num].children[7].style.opacity = "0%";
    } else if (party_count[num] % 7 === 1) {
        party_cards[num].children[0].style.opacity = "100%";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "100%";
        party_cards[num].children[3].style.opacity = "0%";
        party_cards[num].children[4].style.opacity = "0%";
        party_cards[num].children[5].style.opacity = "0%";
        party_cards[num].children[6].style.opacity = "0%";
        party_cards[num].children[7].style.opacity = "0%";
    } else if (party_count[num] % 7 === 2) {
        party_cards[num].children[0].style.opacity = "100%";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
        party_cards[num].children[3].style.opacity = "100%";
        party_cards[num].children[4].style.opacity = "0%";
        party_cards[num].children[5].style.opacity = "0%";
        party_cards[num].children[6].style.opacity = "0%";
        party_cards[num].children[7].style.opacity = "0%";
    } else if (party_count[num] % 7 === 3) {
        party_cards[num].children[0].style.opacity = "100%";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
        party_cards[num].children[3].style.opacity = "0%";
        party_cards[num].children[4].style.opacity = "100%";
        party_cards[num].children[5].style.opacity = "0%";
        party_cards[num].children[6].style.opacity = "0%";
        party_cards[num].children[7].style.opacity = "0%";
    } else if (party_count[num] % 7 === 4) {
        party_cards[num].children[0].style.opacity = "100%";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
        party_cards[num].children[3].style.opacity = "0%";
        party_cards[num].children[4].style.opacity = "0%";
        party_cards[num].children[5].style.opacity = "100%";
        party_cards[num].children[6].style.opacity = "0%";
        party_cards[num].children[7].style.opacity = "0%";
    } else if (party_count[num] % 7 === 5) {
        party_cards[num].children[0].style.opacity = "100%";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
        party_cards[num].children[3].style.opacity = "0%";
        party_cards[num].children[4].style.opacity = "0%";
        party_cards[num].children[5].style.opacity = "0%";
        party_cards[num].children[6].style.opacity = "100%";
        party_cards[num].children[7].style.opacity = "0%";
    } else {
        party_cards[num].children[0].style.opacity = "100%";
        party_cards[num].children[1].style.opacity = "100%";
        party_cards[num].children[2].style.opacity = "0%";
        party_cards[num].children[3].style.opacity = "0%";
        party_cards[num].children[4].style.opacity = "0%";
        party_cards[num].children[5].style.opacity = "0%";
        party_cards[num].children[6].style.opacity = "0%";
        party_cards[num].children[7].style.opacity = "100%";
    }
}
function changePartyCard(num) {
    party_count[num]++;
    displayPartyCard(num);
}

function displayNormalCard(num) {
    if (normal_count[num] % 7 === 0) {
        normal_cards[num].children[0].style.opacity = "30%";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
        normal_cards[num].children[3].style.opacity = "0%";
        normal_cards[num].children[4].style.opacity = "0%";
        normal_cards[num].children[5].style.opacity = "0%";
        normal_cards[num].children[6].style.opacity = "0%";
        normal_cards[num].children[7].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 1) {
        normal_cards[num].children[0].style.opacity = "100%";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "100%";
        normal_cards[num].children[3].style.opacity = "0%";
        normal_cards[num].children[4].style.opacity = "0%";
        normal_cards[num].children[5].style.opacity = "0%";
        normal_cards[num].children[6].style.opacity = "0%";
        normal_cards[num].children[7].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 2) {
        normal_cards[num].children[0].style.opacity = "100%";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
        normal_cards[num].children[3].style.opacity = "100%";
        normal_cards[num].children[4].style.opacity = "0%";
        normal_cards[num].children[5].style.opacity = "0%";
        normal_cards[num].children[6].style.opacity = "0%";
        normal_cards[num].children[7].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 3) {
        normal_cards[num].children[0].style.opacity = "100%";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
        normal_cards[num].children[3].style.opacity = "0%";
        normal_cards[num].children[4].style.opacity = "100%";
        normal_cards[num].children[5].style.opacity = "0%";
        normal_cards[num].children[6].style.opacity = "0%";
        normal_cards[num].children[7].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 4) {
        normal_cards[num].children[0].style.opacity = "100%";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
        normal_cards[num].children[3].style.opacity = "0%";
        normal_cards[num].children[4].style.opacity = "0%";
        normal_cards[num].children[5].style.opacity = "100%";
        normal_cards[num].children[6].style.opacity = "0%";
        normal_cards[num].children[7].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 5) {
        normal_cards[num].children[0].style.opacity = "100%";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
        normal_cards[num].children[3].style.opacity = "0%";
        normal_cards[num].children[4].style.opacity = "0%";
        normal_cards[num].children[5].style.opacity = "0%";
        normal_cards[num].children[6].style.opacity = "100%";
        normal_cards[num].children[7].style.opacity = "0%";
    } else {
        normal_cards[num].children[0].style.opacity = "100%";
        normal_cards[num].children[1].style.opacity = "100%";
        normal_cards[num].children[2].style.opacity = "0%";
        normal_cards[num].children[3].style.opacity = "0%";
        normal_cards[num].children[4].style.opacity = "0%";
        normal_cards[num].children[5].style.opacity = "0%";
        normal_cards[num].children[6].style.opacity = "0%";
        normal_cards[num].children[7].style.opacity = "100%";
    }
}
function changeNormalCard(num) {
    normal_count[num]++;
    displayNormalCard(num);
}

for (let i = 0; i < fes_cards.length; i++) {
    displayFesCard(i);
}
for (let i = 0; i < party_cards.length; i++) {
    displayPartyCard(i);
}
for (let i = 0; i < normal_cards.length; i++) {
    displayNormalCard(i);
}

for (let i = 0; i < fes_cards.length; i++) {
    fes_cards[i].addEventListener("click", () => changeFesCard(i));
}
for (let i = 0; i < party_cards.length; i++) {
    party_cards[i].addEventListener("click", () => changePartyCard(i));
}
for (let i = 0; i < normal_cards.length; i++) {
    normal_cards[i].addEventListener("click", () => changeNormalCard(i));
}