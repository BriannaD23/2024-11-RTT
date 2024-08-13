const ol = document.createElement("ol");
const ul = document.createElement("ul");
document.body.appendChild(ol);
document.body.appendChild(ul);

const items = ["Item 1", "Item 2", "Item 3"];
items.forEach(item => {
  const olItem = document.createElement("li");
  olItem.textContent = item;
  ol.appendChild(olItem);

  const ulItem = document.createElement("li");
  ulItem.textContent = item;
  ul.appendChild(ulItem);
});

const h1 = document.querySelector("#app h1");
const divUnderH1 = document.querySelector("#app > div");

h1.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
h1.style.textAlign = "center";

divUnderH1.style.backgroundColor = "#f0f0f0";
divUnderH1.style.padding = "10px";
divUnderH1.style.width = "80%";
divUnderH1.style.margin = "0 auto";


const updateATag = document.querySelector.querySelector('a')
console.log(updateATag.hasAttribute('href'));
console.log(updateATag.getAttribute())



const h3Tag = document.createElement('h3')
h3Tag.className = 'funziesLittleClassName'

console.log(h3Tag)
h3Tag.classList.remove('funziesLittleClassName')
console.log(h3Tag)
h3Tag.classList.add('shorterClassname')
console.log(h3Tag.outerHTML)

//toggle classlist
h3Tag.classList.toggle('vissible')

h3Tag.classList.replace('shorterClassName', 'shortClassName')













// const div = document.createElement('div');
// div.style.padding = '20px';
// div.style.backgroundColor = '#f4f4f4';
// div.style.border = '1px solid #ddd';
// div.style.borderRadius = '8px';
// div.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
// div.style.maxWidth = '600px';
// div.style.margin = '20px auto';
// div.style.fontFamily = 'Arial, sans-serif';

// const h1 = document.createElement('h1');
// h1.textContent = 'My Lists';
// h1.style.color = '#ff5733';  
// h1.style.textAlign = 'center';

// const ol = document.createElement('ol');
// ol.style.marginBottom = '20px';
// ol.style.paddingLeft = '20px';
// ol.style.color = '#333';

// ['Ordered Item 1', 'Ordered Item 2', 'Ordered Item 3'].forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   ol.appendChild(li);
// });

// const ul = document.createElement('ul');
// ul.style.marginBottom = '20px';
// ul.style.paddingLeft = '20px';
// ul.style.color = '#555';

// ['Unordered Item A', 'Unordered Item B', 'Unordered Item C'].forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   ul.appendChild(li);
// });

// div.appendChild(h1);
// div.appendChild(ol);
// div.appendChild(ul);
// document.body.appendChild(div);

// console.log('Ordered List:');
// ol.querySelectorAll('li').forEach(li => console.log(li.textContent));
// console.log('Unordered List:');
// ul.querySelectorAll('li').forEach(li => console.log(li.textContent));
