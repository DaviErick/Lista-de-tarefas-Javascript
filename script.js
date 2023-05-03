var itens = [];
var output = document.querySelector('.output-container');

document.querySelector('input[type=submit]').addEventListener('click', () => {
  var nometarefa = document.querySelector('.tarefa').value;
  var numtempo = document.querySelector('.tempo').value;
  itens.push({
    'tarefa': nometarefa,
    'tempo': numtempo
  });
  output.innerHTML = "";
  renderItens();
});

function renderItens() {
  itens.map(function (val, index) {
    output.innerHTML += `
        <div class="output-item">
          <div class="resultado">
            <h3>${val.tarefa}</h3>
            <h3 class="tempo-exec">${val.tempo} min...</h3>
            <input type="button" value="Feito!" data-index="${index}">
          </div>
        </div>`;
  });

  var doneButtons = document.querySelectorAll('input[value="Feito!"]');
  doneButtons.forEach(function(button) {
    button.addEventListener('click', () => {
      var index = button.getAttribute('data-index');
      itens.splice(index, 1);
      output.innerHTML = "";
      renderItens();
    });
  });
}