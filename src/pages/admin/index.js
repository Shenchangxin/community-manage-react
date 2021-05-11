import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import { Row, Col} from 'antd';
import Header from "../../common/header";
import Footer from "../../common/footer";
import NavLeft from "../../components/NavLeft";
import './common.less'

class Admin extends PureComponent {
    render() {
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="20" className="main">
                    <Header/>
                    <Row className="content">
                        Content
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }

}
const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});
export default connect(mapState,mapDispatch)(Admin);