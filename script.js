/11////////////////////////////////////
function firstLast6(arr){
    var first = arr[0];
    var last = arr[arr.length - 1];
    if(last == 6 || first == 6){
        return true;
    }else{
        return false;
    }
}

/12////////////////////////////////////
function has23(arr) {
    var first = arr[0];
    var second = arr[arr.length - 1];
    if (first == 2 || first == 3) {
        return true;
    }

    if (second == 2 || second == 3) {
        return true;
    }

    return false;
}

/13///////////////////////////////////
function fix23(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }

    return arr;


}
/14///////////////////////////////////
function countYZ(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if((arr[i] == "z" || arr[i] == "y") && (arr[i+1] == " " || arr.length == i+1)){
            count += 1;
        }

        if((arr[i] == "Z" || arr[i] == "Y") && (arr[i+1] == " " || arr.length == i+1)) {
            count += 1;

        }

    }
    return count;
}

/15//////////////////////////////////////////
function endOther(str1,str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if((str2[str2.length - 1] == str1[str1.length -1]) && (str2[str2.length - 2] == str1[str1.length -2]) && (str2[str2.length - 3] == str1[str1.length -3])){
        return true;
    }

    if(str1.length == 1 && str2[str2.length - 1] == str1[str1.length -1]){
        return true;
    }

    if(str1.length == 2 && str2[str2.length - 1] == str1[str1.length -1] && str2[str2.length - 2] == str1[str1.length -2]){
        return true;
    }

    if(str2.length == 2 && str2[str2.length - 1] == str1[str1.length -1] && str2[str2.length - 2] == str1[str1.length -2]){
        return true;
    }

    return false;

}

/16//////////////////////////////////////////
function starOut(arr){
    var newWord = "";
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== "*" && arr[i+1] !== "*" && arr[i-1] !== "*"){
            newWord += arr[i];
        }
    }

    return newWord;
}

/17/////////////////////////////////////////
function getSandwich(str){
    var newWord = "";


    if(str.indexOf("bread") == -1) {    //if the word bread isnt present
        return newWord;
    }

    if(str.indexOf("bread") == str.lastIndexOf("bread")) {  // if the word bread appears once
        return newWord;
    }

    if(str.indexOf("bread") != str.lastIndexOf("bread")){  // if the word bread shows up once in front and again starting from the back
        for(var i = str.indexOf("bread") + 5; i < str.lastIndexOf("bread"); i++){
            newWord += str[i];
        }
    }

    return newWord;

}

/18///////////////////////////////////////
function canBalance(arr) {
   var sumA = 0;
   var sumB = 0;
   for(var i = 0; i < arr.length; i++){
       sumA += arr[i];

       for(var j = i + 1; j < arr.length; j++){
           sumB += arr[j];
       }

       if(sumA == sumB){
           return true;
       }
   sumB = 0;
   }

   return false;
}

/19//////////////////////////////////////
function countClumps(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            count = count + 1;
        }

        if(arr[i-1] == arr[i] && arr[i] == arr[i+1]){
            count = count - 1;
        }


    }

    return count;
}

/20//////////////////////////////////////
function evenlySpaced(a,b,c) {
    var sum = a + b + c;
    if (a == b && b == c && a == c){
        return true;
    }
    if( (a == b) || (b == c)) {
        return false;
    }
    if( (sum / 3) == (a)){
        return true;
    }
    if((sum / 3) == (b)){
        return true;
    }
    if((sum / 3) == (c)){
        return true;
    }
    if((sum / 3) == (1)){
        return true;
    }
    if((sum / 3) == (2)){
        return true;
    }
    return false;
}
function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += endOther(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    document.getElementById("output").innerHTML += getSandwich(true, false);
    document.getElementById("output").innerHTML += canBalance(true, false);
    document.getElementById("output").innerHTML += countClumps(true, false);
    document.getElementById("output").innerHTML += evenlySpaced(true, false);
}












