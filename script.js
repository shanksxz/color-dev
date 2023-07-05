const get = (props) => document.getElementById(`${props}`);
const offsetyDisplay = get("offset-y");
const blurRadiusDisplay = get("blur-radius");
const spreadRadiusDisplay = get("spread-radius");
const offsetxNo = get('x-no');
const offsetyNo = get('y-no');
const blurNo = get('blur-no');
const spreadNo = get('spread-no');
const boxx = get('setCSS');
const boxcolor = get('boxcolor')
const color = get('color');
const button = get('k');
let count;



function UpdateShadows() {
    const code = `${offsetxNo.value}px ${offsetyNo.value}px ${blurNo.value}px ${spreadNo.value}px ${color.value}`;
    count = `box-shadow : ${code}`;
    boxx.style.boxShadow = code;
}
const abc = [offsetxNo,offsetyNo,blurNo,spreadNo,color];
abc.forEach(element => {
    element.onchange = UpdateShadows;
})

function GenerateCode() {
    console.log(count);
}



