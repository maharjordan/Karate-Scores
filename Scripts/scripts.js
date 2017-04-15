function modify_qty(val) {
				var qty = document.getElementById('qty').value;
				var new_qty = parseInt(qty,10) + val;
				
				if (new_qty < 0) {
					new_qty = 0;
				}
				
				document.getElementById('qty').value = new_qty;

                var other_score = document.getElementById('qty_aka').value;
                if ( other_score == 0){
                    document.getElementById('ao-caption').style.color = "green";
                    
                }
                if( new_qty == 0 ){
                    document.getElementById('ao-caption').style.color = "white";
                }

				return new_qty;
			}
			
function modify_qty_aka(val) {
    var qty = document.getElementById('qty_aka').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty_aka').value = new_qty;

    var other_score = document.getElementById('qty').value;
            if ( other_score == 0){
                document.getElementById('aka-caption').style.color = "green";
                
            }
            if( new_qty == 0 ){
                document.getElementById('aka-caption').style.color = "white";
            }

    return new_qty;
}

function reset_all(){
    document.getElementById('qty_aka').value = 0;
    document.getElementById('qty').value = 0;

    document.getElementById('aka-name').value = "";
    document.getElementById('ao-name').value = "";

    document.getElementById('ao-c1-1').checked = false;
    document.getElementById('ao-c1-2').checked = false;
    document.getElementById('ao-c1-3').checked = false;
    document.getElementById('ao-c1-4').checked = false;

    document.getElementById('ao-c2-1').checked = false;
    document.getElementById('ao-c2-2').checked = false;
    document.getElementById('ao-c2-3').checked = false;
    document.getElementById('ao-c2-4').checked = false;

    document.getElementById('aka-c1-1').checked = false;
    document.getElementById('aka-c1-2').checked = false;
    document.getElementById('aka-c1-3').checked = false;
    document.getElementById('aka-c1-4').checked = false;

    document.getElementById('aka-c2-1').checked = false;
    document.getElementById('aka-c2-2').checked = false;
    document.getElementById('aka-c2-3').checked = false;
    document.getElementById('aka-c2-4').checked = false;

    document.getElementById('ao-caption').style.color = "white";
    document.getElementById('aka-caption').style.color = "white";
}

window.onload = function () {
  
  var seconds = 0; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var buttonSenior = document.getElementById('time-start-senior');
  var buttonOther = document.getElementById('time-start-other');
  var Interval ;

  buttonStart.onclick = function() {
    
     clearInterval(Interval);
     Interval = setInterval(startTimer, 1000);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
  	seconds = "0";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
  buttonSenior.onclick = function() {
    clearInterval(Interval);
    tens = "00";
  	seconds = "3";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }

  buttonOther.onclick = function() {
    clearInterval(Interval);
    tens = "00";
  	seconds = "2";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
   
  function startTimer () {
    tens--; 
    
    if(tens < 0 && seconds > 0){
        seconds--;
        tens = 59;
    }
    else if(tens == 0 && seconds == 0){
        clearInterval(Interval);
    }

    if(tens > 9){
      appendTens.innerHTML = tens;
    }
    
    if (tens < 9){
      appendTens.innerHTML = "0" + tens;
    } 

    appendSeconds.innerHTML = seconds;
  }
}
