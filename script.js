
let currentPage = 1;
let per = 20;


var header = document.createElement("div");
header.setAttribute("class", "header");
header.innerHTML = "<p><b>Open Brewery DB<b></p>";
var side = document.createElement("div");
side.setAttribute("class", "side");
side.innerText = "Wellcome To Brewery DB"

var footer = document.createElement("div");
footer.setAttribute("class", "footer");
footer.innerHTML = `
<p id="currentPage"></p>
<button type="button" onclick="previous()">Previous</button>
<button onclick="next()">Next</button><button type="button" onclick="previoud()>NEXT</button>`
var section = document.createElement("section");
section.setAttribute("class", "section")
document.body.append(header, side, footer, section);



function createData({ name, brewery_type, street, address_2, address_3, city, state, postal_code, country, phone, website_url }) {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `
<p>Name: ${name}</p>
<p>type:${brewery_type}</p>
<p>Street: ${street}</p>
<p>Address: ${address_2, address_3}</p>
<p>City: ${city}</p>
<p>State: ${state}</p>
<p>Postal code: ${postal_code}</p>
<p>Country: ${country}<p>
<p>Phone: ${phone}</p>
<p>Website: ${website_url}</P>`
    section.appendChild(container);
}

async function per_page(num) {
    document.querySelector(".section").innerHTML = ``;
    try {
        let data = await fetch(`https://api.openbrewerydb.org/breweries?per_page=${num}`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error) {
        console.error(error);
    }

}

page(1);

async function page(num) {
    document.querySelector(".section").innerHTML = ``;
    document.querySelector("#currentPage").innerHTML = `Page: ${num}`


    try {
        let data = await fetch(`https://api.openbrewerydb.org/breweries?per_page=${per}&page=${num}`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error) {
        console.error(error);
    }
    currentPage = num;
}


function previous() {
    let a = currentPage - 1;
    if (a < 1) {
        page(1);
    }
    else {
        page(a);
    }
}

function next() {
    let b = currentPage + 1;
    page(b);
}
   
