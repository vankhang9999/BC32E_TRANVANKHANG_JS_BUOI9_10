//1:Hàm kiểm tra rỗng
/**
 * 
 * @param {*} object Giá trị muốn kiểm tra rỗng
 * @param {*} id id của đối tượng dó
 * @param {*} name text hiển thị ra màn hình
 * @returns 
 */
 function kiemTraRong(object,id,name){
    //.trim(): loại bỏ khoảng trắng đầu và cuối
    if(object.trim()==''){
        document.querySelector(id).innerHTML=name+' Không được bỏ trống';
        return false;
    }else{
        document.querySelector(id).innerHTML='';
        return true;
    }
}

function kiemTraTatCaKytu(object,id,name){
    var regexletter=/^[A-Za-z]+$/;
    if(regexletter.test(object)){
        document.querySelector(id).innerHTML='';
        return true;
    }
    document.querySelector(id).innerHTML=name+' tất cả phải là chữ';
    return false;

}

function kiemTraTatCaLaSo(object,id,name){
    var regexletter=/^[0-9]+$/;
    if(regexletter.test(object)){
        document.querySelector(id).innerHTML='';
        return true;
    }
    document.querySelector(id).innerHTML=name+' tất cả phải là số';
    return false;

}

function kiemTraEmail(object,id,name){
    var regexEmail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(object)){
        document.querySelector(id).innerHTML='';
        return true;
    }
    document.querySelector(id).innerHTML=name+' Không đúng định dạng';
    return false;

}

function kiemTraNgay(object,id,name){
    var regexDate=/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
    if(regexDate.test(object)){
        document.querySelector(id).innerHTML='';
        return true;
    }
    document.querySelector(id).innerHTML=name+' Không đúng định dạng';
    return false;
}

function kiemTraDoDai(object,id,name,minLength,maxLength){
    var lengthValue=object.length;
    if(lengthValue>maxLength||lengthValue<minLength){
        document.querySelector(id).innerHTML=name +' từ '+minLength+' đến '+ maxLength+' ký tự ';
        return false;
    }
    document.querySelector(id).innerHTML='';
    return true;
}
function kiemTraPassWord(object,id,name){
    var regexpw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if(regexpw.test(object)){
        document.querySelector(id).innerHTML='';
        return true;
    }
    document.querySelector(id).innerHTML=name+' Phải chứa ít nhất 1 ký tự hoa, 1 ký tự thường và số';
    return false;
}
function kiemTraGiaTri(value,id,name,minValue,maxValue){
    value=Number(value);
    if(value>maxValue||value<minValue){
        document.querySelector(id).innerHTML=name +' từ '+minValue+' đến '+ maxValue;
        return false;
    }
    document.querySelector(id).innerHTML='';
    return true;
    }