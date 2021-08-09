import React, { Component } from 'react'
import {connect} from 'react-redux'

class ThongTinGame extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <h1 className="text-warning">{this.props.ketQua}</h1>
                <h2 className="text-success mt-4">Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span></h2>
                <h2 className="text-success mt-4">Kết quả: <span className="text-warning">{this.props.soBanChoi}</span></h2>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanXuXiReducer.mangDatCuoc,
        ketQua: state.BaiTapOanXuXiReducer.ketQua,
        soBanThang: state.BaiTapOanXuXiReducer.soBanThang,
        soBanChoi: state.BaiTapOanXuXiReducer.soBanChoi,

    }
}
export default connect(mapStateToProps)(ThongTinGame)
