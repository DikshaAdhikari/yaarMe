// declaring varialbles
const home = document.getElementById('home');
const about = document.getElementById('about');
const posts = document.getElementById('posts');
const overview = document.getElementById('overview');

// default home button color
home.style.color="#3282b8";

// on click home
home.addEventListener("click", () =>{
    home.style.color="#3282b8";
    about.style.color="#706c61";
    posts.classList.remove("visible");
    overview.classList.add('visible');
});

// on click about
about.addEventListener("click", () =>{
    about.style.color="#3282b8";
    home.style.color="#706c61";
    posts.classList.add("visible");
    overview.classList.remove('visible');
});