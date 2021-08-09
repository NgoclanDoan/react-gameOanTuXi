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
}
const BaiTapOanXuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            console.log(action);
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                return { ...item, datCuoc: false }
            })
            console.log(mangCuocUpdate);
            let index = mangCuocUpdate.findIndex(key => key.ma === action.maCuoc);
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
        case 'END_GAME': {
            state.soBanChoi += 1;
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
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
                    } break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua';

                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;

                        state.ketQua = "I'm iron man, i love you 3000!!";

                    } else {
                        state.ketQua = 'Hòa';
                    } break;
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
}
export default BaiTapOanXuXiReducer;
