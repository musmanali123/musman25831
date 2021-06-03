
function getnumber(num){
    var result = document.getElementById('result');
    result.value += num
    // console.log(result)
}
function cancel(){
        var result = document.getElementById("result");
   result.value = ""

}

function getresult(){
    var ne = []
    var result = document.getElementById("result")
    result.value = eval(result.value)
    // console.log(result)
    
}


