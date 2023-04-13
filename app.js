/* block 'double tap zoomin' */
let lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
     let now = (new Date()).getTime();
     if (now - lastTouchEnd <= 300) {
          event.preventDefault(); 
        } lastTouchEnd = now; 
    }, false);
/* block 'double tap zoomin' */

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

function displayCard(cards, count, num) {
    const limitbreaklink ="https://raw.githubusercontent.com/niihiihii/sifas_fesparty_statusboard/main/limitbreak/";
    if (count[num] % 7 === 0) {
        cards[num].children[4].children[0].src = limitbreaklink + "overlay.png";
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.add("invisible");
    } else if (count[num] % 7 === 1) {
        cards[num].children[4].children[0].src = limitbreaklink + "limitbreak0.png";
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.add("invisible");
    } else if (count[num] % 7 === 2) {
        cards[num].children[4].children[0].src = limitbreaklink + "limitbreak1.png";
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.add("invisible");
    } else if (count[num] % 7 === 3) {
        cards[num].children[4].children[0].src = limitbreaklink + "limitbreak2.png";
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.add("invisible");
    } else if (count[num] % 7 === 4) {
        cards[num].children[4].children[0].src = limitbreaklink + "limitbreak3.png";
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.add("invisible");
    } else if (count[num] % 7 === 5) {
        cards[num].children[4].children[0].src = limitbreaklink + "limitbreak4.png";
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.add("invisible");
    } else {
        cards[num].children[4].children[0].src = limitbreaklink + "limitbreak5.png";
        cards[num].children[2].classList.remove("invisible");
        cards[num].children[3].classList.remove("invisible");
    }
}
function changeCard(cards, count, num) {
    count[num]++;
    displayCard(cards, count, num);
    if (count[num] % 7 === 6) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].classList.toggle("animation");
            rainbow[i].classList.toggle("animation");
            void document.querySelector(".checkerboard").offsetWidth;
            signature[i].classList.toggle("animation");
            rainbow[i].classList.toggle("animation");
        }
    }
}

for (let i = 0; i < fes_count.length; i++) {
    fes_cards[i].addEventListener("click", () => changeCard(fes_cards, fes_count ,i));
}
for (let i = 0; i < party_count.length; i++) {
    party_cards[i].addEventListener("click", () => changeCard(party_cards, party_count, i));
}
for (let i = 0; i < normal_count.length; i++) {
    normal_cards[i].addEventListener("click", () => changeCard(normal_cards, normal_count, i));
}


/* Save Image Button */
function downImg(){
    const checkerboard = document.querySelector(".checkerboard");
	html2canvas(checkerboard,{ backgroundColor: "#180134", scale: 1408/checkerboard.offsetWidth, logging: true, letterRendering: 1, allowTaint: false,  useCORS: true }).then(function(canvas){
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
function DataHandleOnInput(el, cards) {
    if(el.value.length > cards.length) {
        el.value = el.value.substr(0, cards.length);
    }
}

const fesDataInput = document.querySelector("#fes_data");
const partyDataInput = document.querySelector("#party_data");
const normalDataInput = document.querySelector("#normal_data");

fesDataInput.addEventListener("keyup", () => {
    fesDataInput.value = fesDataInput.value.replace(/[^0-6]/g,'');
});
fesDataInput.addEventListener("input", () => DataHandleOnInput(fesDataInput, fes_cards));

partyDataInput.addEventListener("keyup", () => {
    partyDataInput.value = partyDataInput.value.replace(/[^0-6]/g,'');
});
partyDataInput.addEventListener("input", () => DataHandleOnInput(partyDataInput, party_cards));

normalDataInput.addEventListener("keyup", () => {
    normalDataInput.value = normalDataInput.value.replace(/[^0-6]/g,'');
});
normalDataInput.addEventListener("input", () => DataHandleOnInput(normalDataInput, normal_cards));
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
        displayCard(fes_cards, fes_count ,i);
    }
    for (let i = 0; i < party_count.length; i++) {
        displayCard(party_cards, party_count ,i);
    }
    for (let i = 0; i < normal_count.length; i++) {
        displayCard(normal_cards, normal_count ,i);
    }

    for (let i = 0; i < signature.length; i++) {
        signature[i].classList.toggle("animation");
        rainbow[i].classList.toggle("animation");
        void document.querySelector(".checkerboard").offsetWidth;
        signature[i].classList.toggle("animation");
        rainbow[i].classList.toggle("animation");
    }

    inputDataModal.close();
    
}

const applyDataButton = document.querySelector(".applyDataButton");
applyDataButton.addEventListener("click", applyData);
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

const printDataButton = document.querySelector(".printDataButton");
printDataButton.addEventListener("click", printData);
    /* Print Data on Textarea */

function copyData() {
    const data = makeData();
    navigator.clipboard.writeText(data);
    alert("Data Copied"); 
}

const copyDataButton = document.querySelector(".copyDataButton");
copyDataButton.addEventListener("click", copyData);

const copyDataModalCloseButton = document.querySelector(".copyDataModalCloseButton");
copyDataModalCloseButton.addEventListener("click", () => {
    copyDataModal.close()
});
/* Data Button */


/* Idolized ON/OFF Switch */
function idolizedOnOff() {
    const unidolizedList = document.querySelectorAll(".unidolized");
    const idolizedList = document.querySelectorAll(".idolized");
    [].forEach.call(unidolizedList, function(unidolized) {
        unidolized.classList.toggle("displayNone");
    });
    [].forEach.call(idolizedList, function(idolized) {
        idolized.classList.toggle("displayNone");
    });
    if (unidolizedList[0].classList.contains("displayNone")) {
        idolizedSwitch.innerText = "Idolized\nON";
    } else {
        idolizedSwitch.innerText = "Idolized\nOFF"
    }  
}
const idolizedSwitch = document.querySelector(".idolizedSwitch");
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
    
    orderList.forEach(function(schoolidol) {
        let idol_cards = document.querySelectorAll("." + schoolidol);
        [].forEach.call(idol_cards, function(idol_card) {
            idol_card.classList.toggle(schoolidol + "__order");
        });
    });

    const icons = document.querySelectorAll(".icon");
    [].forEach.call(icons, function(icon) {
        icon.classList.toggle("displayNone");
    });

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
            signature[i].classList.add("animation");
            rainbow[i].classList.remove("animation");
        }
        changeCardStyleButton.innerText = "Signature";
    } else if (changeCardStyleButton_click_count % 4 === 1) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].classList.add("displayNone");
            rainbow[i].classList.remove("displayNone");
            signature[i].classList.remove("animation");
            rainbow[i].classList.add("animation");
        }
        changeCardStyleButton.innerText = "Rainbow";
    } else if (changeCardStyleButton_click_count % 4 === 2) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].classList.remove("displayNone");
            rainbow[i].classList.remove("displayNone");
            signature[i].classList.remove("animation");
            rainbow[i].classList.add("animation");
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


/* Settings Button */
const settingsModal = document.querySelector(".settingsModal");
const settingsButton = document.querySelector(" .settingsButton");
settingsButton.addEventListener("click", () => {
    settingsModal.showModal()
});

const settingsModalCloseButton = document.querySelector(".settingsModalCloseButton");
settingsModalCloseButton.addEventListener("click", () => {
    settingsModal.close()
});
/* Settings Button */