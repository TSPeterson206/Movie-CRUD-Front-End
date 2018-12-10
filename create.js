const createForm = document.querySelector('form')


// CREATE BUTTON
createForm.addEventListener('submit', function (event) {
    event.preventDefault()

    alert("Thank you! Check our main page to see your movie!")

    // CREATE FORM INPUT FIELDS
    const title = document.querySelector('.createTitle').value
    const director = document.querySelector('.createDirector').value
    const year = document.querySelector('.createYear').value
    const rating = document.querySelector('.createRating').value
    const poster = document.querySelector('.createPoster').value

    axios.post('https://salty-spire-15604.herokuapp.com/movies', {
            title,
            director,
            year,
            rating,
            poster
        })
        .then(() => {
            window.location = '/index.html'
        })
})