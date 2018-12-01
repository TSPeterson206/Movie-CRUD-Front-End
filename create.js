const createForm = document.querySelector('form')
console.log(createForm)


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
    const table = document.querySelectorAll(".mainTable").value

    axios.post('http://localhost:3000/movies', {
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

//     let node = document.createElement("tr");
//     let textnode = document.createTextNode(
//         `<td>${title.value}</td>
// <td>${director.value}</td>
// <td>${year.value}</td>
// <td>${rating.value}</td>
// <td>${poster.value}</td>`
//     );
//     node.appendChild(textnode);
//     table.appendChild(node);