<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies Table</title>
</head>
<body>
    <h1>Movies List</h1>
    
    <div id="x"></div>
    
    <script>
        async function fetchMovies() {
            try {
                const response = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
                const data = await response.json();

                // Initialize an empty string to hold the HTML content
                let moviesHtml = "";

                // Loop through each movie in the data
                data.forEach(movie => {
                    moviesHtml += `<p><strong>THE TITLE :</strong> ${movie.Title} <br><br>
                                   <strong>THE YEAR :</strong> ${movie.Year} <br><br> 
                                   <img src=" ${movie.Poster}" width:"150"> <hr>`
                                    ;
                });

                // Insert the generated HTML into the div
                document.getElementById("x").innerHTML = moviesHtml;

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchMovies(); // Call the async function
    </script>
</body>
</html>
