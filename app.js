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
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 1) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak0.png";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 2) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak1.png";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 3) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak2.png";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 4) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak3.png";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 5) {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak4.png";
            fes_cards[num].children[1].style.opacity = "0%";
            fes_cards[num].children[2].style.opacity = "0%";
        } else {
            fes_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak5.png";
            fes_cards[num].children[1].style.opacity = "100%";
            fes_cards[num].children[2].style.opacity = "100%";
        }
}
function changeFesCard(num) {
    fes_count[num]++;
    displayFesCard(num);
}

function displayPartyCard(num) {
    if (party_count[num] % 7 === 0) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "overlay.png";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
    } else if (party_count[num] % 7 === 1) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak0.png";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
    } else if (party_count[num] % 7 === 2) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak1.png";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
    } else if (party_count[num] % 7 === 3) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak2.png";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
    } else if (party_count[num] % 7 === 4) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak3.png";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
    } else if (party_count[num] % 7 === 5) {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak4.png";
        party_cards[num].children[1].style.opacity = "0%";
        party_cards[num].children[2].style.opacity = "0%";
    } else {
        party_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak5.png";
        party_cards[num].children[1].style.opacity = "100%";
        party_cards[num].children[2].style.opacity = "100%";
    }
}
function changePartyCard(num) {
    party_count[num]++;
    displayPartyCard(num);
}

function displayNormalCard(num) {
    if (normal_count[num] % 7 === 0) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "overlay.png";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 1) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak0.png";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 2) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak1.png";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 3) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak2.png";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 4) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak3.png";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 5) {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak4.png";
        normal_cards[num].children[1].style.opacity = "0%";
        normal_cards[num].children[2].style.opacity = "0%";
    } else {
        normal_cards[num].children[3].children[0].src = limitbreaklink + "limitbreak5.png";
        normal_cards[num].children[1].style.opacity = "100%";
        normal_cards[num].children[2].style.opacity = "100%";
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
const fes_icon = document.querySelectorAll(".fes-icon")
const party_icon = document.querySelectorAll(".party-icon")
const normal_icon = document.querySelectorAll(".normal-icon")

function sortByGroupOn() {
    const fes_order = ["13", "15", "10", "3", "16",
                        "19", "20", "23", "25", "18",
                        "22", "24", "11", "26", "17",
                        "2", "4", "12", "9", "14",
                        "1", "5", "6", "8", "21",
                        "27", "7", "28",

                        "32", "36", "38", "53", "45",
                        "46", "42", "58", "47", "52",
                        "50", "35", "51", "54", "33",
                        "57", "56", "43", "39", "34",
                        "41", "44", "40", "31", "48",
                        "49", "37", "55",

                        "89", "66", "69", "62", "75",
                        "68", "83", "77", "90", "63",
                        "86", "87", "80", "81", "71",
                        "70", "64", "67", "72", "84",
                        "88", "85", "82", "79", "61",
                        "78", "74", "76", "73", "65"];

    const party_order = ["17", "14", "1", "18", "28",
                        "15", "19", "3", "20", "6",
                        "24", "2", "27", "30", "11",
                        "12", "25", "5", "22", "29",
                        "13", "16", "10", "9", "8",
                        "23", "4"];

    const normal_order = ["3", "20", "14", "16"];

    for (let i = 0; i < fes_cards.length; i++) {
        fes_cards[i].style.order = fes_order[i];
    }
    for (let i = 0; i < party_cards.length; i++) {
        party_cards[i].style.order = party_order[i];
    }
    for (let i = 0; i < normal_cards.length; i++) {
        normal_cards[i].style.order = normal_order[i];
    }

    const fes_icon_order = ["29", "30", "59", "60"];
    const party_icon_order = ["7", "21", "26"]
    const normal_icon_order = ["1", "2", "4", "5",
                                "6", "7", "8", "9", "10",
                                "11", "12", "13", "15",
                                "17", "18", "19",
                                "21", "22", "23", "24", "25",
                                "26", "27", "28", "29", "30"]

    for (let i = 0; i < fes_icon.length; i++) {
        fes_icon[i].style.order = fes_icon_order[i];
        fes_icon[i].style.display = "flex";
    }
    for (let i = 0; i < party_icon.length; i++) {
        party_icon[i].style.order = party_icon_order[i];
        party_icon[i].style.display = "flex";
    }
    for (let i = 0; i < normal_icon.length; i++) {
        normal_icon[i].style.order = normal_icon_order[i];
        normal_icon[i].style.display = "flex";
    }
    sortByGroupSwitch.innerText = "Sort by Group ON";
}

function sortByGroupOff() {
    for (let i = 0; i < fes_cards.length; i++) {
        fes_cards[i].style.order = "";
    }
    for (let i = 0; i < party_cards.length; i++) {
        party_cards[i].style.order = "";
    }
    for (let i = 0; i < normal_cards.length; i++) {
        normal_cards[i].style.order = "";
    }
    for (let i = 0; i < fes_icon.length; i++) {
        fes_icon[i].style.order = "";
        fes_icon[i].style.display = "none";
    }
    for (let i = 0; i < party_icon.length; i++) {
        party_icon[i].style.order = "";
        party_icon[i].style.display = "none";
    }
    for (let i = 0; i < normal_icon.length; i++) {
        normal_icon[i].style.order = "";
        normal_icon[i].style.display = "none";
    }
    sortByGroupSwitch.innerText = "Sort by Group OFF";
}

function sortByGroupOnOff() {
    sortByGroup_switch_click_count++;
    if (sortByGroup_switch_click_count % 2 === 0) {
        sortByGroupOff();
    } else {
        sortByGroupOn();
    }
}

const sortByGroupSwitch = document.querySelector(".sortByGroupSwitch");
let sortByGroup_switch_click_count = 0;

sortByGroupSwitch.addEventListener("click", sortByGroupOnOff);
/* Sort by Group ON/OFF Switch */



/* Change Card Style Button */
const signature = document.querySelectorAll(".signature");
const rainbow = document.querySelectorAll(".rainbow");

function changeCardStyle() {
    changeCardStyleButton_click_count++;
    if (changeCardStyleButton_click_count % 4 === 0) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].style.display = "block";
            rainbow[i].style.display = "none";
        }
        changeCardStyleButton.innerText = "Signature";
    } else if (changeCardStyleButton_click_count % 4 === 1) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].style.display = "none";
            rainbow[i].style.display = "block";
        }
        changeCardStyleButton.innerText = "Rainbow";
    } else if (changeCardStyleButton_click_count % 4 === 2) {
        for (let i = 0; i < signature.length; i++) {
            signature[i].style.display = "block";
            rainbow[i].style.display = "block";
        }
        changeCardStyleButton.innerText = "Signature + Rainbow";
    } else {
        for (let i = 0; i < signature.length; i++) {
            signature[i].style.display = "none";
            rainbow[i].style.display = "none";
        }
        changeCardStyleButton.innerText = "none";
    }
}

const changeCardStyleButton = document.querySelector(".changeCardStyleButton");
let changeCardStyleButton_click_count = 0;
changeCardStyleButton.addEventListener("click", changeCardStyle);
/* Change Card Style Button */



const settingsModal = document.querySelector(".settingsModal");
