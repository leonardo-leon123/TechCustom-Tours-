
$("#sentiment-analysis").on("click", function(e) {

  document.getElementById('jardines').hidden = true
  document.getElementById('chichen').hidden = true
  document.getElementById('bellas').hidden = true

    e.preventDefault();
    document.getElementById("emoji-positive1").style.display = "none";
    document.getElementById("emoji-neutral1").style.display = "none";
    document.getElementById("emoji-negative1").style.display = "none";
    document.getElementById("emoji-positive2").style.display = "none";
    document.getElementById("emoji-neutral2").style.display = "none";
    document.getElementById("emoji-negative2").style.display = "none";
    document.getElementById("emoji-positive3").style.display = "none";
    document.getElementById("emoji-neutral3").style.display = "none";
    document.getElementById("emoji-negative3").style.display = "none";
    var pregunta1= document.getElementById('r-pregunta1').value;
    var pregunta2 = document.getElementById('r-pregunta2').value;
    var pregunta3 = document.getElementById('r-pregunta3').value;
    console.log(pregunta1)
    console.log(pregunta2)
    console.log(pregunta3)
  
    var sentimentRequest = {
        'inputText': pregunta1,
        'inputText2': pregunta2,
        'inputText3': pregunta3,
    }
  
    if (sentimentRequest !== "") {
      $.ajax({
        url: "/sentiment-analysis",
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        dataType: "json",
        data: JSON.stringify(sentimentRequest),
        success: function(data){
          console.log(data)
          document.getElementById("try-again").style.display = "block"
          for (var i = 0; i < data.documents.length; i++) {
            if (typeof data.documents[i] !== "undefined"){
              if (data.documents[0].id === "1") {
                document.getElementById("input-sentiment1").textContent = data.documents[0].sentiment;
              }
              if (data.documents[1].id === "2") {
                document.getElementById("input-sentiment2").textContent = data.documents[1].sentiment;
              }
              if (data.documents[2].id === "3") {
                document.getElementById("input-sentiment3").textContent = data.documents[2].sentiment;
              }
            }
          }
          for (var i = 0; i < data.errors.length; i++) {
            if (typeof data.errors[i] !== "undefined"){
              if (data.errors[i].id === "1") {
                document.getElementById("input-sentiment1").textContent = data.errors[i].message;
              }
            }
          }
          if (document.getElementById("input-sentiment1").textContent !== ''){
            document.getElementById("sentiment1").style.display = "block";
          }
          if (document.getElementById("input-sentiment2").textContent !== ''){
            document.getElementById("sentiment2").style.display = "block";
          }
          if (document.getElementById("input-sentiment3").textContent !== ''){
            document.getElementById("sentiment3").style.display = "block";
          }
          if(data.documents[0].sentiment == "positive")
          {
            document.getElementById("emoji-positive1").style.display = "block";
          }
          if(data.documents[0].sentiment == "neutral")
          {
            document.getElementById("emoji-neutral1").style.display = "block";
          }
          if(data.documents[0].sentiment == "negative")
          {
            document.getElementById("emoji-negative1").style.display = "block";
          }
          if(data.documents[1].sentiment == "positive")
          {
            document.getElementById("emoji-positive2").style.display = "block";
          }
          if(data.documents[1].sentiment == "neutral")
          {
            document.getElementById("emoji-neutral2").style.display = "block";
          }
          if(data.documents[1].sentiment == "negative")
          {
            document.getElementById("emoji-negative2").style.display = "block";
          }
          if(data.documents[2].sentiment == "positive")
          {
            document.getElementById("emoji-positive3").style.display = "block";
          }
          if(data.documents[2].sentiment == "neutral")
          {
            document.getElementById("emoji-neutral3").style.display = "block";
          }
          if(data.documents[2].sentiment == "negative")
          {
            document.getElementById("emoji-negative3").style.display = "block";
          }
          
          if(data.documents[0].sentiment == "positive")
          {
            document.getElementById('jardines').hidden = false
            document.getElementById("error").style.display = "none";
          }
          if(data.documents[1].sentiment == "positive")
          {
            document.getElementById('chichen').hidden = false
            document.getElementById("error").style.display = "none";
          }
          if(data.documents[2].sentiment == "positive")
          {
            document.getElementById('bellas').hidden = false
            document.getElementById("error").style.display = "none";
          }
        }
      });
    }
  });