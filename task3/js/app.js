function Show(){


    var input = document.getElementById('inp')
    var value = input.value;
    document.getElementById('group').innerHTML= value;
    console.log(value);


    if (value.lenght < 4 || value.lenght > 6) 
    {
        document.getElementById('group').innerHTML= 'bele qrup adi olmaz'
    }
    else{
        if (!isNaN(value[0]) == true) {
            document.getElementById('group').innerHTML= 'bele qrup adi olmaz , herfle yazin'
        }
        else{
            if (value[value.lenght -3 ] == 1){
                document.getElementById('group').innerHTML =value
                document.getElementById('group').style.color = 'yellow'
            }
            else if (value[value.lenght -3] == 2) {
                document.getElementById('group').innerHTML =value
                document.getElementById('group').style.color = 'red'
            }
            else if (value[value.lenght -3] == 3) {
                document.getElementById('group').innerHTML =value
                document.getElementById('group').style.color = 'black'
            }
            else{
                document.getElementById('group').innerHTML= 'duzgun deyil'
            }
        }

    }
    
}

