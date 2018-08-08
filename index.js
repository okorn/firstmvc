// * Nuestra informacion se encuentra aislada
const m = {
  dataText: 'mi primer mvc',
  dataHead: 'Buen trabajo!!'
}

// * nuestra vista se encarga de mostrar en panalla lo que requerimos
// * tambien se va a encargar de las interacciones desde el cliente
const v = {
  renderAlert: function(){
    swal(m.dataHead, m.dataText, "success");
  },
  renderBody: function(){
    const newContentText = document.getElementById('textContent')
    newContentText.innerHTML= ` <h1 class="title">${m.dataHead}</h1><h2 class="subtitle">
    ${m.dataText}</h2> `;
  },

 }

// * El controlador se ecncarga de las acciones y respuestas.
const c = {
  updateDataOnload: function(){
    v.renderAlert(m);
    v.renderBody(m);
  }
};

window.onload = c.updateDataOnload;