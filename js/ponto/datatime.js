var qtd = document.getElementById("dataTimeStl");

    function getTime(){
      
      var data = new Date();
      var full_time = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

      var dataTime = full_time;
      
      while (qtd < 4){
       document.getElementById("horaMarcada").insertAdjacentHTML('beforeend', '<span id="dataTimeStl">'+ dataTime +' </span>');
       qtd++;
       return false;
      }
    }

    function fullDate(){

      dayWeek = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
      monthName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
      now = new Date
      var current_time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

      document.getElementById("dataCompleta").insertAdjacentHTML('beforeend', '<p id="fulDateStl"> Hoje é ' + dayWeek[now.getDay() ] + ', ' + now.getDate () + ' de ' + monthName [now.getMonth() ]   +  ' de '  +     now.getFullYear () + ' | Hora Atual: '+ current_time +' </p>')
    }