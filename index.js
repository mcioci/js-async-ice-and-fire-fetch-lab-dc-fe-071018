function fetchBooks() {
  console.log("== fetchBooks ==")

  fetch ('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => {
      console.log(json);
      renderBooks(json);
    });
  //write fetch request to the Game of Thrones API
}

//fetch ('https://anapioficeandfire.com/api/books')
//  .then(function(response) {
//    console.log("-- books response --");
//    console.log("response:", response);
//    return response.json();
//  })
//  .then(function(json) {
//    console.log("== then #2 ==");
//    console.log("json:", json);
//    renderBooks(json);
//  })




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
