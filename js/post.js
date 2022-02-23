function loadPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
loadPosts();
function displayPost (posts){
    const userPost = document.getElementById('posts');
    for (const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h4>${post.userId}</h4>
        <h2>${post.title} </h2>
        <p> ${post.body}</p>
        
        `
        userPost.appendChild(div);
    }
}