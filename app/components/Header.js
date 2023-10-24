import React from "react";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png"
import HeaderBg from '@/app/assets/images/header-bg.png'
import '@/app/assets/css/header.css'
import {LoginBtn} from "@/app/components/Home/Login";

export const Header = ({router}) => {
    const menuList = [
        {
            title: '首页',
            href: '/',
        },
        {
            title: '商城',
            href: '/mall',
        }, {
            title: '精彩活动',
            href: '/activity',
        }, {
            title: '商务合作',
            href: '/business',
        }, {
            title: '关于我们',
            href: '/about',
        }
    ]
    return (
        <div className={'header'}>
            <Image alt={"header-bg"}
                   src={HeaderBg}
                   className={'absolute top-0 left-0'}
                   style={{
                       height: '64px'
                   }}
                   priority
            ></Image>
            <div className={'hd-box indent-1 sticky'}>
                <Image alt={"logo"} src={logo} style={{width: '95px', height: '45px'}} priority></Image>
                <div className={'font-bold h-full flex justify-between items-center w-full'}
                     style={{marginLeft: '70px'}}>
                    <div className={'font-bold h-full flex'}>
                        {
                            menuList.map(item => (
                                <a key={item.href}
                                   className={router === item.href ? 'menu-item menu-item-select h-full flex justify-center items-center' : 'menu-item h-full flex justify-center items-center'}
                                   href={item.href}>
                                    <span>{item.title}</span>
                                </a>
                            ))
                        }
                    </div>
                    <div className={'flex'}>
                        <LoginBtn></LoginBtn>

                    </div>
                </div>
            </div>
        </div>
    )
}