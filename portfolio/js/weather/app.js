const capitalize = s => s && s[0].toUpperCase() + s.slice(1)
function populatetableRows() {
    async function populatetableRows() {
        await fetch('https://api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&appid=9b3b5c5b5c5b5c5b5c5b5c5b5c5b5c5b')
     
           .then(response => {
              if (response.status !== 200) {
                 console.log('Error Status Code: ' + response.status);
                 return;
              }
              response.json().then((data) => {
                let strTableRows = `<tr>
                    <td><span>Summary</span></td>
                    <td>${capitalize(data["weather"][0]["description"])}</td>
                </tr>
                <tr>
                    <td><span>Temperature</span></td>
                    <td>${data["main"]["temp"] + " &deg;C"}</td>
                </tr>
                <tr>
                    <td><span>Humidity</span></td>
                    <td>${data["main"]["humidity"] + " %"}</td>
                </tr>
                <tr>
                    <td><span>Pressure</span></td>
                    <td>${data["main"]["pressure"] + " Pa"}</td>
                </tr>`;	
                document.addEventListener("DOMContentLoaded", populatetableRows);
});
})
           .catch(error => {
            // handle any error
        });
    }   
} 

function change_background(){
    let d = new Date();
    let n = d.getHours();
    if (n > 23 || n <= 6){
        document.querySelector(".theme.js").style.backgroundImage = "url('assets/images/dublin-night.jpg')";
    }else{
        document.querySelector(".theme.js").style.backgroundImage = "url('assets/images/dublin-day.jpg')";
    }
}
change_background();