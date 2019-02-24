# react-project-news
#### 初始化
使用react、react-router、antd
参考package.json


#### css全局引用
参考style.js和root.js

图片的加载：file-loader url-loader
import LogoIcon from '../../images/logo.png';


#### PC和移动端适配使用插件
react-responsive
https://github.com/contra/react-responsive


#### 登录和注册
参考页面： pc_header.js
主要：antd的模态框以及fetch的使用



#### 首页展示
pc_newscontainer.js是整个内容骨架。包含轮播图以及各模块的排布

pc_news_block.js 展示中间的新闻列表组件（可复用性非常强，重点学习）

pc_news_image_block.js 图片展示列表组件。用于展示所有图片新闻（可复用性非常强,重点学习）

#### 移动端内容列表
mobile_list.js
移动端列表组件。



























