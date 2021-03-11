// Chuyển tiền từ Việt sang USA
function ChuyenTien(){
var Tien=document.getElementById("SoTien")   
var a = Tien.value;
var array =document.getElementsByTagName("option")
 var To1=array[0].value;
var From1=array[1].value;

var SoTien;
if(To1 === "Việt Nam" & From1 === "USA"){
   SoTien = a/23000;
   document.write("Số tiền chuyển sang USD là: "+ SoTien+"USD" );
}}


