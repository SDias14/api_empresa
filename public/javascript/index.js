document.write(`<span id = "time">${new Date()}</span>`)
       
        
        let timeDisplay = document.getElementById("time");
        
        
        function refreshTime() {
          var dateString = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
          var formattedString = dateString.replace(", ", " - ");
          timeDisplay.innerHTML = formattedString;
        }
        
        setInterval(refreshTime, 1000);