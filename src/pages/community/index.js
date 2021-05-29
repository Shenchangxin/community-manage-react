import React, {Component} from 'react';
import {connect} from "react-redux";
import {Table, Tag, Space, Form, Row, Col, Input, Button, Modal, Select, Card} from 'antd';
import {actionCreators} from "../community/store";
import {Redirect} from "react-router-dom";
import {PlusSquareOutlined} from "@ant-design/icons";



const { Option } = Select;

class Community extends Component {


    componentWillMount() {

        this.props.getCommunity();
        console.log(this.props.data)
    }


    render() {

        const columns = [
            {
                title: '社团名称',
                dataIndex: 'name',
                key: 'id',
                render: text => <a>{text}</a>,
            },
            {
                title: '社团类型',
                dataIndex:'type',
                key: 'id',
                render: (type) => (
                    <Tag color={"green"} key={type}>{type.name}</Tag>
                ),
            },

            // {
            //     title: '社团类型',
            //     key: 'type',
            //     dataIndex: 'type',
            //     render: type => (
            //         <span>
            //     {type.map(type => {
            //         let color = type.length > 5 ? 'geekblue' : 'green';
            //         if (type === 'loser') {
            //             color = 'volcano';
            //         }
            //         return (
            //             <Tag color={color} key={type}>
            //                 {type.toUpperCase()}
            //             </Tag>
            //         );
            //     })}
            //   </span>
            //         )
            // },

            {

                title: '操作',
                key: 'id',
                render: (text,record) => (

                    <Space size="middle">
                        <a onClick={()=> handleUpdate(record.id-1)}>修改</a>
                        <a onClick={()=> handleDelete(record.id)}>删除</a>
                    </Space>

                ),
            },
        ];



        const {handleSearch,handleShowModal,handleAddCommunity,updateId,handleUpdate,handleCancel,handleDelete,handleCancelUpdate,handleUpdateCommunity} = this.props;
        if(this.props.deleteState){return <Redirect to="/admin/community"/>}
        return(
            <div className="communityList">

                <Card>
                <Form

                    name="advanced_search"
                    className="ant-advanced-search-form"
                >
                    <Row type="flex"  align="middle" style={{marginBottom:10}}>

                        <Col>
                            <Form layout="inline"  ref="searchForm">
                                <Form.Item label={"社团名"}  name="fields">
                                    <Input  />
                                </Form.Item>
                                <Form.Item style={{float:"right"}}>
                                    <Button  type="primary" onClick={()=>handleSearch(this.refs.searchForm.getFieldValue())} style={{marginRight:"10px"}}>查找</Button>
                                    <Button  type="default"  onClick={()=>handleShowModal()}><PlusSquareOutlined />添加社团</Button>

                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Form>


                <Table
                    columns={columns}
                    pagination={{ pageSize:6, position: [ 'bottomCenter'] }}
                    dataSource={this.props.data}
                />
                </Card>

                <Modal
                    visible={this.props.visible}
                    destroyOnClose={true}
                    title="添加社团"
                    onOk={()=>handleAddCommunity()}
                    onCancel={()=>handleCancel()}
                    footer={[
                        <Button key="back" onClick={()=>handleCancel()}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" loading={this.props.loading} onClick={()=>handleAddCommunity(this.refs.communityForm.getFieldValue())}>
                            确定
                        </Button>,

                    ]}
                >
                    <Form
                        name="addCommunity"
                        ref="communityForm"
                        scrollToFirstError
                    >
                        <Form.Item
                            name="name"
                            label="社团名称"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入所要添加的社团的名字!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="description"
                            label="社团简介"
                            rules={[
                                {
                                    required: true,
                                    message: '请填写社团简介!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            name="type"
                            label="社团类型"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: '请选择社团类型!',
                                },
                            ]}
                        >
                            <Select placeholder="请选择社团类型">
                                <Option value="文体类">文体类</Option>
                                <Option value="艺术类">艺术类</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>

                <Modal
                    visible={this.props.updateVisible}
                    destroyOnClose={true}
                    title="修改社团"
                    onOk={()=>handleUpdateCommunity()}
                    onCancel={()=>handleCancelUpdate()}
                    footer={[
                        <Button key="back" onClick={()=>handleCancelUpdate()}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" loading={this.props.loading} onClick={()=>handleUpdateCommunity(this.refs.communityForm.getFieldValue(),updateId)}>
                            确定
                        </Button>,

                    ]}
                >
                    <Form
                        name="updateCommunity"
                        ref="communityForm"
                        scrollToFirstError
                    >
                        <Form.Item
                            name="name"
                            label="社团名称"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入所要添加的社团的名字!',
                                },
                            ]}
                        >

                            {/*<Input defaultValue={this.props.data[updateId].name}/>*/}
                            <Input defaultValue="大学生心里社团"/>
                        </Form.Item>

                        <Form.Item
                            name="description"
                            label="社团简介"
                            rules={[
                                {
                                    required: true,
                                    message: '请填写社团简介!',
                                },
                            ]}
                        >
                            {/*<Input defaultValue={this.props.data[updateId].description}/>*/}
                            <Input defaultValue="我是大学生心里社团"/>
                        </Form.Item>


                        <Form.Item
                            name="type"
                            label="社团类型"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: '请选择社团类型!',
                                },
                            ]}
                        >
                            <Select placeholder="请选择社团类型" defaultValue="文体类">
                                <Option value="文体类">文体类</Option>
                                <Option value="艺术类">艺术类</Option>
                                <Option value="体育类">体育类</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>

            </div>
        )
    }

}
const mapState = (state) => ({
    data: state.getIn(['community','data']),
    visible: state.getIn(['community','visible']),
    loading: state.getIn(['community','loading']),
    deleteState: state.getIn(['community','deleteState']),
    updateVisible: state.getIn(['community','updateVisible']),
    updateState: state.getIn(['community','updateState']),
    updateId: state.getIn(['community','updateId']),
});
const mapDispatch = (dispatch) => ({

    getCommunity(){
        dispatch(actionCreators.communityRequest())
    },
    handleUpdate(id){
        console.log(id)
        dispatch(actionCreators.handleUpdate(id))
    },
    handleSearch(value){
        console.log(1)
        dispatch(actionCreators.searchCommunity(value))
    },
    handleAddCommunity(values){
        console.log(values)
        dispatch(actionCreators.addCommunity(values))
    },
    handleShowModal(){
        dispatch(actionCreators.handleShow())
    },
    handleCancel(){
        dispatch(actionCreators.handleCancel())
    },
    handleDelete(id){
        console.log(id)
        dispatch(actionCreators.handleDelete(id))
    },
    handleCancelUpdate(){
        dispatch(actionCreators.handleCancelUpdate())
    },
    handleUpdateCommunity(values,id){
        console.log(values)
        dispatch(actionCreators.handleUpdateCommunity(values,id))
    }

})

export default connect(mapState,mapDispatch)(Community);