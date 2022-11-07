//main-box and Input & Button Varriables//
const mainBox = document.querySelector(".main-box");
      textInput = document.querySelector("form input");
      qrbtn= document.querySelector("form button");
    //  let img= document.querySelector("#image");
    //   qrSpan= document.querySelector("qr-box span");
      
//Main Fuction For button//

qrbtn.addEventListener("click",function(e)
{
    //Getting the input value
    let qrValue=textInput.value;
    console.log( qrValue);
    // if(e.target)
    let image=e.target.parentNode.parentNode.parentNode.lastElementChild.lastElementChild;
    let qrSpan=e.target.parentNode.parentNode.parentNode.lastElementChild.firstElementChild;
    image.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    //When the value is entered correctly//
    qrSpan.innerHTML="Loading...";
    qrSpan.classList.add('loading');
    
    //When No value is entered//
    if(!qrValue){
        qrImage.classList.remove('block');
        qrSpan.innerHTML="You Didn't Enter Your Text";
        qrSpan.classList.add('err');
        textInput.classList.add('red-border');
        qrbtn.innerHTML="Generate QR Code";
    }
    else{
        qrSpan.classList.remove('err');
        textInput.classList.remove('red-border');
    }

    qrImage.addEventListener("load" , function()
    {
        //Display QR CODE//
        img.classList.add('block');
        qrSpan.innerHTML="Your QR Code";
        qrSpan.classList.add('success');
    });





});


//when again No value is entered//
textInput.addEventListener("keyup", function(){
    if(!qrValue.value){
        img.classList.remove('block');
        qrSpan.innerHTML="Enter Your Text To Display Your QR Code";
        qrSpan.classList.remove('loading');
        qrSpan.classList.remove('success');
    }
})