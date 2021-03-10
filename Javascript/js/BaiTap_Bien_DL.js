function TBMark(){
    // Nhập điểm
    let ImputVatLy = prompt("Nhập điểm môn Vật Lý");
    let ImputHoaHoc = prompt("Nhập điểm môn Hóa Học");
    let ImputSinhHoc = prompt("Nhập điểm môn Vật Lý");
    //  Chuyển sang kiểu số thực
    let VatLy = parseFloat(ImputVatLy);
    let HoaHoc = parseFloat(ImputHoaHoc);
    let SinhHoc = parseFloat(ImputSinhHoc);
    // Tính Trung bình
    let TB = (VatLy + HoaHoc + SinhHoc)/3;
    // Hiển thị điểm TB
    document.write("Trung bình điểm 3 môn là: " + TB);
}
function DoF(){
    // Nhap độ C
    let DoC=prompt("Nhập độ C");
    // Chuyển chuỗi sang giá trị nguyên
    DoC= parseInt(DoC);
    // Hiển thị
    let DoF= (DoC*1.8) +3;
    document.write("Độ F là: " + DoF);

}
