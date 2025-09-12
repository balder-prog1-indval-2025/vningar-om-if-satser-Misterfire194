/*
write("Deluppgift 1")
let Ålder = +await read("Ålder:")
if(Ålder < 18) {
    write (Ålder +" år? Omyndig.")
} else{
    write("Myndig")
}

write("Deluppgift 2")
let Längd = +await read ("Hur lång är du?:")
if(Längd <200) {
    write ("Hej du korte!")
} else if (Längd > 200) {
    write("Hej du långe!")
}

write("Deluppgift 3")
let x = +await read("Ett tal:")
if(x > 0) {
    write( "Talet är positivt.")
} else if (x < 0) {
    write("Talet är negativt.")
} else if (x == 0) {
    write ("Talet är noll.")
}


write("Deluppgift 4")
let x = +await read("x =")
let y = +await read("y =")
if(x<y) {
    write(x +" < " + y)
} else if(x>y) {
    write(x + " > " + y)
}


write("Deluppgift 5")
let x = +await read("Tal 1:")
let y = +await read("Tal 2:")
let z = await read("Operator(+, -, *, /):")
if(z=="+") {
write (x+y)
}
else if(z=="-") {
    write (x-y)
}
else if(z=="/") {
    write (x/y)
}
else if(z=="*") {
    write (x*y)
}


write ("Deluppgift 6")
let x = +await read("Valör (1-13):")
if(2<=x && x<=10){ 
    write ("en "+x+":a")
}
else if (x==1) {write ("Ett Ess")}
else if (x==11) {write ("En Knekt")}
else if (x==12) {write ("En Dam")}
else if (x==13) {write ("En Kung")}


write ("Deluppgift 7")
let x= +await read("Månadsnummer:")
if(x==1) {write ("januari")}
else if(x==2) {write ("februari")}
else if(x==3) {write ("mars")}
else if(x==4) {write ("april")}
else if(x==5) {write ("maj")}
else if(x==6) {write ("juni")}
else if(x==7) {write ("juli")}
else if(x==8) {write ("augusti")}
else if(x==9) {write ("september")}
else if(x==10) {write ("oktober")}
else if(x==11) {write ("november")}
else if(x==12) {write ("december")}


write ("Deluppgift 8")
let x= +await read("Månadsnummer:")
if (x==12 ||x==1||x==2) {
    write("Vinter")
}
else if(x>=3 && x<=5) {
    write ("vår")
}
else if(x>=6 && x<=8) {write ("sommar")}
else if(x>=9 && x<=11) {write ("höst")}


write("Deluppgift 9")
let x=+await read("Tal 1:")
let y=+await read("Tal 2:")
let z=+await read("Produkt?")
let a=x*y
if (z==a) {write ("Rätt!!!")}
else if(z<a||z>a) {write ("Fel, tyvär.    Rätt svar är: " + a)}


write("Deluppgift 10")
let x=+await read("Tal 1:")
let y=+await read("Tal 2:")
let a= x+y
write("Summa: "+ a)
write("Medel: " +a/2)
if(x<y) {write("Minsta tal: " +x)}
else if (x>y || x==y) {write ("Minsta tal: "+y)}
if(x<y) {write("Största tal: " +y)}
else if (x>y || x==y) {write ("Största tal: "+x)}


write("Deluppgift 11")
let x=+await read("Tal 1:")
let y=+await read("Tal 2:")
let z=+await read("Tal 3:")
let a= x+y+z
write("Summa: "+ a)
write("Medel: " +a/3)
if(x<y && x<z) {write("Minsta tal: " +x)}
else if (z<x && z<y) {write ("Minsta tal: "+z)}
else if (y<x || x==y || x==z && y<z) {write ("Minsta tal: "+y)}
if(y>x && y>z) {write("Största tal: " +y)}
else if(z>x && z>y) {write("Största tal: "+z)}
else if (x>y || x==y || x==y && x>z) {write ("Största tal: "+x)}


write ("Deluppgift 12")
let x=await read("Tecken:")
if ("ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".includes(x) ) {write ("Stor bokstav")}
else if ("abcdefghijklmnopqrstuvwxyzåäö".includes(x)) {write("Liten bokstav")}
else {
    write ("Annat tecken")
}




write ("Deluppgift 13")
let x=+await read("Tal (mellan 999 och -999):")
if (x>=0 && x<=999) {write("Positivt")}
else if(x<0 && x>=-999) (write("Negativt"))
if(x>=-9 && x<=9) {write ("Ental")}
else if(x>=10 && x<=99 || x>=-99 &&x<=-10) {write ("Tiotal")}
else if(x>=100 && x<=999 || x>=-999 && x<=-100) {write ("Hundratal")}


write("Deluppgift 14")
let x=+await read("Tal 1:")
let y=+await read("Tal 2:")
let z=+await read("Tal 3:")
if(x>y+z || y>x+z || z>x+y) {write ("Triangel: Nej!")}
else{write ("Triangel: Ja!")}
*/