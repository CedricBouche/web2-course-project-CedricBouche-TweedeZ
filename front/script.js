window.onload = () => {

    async function runSeenMovies(){
        const URI = await fetch ('http://localhost:3000/api/movies');
        const resp = await URI.json();
        document.getElementById('movie-poster').setAttribute('src',resp[0].Poster);
        document.getElementById('movie-title-list').innerHTML = (resp[0].Title);

        document.getElementById('movie-poster1').setAttribute('src',resp[1].Poster);
        document.getElementById('movie-title-list1').innerHTML = (resp[1].Title);

        document.getElementById('movie-poster2').setAttribute('src',resp[2].Poster);
        document.getElementById('movie-title-list2').innerHTML = (resp[2].Title);


        document.getElementById('movie-poster3').setAttribute('src',resp[3].Poster);
        document.getElementById('movie-title-list3').innerHTML = (resp[3].Title);


        document.getElementById('movie-poster4').setAttribute('src',resp[4].Poster);
        document.getElementById('movie-title-list4').innerHTML = (resp[4].Title);


        document.getElementById('movie-poster5').setAttribute('src',resp[5].Poster);
        document.getElementById('movie-title-list5').innerHTML = (resp[5].Title);

        document.getElementById('movie-poster6').setAttribute('src',resp[6].Poster);
        document.getElementById('movie-title-list6').innerHTML = (resp[6].Title);

        document.getElementById('movie-poster7').setAttribute('src',resp[7].Poster);
        document.getElementById('movie-title-list7').innerHTML = (resp[7].Title);

        document.getElementById('movie-poster8').setAttribute('src',resp[8].Poster);
        document.getElementById('movie-title-list8').innerHTML = (resp[8].Title);

        document.getElementById('movie-poster9').setAttribute('src',resp[9].Poster);
        document.getElementById('movie-title-list9').innerHTML = (resp[9].Title);

        document.getElementById('movie-poster10').setAttribute('src',resp[10].Poster);
        document.getElementById('movie-title-list10').innerHTML = (resp[10].Title);

        document.getElementById('movie-poster11').setAttribute('src',resp[11].Poster);
        document.getElementById('movie-title-list11').innerHTML = (resp[11].Title);

        document.getElementById('movie-poster12').setAttribute('src',resp[12].Poster);
        document.getElementById('movie-title-list12').innerHTML = (resp[12].Title);

        document.getElementById('movie-poster13').setAttribute('src',resp[13].Poster);
        document.getElementById('movie-title-list13').innerHTML = (resp[13].Title);

        document.getElementById('movie-poster14').setAttribute('src',resp[14].Poster);
        document.getElementById('movie-title-list14').innerHTML = (resp[14].Title);

        document.getElementById('movie-poster15').setAttribute('src',resp[15].Poster);
        document.getElementById('movie-title-list15').innerHTML = (resp[15].Title);

        document.getElementById('movie-poster16').setAttribute('src',resp[16].Poster);
        document.getElementById('movie-title-list16').innerHTML = (resp[16].Title);

        document.getElementById('movie-poster17').setAttribute('src',resp[17].Poster);
        document.getElementById('movie-title-list17').innerHTML = (resp[17].Title);

        document.getElementById('movie-poster18').setAttribute('src',resp[18].Poster);
        document.getElementById('movie-title-list18').innerHTML = (resp[18].Title);

        document.getElementById('movie-poster19').setAttribute('src',resp[19].Poster);
        document.getElementById('movie-title-list19').innerHTML = (resp[19].Title);

        document.getElementById('movie-poster20').setAttribute('src',resp[20].Poster);
        document.getElementById('movie-title-list20').innerHTML = (resp[20].Title);
    }

    runSeenMovies();


    async function runNotSeenMovies(){
        const URI = await fetch('http://localhost:3000/api/notSeen');
        const data = await URI.json();
        console.log(data);

        document.getElementById('NotSeen-poster').setAttribute('src',data[0].Poster);
        document.getElementById('NotSeen-title-list').innerHTML = (data[0].Title);

        document.getElementById('NotSeen-poster1').setAttribute('src',data[1].Poster);
        document.getElementById('NotSeen-title-list1').innerHTML = (data[1].Title);

        document.getElementById('NotSeen-poster2').setAttribute('src',data[2].Poster);
        document.getElementById('NotSeen-title-list2').innerHTML = (data[2].Title);

        document.getElementById('NotSeen-poster3').setAttribute('src',data[3].Poster);
        document.getElementById('NotSeen-title-list3').innerHTML = (data[3].Title);

        
    }

    runNotSeenMovies();

    function showDeleteButtons(){
        console.log('Test');
        //Show the card
        document.getElementById('delete-btn').style.display = 'inline-block';
        document.getElementById('delete-btn1').style.display = 'inline-block';
        document.getElementById('delete-btn2').style.display = 'inline-block';
        document.getElementById('delete-btn3').style.display = 'inline-block';
        document.getElementById('delete-btn4').style.display = 'inline-block';
        document.getElementById('delete-btn5').style.display = 'inline-block';
        document.getElementById('delete-btn6').style.display = 'inline-block';
        document.getElementById('delete-btn7').style.display = 'inline-block';
        document.getElementById('delete-btn8').style.display = 'inline-block';
        document.getElementById('delete-btn9').style.display = 'inline-block';
        document.getElementById('delete-btn10').style.display = 'inline-block';
        document.getElementById('delete-btn11').style.display = 'inline-block';
        document.getElementById('delete-btn12').style.display = 'inline-block';
        document.getElementById('delete-btn13').style.display = 'inline-block';
        document.getElementById('delete-btn14').style.display = 'inline-block';
        document.getElementById('delete-btn15').style.display = 'inline-block';
        document.getElementById('delete-btn16').style.display = 'inline-block';
        document.getElementById('delete-btn17').style.display = 'inline-block';
        document.getElementById('delete-btn18').style.display = 'inline-block';
        document.getElementById('delete-btn19').style.display = 'inline-block';
        document.getElementById('delete-btn20').style.display = 'inline-block';

    }




let deleteMovie = event => {
    event.preventDefault();
    // let title = data[0].Title;
    // let poster = data[0].Poster;
    // let movie = {
    //     Title: title,
    //     Poster: poster
    // }
    // console.log(data);
}

document.getElementById('edit').addEventListener('click',showDeleteButtons);
document.getElementById('delete-btn').addEventListener('click', deleteMovie);
document.getElementById('delete-btn').style.display = 'none';
document.getElementById('delete-btn1').style.display = 'none';
document.getElementById('delete-btn2').style.display = 'none';
document.getElementById('delete-btn3').style.display = 'none';
document.getElementById('delete-btn4').style.display = 'none';
document.getElementById('delete-btn5').style.display = 'none';
document.getElementById('delete-btn6').style.display = 'none';
document.getElementById('delete-btn7').style.display = 'none';
document.getElementById('delete-btn8').style.display = 'none';
document.getElementById('delete-btn9').style.display = 'none';
document.getElementById('delete-btn10').style.display = 'none';
document.getElementById('delete-btn11').style.display = 'none';
document.getElementById('delete-btn12').style.display = 'none';
document.getElementById('delete-btn13').style.display = 'none';
document.getElementById('delete-btn14').style.display = 'none';
document.getElementById('delete-btn15').style.display = 'none';
document.getElementById('delete-btn16').style.display = 'none';
document.getElementById('delete-btn17').style.display = 'none';
document.getElementById('delete-btn18').style.display = 'none';
document.getElementById('delete-btn19').style.display = 'none';
document.getElementById('delete-btn20').style.display = 'none';




}

