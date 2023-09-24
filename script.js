const setup = document.querySelector("#setup");
const punchline = document.querySelector("#punchline");
const next = document.querySelector("#next");
const url = "https://official-joke-api.appspot.com/jokes/programming/random";
const loading = document.querySelector("#loading");



function getJoke() {

    loading.classList.add("active");

    fetch(url)
        .then(data => data.json())
        .then(data => {

            loading.classList.remove("active");


            console.log(data);

            setup.textContent = `${data[0].setup}`;
            punchline.textContent = `${data[0].punchline}`;
        })
}

getJoke();

next.addEventListener('click', getJoke);