const contents = {
  'about': {
    'title': 'About',
    'content': 'About what?'
  },
  'experience': {
    'title': 'Experience',
    'content': `What do you expect from me? I don't have any experience for the past few months!`
  },
  'contact': {
    'title': 'Contact',
    'content': 'No contact for now, everything is private for me.'
  },
  'documentation': {
    'title': 'Documentation',
    'content': 'Which documentation again? <a href="https://developer.mozilla.org/en-US/" target="_blank">this</a> might help.'
  }
};

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  const id = button.id;
  buttonAddOnClick(button, contents[id].title, contents[id].content);
});

function buttonAddOnClick(button, titleValue, contentValue) {
  const title = document.getElementById('title');
  const content = document.getElementById('content');

  button.addEventListener('click', event => {
    buttons.forEach(btn => btn.style = '');
    event.target.style.borderBottom = '1px solid black';
    title.innerText = titleValue;
    content.innerHTML = contentValue;
  });
}