import { Layout } from "antd";
import React from "react";

const { Header, Footer, Sider, Content } = Layout;

interface props {
  sider?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

const DashboardLayout = ({ sider, header, content, footer }: props) => (
  <React.Fragment>
    <Layout>
      <Sider>{sider}</Sider>
      <Layout>
        <Header>{header}</Header>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </Layout>
    </Layout>
  </React.Fragment>
);

export default DashboardLayout;
