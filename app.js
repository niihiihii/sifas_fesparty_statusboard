/* block 'double tap zoomin zoomout' */
let lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
     let now = (new Date()).getTime();
     if (now - lastTouchEnd <= 300) {
          event.preventDefault(); 
        } lastTouchEnd = now; 
    }, false);
/* block 'double tap zoomin zoomout' */

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
            fes_cards[num].children[2].children[0].src = limitbreaklink + "overlay.png";
            fes_cards[num].children[1].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 1) {
            fes_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak0.png";
            fes_cards[num].children[1].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 2) {
            fes_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak1.png";
            fes_cards[num].children[1].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 3) {
            fes_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak2.png";
            fes_cards[num].children[1].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 4) {
            fes_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak3.png";
            fes_cards[num].children[1].style.opacity = "0%";
        } else if (fes_count[num] % 7 === 5) {
            fes_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak4.png";
            fes_cards[num].children[1].style.opacity = "0%";
        } else {
            fes_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak5.png";
            fes_cards[num].children[1].style.opacity = "100%";
        }
}
function changeFesCard(num) {
    fes_count[num]++;
    displayFesCard(num);
}

function displayPartyCard(num) {
    if (party_count[num] % 7 === 0) {
        party_cards[num].children[2].children[0].src = limitbreaklink + "overlay.png";
        party_cards[num].children[1].style.opacity = "0%";
    } else if (party_count[num] % 7 === 1) {
        party_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak0.png";
        party_cards[num].children[1].style.opacity = "0%";
    } else if (party_count[num] % 7 === 2) {
        party_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak1.png";
        party_cards[num].children[1].style.opacity = "0%";
    } else if (party_count[num] % 7 === 3) {
        party_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak2.png";
        party_cards[num].children[1].style.opacity = "0%";
    } else if (party_count[num] % 7 === 4) {
        party_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak3.png";
        party_cards[num].children[1].style.opacity = "0%";
    } else if (party_count[num] % 7 === 5) {
        party_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak4.png";
        party_cards[num].children[1].style.opacity = "0%";
    } else {
        party_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak5.png";
        party_cards[num].children[1].style.opacity = "100%";
    }
}
function changePartyCard(num) {
    party_count[num]++;
    displayPartyCard(num);
}

function displayNormalCard(num) {
    if (normal_count[num] % 7 === 0) {
        normal_cards[num].children[2].children[0].src = limitbreaklink + "overlay.png";
        normal_cards[num].children[1].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 1) {
        normal_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak0.png";
        normal_cards[num].children[1].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 2) {
        normal_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak1.png";
        normal_cards[num].children[1].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 3) {
        normal_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak2.png";
        normal_cards[num].children[1].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 4) {
        normal_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak3.png";
        normal_cards[num].children[1].style.opacity = "0%";
    } else if (normal_count[num] % 7 === 5) {
        normal_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak4.png";
        normal_cards[num].children[1].style.opacity = "0%";
    } else {
        normal_cards[num].children[2].children[0].src = limitbreaklink + "limitbreak5.png";
        normal_cards[num].children[1].style.opacity = "100%";
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

function downImg(){
	html2canvas(document.querySelector(".checkerboard"),{ logging: true, letterRendering: 1, allowTaint: false,  useCORS: true }).then(function(canvas){
		const myImage = canvas.toDataURL();
		downloadURI(myImage, "image.png") 
	});
}

function downloadURI(url, name){
	const link = document.createElement("a")
	link.download = name;
	link.href = url;
	document.body.appendChild(link);
	link.click();
}

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

function printData() {
    const data = makeData();
    const dataArea = document.querySelector(".dataArea");
    dataArea.value = data;
    copyDataModal.showModal();
}

function copyData() {
    const data = makeData();
    navigator.clipboard.writeText(data);
    alert("Data Copied"); 
}

function idolizedOn() {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].children[0].src = cards[i].children[0].src.replace(/_idolized|.png/g, "") + "_idolized.png"
    }
}

function idolizedOff() {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].children[0].src = cards[i].children[0].src.replace("_idolized", "")
    }
}

function idolizedOnOff() {
    switch_click_count++;
    if (switch_click_count % 2 === 0) {
        idolizedOff();
    } else {
        idolizedOn();
    }
}
const idolizedSwitch = document.querySelector(".idolizedSwitch");
let switch_click_count = 0;
idolizedSwitch.addEventListener("click", idolizedOnOff);


const copyDataModal = document.querySelector(".copyDataModal");
const inputDataButton = document.querySelector(".inputDataButton");
const inputDataModal = document.querySelector(".inputDataModal");

inputDataButton.addEventListener("click", () => {
    inputDataModal.showModal();
});