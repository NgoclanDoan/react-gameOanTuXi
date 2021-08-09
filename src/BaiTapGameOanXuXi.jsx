import React, { Component } from 'react'
import './BaiTapOanXuXi.css';
import Computer from './Computer';
import Player from './Player';
import ThongTinGame from './ThongTinGame';
import { connect } from 'react-redux'
class BaiTapGameOanXuXi extends Component {
    render() {
        return (
            <div className="gameOanXuXi">

                <div className="row text-center pt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <ThongTinGame />
                        <button className="btn btn-success p-2 mt-4 display-4" onClick={() => {
                            this.props.playGame()
                        }}>Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>


        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            dispatch({
                type: 'RANDOM_KEO_BUA_BAO'
            });
            dispatch({
                type: 'END_GAME'
            });
        }
    }
}
export default connect(null, mapDispatchToProps)(BaiTapGameOanXuXi)
