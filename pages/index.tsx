import React from 'react';
import GitHubCalendar from "react-github-calendar";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {blue} from "@ant-design/colors";
const { Header, Content, Footer } = Layout;




interface Props {
    username:string
    name:string
    htmlURL:string
    bio:string
    avatarUrl:string
}

export default function Home(props: Props) {
    return (
        <Layout style={{background:"#32213A", width: '100%'}}>
                <div
                    style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <div style={{ padding: 24, minHeight: 380, background: "#32213A", alignContent: "center" }}>
                    <GitHubCalendar username={props.username} hideColorLegend={true} hideTotalCount={true} hideMonthLabels={true} color={"#850808"}></GitHubCalendar>
                </div>
            </Content>

        </Layout>
    );
}

export async function getServerSideProps() {

    const res = await fetch('  https://api.github.com/users/AugustsKir')
    const data = await res.json()
    return { props: {username:data.login, name:data.name, htmlURL:data.html_url, bio:data.bio, avatarUrl:data.avatar_url } }

}


