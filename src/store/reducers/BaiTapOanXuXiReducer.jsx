const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false },
    ],
    ketQua: "I'm iron man, i love you 3000!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/keo.png' },
};
const BaiTapOanXuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            //được thì nên tách ra 1 file type để định nghĩa type nữa, nó có lợi là mình chấm 1 phát nó ra luôn không bị lẫn lộn hay sai từ
            console.log(action);
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                return { ...item, datCuoc: false };
            });
            console.log(mangCuocUpdate);
            let index = mangCuocUpdate.findIndex((key) => key.ma === action.maCuoc);
            if (index !== -1) {
                mangCuocUpdate[index].datCuoc = true;
            }
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state };
        }
        case 'RANDOM_KEO_BUA_BAO': {
            let datCuocNgauNhien = state.mangDatCuoc[Math.floor(Math.random() * 3)];
            state.computer = datCuocNgauNhien;
            return { ...state };
        }
        // thuật toán để check thắng hòa thua như sau:
        // tạo ra 1 list [keo,bua,bao]; mỗi lần người dùng chọn hoặc máy chọn thì dùng hàm findIndex để lấy index ra
        // để ý thấy cái mảng này, thì index của nó có quy luật thắng thua như sau
        // mình chọn cái gì bạn chọn đúng cái đó thì hòa, cái này dễ
        // mình chọn bất cứ cái gì, nếu bạn chọn sau mình 1 index, mình thua ("bua" thắng "keo", "bao" thang "bua"),
        // hoặc bạn chọn trước mình 2 đơn vị mình cũng thua(mình chọn "bao" bạn chọn "keo")
        // if(indexYou===indexMe){
        //     result ="DRAW";
        // }else if(indexMe===indexYou-1|| indexMe === indexYou+2){
        //     result ="LOSE";
        // }else{
        //     result ="WIN";
        // }

        case 'END_GAME': {
            // e tham khảo thuật toán bên trên cho đỡ xử lý phức tạp nha, còn thấy cuộc sống khó khăn quá cho qua cũng được
            state.soBanChoi += 1;
            let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, i love you 3000!!";
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;

                        state.ketQua = "I'm iron man, i love you 3000!!";
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa';
                    } else {
                        state.ketQua = 'Thua';
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua';
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;

                        state.ketQua = "I'm iron man, i love you 3000!!";
                    } else {
                        state.ketQua = 'Hòa';
                    }
                    break;
                default:
                    state.soBanThang += 1;
                    state.ketQua = "I'm iron man, i love you 3000!!";
                    return { ...state };
            }

            return { ...state };
        }
        default:
            return { ...state };
    }
};
export default BaiTapOanXuXiReducer;
