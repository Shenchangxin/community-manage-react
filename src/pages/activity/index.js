import React,{Component}from 'react';
import axios from "axios";
import {message} from "antd";

class Activity extends Component {

    state={
        activity:''
    }

    componentWillMount() {
        this.getActivityById();
        console.log(this.state.activity);
        //console.log(this.props.match.params.id);
    };

    getActivityById =()=>{
        console.log(this.props.match)
        const id = this.props.match.params.id;
        console.log(id);
        axios.get('/api/activity/activity/${id}').then((res=>{
            const result = res.data.data;
            this.setState({
                activity: result,
            });

            message.success("查询成功");
        })).catch(err=>{
            message.error("查询失败"+err);
        })
    }

    render() {
        return(
            <div>
                Activity
            </div>
        )
    }
}
export default Activity;