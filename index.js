const suggestion = [
    "HTML",
    "CSS",
    "JavaScript",
    "Web Development Tutorials",
    "Programming",
    "React",
    "Easy tutorials",
    "CSS Animation",
    "Grid for beginners",
    "Next.js tutorial"
]
const searchBar = document.getElementById("input")
const searchResult = document.querySelector(".search-result")

function filter(){
    let input = searchBar.value
    let result = []
    if(input.length > 0){
        result = suggestion.filter((word)=> word.toLowerCase().includes(input.toLowerCase()))
    }
    display(result)
    if(!result.length){
        searchResult.innerHTML = ""
    }
}

function display(result){
    let content = result.map((word)=>{
        return `<li onClick=selectInput(this)>${word}</li>`
    }).join("")
    searchResult.innerHTML = `<ul>${content}</ul>`

}
searchBar.addEventListener("keyup", filter)

function selectInput(li){
    searchBar.value = li.textContent
    searchResult.innerHTML = ""
}