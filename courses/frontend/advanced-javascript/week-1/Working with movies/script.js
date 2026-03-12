const container = document.getElementById("moviesContainer")

// RENDER MOVIES

function renderMovies(arr){

container.innerHTML=""

arr.forEach(movie=>{

const card=document.createElement("div")

card.classList.add("movieCard")

card.innerHTML=`
<h3>${movie.title}</h3>
<p>Year: ${movie.year}</p>
<p>Rating: ${movie.rating}</p>
${movie.tag ? `<p>Tag: ${movie.tag}</p>` : ""}
`

container.appendChild(card)

})

}

function renderText(text){

container.innerHTML=`<h2>${text}</h2>`

}

// SHORT TITLES

function showShortTitles(){

const shortMovies = movies.filter(movie =>
movie.title.length <= 10
)

renderMovies(shortMovies)

}

// LONG TITLES

function showLongTitles(){

const longTitles = movies.filter(movie =>
movie.title.length > 20
)

renderMovies(longTitles)

}

// MOVIES 1980-1989

function count80sMovies(){

const count = movies.filter(movie =>
movie.year >= 1980 && movie.year <= 1989
).length

renderText(`Movies from 1980-1989: ${count}`)

}

// TAG MOVIES

function showTaggedMovies(){

const tagged = movies.map(movie=>{

let tag

if(movie.rating >=7){
tag="Good"
}
else if(movie.rating >=4){
tag="Average"
}
else{
tag="Bad"
}

return {...movie, tag}

})

renderMovies(tagged)

}


// RATING ABOVE 6


function showRatingsAbove6(){

const result = movies
.filter(movie => movie.rating > 6)
.map(movie => ({
title: movie.title,
year: movie.year,
rating: movie.rating
}))

renderMovies(result)

}


// KEYWORD COUNT


function countKeywords(){

const keywords=["surfer","alien","benjamin"]

const count = movies.reduce((total,movie)=>{

const title = movie.title.toLowerCase()

keywords.forEach(word=>{
if(title.includes(word)){
total++
}
})

return total

},0)

renderText(`Keyword matches: ${count}`)

}


// DUPLICATE WORDS


function duplicatedWords(){

const result = movies.filter(movie=>{

const words = movie.title
.toLowerCase()
.split(" ")

return new Set(words).size !== words.length

})

renderMovies(result)

}

// AVERAGE RATING

function averageRating(){

const avg = movies.reduce((sum,movie)=>
sum + movie.rating
,0) / movies.length

renderText(`Average rating: ${avg.toFixed(2)}`)

}


// COUNT GOOD/AVERAGE/BAD

function countRatings(){

const result = movies.reduce((acc,movie)=>{

if(movie.rating >=7){
acc.goodMovies++
}
else if(movie.rating >=4){
acc.averageMovies++
}
else{
acc.badMovies++
}

return acc

},{
goodMovies:0,
averageMovies:0,
badMovies:0
})

renderText(JSON.stringify(result,null,2))

}