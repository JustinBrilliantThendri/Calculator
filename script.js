let count = "";
let output = "";

function clicked(a){
    if(a == "c"){
        output = "";
        count = "";
    }else if(a == "="){
        output = eval(count);
    }else if(a == ":"){
        output += " : ";
        count += "/";
    }else if(a == "x"){
        output += " x ";
        count += "*";
    }else if(a == "+"){
        output += " + ";
        count += "+";
    }else if(a == "-"){
        output += " - ";
        count += "-";
    }else{
        output += a;
        count += a;
    }
    document.getElementById("output").value = output;
}