window.onload = () => {

    async function runSeenMovies(){
        const URI = await fetch ('http://localhost:4000/api/seen');
        const resp = await URI.json();
        let html = "";
        for (const key in resp) {
                const element = resp[key];
                html += `<div class="grid-item"><img class="movie-poster-image" src="${element.Poster}" class="card-img" alt="...">
                <button type="button" id="btn_delete" class="delete-btn" style="display: none;">&#9472;</button>
                <p class="movie-title">${element.Title}</p>
            </div>`;
                let value = document.getElementById('filter').value;
                if(value == "A - Z"){
                    function compare( a, b ) {
                        if ( a.Title < b.Title ){
                          return -1;
                        }
                        if ( a.Title > b.Title ){
                          return 1;
                        }
                    }
                }
                if(value == "Z - A"){
                    function compare( a, b ) {
                        if ( a.Title < b.Title ){
                          return 1;
                        }
                        if ( a.Title > b.Title ){
                          return -1;
                        }
                    }
                      
                }
                resp.sort( compare );
            
                
                
            }
        
        document.getElementById('movies').innerHTML = html;
       



    }
    runSeenMovies();
    document.getElementById('btnFilter').addEventListener('click', runSeenMovies);
  

    async function runNotSeenMovies(){
        const URI = await fetch('http://localhost:4000/api/notSeen');
        const data = await URI.json();
        let html = "";
        for (const key in data) {
                const NotSeen = data[key];
                console.log(NotSeen);
                html += `<div class="grid-item"><img class="movie-poster-image" src="${NotSeen.Poster}" class="card-img" alt="...">
                <button type="button" id="btn_delete" class="delete-btn" style="display: none;" >&#9472;</button>
                <p class="movie-title">${NotSeen.Title}</p>
            </div>`
            }
        document.getElementById('NotSeenmovies').innerHTML = html;
        

    }

  
    
    runNotSeenMovies();

    function showDeleteButtons(){
        //Show the buttons
        document.getElementById('btn_delete').style.display = 'inline-block'
        document.getElementById('ok_button').style.display = 'inline-block'
        document.getElementById('edit').style.display = 'none';
    }

    function deleteButtons() {
        //let the buttons disappear
        document.getElementById('ok_button').style.display = 'none';
        document.getElementById('btn_delete').style.display = 'none';
        document.getElementById('edit').style.display = 'inline-block';
    }



    document.getElementById('edit').addEventListener('click', showDeleteButtons);
    document.getElementById('ok_button').addEventListener('click', deleteButtons);
    document.getElementById('ok_button').style.display = 'none';


    
    
   
}


