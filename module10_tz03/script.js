//создаем переменную урла
const url = 'wss://echo-ws-service.herokuapp.com';
//поиск кнопок
const ctaSend = document.querySelector('.send');
const ctaGeo = document.querySelector('.geo');
//поиск дива для вставки реззультата запроса
let result = document.querySelector('.result');

//создаем функцию для вывода сообщения в чат
function myMessage(message) {
  let myMessageBox = document.createElement('p');
  myMessageBox.innerHTML = `you:<br>${message}`;
  result.appendChild(myMessageBox);
}
//сщздаем функцию для ввывода эхо в чат
function responseMessage(message) {
  let responseMessageBox = document.createElement('p');
  responseMessageBox.style.background = '#c3cbd3';
  responseMessageBox.innerHTML = `response:<br>${message.data}`;
  result.appendChild(responseMessageBox);
}

//создаем функцию запроса и обработки сообщения
ctaSend.addEventListener('click', () => {
  const inputTx = document.querySelector('.input_tx').value;

  let websocket = new WebSocket(url);

  myMessage(inputTx);

  websocket.onopen = function () {
    console.log('hello')
    websocket.send(inputTx);
  };

  websocket.onmessage = function (inputTx) {
    responseMessage(inputTx);
  };
});

//создаем функцию запроса и вывода геолокации
ctaGeo.addEventListener('click', () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      const geoMessageBox = document.createElement('a');
      geoMessageBox.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      geoMessageBox.target = '_blank';
      geoMessageBox.innerHTML = `<p>Широта: ${latitude} °, Долгота: ${longitude} °</p>`;
      result.appendChild(geoMessageBox);
    });
  }
});
