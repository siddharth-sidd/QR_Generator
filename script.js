const QR_Text =document.getElementById("QR_Text")
const sizes=document.getElementById("sizes")
const Generator =document.getElementById("Generator")
const Download =document.getElementById("Download")
const QrContainer=document.getElementById(".QR_body")
let size=sizes.value
Generator.addEventListener('click',(e)=>{
    e.preventDefault();
    genetateQRCode();
});
function genetateQRCode(){
    new QRCode(QrContainer , {
        text :QrText.value,
        Height:size,
         Width:size,
         colorLight:"#fff",
         colorDark:"#000",
    })
}