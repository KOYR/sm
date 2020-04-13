import styled from "styled-components";
//用来定义页面撑开的100%;
export const PageContainer = styled.div`
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    overflow-y: auto;
`
export const TopBar = styled.div`
    position:fixed;
    left:0;
    right:0;
    top:0;
    height:0.44rem;
    background:#FEFEFE;
    display:flex;
    line-height:.44rem;
    justify-content : space-between;
    padding:0 .12rem;
    font-size:.14rem;
    font-weight:bold;
`
export const MainCon = styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:.44rem;
    height:600px;
    background:#F7F7F7;
    display:flex;
    flex-flow:nowrap column;
`
export const Revision = styled.div`
    height:1.47rem;
    background:#FEFEFE;
    padding: .115rem .115rem .025rem .115rem;
    margin:.02rem 0 .08rem 0;

    display:flex;
    justify-content:space-between;
    div{
        width:1.68rem;
        height:1.33rem;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h2{
            font-size:.16rem;
            font-weight:bold;
        }
        background:#F6F6F6;
        border:.005rem solid #EEEEEE;
        p{
            color:#BDBDBD;
        }
    }
    .active{
        background:#FFF8F6;
        border:.005rem solid #F8A698;
        color:#FF4B53;
        p{
            color:#FF4B53;
        }
    }
`

export const Nav = styled.div`
    background:#FEFEFE;
    height:2.53rem;
    padding: 0 .175rem;
    .Navtitle{
        height:.63rem;
        line-height:.63rem;
        h2{
            float: left;
            padding:0 .02rem;
        }
        p{
            color:#ACACAC;
            font-size:.11rem;
            span{
                color:#FF4B53;
            }
        }
    }
    .Navbar{
        display:flex;   
        flex-wrap:wrap;
        justify-content:space-between;
        /* background:red; */
        li{
            height:.81rem;
            text-align:center;
            margin-right:.22rem;
            color:#C3C3C3;
            div{
                background:#FDEAE8;
                width:.45rem;
                height:.45rem;
                border-radius:50%;
                line-height:.45rem;
                margin:.12rem 0 .1rem 0;
            }
            p{
                font-size:.1rem;
                line-height:.1rem;
            }
        }
        li:nth-of-type(5n){
            margin-right:0;
        }
        .active{
            color:#484848;
            div{
                color:#FF4B53;
            }
        }
    }
`
