// Write your code here!
document.body.innerHTML = '<h1>Hello, world!</h1>';

document.body.innerHTML = '<div class="container"></div>';

document.querySelector('.container').innerHTML = '<ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>';
document.querySelector('h1').classList.add('header');

const containerDiv = document.querySelector('.container');
containerDiv.parentElement.removeChild(containerDiv);

function addToContainer(text) {
    const newItem = document.createElement('li');
    newItem.textContent = text;
    document.querySelector('.container ol').appendChild(newItem);
  }
  
  addToContainer('New Item Text');
  document.body.style.backgroundColor = 'lightblue';

  document.querySelector('h1').textContent = 'Updated Heading';

  const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);


document.querySelector('.header').textContent = 'YOUR-NAME is the champion';



  