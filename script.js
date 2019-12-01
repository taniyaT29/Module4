

(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++)
{

  var firstAlpha = names[i].charAt(0);
  var Alpha = firstAlpha.toLowerCase();

  if (Alpha == "j")
  {
    byeSpeaker.speak(names[i]);
  }
  else{

    helloSpeaker.speak(names[i]);

  }
} 
})();

 
