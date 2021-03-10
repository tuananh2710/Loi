
// Tính tổng
function Sum(){
    // Nhâp 
   let a = prompt("Nhập số nguyên a");
   let b = prompt("Nhập số nguyên b");
//    Chuyển chuỗi sang dạng Int
a=parseInt(a);
b=parseInt(b);
// Hiển thị tổng
let Sum=a+b;
alert("Tổng là: " + Sum);
}
// Ghi năm
function date(){
    // Nhập
    let Ngay=prompt("Nhập ngày");
    let Thang=prompt("Nhập tháng");
    let Nam=prompt("Nhập năm");
// Hiển thị
alert(Ngay +" - "+Thang+" - "+ Nam );
}
// tính diện tích chu vi hình tròn
function HinhTron(){
    // Nhập
    let r = prompt("Nhập bán kính của đường tròn");
    r = parseFloat(r);
    // Diện tích
    let pi=3.14;
    S= pi*r*r;
    document.write("Diện tích hình tròn là: " + S);
    // Chu vi
    C=2*pi*r;
   document.write("<br/>")
    document.write("Chu vi hình tròn là: "+C);
}
// Lãi suất ngân hàng
function SoTienLai(){
    // Nhập
    let SoTien;
    let Vay= prompt("Nhập số tiền bạn vay từ ngân hàng");
        Vay = parseInt(Vay);
    let Lai= prompt("Nhập lãi suất ngân hàng trong một năm");
    Lai=parseFloat(Lai);
    let Nam= prompt("Nhập số năm bạn vay từ ngân hàng");
    Nam=parseInt(Nam);
// Tính
     SoTien = Vay*(1+(Lai/100)); // Số tiền phải trả sau 1 năm
    
    for(i=1;i<Lai;i++){
        SoTien= SoTien*(1+Lai/100);
    }
    alert("Số tiền phải tra khi vay ngân hàng "+ Lai + " năm là:" + SoTien);
}
function writetn(){

let Name = prompt("Nhập tên người nhận");
let Address = prompt("Nhập địa chỉ gửi");
let Ngay = prompt("Nhập ngày gửi");
let Thang = prompt("Nhập tháng gửi");
let Nam = prompt("Nhập năm gửi");
document.write('"'+ Name + " thương nhớ,")
document.write("<br/>")
document.write("Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh <br/> đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát <br/> khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu <br/> hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.")
document.write("<br/>")
document.write("Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi<br/> đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em<br/> chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ<br/> của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều<br/> cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn<br/> được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.")
document.write("<br/>")
document.write("Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.")
document.write("<br/>")
document.write(Address + ", Ngày " + Ngay +" Tháng "+Thang +" Năm "+Nam+".")



}
