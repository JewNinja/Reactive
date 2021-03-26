
import React from "react"
import { Layout as AntdLayout } from 'antd'
import LeftMenu from "../LeftMenu";
import Routes from "../../routes";
import './style.css'

const { Header, Sider, Content } = AntdLayout


const Layout = () => {
  return (
    <AntdLayout className="main-layout">
      <Header className="antd-header"><h1>Reactive</h1></Header>
      <AntdLayout>
        <Sider><LeftMenu /></Sider>
        <Content><Routes /></Content>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;