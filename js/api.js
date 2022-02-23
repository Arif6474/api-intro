function loadUsers (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
     const li = document.createElement('li');
     li.innerText = ` name : ${user.name}
      Email : ${user.email}
      Id: ${user.id}
      address: ${user.address.city}
     `;
     ul.appendChild(li);
    }
}
function loadPhotos (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data));
}