'use client'
import Image from "next/image";
import loginIcon from "@/app/assets/images/login-icon.png";
import React, {useEffect, useState} from "react";
import Logo from '@/app/assets/images/logo.png'
import '@/app/assets/css/login.css'
import {post} from "@/app/utils/http";
import {Message} from "@arco-design/web-react";
import '@arco-design/web-react/dist/css/arco.css'
import registeredIcon from "@/app/assets/images/registered-icon.png";

export const LoginBtn = () => {
    const [loginCon, setLoginCon] = useState({
        username: '',
        password: ''
    })
    const [loginStatus, setLoginStatus] = useState(false)
    useEffect(() => {
        post('/v2/ping').then(r => r.json()).then((res) => {
            console.log(res)
            if (res.code === 200) {
                setLoginStatus(true)
            } else {
                setLoginStatus(false)
            }
        })
    }, [])
    return (
        <>
            {
                loginStatus ?
                    <div>
                        已登录
                    </div>
                    :
                    <>
                        <button className={'flex login-btn justify-center items-center'}
                                onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <Image
                                className={'mr-2'}
                                alt={'login-icon'}
                                style={{width: '11px', height: '12px'}} priority src={loginIcon}/>
                            登录
                        </button>
                        <a href="/registered" className={'flex registered-btn justify-center items-center'}>
                            <Image alt={"registered-icon"}
                                   className={'mr-2'}
                                   src={registeredIcon}
                                   priority
                                   style={{width: '11px', height: '12px'}}
                            />
                            注册
                        </a>
                    </>
            }
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box login-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" style={{
                            color: '#626262'
                        }}>✕
                        </button>
                    </form>
                    <div className={'flex justify-center m-auto'} style={{
                        color: '#ffd33d',
                        width: '145px',
                        borderBottom: '2px solid #ffd33d',
                    }}>
                        <p style={{lineHeight: '45px'}}>账户密码登录</p>
                    </div>
                    <div className={'input-box'}>
                        <input type="text" className={'zero-input'} placeholder={'请输入手机号'}
                               value={loginCon.username}
                               onChange={(e) => {
                                   setLoginCon({
                                       ...loginCon,
                                       username: e.target.value
                                   })
                               }}
                        />
                    </div>
                    <div className={'input-box'}>
                        <input type="password" className={'zero-input'} placeholder={'请输入密码'}
                               value={loginCon.password}
                               onChange={(e) => {
                                   setLoginCon({
                                       ...loginCon,
                                       password: e.target.value
                                   })
                               }}
                        />
                    </div>
                    <div className={'flex justify-center'}>
                        <button className={'login-sublime-btn'} onClick={() => {
                            post('/v1/login', loginCon).then(r => r.json()).then(r => {
                                if (r.code === 200) {
                                    Message.success('登录成功');
                                    localStorage.setItem('username', r.data.username)
                                    localStorage.setItem('token', r.data.token)
                                    setTimeout(() => {
                                        window.location.reload()
                                    }, 300)

                                } else {
                                    Message.error(r.msg)
                                }
                            }).catch(e => {
                                console.log(e)
                            })
                        }}>登录
                        </button>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image alt={'logo'} src={Logo} style={{
                            width: '95px',
                            height: '45px',
                            marginBottom: '20px'
                        }}></Image>
                    </div>
                    <div className={'flex justify-center'}>
                        <a href="/registered" className={'to-registered'}>立即注册</a>
                    </div>
                </div>
            </dialog>
        </>
    )
}