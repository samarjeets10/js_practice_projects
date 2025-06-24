
const container = document.querySelector(".container");
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submit");
const downloadBtn = document.getElementById("download");
const sizeOption = document.querySelector(".sizeOptions");
const BGcolor = document.getElementById("BGcolor");
const FGcolor = document.getElementById("FGcolor");

let QR_Code;
let sizeChoice, BGcolorChoice, FGcolorChoice;

// Set size ;

sizeOption.addEventListener("change", () => {
    sizeChoice = sizeOption.value;
    console.log(sizeChoice);
});

// Set BG color :

BGcolor.addEventListener("input", () => {
    BGcolorChoice = BGcolor.value;
    console.log(BGcolorChoice);
});

// Set FG color :

FGcolor.addEventListener("input", () => {
    FGcolorChoice = FGcolor.value;
    console.log(FGcolorChoice);
});

// Format input :

const inputFormat = (value) => {
    value = value.replace(/[^a-z0-9A-Z]+g/, "");  // this will remove all special characters from the input and give only alphanumeric characters.
    return value;
};

submitBtn.addEventListener("click", async () => {
    container.innerHTML = "";

    // QRCode generation : using QRCode library.

    QR_Code = await new QRCode (container, {
        text: userInput.value,
        width: sizeChoice,
        height: sizeChoice,
        colorDark: FGcolorChoice,
        colorLight: BGcolorChoice 
    });

    // Set Url for Download :

    const src = container.firstChild.toDataURL("image/png");

    downloadBtn.href = src;
    let userValue = userInput.value;

    try {
        userValue = new URL(userValue).hostname;
    } catch (_) {
        userValue = inputFormat(userValue);
        downloadBtn.download = `${userValue}QR`;
        downloadBtn.classList.remove("hide");
    }

});

userInput.addEventListener("input", () => {
    if (userInput.value.trim().length < 1) {
        submitBtn.disabled = true;
        downloadBtn.href = "";
        downloadBtn.classList.add("hide");
    } else {
        submitBtn.disabled = false;
    }
});


window.onload = () => {
    container.innerHTML = "";
    sizeChoice = 100;
    sizeOption.value = 100;
    userInput.value = "";
    BGcolor.value = BGcolorChoice = "#ffffff";
    FGcolor.value = FGcolorChoice = "#377dff";
    downloadBtn.classList.add("hide");
    submitBtn.disabled = true;
};








