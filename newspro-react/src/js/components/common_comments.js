import React from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
	Card
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router'
class CommonComments extends React.Component {

    constructor() {
        super();
        this.state = {
            comments: ''
        };
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey,myFetchOptions)
        .then(response=>response.json())
        .then(json=> {
            this.setState({comments:json});
        });
    };

    handleSubmit(e) {
        console.log("xxxxxxxxxxxxx");
        e.preventDefault();
        var myFetchOptions = {
			method: 'GET'
		};
        this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
              fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=1" + "&uniquekey=" + this.props.uniquekey + "&commnet=" + values.remark, myFetchOptions).then(response => response.json()).then(json => {
                this.componentDidMount();
            })
            }
        });

	
		// var formdata = this.props.form.getFieldsValue();
	
	};

    render() {
        let { getFieldDecorator  } = this.props.form;
        const {comments} = this.state;
        const commnetList = comments.length
            ? comments.map((comment,index) =>(
                <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            : '没有加载到任何评论';


        return (
            <div class="comment">
            <Row>
                <Col span={24}>
                    {commnetList}
                    <Form onSubmit ={this.handleSubmit.bind(this)}>

                        <Form.Item label="您的评论">
                        {getFieldDecorator('remark', {initialValue: ''})(
                            <Input  placeholder="随便写" />
                        )}
                        </Form.Item>

                        {/* <FormItem label="您的评论">
                            <Input type="textarea" placeholder="随便写" {...getFieldDecorator('remark',{initialValue: ''})}/>
                        </FormItem> */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
        );
    }


}


export default CommonComments = Form.create({})(CommonComments);