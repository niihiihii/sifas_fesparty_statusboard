/* block 'double tap zoomin' */
let lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
     let now = (new Date()).getTime();
     if (now - lastTouchEnd <= 300) {
          event.preventDefault(); 
        } lastTouchEnd = now; 
    }, false);
/* block 'double tap zoomin' */

const cards = document.querySelectorAll(".card");
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

const limitbreaklink ="https://raw.githubusercontent.com/niihiihii/sifas_fesparty_statusboard/main/limitbreak/";

function displayFesCard(num) {
        if (fes_count[num] % 7 === 0) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "overlay.png";
            fes_cards[num].children[1].classList.add("invisible");
            fes_cards[num].children[2].classList.add("invisible");
        } else if (fes_count[num] % 7 === 1) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak0.png";
            fes_cards[num].children[1].classList.add("invisible");
            fes_cards[num].children[2].classList.add("invisible");
        } else if (fes_count[num] % 7 === 2) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak1.png";
            fes_cards[num].children[1].classList.add("invisible");
            fes_cards[num].children[2].classList.add("invisible");
        } else if (fes_count[num] % 7 === 3) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak2.png";
            fes_cards[num].children[1].classList.add("invisible");
            fes_cards[num].children[2].classList.add("invisible");
        } else if (fes_count[num] % 7 === 4) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak3.png";
            fes_cards[num].children[1].classList.add("invisible");
            fes_cards[num].children[2].classList.add("invisible");
        } else if (fes_count[num] % 7 === 5) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak4.png";
            fes_cards[num].children[1].classList.add("invisible");
            fes_cards[num].children[2].classList.add("invisible");
        } else {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak5.png";
            fes_cards[num].children[1].classList.remove("invisible");
            fes_cards[num].children[2].classList.remove("invisible");
        }
}
function changeFesCard(num) {
    fes_count[num]++;
    displayFesCard(num);
}

function displayPartyCard(num) {
    if (party_count[num] % 7 === 0) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "overlay.png";
        party_cards[num].children[1].classList.add("invisible");
        party_cards[num].children[2].classList.add("invisible");
    } else if (party_count[num] % 7 === 1) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak0.png";
        party_cards[num].children[1].classList.add("invisible");
        party_cards[num].children[2].classList.add("invisible");
    } else if (party_count[num] % 7 === 2) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak1.png";
        party_cards[num].children[1].classList.add("invisible");
        party_cards[num].children[2].classList.add("invisible");
    } else if (party_count[num] % 7 === 3) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak2.png";
        party_cards[num].children[1].classList.add("invisible");
        party_cards[num].children[2].classList.add("invisible");
    } else if (party_count[num] % 7 === 4) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak3.png";
        party_cards[num].children[1].classList.add("invisible");
        party_cards[num].children[2].classList.add("invisible");
    } else if (party_count[num] % 7 === 5) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak4.png";
        party_cards[num].children[1].classList.add("invisible");
        party_cards[num].children[2].classList.add("invisible");
    } else {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak5.png";
        party_cards[num].children[1].classList.remove("invisible");
        party_cards[num].children[2].classList.remove("invisible");
    }
}
function changePartyCard(num) {
    party_count[num]++;
    displayPartyCard(num);
}

function displayNormalCard(num) {
    if (normal_count[num] % 7 === 0) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "overlay.png";
        normal_cards[num].children[1].classList.add("invisible");
        normal_cards[num].children[2].classList.add("invisible");
    } else if (normal_count[num] % 7 === 1) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak0.png";
        normal_cards[num].children[1].classList.add("invisible");
        normal_cards[num].children[2].classList.add("invisible");
    } else if (normal_count[num] % 7 === 2) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak1.png";
        normal_cards[num].children[1].classList.add("invisible");
        normal_cards[num].children[2].classList.add("invisible");
    } else if (normal_count[num] % 7 === 3) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak2.png";
        normal_cards[num].children[1].classList.add("invisible");
        normal_cards[num].children[2].classList.add("invisible");
    } else if (normal_count[num] % 7 === 4) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak3.png";
        normal_cards[num].children[1].classList.add("invisible");
        normal_cards[num].children[2].classList.add("invisible");
    } else if (normal_count[num] % 7 === 5) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak4.png";
        normal_cards[num].children[1].classList.add("invisible");
        normal_cards[num].children[2].classList.add("invisible");
    } else {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak5.png";
        normal_cards[num].children[1].classList.remove("invisible");
        normal_cards[num].children[2].classList.remove("invisible");
    }
}
function changeNormalCard(num) {
    normal_count[num]++;
    displayNormalCard(num);
}

for (let i = 0; i < fes_count.length; i++) {
    fes_cards[i].addEventListener("click", () => changeFesCard(i));
}
for (let i = 0; i < party_count.length; i++) {
    party_cards[i].addEventListener("click", () => changePartyCard(i));
}
for (let i = 0; i < normal_count.length; i++) {
    normal_cards[i].addEventListener("click", () => changeNormalCard(i));
}


/* Save Image Button */
function downImg(){
    const checkerboard = document.querySelector(".checkerboard");
	html2canvas(checkerboard,{ backgroundColor: "#180134", scale: 2816/checkerboard.offsetWidth, logging: true, letterRendering: 1, allowTaint: false,  useCORS: true }).then(function(canvas){
		const myImage = canvas.toDataURL();
		downloadURL(myImage, "image.png") 
	});
}

function downloadURL(url, name){
	const link = document.createElement("a")
	link.download = name;
	link.href = url;
	document.body.appendChild(link);
	link.click();
}

const downImgButton = document.querySelector(".downImgButton");
downImgButton.addEventListener("click", downImg);
/* Save Image Button */


/* Input Data Button */
const inputDataButton = document.querySelector(".inputDataButton");
const inputDataModal = document.querySelector(".inputDataModal");

inputDataButton.addEventListener("click", () => {
    inputDataModal.showModal();
});
/* Input Data Button */


/* (fes/party/normal)_count_input maxlength<=(fes/party/normal)_cards.length */
function fesDataHandleOnInput(el) {
    if(el.value.length > fes_cards.length) {
        el.value = el.value.substr(0, fes_cards.length);
    }
}

function partyDataHandleOnInput(el) {
    if(el.value.length > party_cards.length) {
        el.value = el.value.substr(0, party_cards.length);
    }
}

function normalDataHandleOnInput(el) {
    if(el.value.length > normal_cards.length) {
        el.value = el.value.substr(0, normal_cards.length);
    }
}
/* (fes/party/normal)_count_input maxlength<=(fes/party/normal)_cards.length */


/* Apply Data Button */
function applyData() {
    const fes_count_input = document.getElementById("fes_data").value;
    const party_count_input = document.getElementById("party_data").value;
    const normal_count_input =document.getElementById("normal_data").value;
    const mapfn = (arg) => Number(arg)

    const fes_count_data = Array.from(fes_count_input, mapfn);
    const party_count_data = Array.from(party_count_input, mapfn);
    const normal_count_data = Array.from(normal_count_input, mapfn);

    for (let i = 0; i < fes_count_data.length; i++) {
        fes_count[i] = fes_count_data[i];
    }
    
    for (let i = 0; i < party_count_data.length; i++) {
        party_count[i] = party_count_data[i];
    }
    
    for (let i = 0; i < normal_count_data.length; i++) {
        normal_count[i] = normal_count_data[i];
    }

    for (let i = 0; i < fes_count.length; i++) {
        displayFesCard(i);
    }
    for (let i = 0; i < party_count.length; i++) {
        displayPartyCard(i);
    }
    for (let i = 0; i < normal_count.length; i++) {
        displayNormalCard(i);
    }

    inputDataModal.close();
    
}
/* Apply Data Button */


/* Data Button */
function makeData() {
    for (let i = 0; i < fes_count.length; i++) {
        fes_count[i] = fes_count[i] % 7;
    }

    for (let i = 0; i < party_count.length; i++) {
        party_count[i] = party_count[i] % 7;
    }

    for (let i = 0; i < normal_count.length; i++) {
        normal_count[i] = normal_count[i] % 7;
    }
    let data = "fes_data = " + fes_count + "\n" + "party_data = " + party_count + "\n" + "normal_data = " + normal_count;
    data = data.replace(/,/g, "");
    return data;
}

const copyDataModal = document.querySelector(".copyDataModal");

    /* Print Data on Textarea */
function printData() {
    const data = makeData();
    const dataArea = document.querySelector(".dataArea");
    dataArea.value = data;
    copyDataModal.showModal();
}
    /* Print Data on Textarea */

function copyData() {
    const data = makeData();
    navigator.clipboard.writeText(data);
    alert("Data Copied"); 
}
/* Data Button */


/* Idolized ON/OFF Switch */
function idolizedOn() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].children[0].src = cards[i].children[0].src.replace(/_idolized|.png/g, "") + "_idolized.png";
    }
    const sample = document.querySelector(".sample");
    sample.children[0].src = sample.children[0].src.replace(/_idolized|.png/g, "") + "_idolized.png";
    idolizedSwitch.innerText = "Idolized\nON";
}

function idolizedOff() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].children[0].src = cards[i].children[0].src.replace("_idolized", "");
    }
    const sample = document.querySelector(".sample");
    sample.children[0].src = sample.children[0].src.replace("_idolized", "");
    idolizedSwitch.innerText = "Idolized\nOFF"
}

function idolizedOnOff() {
    idolized_switch_click_count++;
    if (idolized_switch_click_count % 2 === 0) {
        idolizedOff();
    } else {
        idolizedOn();
    }
}
const idolizedSwitch = document.querySelector(".idolizedSwitch");
let idolized_switch_click_count = 0;
idolizedSwitch.addEventListener("click", idolizedOnOff);
/* Idolized ON/OFF Switch */


/* Sort by Group ON/OFF Switch */
function sortByGroupOnOff() {
    const orderList = ["honoka",
                        "eli",
                        "kotori",
                        "chika",
                        "riko",
                        "kanan",
                        "ayumu",
                        "kasumi",
                        "shizuku",
                        "karin",
                        "umi",
                        "rin",
                        "maki",
                        "dia",
                        "you",
                        "yoshiko",
                        "ai",
                        "kanata",
                        "setsuna",
                        "emma",
                        "nozomi",
                        "hanayo",
                        "nico",
                        "hanamaru",
                        "mari",
                        "ruby",
                        "rina",
                        "shioriko",
                        "mia",
                        "lanzhu"];
    
    for (let i = 0; i < orderList.length; i++) {
        let schoolidol = orderList[i];
        let idol_cards = document.querySelectorAll("." + schoolidol);
        for (let i = 0; i < idol_cards.length; i++) {
            idol_cards[i].classList.toggle(schoolidol + "__order");
        }
    }

    const icon = document.querySelectorAll(".icon");
    for (let i = 0; i < icon.length; i++) {
        icon[i].classList.toggle("displayNone");
    }

    if (fes_cards[0].classList.contains("maki__order")) {
        sortByGroupSwitch.innerText = "Sort by Group ON";
    } else {
        sortByGroupSwitch.innerText = "Sort by Group OFF";
    }
}

const sortByGroupSwitch = document.querySelector(".sortByGroupSwitch");

sortByGroupSwitch.addEventListener("click", sortByGroupOnOff);
/* Sort by Group ON/OFF Switch */



/* Change Card Style Button */
const signature = document.querySelectorAll(".signature");
const rainbow = document.querySelectorAll(".rainbow");

function changeCardStyle() {
    changeCardStyleButton_click_count++;
    if (changeCardStyleButton_click_count % 4 === 0) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].classList.remove("displayNone");
            rainbow[i].classList.add("displayNone");
        }
        changeCardStyleButton.innerText = "Signature";
    } else if (changeCardStyleButton_click_count % 4 === 1) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].classList.add("displayNone");
            rainbow[i].classList.remove("displayNone");
        }
        changeCardStyleButton.innerText = "Rainbow";
    } else if (changeCardStyleButton_click_count % 4 === 2) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].classList.remove("displayNone");
            rainbow[i].classList.remove("displayNone");
        }
        changeCardStyleButton.innerText = "Signature + Rainbow";
    } else {
        for (let i = 0; i < signature.length; i++) {
            signature[i].classList.add("displayNone");
            rainbow[i].classList.add("displayNone");
        }
        changeCardStyleButton.innerText = "none";
    }
}

const changeCardStyleButton = document.querySelector(".changeCardStyleButton");
let changeCardStyleButton_click_count = 0;
changeCardStyleButton.addEventListener("click", changeCardStyle);
/* Change Card Style Button */



const settingsModal = document.querySelector(".settingsModal");
