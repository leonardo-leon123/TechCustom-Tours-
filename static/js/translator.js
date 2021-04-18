$(function()
{
    
    $('#translate').on('click', function(e)
    {
        e.preventDefault();
        var title = document.getElementById('title').innerHTML;
        var pregunta1= document.getElementById('pregunta1').innerHTML;
        var pregunta2 = document.getElementById('pregunta2').innerHTML;
        var pregunta3 = document.getElementById('pregunta3').innerHTML;
        var btn_cuestionario = document.getElementById('sentiment-analysis').innerHTML;
        var resultado_title = document.getElementById('resultado-title').innerHTML;
        var bellas_desc = document.getElementById('bellas-desc').innerHTML;
        var chichen_desc = document.getElementById('chichen-desc').innerHTML;
        var jardines_desc = document.getElementById('jardines-desc').innerHTML;
        var languageVal = document.getElementById("select-language").value;
        var translateRequest = {
            'text': title,
            'text2': pregunta1,
            'text3': pregunta2,
            'text4': pregunta3,
            'text5': btn_cuestionario,
            'text6': resultado_title,
            'text7': bellas_desc,
            'text8': chichen_desc,
            'text9': jardines_desc,
            'to': languageVal,
        }
        if(translateRequest !== "")
        {
            $.ajax({
                url: '/translate-text',
                method: 'POST',
                headers:
                {
                    'Content-Type':'application/json'
                },
                dataType: 'json',
                data: JSON.stringify(translateRequest),
                success: function(data)
                {
                    console.log(data)
                    for(var i=0; i< data.length; i++)
                    {
                        document.getElementById("title").innerHTML = data[0].translations[0].text;
                        document.getElementById("pregunta1").innerHTML = data[1].translations[0].text;
                        document.getElementById("pregunta2").innerHTML = data[2].translations[0].text;
                        document.getElementById("pregunta3").innerHTML = data[3].translations[0].text;
                        document.getElementById("sentiment-analysis").innerHTML = data[4].translations[0].text;
                        document.getElementById("resultado-title").innerHTML = data[5].translations[0].text;
                        document.getElementById("bellas-desc").innerHTML = data[6].translations[0].text;
                        document.getElementById("chichen-desc").innerHTML = data[7].translations[0].text;
                        document.getElementById("jardines-desc").innerHTML = data[8].translations[0].text;
                        document.getElementById("detected-language-result").textContent = data[i].detectedLanguage.language;
                        if(document.getElementById("detected-language-result").textContent !=="")
                        {
                            document.getElementById("detected-language").style.display = "block";
                        }
                        document.getElementById("confidence").textContent = data[i].detectedLanguage.score;
                    }
                }
            })
        }
    })
})
