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

function time_clear(){
    document.getElementById('time-min').value = 0;
    document.getElementById('time-sec-1').value = 0;
    document.getElementById('time-sec-2').value=0;
}

function time_start_senior(){
    document.getElementById('time-min').value = 3;
    document.getElementById('time-sec-1').value = 0;
    document.getElementById('time-sec-2').value=0;
}

function time_start_other(){
    document.getElementById('time-min').value = 2;
    document.getElementById('time-sec-1').value = 0;
    document.getElementById('time-sec-2').value=0;
}

function reset_all(){
    document.getElementById('time-min').value = 0;
    document.getElementById('time-sec-1').value = 0;
    document.getElementById('time-sec-2').value = 0;

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

/*
var time_set = 1000;

var timer_button = document.getElementById('time-resume');

 This on its own works to set the interval timer
    var interval_timer = setInterval(function(){
    myTimer() }, time_set);


function start_timer(){
    var interval_timer = setInterval(function(){
    myTimer() }, time_set);
}

timer_button.onclick = function() { start_timer(); }

function stop_timer(){
    clearInterval(interval_timer);
}
 */
function myTimer(){
    var min = document.getElementById('time-min').value;
    var sec_1 = document.getElementById('time-sec-1').value;
    var sec_2 = document.getElementById('time-sec-2').value;

    if(sec_2 == 0){
        if(sec_1 == 0){
            if(min == 0){
                stop_timer();
            }
            else{
                document.getElementById('time-min').value = min - 1;
                document.getElementById('time-sec-1').value = 5;
                document.getElementById('time-sec-2').value = 9;
            }
        }
        else{
            document.getElementById('time-sec-1').value = sec_1 - 1;
            document.getElementById('time-sec-2').value = 9;
        }
    }
    else{
        document.getElementById('time-sec-2').value = sec_2 - 1;
    }
}