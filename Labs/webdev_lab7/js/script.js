function init(){
//add your javascript between these two lines of code (Done)
  const input = document.getElementById('entryinput');
  const button = document.getElementById('entrybutton');
  const output = document.getElementById('textoutput');

    button.addEventListener('click', function () {
    const message = input.value;
    alert('This is your message!: ' + message);
    output.textContent = message;
  });
}

window.addEventListener('load', init);
