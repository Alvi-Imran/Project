    let btn = document.querySelector("button");

            btn.addEventListener("click", () => {
                let search = document.querySelector("#search").value;
                let show = document.querySelector("#show");
                let hum = document.getElementById("hum");
                let wind = document.getElementById("wind");
                let loc = document.getElementById("loc");

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=46b352f05f0a95e00f7ad7bf051e3503`)
                    .then(response => response.json())
                    .then(data => {
                        deg = (data.main.temp - 273).toFixed(0);
                        console.log(data);
                        loc.innerHTML = search.toUpperCase();
                        show.innerHTML = deg + "<sup>°C</sup>";
                        hum.innerHTML = data.main.humidity;
                        wind.innerHTML = data.wind.speed;
                        console.log(data.wind.speed);
                    })

                    .catch(error => {
                        alert("Error fetching exchange rate.");
                        console.error(error);
                    });

            })

              // while syntax
        // initialization(optional)
        // while(condition){
        //     //code
        //     //   updation(optional)
        // }
        
        // let i = 1
        // while (i <= 4) {
        //     document.write(i)
        //     i++
        // }