function taoMangNgauNhien(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
}


function sapXepTangDan(array) {
    return array.slice().sort((a, b) => a - b);
}

// Hàm loại bỏ các phần tử trùng nhau, sao cho mỗi phần tử chỉ xuất hiện 1 lần
function loaiGiongNhau(array) {
    return Array.from(new Set(array));
}

// Sử dụng hàm
const randomArray = taoMangNgauNhien(10, 1, 100);
console.log("Mảng ngẫu nhiên:", randomArray);

const sortedArray = sapXepTangDan(randomArray);
console.log("Mảng sau khi sắp xếp:", sortedArray);

const uniqueArray = loaiGiongNhau(randomArray);
console.log("Mảng sau khi loại bỏ phần tử trùng nhau:", uniqueArray);