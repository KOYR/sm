import React from 'react';
import "./styled.css"
class AlertModal extends React.Component {
    render() {
        let { revisionObj,modalIndex} = this.props
        console.log(revisionObj,modalIndex)
       return(
            <div className="modalContainer" ref='visit'>
                <div className="modal">
                    <div className="header">
                        <div className="title">{revisionObj.title}-{revisionObj.sub_class[modalIndex].name}</div>
                        <p>{revisionObj.title}正文</p>
                    </div>
                    <div className='footer'>
                        <button 
                            onClick={this.handleClose.bind(this)}
                        >X</button>
                    </div>
                </div>
            </div>
       )
    }
    //关闭模态框
    handleClose(){
        this.refs.visit.style.visibility='hidden'
    }
}
export default AlertModal