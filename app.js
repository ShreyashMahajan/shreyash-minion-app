var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var textOutput = document.querySelector("#text-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function translatedUrl (textGiven){
    var urlTranslate = serverUrl+ "?" + "text=" + textGiven.value ;
    return(urlTranslate);
}

function errorHandler(error){
    console.log("Error occured : ",error);
    alert("error occured : "+error+"\n Please try afer some time");

}

btnTranslate.addEventListener("click",function(){
      console.log("Button clicked");
      var urlFinal = translatedUrl(textInput);
      console.log(urlFinal);
      fetch(urlFinal)
      .then(Response => Response.json())
      .then(json =>{ textOutput.innerText = json.contents.translated })
      .catch(errorHandler);
})