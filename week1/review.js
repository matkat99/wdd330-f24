const myVar = [1, 2, 3];

//function declaration
function double(num) {
  return num * 2;
}

// function expression
const myFunction = function (num) {
  return num * 2;
};

const myOtherFunction = (num) => {
  return num * 2;
};

const simple = (num) => num * 2;

function modifyList(list, callback) {
  const modified = [];
  list.forEach((num) => {
    modified.push(callback(num));
  });
  return modified;
}

const newArray = modifyList([1, 2, 3], double);

const myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  },
  fullname: function () {
    return this.firstName + "" + this.lastName;
  }
};

console.log(myObject.fullname());

const baseUrl = "https://pokeapi.co/api/v2/type";

async function getJson(url) {
  const response = await fetch(url);
  console.log(response);

  if (response.ok) {
    const data = await response.json();
    return data;
  }
}

/*
When the page loads:
    get the type data from the api
    convert the type data into HTML
    display html on the page

*/

function typeTemplate(type) {
  return `<li><a href="${type.url}">${type.name}</a></li>`;
}

async function init() {
  const types = await getJson(baseUrl);
  const typeHtml = types.results.map(typeTemplate).join("");
  const listElement = document.querySelector(".typeList");
  listElement.innerHTML = typeHtml;

  listElement.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.currentTarget);
  });
}

init();
