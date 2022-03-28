function tempguage () {
    let Jirehtemp={
        normaltemp:35.5,
    }
    if (Jirehtemp.normaltemp>=20 && Jirehtemp.normaltemp<=36){
        console.log("Temperature is normal")
    }
    else if (Jirehtemp.normaltemp>=37 && Jirehtemp.normaltemp<=40){
        console.log ("Temperature is above normal, might be having Covid")
    }
    else if (Jirehtemp.normaltemp>40){
        console.log ("soon dying")
    }
    else {
        console.log("rigormortis State, Rest in Peace")
    }
}
tempguage ()