(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const editButton = document.querySelector('.editButton')
console.log(editButton)

// POPULATE LIST
function init() {
    const editBay = document.querySelector('.editBay')
    axios.get('http://localhost:3000/movies')
        .then(response => {
            if (!response.data.data) {
                return
            }

            function populate(ele) {
                const newEntry =  `<tr class="${ele.id}">
                <td>${ele.title}</td>
                <td>${ele.director}</td>
                <td>${ele.year}</td>
                <td>${ele.rating}</td>
                <td>${ele.poster}</td>
                <td><a class="edit${ele.id}">EDIT</a></td>
                <td><a class="delete${ele.id}">DELETE</a></td><tr>`

                // const editButton = document.querySelector(`.${ele.id}`)
                // editButton.addEventListener('click', function(){
                //     editBay.innerHTML = `<form class="editMovieForm"><div id="title"> <span> Title </span> <input class="editField editTitle" type="text" required> </div> <div id="director"> <span> Director </span> <input class="editField editDirector" type="text"
                //     required> </div> <div id="year"> <span> Year </span> <input class="editField editYear" type="number" required> </div> <div id="rating"> <span> Rating </span> <input class="editField editRating" type="number" min="1"
                //     max="5" required> </div> <div id="poster"> <span>Poster</span> <input class="editField editPoster"
                //     type="text" required> </div> <button class="editFieldSubmit"
                //     type="submit" id="submit" value="submit">Edit</form>`
                // })
                return newEntry
            }
            const main = document.querySelector('.mainTable')
            main.innerHTML = response.data.data.map(populate).join('\n')
        })
}
init()

// EDIT BUTTON FUNCTION

    // const title = document.querySelector('.editTitle')
    // const director = document.querySelector('.editDirector')
    // const year = document.querySelector('.editYear')
    // const rating = document.querySelector('.editRating')
    // const poster = document.querySelector('.editPoster')

    // axios.put(`http://localhost:8000/movies/${id}`, {
    //         title: title.value,
    //         director: director.value,
    //         year: year.value,
    //         rating: rating.value,
    //         poster: poster.value
    //     })
    //     .then(() => {
    //         init()
    //     })

// REMOVE BUTTON
// removeButton.addEventListener('click', function () {
//     const id = document.querySelector('.mainTable').getAttribute('data-id')
//     axios.delete(`http://localhost:000/movies/${id}`)
//         .then(() => {
//             init()
//         })
// })
},{}]},{},[1]);
