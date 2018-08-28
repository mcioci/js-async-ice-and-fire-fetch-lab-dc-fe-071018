
  .then( resp => "https://anapioficeandfire.com/api/houses")
  //write fetch request to the Game of Thrones API
}

function fetchBooks("books") {
        console.log("== fetchBooks ==");
        for (i = 0; i < books.length; i++) {
          console.log("books[i].name:", books[i].name);
        }
    }

    fetch("https://anapioficeandfire.com/api/books")
      .then( (resp) => {
        console.log("== then1 ==");
        return resp.json()
      })
      .catch( error => {
        console.log("== catch1 ==");
        console.error(`Oh no! ${error}`)
      })
      .then( json => {
        console.log("== then2 ==");
        console.log(json);
        return json
      } )
      .catch( error => {
        console.log("== catch2 ==");
        console.error(`Ruh-roh! Couldn't convert the json: ${error}`)
      })
      .then( json => {
        console.log("== then3 ==");
        console.log("json.books", json.books);
        fetchBooks(json.books);
      } )


function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
