// * Nuestra informacion se encuentra aislada
const m = {
  dataText: 'mi primer mvc',
  dataHead: 'Buen trabajo!!'
}

// * nuestra vista se encarga de mostrar en panalla lo que requerimos
// * tambien se va a encargar de las interacciones desde el cliente
const v = {
  renderAlert: function(data){
    if (window.localStorage.clicks < 4 || window.localStorage.clicks === 0) {
      swal(m.dataHead, m.dataText, "success");
    } else {
      swal.close();
    }  
  },

  renderBody: function(data){
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

///// Guardar cantidad de clicks en localstorage para que no aparezca mas el cartel a partir de cierta cantidad.

var clicks = 0;

function onClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").innerHTML = clicks;
    c.updateDataOnload();
};

window.onload = c.updateDataOnload;
 

