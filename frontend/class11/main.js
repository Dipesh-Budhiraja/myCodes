$(document).ready(function(){//same as window.onload and callback
    console.log("Document is ready now");

    var getText = $('#getText');//it is returned as an object
    console.log(getText);

    var btn = $('#enter');//button
    var output = $('#output');
    var outputText = '';

    btn.click(function(){
        // console.log(getText.val());

        /*console.log(output.text("Hello"));//behaves as a setter
        console.log(output.text());  */
        console.log(output.text());//it acts as both getter and setter
        // output.text(output.text() + getText.val());// same as innerHTML

//        output.html(output.html() + '<br>'+ getText.val());
        /*output.html('<li>'+ getText.val() + '</li>');
        outputText = outputText.val();

        console.log(output.text());*/

        output.append('<li>' + getText.val() + '</li>');


    });
    console.log(getText.get(0) === document.getElementById('getText'));

    // var myText = $('.myText');
    // console.log(myText);
});

console.log("Doc is not ready");
