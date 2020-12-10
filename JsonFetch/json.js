var url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-07&sortBy=publishedAt&apiKey=ad487ce16ce54bc4aa263dce19d8c35c";

function convertToJSON(response){
    return response.json();
}
function processData(data){
    console.log(data);
}

var req = new Request(url);
fetch(req)
    .then(function(response) {
        processData(convertToJSON(response));
    });