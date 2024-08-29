// collect the number of squares as input
// create number of div elements to 

// let num = 20;

let cont = document.querySelector(".box-container");

// console.log(cont);

let testdiv = document.createElement("div");


for (let i = 0; i < 100; i++)
{
    
    let elem = document.createElement("div");
    elem.classList.add("box");
    elem.innerText = i;
    elem.addEventListener('mouseenter', () => {
        elem.style.backgroundColor = "blue";
    });

    elem.addEventListener('mouseleave', () => {
        setTimeout(() => {
            console.log("test")
            elem.style.backgroundColor = "orange";
        }, 1000);
        
    });


    cont.appendChild(elem);

}


for (let i = 0; i < 10; i++){
    console.log(i);
}