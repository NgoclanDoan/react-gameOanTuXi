import React, { Component } from 'react'
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        return (
            <div className="text-center d-flex justify-content-center flex-column align-items-center">
                <div className="playerBubble">
                    <img width={100} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="" />
                <div className="listKeoBuaBao">
                    {this.props.mangDatCuoc.map((item, index) => {
                        // Thêm border cho item được chọn
                        let border = {};
                        if(item.datCuoc){
                            border = {border:'3px solid orange'}
                        }
                        return <button style={border} className="playerBtnItem" onClick={()=>{this.props.datCuoc(item.ma);}}><img src={item.hinhAnh} /></button>
                    })}

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanXuXiReducer.mangDatCuoc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
