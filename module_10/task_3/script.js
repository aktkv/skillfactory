
const sendBtn = document.querySelector(".btn-submit");
const sendGeo = document.querySelector(".btn-geo");
const chat = document.querySelector(".chat-window");
const echoUrl = "wss://echo-ws-service.herokuapp.com";
let echoMessage;
echoMessage = new WebSocket(echoUrl);

function writeMessage (message, className){
    let pre = document.createElement("p");
    const chatContainer = chat
    pre.classList.add("myMessage", className);
    pre.textContent = message;
    chatContainer.appendChild(pre);
}

sendBtn.addEventListener('click', () => {
    chat.classList.toggle("active");
    const myInput = document.querySelector("input");
    const messageText = myInput.value; 
    if (echoMessage.readyState === WebSocket.OPEN) {
        writeMessage(messageText, 'user__message');
        echoMessage.send(messageText);
        myInput.value = '';}
})

echoMessage.onmessage = function (evt)  {  
    writeMessage(evt.data, 'server__message');
}

function writeGeo (coords, className){
    let linkGeo = document.createElement("a");
    const chatContainer = chat
    linkGeo.classList.add("myMessage", className);
    linkGeo.textContent = 'Гео-локация';
    linkGeo.href = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
    linkGeo.target = "_blank";
    chatContainer.appendChild(linkGeo);
}

sendGeo.addEventListener('click', () => {
    chat.classList.toggle("active");
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        writeGeo({ latitude, longitude }, 'map__message');
    }, (error) => {
        writeMessage('Невозможно получить ваше местоположение', 'error__message');
    });
}
else {
    writeMessage('Geolocation не поддерживается вашим браузером', 'error__message');
  }
});