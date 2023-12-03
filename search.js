let imgsearch = document.querySelector('.imgsearch')
let bsub =  document.querySelector('.bsub')
let searchRes = document.querySelector('.searchresult')
let form = document.querySelector('form')
let discoverSearch = document.querySelector('.discoversearch')
let searchHeadline = document.querySelector('.searchheadline')
let page = 1
let query
function mySearch(e){
  e.preventDefault()
  query = document.querySelector('input').value
  page = 1
  searchHeadline.innerHTML = `<h3>Results for ${query}</h3>`
  searchResult()
if(page === 1){
  searchRes.innerHTML = ``
  discoverMore.style.display = 'none'
  discoverSearch.style.display = 'block'
}
}

form.addEventListener('submit', mySearch)

//For click button
bsub.addEventListener('click', mySearch)

async function searchResult(){
    let searhUrl =  await fetch(`https://pixabay.com/api/?key=37860007-782d282111110936664077067&q=${query}&page=${page}&per_page=24`) 
    let rawSearch = await searhUrl.json()
    let resultSearch =  rawSearch.hits

    console.log(rawSearch)
    for(let i = 0; i < resultSearch.length; i++){
      let itemSearch = resultSearch[i]
      let searchImg = itemSearch.previewURL
      let searchType = itemSearch.type
      let searchTag = itemSearch.tags 
      let itemId = itemSearch.id
      

      if(i % 3 === 0) { 
          searchRes.innerHTML += `<div class="row">`
        }
       editorChoice.innerHTML = ``
       searchRes.innerHTML += `<div class="col-lg-4 card"><a href="photos.html?id=${itemId}"><img src="${searchImg}" alt="${searchTag}"/></a>
       <p><a href="photos.html?id=${itemId}">${searchTag}</a></p></div>`
       
    }
    
}
discoverSearch.addEventListener('click', function(e){
e.preventDefault()
page++
searchResult()
})