fetch('https://restcountries.com/v3/all')
.then(response => response.json())
.then(data => show(data));

function show(data){
    let val = '';
    for (let r of data) {
        var flag = r.flags[0]
        //var cap=r.capital[0]
        //console.log(cap)
        val += "<div class = 'col-lg-4'> <div class = 'card' style = 'margin: 1.5%;'> <div class = 'card-header text-white' style='background-color: #000000;'> <div class='row'> <div class='col-sm-12'> <h1 class='h3 m-3 text-center'>" + r.name.common + "</h1> </div> </div> </div>"
          + "<div class = 'card-body text-white' style = 'background-image: linear-gradient(90deg, rgba(255,215,122,1) 0%, rgba(103,73,76,1) 100%,rgba(91,64,64,0) 100%);'> <div class='row'> <div class='col-sm-12'> <img class='img-fluid image-background-1 img-responsive center-block d-block mx-auto' src =   "+ flag +" , height='100px,' width='300px,' display = 'inline'> <br> </div>"
          + "<div class='col-sm-12 text-center'> <p>Capital: " + r.capital + "</p> </div>"
          + "<div class='col-sm-12 text-center'> <p>Region: " + r.region + "</p> </div>"
          + "<div class='col-sm-12 text-center'> <p>Country Code: " + r.cca2 + "</p> </div>"
          + "<div class='col-sm-12 text-center'> <button type='button' class='btn btn-outline-light' value= " +r.capital + " >Weather</button> </div> </div> </div> </div> </div>";
        }
    document.getElementById("main").innerHTML = val;

    var button = document.getElementsByTagName("button");
    for(let i=0;i<button.length ; i++)
    button[i].addEventListener('click',function(){
      console.log(button[i].value)
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' +button[i].value +'&appid=937200d39eee5229a0f964ae56564e5f')
      .then(response => response.json())
      .then(data =>{
        var desc=data['weather']['0']['description'];
        window.confirm("Temperature: " +data.main.temp+ "F"+ "     " +"Description: " +desc )
      })
      .catch(err=>
        alert("not present"))
    })
}

