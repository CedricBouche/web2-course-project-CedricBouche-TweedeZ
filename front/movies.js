//load my apikey
// async function getConfig(){
//     let resp = await fetch('config.json');
//     let data = await resp.json();
//     config = data;

// }

window.onload = () => {
    console.log('loaded');
    getConfig();


    async function getData(searchparameter){
        let url = `http://www.omdbapi.com/?t=${searchparameter}&apikey=3d4bbe8c`;
        let resp = await fetch(url);
        let data = await resp.json();
        return data;

    }

    function showMovieOnCard(movie){
        //DOM Manipulation
        document.getElementById('movie-title').innerText = movie.Title;
        document.getElementById('movie-plot').innerText = movie.Plot;
        document.getElementById('movie-poster-search').setAttribute('src', movie.Poster);
        //Show the card
        document.getElementById('card').style.display = 'inline-block';
    }

    let submitForm = event => {
        event.preventDefault();
        let value = document.getElementById('inputTitle').value;
        //Search for the movie
        getData(value).then(result => {
            console.log(result);
            showMovieOnCard(result);
        });
        document.getElementById('message').style.display = 'none';
        document.getElementById('btnAdd').addEventListener('click', submitMovie);

    };



    let submitMovie = event => {
        event.preventDefault();
        let value = document.getElementById('options').value;
        let title = document.getElementById('movie-title').innerText;
        let poster = document.getElementById('movie-poster-search').getAttribute('src');
        let score = document.getElementById('score-options').value;
        let movie = {
            Title: title,
            Poster: poster,
            Score: score
        }
        console.log(movie)
        if(value=="Seen"){
            // Source: https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/
            fetch('https://web2-course-project2api-cedric.herokuapp.com/api/seen', {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {"Content-type": "application/json; charset=UTF-8"}
})
        }else{
            // Source: https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/
            fetch('https://web2-course-project2api-cedric.herokuapp.com/api/notSeen', {
                method: "POST",
                body: JSON.stringify(movie),
                headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        } 
    };


   
 
 
    


    //event listener for the form
    document.getElementById('searchform').addEventListener('submit', submitForm);
    //hide the card for now
    document.getElementById('card').style.display = 'none';
};






