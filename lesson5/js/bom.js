const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
     li.textContent = input.value; 
     deletebutton.textContent = '❌';
     li.append(deletebutton);
     list.append(li);
     deletebutton.addEventListener('click', () => {
        // this line of code should use the removeChild() (Links to an external site.) method
        list.removeChild(li);
        
        // this line of code should move the cursor back to the input box using the focus (Links to an external site.) method. 
        input.focus();

      });



  });