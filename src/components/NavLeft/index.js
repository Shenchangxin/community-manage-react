import React from 'react';
import {Menu } from 'antd';
import menuList from './menuConfig';
import './index.less';
import {NavLink} from "react-router-dom";


const  SubMenu  = Menu.SubMenu;
export default class NavLeft extends React.Component {
    // componentWillMount() {
    //     const menuTreeNode = this.renderMenu(menuList);
    //
    //     this.setState({
    //         menuTreeNode
    //     })
    // }
    // //菜单渲染
    // renderMenu = (data)=>{
    //     return data.map((item)=>{
    //         if (item.children){
    //             return (
    //                 <SubMenu title={item.title} key={item.key}>
    //                     {this.renderMenu(item.children)}
    //                 </SubMenu>
    //             )
    //         }
    //         return <Menu.Item title={item.title} key={item.key}>
    //             <NavLink to={item.key}>{item.title}</NavLink>
    //         </Menu.Item>
    //     })
    // }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="./../../../public/statics/logo.png" alt=""/>
                    <h1>大学生社团管理系统</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    <SubMenu key="社团管理" title="社团管理">
                        <Menu.Item key="添加社团"><NavLink to="admin/community/addCommunity">添加社团</NavLink></Menu.Item>
                        <Menu.Item key="删除社团"><NavLink to="admin/community/deleteCommunity">删除社团</NavLink></Menu.Item>
                        <Menu.Item key="修改社团"><NavLink to="admin/community/updateCommunity">修改社团</NavLink></Menu.Item>
                        <Menu.Item key="查找社团"><NavLink to="admin/community/findCommunity">查找社团</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu key="用户管理" title="用户管理">
                        <Menu.Item key="添加用户"><NavLink to="admin/community/addUser">添加用户</NavLink></Menu.Item>
                        <Menu.Item key="删除用户"><NavLink to="admin/community/deleteUser">删除用户</NavLink></Menu.Item>
                        <Menu.Item key="修改用户"><NavLink to="admin/community/updateUser">修改用户</NavLink></Menu.Item>
                        <Menu.Item key="查找用户"><NavLink to="admin/community/findUser">查找用户</NavLink></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
};