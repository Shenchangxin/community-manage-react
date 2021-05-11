import React from 'react';
import {Menu, Icon } from 'antd';
import menuList from './menuConfig';
import './index.less';


const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);

        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if (item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render() {
        return (

            <div className="logo">
                <img src="" alt=""/>
                <h1>大学生社团管理系统</h1>
            </div>,
            <Menu
                theme="dark"
            >
                {this.state.menuTreeNode}
            </Menu>
        );
    }
};