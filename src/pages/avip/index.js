import React,{Fragment} from 'react';
import AvipUI from "./avipUI"
class Avip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        let { isShow, revisionList,visible,modelIndex} = this.state;
        return (
            <AvipUI revisionList={revisionList} handleClickRevision={this.handleClickRevision} hanldeClickLi={this.hanldeClickLi} />
        )
    }
        //点击下边高亮标题变化
        handleClickRevision(Rindex) {
            this.setState({
                isShow: Rindex
            })
        }
        //点击小图标弹出模态框
        hanldeClickLi(fVisible, index) {
            console.log("fVisible=" + fVisible)
            this.setState({
                visible: !fVisible,
                modelIndex: index
            })
        }
}
export default Avip