let tbody = document.querySelector("tbody");
let trow = document.querySelectorAll(".trow");

let title = document.querySelector(".title");
let price = document.querySelector(".price");
let taxe = document.querySelector(".taxe");
let ads = document.querySelector(".ads");
let disc = document.querySelector(".discount");
let count = document.querySelector(".count");
let ctg = document.querySelector(".category");
let total = document.querySelector(".total");

let search = document.querySelector(".search input");

let creatte = document.getElementById("create");
let srctit = document.getElementById("sertit");
let srccat = document.getElementById("sercat");

let delAll = document.getElementById("deletAll");

var id = 0;
// start : create
let cruds = [];

const allcruds = JSON.parse(localStorage.getItem("products"));
if (allcruds) {
    tbody.innerHTML = "";
    allcruds.forEach((e) => {
        tbody.innerHTML += createCrud(e);
    });
}
//create table row correspond to a product
function createCrud(crud) {
    return `
        <tr class="trow">
            <td class="crudId">${crud.Id}</td>
            <td class="crudTitle">${crud.Title}</td>
            <td class="crudPrice">${crud.Price}</td>
            <td class="crudTaxe">${crud.Taxe}</td>
            <td class="crudAds">${crud.Ads}</td>
            <td class="crudDiscount">${crud.Discount}</td>
            <td class="crudCount">${crud.Total}</td>
            <td class="crudCategory">${crud.Category}</td>
            <td class=""><button class="upCrud">update</button></td>
            <td class=""><button class="delCrud">delete</button></td>
        </tr>`;
}

//when click the create button
creatte.addEventListener("click", function () {
    if (Number(count.value) > 0)
        while (Number(count.value) > 0) {
            let crud = {};
            id++;
            //set up product info in object
            crud.Id = id;
            crud.Title = title.value;
            crud.Price = Number(price.value);
            crud.Total =
                Number(price.value) + Number(taxe.value) - Number(disc.value);
            crud.Taxe = Number(taxe.value);
            crud.Discount = Number(disc.value);
            crud.Ads = Number(ads.value);
            crud.Category = ctg.value;

            //push product to array of products
            cruds.push(crud);
            //remove inputs contents

            count.value--;
        }
    //restar iputs values
    title.value = "";
    price.value = "";
    taxe.value = "";
    ads.value = "";
    disc.value = "";
    count.value = "";
    ctg.value = "";

    localStorage.setItem("products", JSON.stringify(cruds));
    //show products in the table
    tbody.innerHTML = "";
    cruds.forEach((e) => {
        tbody.innerHTML += createCrud(e);
    });
});

trow.forEach((e) => {
    e.addEventListener("click", function (e) {
        console.log("dlfj");
        console.log(e);
        if (e.target.classList.contains("delCrud")) {
            //const divtorm = e.target.closest("");
            let crid = document.querySelector(`tr .crudId`);
            console.log(crid.innerHTML);
            console.log("innerHTML");
        }
    });
});
