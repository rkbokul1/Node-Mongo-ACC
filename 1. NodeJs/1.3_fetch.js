// old method using fetch which return a promise and we catch this with then.

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

// new method using async/await

const getData = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data)
}

getData();



// node does not use fetch directly, so we can use package for this code like axios