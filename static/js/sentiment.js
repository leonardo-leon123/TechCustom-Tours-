$("#sentiment-analysis").on("click", function(e) {

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
        success: function(data)
        {
          console.log(data)
          for (var i = 0; i < data.documents.length; i++) {
            if (typeof data.documents[i] !== "undefined"){
              if (data.documents[i].id === "1") {
                document.getElementById("input-sentiment1").textContent = data.documents[i].sentiment;
              }
              if (data.documents[i].id === "2") {
                document.getElementById("input-sentiment2").textContent = data.documents[i].sentiment;
              }
              if (data.documents[i].id === "3") {
                document.getElementById("input-sentiment3").textContent = data.documents[i].sentiment;
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
            document.getElementById("sentiment").style.display = "block";
          }
          if (document.getElementById("input-sentiment2").textContent !== ''){
            document.getElementById("sentiment").style.display = "block";
          }
          if (document.getElementById("input-sentiment3").textContent !== ''){
            document.getElementById("sentiment").style.display = "block";
          }
          if(data.documents[i].sentiment == "positive")
          {
            document.getElementById("emoji-positive1").style.display = "block";
          }
          if(data.documents[i].sentiment == "neutral")
          {
            document.getElementById("emoji-neutral1").style.display = "block";
          }
          if(data.documents[i].sentiment == "negative")
          {
            document.getElementById("emoji-negative1").style.display = "block";
          }
          if (document.getElementById("input-sentiment2").textContent !== ''){
            document.getElementById("sentiment").style.display = "block";
          }
          if(data.documents[i].sentiment == "positive")
          {
            document.getElementById("emoji-positive2").style.display = "block";
          }
          if(data.documents[i].sentiment == "neutral")
          {
            document.getElementById("emoji-neutral2").style.display = "block";
          }
          if(data.documents[i].sentiment == "negative")
          {
            document.getElementById("emoji-negative2").style.display = "block";
          }
          if (document.getElementById("input-sentiment3").textContent !== ''){
            document.getElementById("sentiment").style.display = "block";
          }
          if(data.documents[i].sentiment == "positive")
          {
            document.getElementById("emoji-positive3").style.display = "block";
          }
          if(data.documents[i].sentiment == "neutral")
          {
            document.getElementById("emoji-neutral3").style.display = "block";
          }
          if(data.documents[i].sentiment == "negative")
          {
            document.getElementById("emoji-negative3").style.display = "block";
          }
          
        }
        
        
      });
    }
  });