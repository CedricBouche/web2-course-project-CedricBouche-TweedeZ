window.onload = () => {
    
    
    async function runSeenMovies(){
        const URI = await fetch ('http://localhost:4000/api/seen');
        const resp = await URI.json();
        console.log(resp);
        //Sort by alphabet
        let value = document.getElementById('filter').value;
        let value_sort = document.getElementById('filter-sort').value;
        if (value == "Title" && value_sort == "A - Z") {
            resp.sort((a,b) => (a.Title > b.Title) ? 1: -1)
        }
        if (value == "Score" && value_sort == "A - Z"){
            resp.sort((a,b) => (a.Score > b.Score) ? -1: 1)
        }
        if (value == "Title" && value_sort != "A - Z") {
            resp.sort((a,b) => (a.Title > b.Title) ? -1: 1)
        }
        if (value == "Score" && value_sort != "A - Z") {
            resp.sort((a,b) => (a.Score > b.Score) ? 1: -1)
        }
        console.log(resp.Score); 
        let html = "";
        for (const key in resp) {
                const element = resp[key];
                html += `<div class="grid-item"><img id="list-poster"  class="movie-poster-image" src="${element.Poster}" class="card-img" alt="...">
                <button type="button" type="submit" id="btn_delete" class="delete-btn" >&#9472;</button>
                <img id="ster" class="ster-image" src="img/ster.png" alt="ster score" width="40px" >
                <select name="options-score" id="options-score" class="ster-image" onchange="updateSeenMovie()()">
                <option id="value-score"  value="${element.Score}">${element.Score}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <p id="seen-title" class="movie-title">${element.Title}</p>
            </div>`;}
        // console.log(resp)
        document.getElementById('movies').innerHTML = html;
        document.getElementById('ok_button').style.display = 'none';
        document.getElementById('btn_delete').style.display = 'none';
        document.getElementById('edit').addEventListener('click', showDeleteButtons);
        btns = document.getElementsByClassName("delete-btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", deleteMovie); 
            btns[i].style.display = 'none';
        }
        console.log(btns[1]);
    }
    runSeenMovies();
    document.getElementById('btnFilter').addEventListener('click', runSeenMovies);
  

    async function runNotSeenMovies(){
        const URI = await fetch('http://localhost:4000/api/notSeen');
        const data = await URI.json();
        //Sort by alphabet
        let value = document.getElementById('filter').value;
        if (value == "A - Z") {
            data.sort((a,b) => (a.Title > b.Title) ? 1: -1)
        }
        if (value == "Z - A") {
            data.sort((a,b) => (a.Title > b.Title) ? -1: 1)
        }
        let html = "";
        for (const key in data) {
                const NotSeen = data[key];
                html += `<div class="grid-item"><img id="not-poster" class="movie-poster-image" src="${NotSeen.Poster}" class="card-img" alt="...">
                <button type="button" id="btn_delete" class="delete-btn">&#9472;</button>
                <select name="options-score" id="not-score" onchange="update()">
                <option id="value-score" value="${NotSeen.Score}">${NotSeen.Score}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <p id="notseen-title" class="movie-title">${NotSeen.Title}</p>
            </div>`;}
        document.getElementById('NotSeenmovies').innerHTML = html;
        document.getElementById('ok_button').style.display = 'none';
        document.getElementById('btn_delete').style.display = 'none';
        document.getElementById('edit').addEventListener('click', showDeleteButtons);
        btns = document.getElementsByClassName("delete-btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", deleteNotSeen); 
            btns[i].style.display = 'none';
        }
    }

    runNotSeenMovies();
    document.getElementById('btnFilter').addEventListener('click', runNotSeenMovies);

    function deleteMovie ()  {
        console.log("Test")
        btns = document.getElementsByClassName("delete-btn");
        let title = document.getElementById('seen-title').innerText;
        let poster = document.getElementById('list-poster').getAttribute('src');
        let score = document.getElementById('options-score').value;
        let movie = {
            Title: title,
            Poster: poster,
            Score: score
        }
        console.log(movie);

        fetch('http://localhost:4000/api/seen',{
        method: "DELETE",
        body: JSON.stringify(movie),
        headers: {"Content-type": "application/json; charset=UTF-8"}})
        window.location.reload();
    }

    function deleteNotSeen ()  {
        console.log("Test")
        btns = document.getElementsByClassName("delete-btn");
        let title = document.getElementById('notseen-title').innerText;
        let poster = document.getElementById('not-poster').getAttribute('src');
        let score = document.getElementById('not-score').value;
        let movie = {
            Title: title,
            Poster: poster,
            Score: score
        }
        console.log(movie);

        fetch('http://localhost:4000/api/notSeen',{
        method: "DELETE",
        body: JSON.stringify(movie),
        headers: {"Content-type": "application/json; charset=UTF-8"}})
        window.location.reload();
    }


    function showDeleteButtons(){
        //Show the buttons
        document.getElementById('ok_button').style.display = 'inline-block'
        document.getElementById('edit').style.display = 'none';
        document.getElementById('ok_button').addEventListener('click', deleteButtons);
        btns = document.getElementsByClassName("delete-btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.display = 'inline-block';
        }
    }

    function deleteButtons() {
        //let the buttons disappear
        btns = document.getElementsByClassName("delete-btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.display = 'none';
        }
        document.getElementById('ok_button').style.display = 'none';
        document.getElementById('edit').style.display = 'inline-block';
    }

    //when clicked the edit button the posters will be shaking (css animation)
    document.getElementById('edit').addEventListener('click',function() {
        var e = document.getElementsByClassName('movie-poster-image',);
        var s = document.getElementsByClassName('ster-image',);
        for (var i = 0; i < e.length; i++) {
            e[i].classList.add('animate');
        }
        for (var i = 0; i < s.length; i++) {
            s[i].classList.add('animate');
        }
    })

    //when clicked again on the button the posters will be stop shaking (css animation)
    document.getElementById('ok_button').addEventListener('click',function(){
        var e = document.getElementsByClassName('movie-poster-image');
        var s = document.getElementsByClassName('ster-image',);
        for (var i = 0; i < e.length; i++) {
            e[i].classList.remove('animate');
        }
        for (var i = 0; i < s.length; i++) {
            s[i].classList.remove('animate');
        }
        
    })


    
   
}


function updateSeenMovie(){
    let title = document.getElementById('seen-title').innerText;
    let poster = document.getElementById('list-poster').getAttribute('src');
    let score = "3";
    let movie = {
        Title: title,
        Poster: poster,
        Score: score
    }
    console.log(movie);
    fetch('http://localhost:4000/api/seen',{
    method: "PUT",
    body: JSON.stringify(score),
    headers: {"Content-type": "application/json; charset=UTF-8"}})
    window.location.reload();
}










