import React, { Fragment } from 'react';
import * as StyledObj from "./styled"
import AlertModel from "../amodel"
class AvipUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: 0,
            visible: false,
            modelIndex: 0,
        }
    }
    render() {
        let {revisionList} = this.props;
        let { isShow,  visible, modelIndex } = this.state;
        console.log(this.props)
        return (
            <Fragment>
                <AlertModel visible={visible} revisionList={revisionList} isShow={isShow} modelIndex={modelIndex}></AlertModel>
                <StyledObj.PageContainer>
                    {/* 头部 */}
                    <StyledObj.TopBar>
                        <i>icon</i> VIP中心 <i>icon</i>
                    </StyledObj.TopBar>
                    {/* 主体内容区 */}
                    <StyledObj.MainCon>
                        {/* 版别 */}
                        <StyledObj.Revision>
                            {
                                revisionList ? revisionList.map((item, Rindex) => (
                                    <div key={Rindex}
                                        className={isShow === Rindex ? 'active' : ''}
                                        onClick={this.props.handleClickRevision.bind(this, Rindex)}
                                    >
                                        <h2>{item.title}</h2>
                                        <p>适合{item.text}</p>
                                    </div>
                                )) : []
                            }
                        </StyledObj.Revision>
                        {/* 高级版或独立版 */}
                        <StyledObj.Nav>
                            <div className="Navtitle"> <h2>{revisionList[isShow].title}</h2><p>( 适合<span>{revisionList[isShow].text}</span>) </p> </div>
                            <ul className="Navbar">
                                {
                                    revisionList[isShow] ? revisionList[isShow].sub_class.map((item, index) => (
                                        <li key={index}
                                            className={item.flag === 1 ? 'active' : ''}
                                            onClick={this.props.hanldeClickLi.bind(this, visible, index)}
                                        >
                                            <div>A</div><p>{item.name}</p>
                                        </li>
                                    )) : []
                                }
                            </ul>
                        </StyledObj.Nav>
                    </StyledObj.MainCon>
                </StyledObj.PageContainer>
            </Fragment>
        )
    }
}
export default AvipUI