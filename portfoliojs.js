let btn = document.querySelector("#serv");
let main2 = document.querySelector("#main2");
let clr = document.querySelector("#clr");
let clbt = document.querySelector(".clbt");


btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    scrollTo(0, 1000);
});

clbt.addEventListener("click", (evt) => {
    evt.preventDefault();
    colr = clr.value;
    main2.style.backgroundColor = colr;
});
