// 1
arr = ['2', '3', '8', '7', '4', '6'];
function MaxNumber(){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i]> max){
             max = arr[i];
        }
    }
    return max;
}
var Max = MaxNumber();
MaxNumber();
console.log(Max);
// 2
arr = ['1', '4', '7', '16', '11', '2'];
arr2 = [];
function timSoChinhPhuong() {
    for(var i =0; i < arr.length; i++){
        var a = arr[i];
        var sqrt = Math.sqrt(a)
        if(sqrt === Math.floor(sqrt)){
            arr2.push(a);
        }
    }
}
timSoChinhPhuong();
console.log(arr2);
// 3
arr = ['10', '5', '8', '16', '4', '1'];
arr3 = [];
function timSo(){
    var tong = 0;
    for(var i = 0; i < arr.length; i++){
        var k = parseInt(arr[i]);
        tong += k;
    }
    var soPhanTu = arr.length;
    var tbc = tong/ soPhanTu;
    
    for(var i = 0; i < arr.length; i++){
        var k = parseInt(arr[i]);
        if(k > tbc){
            arr3.push(arr[i])
        }
    }
}
timSo();
console.log(arr3);
//4
arr = ['-5', '1', '9', '12', '8', '7'];
function tinhtbcSoDuong(){
    var tong = 0;
    var soPhanTu = 0;
    for(var i = 0; i < arr.length; i++){
        var k = parseInt(arr[i]);
        if(arr[i]>0)
        tong += k;
        soPhanTu++;
    }
    
    var tbcSoDuong = tong/ soPhanTu;
    return tbcSoDuong;
}
var tbc=tinhtbcSoDuong();
console.log(tbc);

