import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        return (
            <div className="text-center d-flex justify-content-center flex-column align-items-center">
                <div className="computerBubble">
                    <img style={{transform:'rotate(120deg)'}} width={100} src={this.props.hinhAnhComputer} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/playerComputer.png" alt="" />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        hinhAnhComputer: state.BaiTapOanXuXiReducer.computer.hinhAnh
    }
}
export default connect(mapStateToProps)(Computer)
