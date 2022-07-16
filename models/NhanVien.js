function NhanVien(){
    this.taiKhoan='';
    this.hoTen='';
    this.email='';
    this.matKhau='';
    this.ngayLam='';
    this.luongCoBan='';
    this.chucVu='';
    this.gioLam=0;
    this.loaiNhanVien='';
    this.tongLuong=function(){
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
   this.xepLoai=function(){
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
}
