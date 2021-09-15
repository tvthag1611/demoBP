import { Menu } from 'antd'
import React, { useState } from 'react'
import './sidebar.scss'
import { icon } from '../../assets/Svgs';
import Icon from '@ant-design/icons/lib/components/Icon';
import logo from '../../assets/images/logo.png'

const { SubMenu } = Menu;

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(window.innerWidth > 768 ? true : false)
    return (
        <>
            <div className="sidebar-responsive">
                <Icon component={icon.menu} className="sidebar-btn" onClick={() => setCollapsed(true)}/>
                <Icon component={icon.logo} />
            </div>  
            <div className={ collapsed ? "sidebar" : "sidebar display-none" }>
                <Menu
                defaultSelectedKeys={['bitplay']}
                mode="inline"
                theme="dark"
                >
                    <li className="logoBitplay">
                        {/* <Icon component={icon.logo} /> */}
                        <img src={logo} alt="logo" />
                    </li>
                    <li className="closeSidebar">
                        <Icon component={icon.closeIcon} onClick={() => setCollapsed(false)}/>
                    </li>
                    <Menu.Item key="bitplay">
                        Bitplay
                    </Menu.Item>
                    <SubMenu key="gameplay" title="Gameplay">
                        <Menu.Item key="gameplay1">Gameplay 1</Menu.Item>
                        <Menu.Item key="gameplay2">Gameplay 2</Menu.Item>
                        <Menu.Item key="gameplay3">Gameplay 3</Menu.Item>
                        <Menu.Item key="gameplay4">Gameplay 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="community" title="Community">
                        <Menu.Item key="community1">Community 1</Menu.Item>
                        <Menu.Item key="community2">Community 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="organization">
                        Dêcntralized Organization
                    </Menu.Item>
                    <SubMenu key="metric" title="Key Metric">
                        <Menu.Item key="metric1">Key Metric 1</Menu.Item>
                        <Menu.Item key="metric2">Key Metric 2</Menu.Item>
                        <Menu.Item key="metric3">Key Metric 3</Menu.Item>
                        <Menu.Item key="metric4">Key Metric 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="technology" title="Technology">
                        <Menu.Item key="technology1">Technology 1</Menu.Item>
                        <Menu.Item key="technology2">Technology 2</Menu.Item>
                        <Menu.Item key="technology3">Technology 3</Menu.Item>
                        <Menu.Item key="technology4">Technology 4</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="roap">
                        Roadmap and copleted milestones
                    </Menu.Item>
                    <Menu.Item key="team">
                        Team
                    </Menu.Item>
                    <Menu.Item key="partners">
                        Partners
                    </Menu.Item>
                    <Menu.Item key="inforgraphic">
                        Inforgraphic
                    </Menu.Item>
                </Menu>
            </div>
        </>
    )
}
