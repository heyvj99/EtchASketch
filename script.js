// collect the number of squares as input
// create number of div elements to 

// let num = 20;

let numsqares = prompt("Enter the number of squares:");
let boxwidth = 100/numsqares;

let cont = document.querySelector(".box-container");

// console.log(cont);

let testdiv = document.createElement("div");


for (let i = 0; i < (numsqares*numsqares); i++)
{
    
    let elem = document.createElement("div");
    elem.classList.add("box");
    elem.style.flexGrow = '1';
    elem.style.flexShrink = '1';
    elem.style.flexBasis = `${boxwidth}%`;
    // elem.innerText = i;


    elem.addEventListener('mouseenter', () => {
        elem.style.backgroundColor = '#ff2079';
    });

    elem.addEventListener('mouseleave', () => {
        setTimeout(() => {
            elem.style.backgroundColor = '#04005e';
        }, 1000);
        
    });
    
    let flexitem = window.getComputedStyle(elem);
    console.log(flexitem.flexGrow);
    console.log(typeof(flexitem));


    cont.appendChild(elem);

}



for (let i = 0; i < 10; i++){
    console.log(i);
}