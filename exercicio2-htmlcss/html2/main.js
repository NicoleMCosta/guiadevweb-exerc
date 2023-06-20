
const btn = document.getElementById("button");
let result = document.querySelector("h3");

btn.addEventListener('click', double);
function double(){
    let inp = document.getElementById("input").value;
    let db = parseFloat(inp) * 2;
    result.innerHTML = db;
}

document.getElementById("input").addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        double();
    }
})
