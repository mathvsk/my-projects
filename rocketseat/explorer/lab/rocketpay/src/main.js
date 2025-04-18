import "./css/index.css";
import IMask from "imask";

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path");
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path");
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img");

function setCardType(type) {
    const colors = {
        visa: ['#2D57F2', '#436D99'],
        mastercard: ['#C69347', '#DF6F29'],
        default: ['black', 'gray'],
    }

    ccBgColor01.setAttribute('fill', colors[type][0]);
    ccBgColor02.setAttribute('fill', colors[type][1]);
    ccLogo.setAttribute('src', `cc-${type}.svg`)
}

globalThis.setCardType = setCardType;

const securityCode = document.querySelector("#security-code");
const securityCodePattern = {
    mask: "0000"
}
const securityCodeMasked = IMask(securityCode, securityCodePattern);

const expirationDate = document.querySelector("#expiration-date");
const expirationDatePattern = {
    mask: "MM{/}YY",
    blocks: {
        YY: {
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).slice(2),
            to: String(new Date().getFullYear() + 10 ).slice(2),
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        }
    }
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern);

const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
    mask: [
        {
            mask: "0000 0000 0000 0000",
            regex: /^4\d{0,15}/,
            cardtype: "visa"
        },
        {
            mask: "0000 0000 0000 0000",
            regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
            cardtype: "mastercard"
        },
        {
            mask: "0000 0000 0000 0000",
            cardtype: "default"
        }
    ],
    dispatch: function (appended, dynamicMasked) {
        const number = (dynamicMasked.value + appended).replace(/\D/g, "");

        const foundMask = dynamicMasked.compiledMasks.find(({ regex }) => number.match(regex))
        
        console.log(foundMask)
        return foundMask
    },
}

const cardNumberMasked = IMask(cardNumber, cardNumberPattern);

const addButton = document.querySelector('#add-card')
addButton.addEventListener('click', (e) => {
    alert('Cartão adicionado!!')
    e.preventDefault()
});

const cardHolder = document.querySelector('#card-holder');
cardHolder.addEventListener('input', () => {
    const dafaultValue = "Matheus Igor Viscki"
    const ccHolder = document.querySelector('.cc-holder .value')

    preencherCampos(ccHolder, cardHolder.value, dafaultValue)
});

securityCodeMasked.on('accept', () => {
    const dafaultValue = "0707"
    const securityCode = document.querySelector('.cc-security .value')
    
    preencherCampos(securityCode, securityCodeMasked.value, dafaultValue)
});

cardNumberMasked.on('accept', () => {
    const ccNumber = document.querySelector('.cc-number')
    const defaultValue = "1234 5678 9012 3456"
    const cardType = cardNumberMasked.masked.currentMask.cardtype

    setCardType(cardType)
    preencherCampos(ccNumber, cardNumberMasked.value, defaultValue)
});

expirationDateMasked.on('accept', () => {
    const ccExpiration = document.querySelector('.cc-extra .value')
    const defaultValue = "07/32"

    preencherCampos(ccExpiration, expirationDateMasked.value, defaultValue)
});


function preencherCampos(path, currentValue, defaultValue) {
    path.innerText = currentValue.length > 0 ? currentValue : defaultValue
}