const fes_cards = document.querySelectorAll(".fes-card");
const party_cards = document.querySelectorAll(".party-card");
const normal_cards = document.querySelectorAll(".normal-card");
const mapfn = (arg) => Number(arg)


const fes_count_input = window.prompt("input fes_count");
const party_count_input = window.prompt("input party_count");
const normal_count_input = window.prompt("input normal_count");

const fes_count = [];
const fes_count_data = Array.from(fes_count_input, mapfn);

for (let i = 0; i < fes_count_data.length; i++) {
    fes_count[i] = fes_count_data[i];
}

for (let i = 0; i < fes_cards.length - fes_count_data.length; i++) {
    fes_count.push(0);
}

const party_count = [];
const party_count_data = Array.from(party_count_input, mapfn);;

for (let i = 0; i < party_count_data.length; i++) {
    party_count[i] = party_count_data[i];
}

for (let i = 0; i < party_cards.length - party_count_data.length; i++) {
    party_count.push(0);
}

const normal_count = [];
const normal_count_data = Array.from(normal_count_input, mapfn);;

for (let i = 0; i < normal_count_data.length; i++) {
    normal_count[i] = normal_count_data[i];
}

for (let i = 0; i < normal_cards.length - normal_count_data.length; i++) {
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

for (let i = 0; i < fes_count.length; i++) {
    displayFesCard(i);
}
for (let i = 0; i < party_count.length; i++) {
    displayPartyCard(i);
}
for (let i = 0; i < normal_count.length; i++) {
    displayNormalCard(i);
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

function copyData() {
    for (let i = 0; i < fes_count.length; i++) {
        fes_count[i] = fes_count[i] % 7;
    }

    for (let i = 0; i < party_count.length; i++) {
        party_count[i] = party_count[i] % 7;
    }

    for (let i = 0; i < normal_count.length; i++) {
        normal_count[i] = normal_count[i] % 7;
    }
    const data = "fes_count = " + fes_count + "\n" + "party_count = " + party_count + "\n" + "normal_count = " + normal_count;
    console.log(typeof(data));
    navigator.clipboard.writeText(data.replace(/,/g, ""));
    alert("Data Copied"); 
}