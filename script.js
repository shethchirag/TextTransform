const inputText = document.querySelector("#number");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const camelcase = document.querySelector("#camelcase");
const pascalcase = document.querySelector("#pascalcase");
const snakecase = document.querySelector("#snakecase");
const kebabcase = document.querySelector("#kebabcase");
const trim = document.querySelector("#trim");

let convertText;
const makeCamelCase = (str) =>
  str
    .split(" ")
    .map((e, i) =>
      i ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()
    )
    .join("");

const toPascalCase = (str) =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join("");

inputText.addEventListener("input", (e) => {
  convertText = e.target.value;
  lowercase.innerText = convertText.toLowerCase();
  uppercase.innerText = convertText.toUpperCase();
  camelcase.innerText = makeCamelCase(convertText);
  pascalcase.innerText = toPascalCase(convertText);
  snakecase.innerText = convertText.split(" ").join("_");
  kebabcase.innerText = convertText.split(" ").join("-");
  trim.innerText = convertText.replace(/\s/g, "");
  console.log(convertText.split(" ").join("_"));
});
