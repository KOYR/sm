import React, { Fragment } from 'react';
import * as StyledObj from "./styled"
import AlertModal from "../amodal"
class AvipUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: 0,
            modalIndex: 0,
            revisionList: [
                {
                    "id": "0", title: "高级版", text: "独立摄影师",
                    sub_class: [
                        { flag: 1, name: "标题1" }, { flag: 1, name: "标题1" },
                        { flag: 1, name: "标题1" }, { flag: 1, name: "标题1" },
                        { flag: 0, name: "标题1" }, { flag: 0, name: "标题1" },
                        { flag: 0, name: "标题1" }, { flag: 0, name: "标题1" },
                        { flag: 0, name: "标题1" }, { flag: 1, name: "标题1" },
                    ]
                },
                {
                    "id": "1", title: "定制版", text: "小型工作室",
                    sub_class: [
                        { flag: 1, name: "标题2" }, { flag: 1, name: "标题2" },
                        { flag: 1, name: "标题2" }, { flag: 1, name: "标题2" },
                        { flag: 1, name: "标题2" }, { flag: 1, name: "标题2" },
                        { flag: 1, name: "标题2" }, { flag: 1, name: "标题2" },
                        { flag: 1, name: "标题2" }, { flag: 1, name: "标题2" },
                    ]
                }
            ]
        }
    }
    render() {
        let { isShow, modalIndex, revisionList } = this.state;
        return (
            <Fragment>
                <AlertModal ref='AlertModal' revisionObj={revisionList[isShow]} modalIndex={modalIndex}
                ></AlertModal>
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
                                        onClick={this.handleClickRevision.bind(this, Rindex)}
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
                                            onClick={this.handleClickLi.bind(this, index)}
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
    componentDidMount(){
        //模态框初始隐藏
        this.refs.AlertModal.refs.visit.style.visibility = 'hidden'
    }
    //点击下边高亮标题变化
    handleClickRevision(Rindex) {
        this.setState({
            isShow: Rindex
        })
    }
    //点击小图标弹出模态框
    handleClickLi(index) {
        this.setState({
            modalIndex: index
        })
        this.refs.AlertModal.refs.visit.style.visibility = 'visible'
    }
}
export default AvipUI