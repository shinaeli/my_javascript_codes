const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/portugal');
request.send();  //Fetches the data in the background

request.addEventListener('load', function() {
  const data = JSON.parse(this.responseText); //The returned data is stored in the 'responseText' property and converted into a JSON data format
  console.log(data);
});