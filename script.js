

const draggable = document.getElementById("draggable-1");
const dropzone = document.getElementById("dropzone-1");


// 1: Propiedad draggable
draggable.setAttribute("draggable", "true");

// ondragstart: Este controlador de eventos se adjuntará a nuestro elemento draggable y se accionará cuando se produzca un evento dragstart
// ondragover: Este controlador de eventos estará adjunto a nuestro elemento dropzone y se accionará cuando se produzca un evento dragover
// ondrop: Este controlador de eventos también estará adjunto a nuestro elemento dropzone y se accionará cuando se produzca un evento drop.


//2. cuando se produzca un evento dragstart
draggable.addEventListener("dragstart", (event) => {
    //dataTransfer expone una serie de propiedades 
    //e.dataTransfer.effectAllowed = 'move';
    event
        .dataTransfer
        .setData('text/plain', event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = 'yellow';
});

//3.commportamiento predeterminado de soltar para ciertos elementos DOM 
//como <div> en navegadores no acepta la función de soltar.
dropzone.addEventListener("dragover",(event) =>{
     event.preventDefault();
   });



dropzone.addEventListener("drop", (event) => {
    const id = event
        .dataTransfer
        .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);

    event
        .dataTransfer
        .clearData();
});


