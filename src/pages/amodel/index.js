import React from 'react';
import "./styled.css"
class AlertModel extends React.Component {
    constructor(props) {
      super(props)
      this.state={
          flag:true,
      }
    }
    render() {
        let flag = this.state.flag
        let {visible,revisionList,isShow,modelIndex} = this.props
        console.log(revisionList)
       return(
            <div className={visible===flag ?"modelContainer":''}>
                <div className="model">
                    <div className="header">
                        <div className="title">{revisionList[isShow].title}-{revisionList[isShow].sub_class[modelIndex].name}</div>
                        <p>{revisionList[isShow].title}正文</p>
                    </div>
                    <div className='footer'>
                        <button 
                            onClick={this.handleClose.bind(this,flag)}
                        >X</button>
                    </div>
                </div>
            </div>
       )
    }
    handleClose(flag){
        this.setState({
            flag:!flag
        })
    }
}
export default AlertModel