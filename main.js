let nodeList = document.querySelectorAll("img");
let p = Array.from(nodeList);
console.log(p)

for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("click", function () {
        console.log(`You have clicked on the ${i} image`)

    })
}