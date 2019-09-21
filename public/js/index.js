const socket = io()

const $room = document.querySelector('datalist')

socket.emit('availableRooms', (rooms) => {
    let html = ''
    rooms.forEach(room => {
       html = html.concat(`<option value="${room}">`) 
    });
    $room.innerHTML = html
})
