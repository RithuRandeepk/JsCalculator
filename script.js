function valueaccess(event){
    console.log(event.target.value)
    result.value+=event.target.value
    

}
function clearData(){
    result.value=""
}
function evaluateExp(){
    // rs=document.getElementById('result').value
    exp=result.value
    res=eval(exp)
    result.value=res


}