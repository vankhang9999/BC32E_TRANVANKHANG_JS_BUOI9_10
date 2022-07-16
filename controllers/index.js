
var mangNhanVien=[];

document.querySelector('#btnThemNV').onclick=function(){


var nv= new NhanVien();

nv.taiKhoan=document.querySelector('#tknv').value;
nv.hoTen=document.querySelector('#name').value;
nv.email=document.querySelector('#email').value;
nv.matKhau=document.querySelector('#password').value;
nv.ngayLam=document.querySelector('#datepicker').value;
nv.luongCoBan=Number(document.querySelector('#luongCB').value);
nv.chucVu=document.querySelector('#chucvu').value;
nv.gioLam=Number(document.querySelector('#gioLam').value);
console.log(nv);
//Validation
var valid=true;
valid&=kiemTraRong(nv.taiKhoan,'#error_required_taiKhoan','Tài khoản')&kiemTraRong(nv.hoTen,'#error_required_ten','Tên')&kiemTraRong(nv.email,'#error_required_email','Email')&kiemTraRong(nv.matKhau,'#error_required_matKhau','mật khẩu');
// &kiemTraRong(nv.luongCoBan,'#error_required_luongcb','Lương cơ bản')&kiemTraRong(nv.gioLam,'#error_required_gioLam','giờ làm');
valid&=kiemTraDoDai(nv.taiKhoan,'#error_allLength_taiKhoan','Tài khoản',4,6)&kiemTraTatCaKytu(nv.hoTen,'#error_allLetter_ten','Tên')&kiemTraEmail(nv.email,'#error_email','Email')&kiemTraDoDai(nv.matKhau,'#error_matKhau','Mật khẩu',6,10)&kiemTraPassWord(nv.matKhau,'#error_matKhaupw','Mật khẩu')&kiemTraGiaTri(nv.luongCoBan,'#error_minmax_luongcb','Lương cơ bản',1000000,20000000)&kiemTraGiaTri(nv.gioLam,'#error_minmax_gioLam','Giờ làm',80,200);






if(!valid){
    return;
}




mangNhanVien.push(nv);
console.log(mangNhanVien);
renderTableNhanVien(mangNhanVien);
luuLocalStorage();

}
function renderTableNhanVien(arrNhanVien){
    var html='';
    for(var index=0; index<arrNhanVien.length;index++){
    //mỗi lần duyệt lấy ra 1 nhân viên
    var nv=arrNhanVien[index];
    nv.tongLuong=function(){
        var tongLuong=0;
        if(this.chucVu=='Sếp'){
            tongLuong=(Number(this.luongCoBan))*3;
        }else if(this.chucVu=='Trưởng phòng'){
            tongLuong=(Number(this.luongCoBan))*2;
        }else{
            tongLuong=(Number(this.luongCoBan))*1;
        }
        return tongLuong;
    }
   nv.xepLoai=function(){
    var xepLoai='';
    if(this.gioLam<160){
        xepLoai='Nhân Viên Trung Bình';
    }else if(this.gioLam<176){
        xepLoai='Nhân Viên Khá';
    }else if(this.gioLam<192){
        xepLoai='Nhân Viên Giỏi';
    }else{
        xepLoai='Nhân viên Xuất Sắc';
    }
    return xepLoai;
   }
    //Tạo ra 1 chuỗi html tr đưa vào ouput
    html+=`
    <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong()}</td>
        <td>${nv.xepLoai()}</td>
        <td><button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button></td>
        <td><button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="ChinhSua('${nv.taiKhoan}')">Chỉnh sửa</button></td>
    </tr>
    `;
   }
   document.querySelector('#tableDanhSach').innerHTML=html;
   return html;
 }
//hàm xóa
//

function xoaNhanVien(taikhoanClick){
    var indexDel=mangNhanVien.findIndex(nv=>nv.taiKhoan===taikhoanClick);
    if(indexDel!==-1){
        mangNhanVien.splice(indexDel,1);
    }
    renderTableNhanVien(mangNhanVien);
    luuLocalStorage();
}

function ChinhSua(taikhoanClick){
    var indexEdit=mangNhanVien.findIndex(nv=>nv.taiKhoan===taikhoanClick)
    var nvEdit=mangNhanVien[indexEdit];

document.querySelector('#tknv').disabled=true;
nvEdit.hoTen=document.querySelector('#name').value;
nvEdit.email=document.querySelector('#email').value;
nvEdit.matKhau=document.querySelector('#password').value;
nvEdit.ngayLam=document.querySelector('#datepicker').value;
nvEdit.luongCoBan=Number(document.querySelector('#luongCB').value);
nvEdit.chucVu=document.querySelector('#chucvu').value;
nvEdit.gioLam=Number(document.querySelector('#gioLam').value);

}
// Cập nhật dữ liệu
document.querySelector('#btnCapNhat').onclick=function(){   
    var nv=new NhanVien(); 
    //lấy thông tin input người dùng
nv.taiKhoan=document.querySelector('#tknv').value;
nv.hoTen=document.querySelector('#name').value;
nv.email=document.querySelector('#email').value;
nv.matKhau=document.querySelector('#password').value;
nv.ngayLam=document.querySelector('#datepicker').value;
nv.luongCoBan=Number(document.querySelector('#luongCB').value);
nv.chucVu=document.querySelector('#chucvu').value;
nv.gioLam=Number(document.querySelector('#gioLam').value);
var indexEdit=mangNhanVien.findIndex(nhanvien=>nhanvien.taiKhoan===nv.taiKhoan);
mangNhanVien[indexEdit].taiKhoan=nv.taiKhoan;
mangNhanVien[indexEdit].hoTen=nv.hoTen;
mangNhanVien[indexEdit].email=nv.email;
mangNhanVien[indexEdit].matKhau=nv.matKhau;
mangNhanVien[indexEdit].ngayLam=nv.ngayLam;
mangNhanVien[indexEdit].luongCoBan=nv.luongCoBan;
mangNhanVien[indexEdit].chucVu=nv.chucVu;
mangNhanVien[indexEdit].gioLam=nv.gioLam;

var valid=true;
valid&=kiemTraRong(nv.taiKhoan,'#error_required_taiKhoan','Tài khoản')&kiemTraRong(nv.hoTen,'#error_required_ten','Tên')&kiemTraRong(nv.email,'#error_required_email','Email')&kiemTraRong(nv.matKhau,'#error_required_matKhau','mật khẩu');
// &kiemTraRong(nv.luongCoBan,'#error_required_luongcb','Lương cơ bản')&kiemTraRong(nv.gioLam,'#error_required_gioLam','giờ làm');
valid&=kiemTraDoDai(nv.taiKhoan,'#error_allLength_taiKhoan','Tài khoản',4,6)&kiemTraTatCaKytu(nv.hoTen,'#error_allLetter_ten','Tên')&kiemTraEmail(nv.email,'#error_email','Email')&kiemTraDoDai(nv.matKhau,'#error_matKhau','Mật khẩu',6,10)&kiemTraPassWord(nv.matKhau,'#error_matKhaupw','Mật khẩu')&kiemTraGiaTri(nv.luongCoBan,'#error_minmax_luongcb','Lương cơ bản',1000000,20000000)&kiemTraGiaTri(nv.gioLam,'#error_minmax_gioLam','Giờ làm',80,200);






if(!valid){
    return;
}

//tạo mảng sau khi thay đổi
 renderTableNhanVien(mangNhanVien);
 document.querySelector('#tknv').disabled=false;
 luuLocalStorage();
 }
// function luuLocalStorage(){
//     var sMangNhanVien=JSON.stringify(mangNhanVien);//ép kiểu cho mảng thành chuổi để lưu được vào localstorage
//     localStorage.setItem('mangNhanVien', sMangNhanVien);
// }


// function layLocalStorage(){
//     //Check xem storage có chứa dữ liệu đó hay không
//     if(localStorage.getItem('mangNhanVien')){
//         //lấy ra
//         var sMangNhanVien = localStorage.getItem('mangNhanVien');
//         //lấy mangNhanVien gán = chuỗi được lấy từ localstorage ra (phải dùng hàm JSON.parse để chuyển về mảng lại)
//         mangNhanVien=JSON.parse(sMangNhanVien);
//         //tạo ra table nhan viên từ mảng
//         renderTableNhanVien(mangNhanVien);

//     }
// }
// //gọi hàm lấy localstỏage khi vừa load
// window.onload=function(){
//     //Browser vừa load lên làm gì thì sẽ code ở đây
//     layLocalStorage();
// }