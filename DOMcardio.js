// Make a div
const wrapperDiv = document.createElement('div');
// add a class of wrapper to it
wrapperDiv.classList.add('wrapper-div');
// put it into the body

// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
li1.textContent = 'first list item';
const li2 = li1.cloneNode(true);
li2.textContent = 'second list item';
const li3 = document.createElement('li');
li3.textContent = 'third list item';

ul.insertAdjacentElement('afterbegin', li2);
li2.insertAdjacentElement('beforebegin', li1);
li2.insertAdjacentElement('beforeend', li3);
ul.appendChild(li2);
wrapperDiv.appendChild(ul);
document.body.appendChild(wrapperDiv);
// create an image
const pic = document.createElement('img');
// set the source to an image
pic.src = 'http://picsum.photos/200';
// set the width to 250
pic.setAttribute = ('width', 250);
// add a class of cute
pic.classList.add('cute');
// add an alt of Cute Puppy
pic.alt = 'Cute Puppy';
// Append that image to the wrapper
wrapperDiv.appendChild(pic);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const htmlAsString = `
    <div class='htmldiv'>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
    </div>
`;
// const myHtml = document.createRange().createContextualFragment(htmlAsString);
// console.log(myHtml);
ul.insertAdjacentHTML('beforebegin', htmlAsString);
// add a class to the second paragraph called warning
const myDiv = document.querySelector('.htmldiv');
myDiv.lastElementChild.classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
  const html = `
     <div class="playerCard">
       <h2>${name} — ${age}</h2>
       <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
       <button>Delete</button>
     </div>
    `;
  return html;
};

/* wrapperDiv.appendChild(
  document
    .createRange()
    .createContextualFragment(generatePlayerCard('scooby', 5, 1.2))
); */
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
const scooby = document
  .createRange()
  .createContextualFragment(generatePlayerCard('scooby', 5, 1.2));
const tom = document
  .createRange()
  .createContextualFragment(generatePlayerCard('tom', 3, 2.2));
const henry = document
  .createRange()
  .createContextualFragment(generatePlayerCard('henry', 2, 1));
const teddy = document
  .createRange()
  .createContextualFragment(generatePlayerCard('teddy', 4, 3));
// append those cards to the div
const dogs = [scooby, tom, henry, teddy];
// put the div into the DOM just before the wrapper element
dogs.forEach((dog) => {
  newDiv.appendChild(dog);
});
document.body.appendChild(newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('button');

// make out delete function
function deleteItem(e) {
  //   console.log(e.target);
  console.log(e.currentTarget);
  //   console.log(e.target.parentElement.remove());
  e.currentTarget.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach((button) => {
  button.addEventListener('click', deleteItem);
});
