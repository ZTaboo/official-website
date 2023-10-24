'use client'
import '@/app/assets/css/registered.css'
import {useState} from "react";
import {post} from "@/app/utils/http";
import {Message} from "@arco-design/web-react";
import '@arco-design/web-react/dist/css/arco.css'

export const RegisteredCon = () => {
    const [content, setContent] = useState({
        phone: '',
        code: '',
        password: '',
        passwordAgain: ''
    })
    return (
        <div>
            <div className={'input-box'}>
                <input type="text" className={'zero-input'} value={content.phone} onChange={e => {
                    setContent({
                        ...content,
                        phone: e.target.value
                    })
                }} placeholder={'请输入手机号'}/>
            </div>
            <div className={'input-box'}>
                <input type="text" className={'zero-input'} value={content.code} onChange={e => {
                    setContent({
                        ...content,
                        code: e.target.value
                    })
                }} placeholder={'请输入验证码'}/>
                <button className={'get-code-btn'} onClick={() => {
                    post('/v1/send_message', {
                        phone: content.phone
                    }).then(r => r.json()).then(r => {
                        if (r.code === 200) {
                            Message.success('发送成功!')
                        } else {
                            Message.error(`${r.msg}`)
                        }
                    })
                }}>获取验证码
                </button>
            </div>
            <div className={'input-box'}>
                <input type="password" className={'zero-input'} value={content.password}
                       onChange={
                           e => {
                               setContent({
                                   ...content,
                                   password: e.target.value
                               })
                           }
                       }
                       placeholder={'请输入密码'}/>
            </div>
            <div className={'input-box'}>
                <input type="password" className={'zero-input'} placeholder={'请确认密码'} value={content.passwordAgain}
                       onChange={e => {
                           setContent({
                               ...content,
                               passwordAgain: e.target.value
                           })
                       }}/>
            </div>
            <button className={'registered-btn w-full'} onClick={() => {
                content.password !== content.passwordAgain ? Message.error('两次密码不一致!') :
                    post('/v1/register', {
                        phone: content.phone,
                        code: content.code,
                        password: content.password
                    }).then(r => r.json()).then(r => {
                        if (r.code !== 200) {
                            Message.error(`注册失败:${r.msg}`)
                        } else {
                            Message.success('注册成功!')
                            // 跳转到首页
                            window.location.href = '/';
                        }
                    })

            }}>
                注册
            </button>
        </div>
    )
}