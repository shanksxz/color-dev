const get = (props) => document.getElementById(`${props}`);

const offsetxDisplay = get("offset-x");
const offsetyDisplay = get("offset-y");
const blurRadiusDisplay = get("blur-radius");
const spreadRadiusDisplay = get("spread-radius");
const offsetxNo = get('x-no');
const offsetyNo = get('y-no');
const blurNo = get('blur-no');
const spreadNo = get('spread-no');
const box = get('setCSS');
const boxcolor = get('boxcolor')
const color = get('color');
const button = get('k');
const x_displayNo = get('x-displayno');
const y_displayNo = get('y-displayno');
const br_displayNo = get('br-displayno');
const sr_displayNo = get('sr-displayno');
const bg_color = get('bgcolor');
const bgDisplay = get("bg");
const codeToCopy = get("generate");
let count;

box.style.boxShadow = "0px 0px 50px 0px #DDE6ED"

function UpdateShadows() {
    const code = `${offsetxNo.value}px ${offsetyNo.value}px ${blurNo.value}px ${spreadNo.value}px ${color.value}`;
    count = `box-shadow : ${code}`;
    box.style.boxShadow = code;
    box.style.backgroundColor = boxcolor.value;
    codeToCopy.textContent = "GenerateCode"
}

const display = [
    [offsetxNo, offsetxDisplay],
    [offsetyNo, offsetyDisplay],
    [blurNo, blurRadiusDisplay],
    [spreadNo, spreadRadiusDisplay],
]


const input = [
    [x_displayNo, offsetxNo, offsetxDisplay],
    [y_displayNo, offsetyNo, offsetyDisplay],
    [br_displayNo, blurNo, blurRadiusDisplay],
    [sr_displayNo, spreadNo, spreadRadiusDisplay],
]

input.forEach(e => {
    e[0].addEventListener("input", (event) => {
        if (event.target.value != "") {
            e[1].value = event.target.value;
            e[2].textContent = `${event.target.value}px`
        }
        else {
            e[2].textContent = '0px';
        }
        UpdateShadows();
    })
})


bg_color.addEventListener("input", () => {
    bgDisplay.style.backgroundColor = bg_color.value;
})


display.forEach(e => {
    e[0].addEventListener("input", (event) => {
        e[1].textContent = `${event.target.value}px`;
    })
})

const numbers = [offsetxNo, offsetyNo, blurNo, spreadNo, color, boxcolor];
numbers.forEach(element => {
    element.addEventListener("input", UpdateShadows);
})

// function GenerateCode() {
// console.log(count);
// codeToCopy.addEventListener("click", copyContent());

// async function copyContent() {
//     try {
//         await navigator.clipboard.writeText(count);
//         // copyMsg.innerText = "copied";
//         console.log("copied");
//     }
//     catch (e) {
//         // copyMsg.innerText = "Failed";
//         console.log("failed");
//     }
// }

codeToCopy.addEventListener('click', async event => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return
    }
    const text = count;
    try {
      await navigator.clipboard.writeText(text)
      event.target.textContent = 'Copied to clipboard'
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  })




