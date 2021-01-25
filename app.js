// var userName= prompt("what is your name");
// alert("this script works " +userName)
var btnTrans=document.querySelector("#btn");
var textArea=document.querySelector("#text");
var outputTxt=document.querySelector("#output");
var ServerUrl="https://api.funtranslations.com/translate/yoda.json"

function getUrl(text)
{
    return ServerUrl + "?" +  "text=" +text
}


btnTrans.addEventListener("click",clickHandler)

function clickHandler()
{    
    var inptTxt=textArea.value;
    fetch(getUrl(inptTxt))
    .then(response => response.json())
    .then(json =>{
        var transText=json.contents.translated;
        outputTxt.innerText=transText;
    })
    console.log("clicked");
    console.log(textArea.value);
    outputTxt.innerText=textArea.value;
}