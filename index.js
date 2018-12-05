// POPULATE LIST
function init() {

    axios.get('http://localhost:3000/movies')
        .then(response => {
            if (!response.data.data) {
                return
            }

            function populate(ele) {
                const newEntry = `<tr class="${ele.id}" data-id="${ele.id}">
                <td>${ele.title}</td>
                <td>${ele.director}</td>
                <td>${ele.year}</td>
                <td>${ele.rating}</td>
                <td>${ele.poster}</td>
                <td><button data-id="${ele.id}" class="editButton">EDIT</button></td>
                <td><button data-id="${ele.id}" class="removeButton">DELETE</button></td><tr>`
                return newEntry
            }
            const main = document.querySelector('.mainTable')
            main.innerHTML = response.data.data.map(populate).join('\n')
            addEventListenerMainList()
            addEventListenerEditButton()
        })
}
init()

// EDIT BUTTON FUNCTION

function addEventListenerEditButton() {

    const editButton = document.querySelectorAll('.editButton')
    editButton.forEach(item => {
        item.addEventListener('click', handleEdit)

        function handleEdit(event) {
            const id = event.target.getAttribute('data-id')
            const title = document.querySelector('.editTitle')
            const director = document.querySelector('.editDirector')
            const year = document.querySelector('.editYear')
            const rating = document.querySelector('.editRating')
            const poster = document.querySelector('.editPoster')

            axios.put(`http://localhost:3000/movies/${id}`, {
                    title: title.value,
                    director: director.value,
                    year: year.value,
                    rating: rating.value,
                    poster: poster.value
                })
                .then(() => {
                    init()
                })
        }
    })
}

// REMOVE BUTTONS
function addEventListenerMainList() {

    const removeButton = document.querySelectorAll('.removeButton')
    removeButton.forEach(item => {
        item.addEventListener('click', handleRemove)

        function handleRemove(event) {
            const id = event.target.getAttribute('data-id')
            axios.delete(`http://localhost:3000/movies/${id}`)
                .then(() => {
                    init()
                })
        }
    })
}