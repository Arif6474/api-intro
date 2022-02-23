function loadComments (){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => userComments(data))
}
loadComments ()
function userComments(comments){
    const commentContainer = document.getElementById('user-comments');
for (const comment of comments){
   const div =document.createElement('div');
   div.classList.add('comment')
   div.innerHTML = `
   <p>${comment.postId}</p>
   <p>${comment.id}</p>
   <h2>${comment.name}</h2>
   <h4>${comment.email}</h4>
   <p>${comment.body}</p>
   `
   commentContainer.appendChild(div);
}
}