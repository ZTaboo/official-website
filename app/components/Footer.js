import Image from "next/image";
import TaobaoIcon from "@/app/assets/images/taobao-icon.png"
import JingDongIcon from "@/app/assets/images/jingdong-icon.png"
import '@/app/assets/css/Footer.css'

export const Footer = ({bg}) => {
    return (
        <div className={'w-full'}
             style={{height: '155px', background: bg?'rgba(0, 0, 0, 0.5)':'#222', minWidth: '1040px', zIndex: '99',position:'sticky'}}>
            <div className={'flex justify-center items-center -ml-40'} style={{height: '106px'}}>
                <div className={'flex'}>
                    <div className={'text-right'}>
                        <p>云域未来网络科技有限公司</p>
                        <p>地址：新疆乌鲁木齐市头屯河区喀纳斯湖北路新疆软件园A座1309室</p>
                        <p>用户服务协议 | 隐私政策</p>

                    </div>
                    <div style={{border: '1px solid #646464', marginLeft: '20px', marginRight: '20px'}}/>
                    <div>
                        <p>官网商城</p>
                        <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: '8px',
                            height: '16px',
                            width: '140px',
                            marginTop: '4px',
                            marginBottom: '4px',
                        }}
                             className={'flex items-center justify-center'}
                        >
                            <div className={'flex items-center select-none cursor-pointer'}>
                                <Image alt={'TaobaoIcon'} src={TaobaoIcon}
                                       style={{width: '13px', height: '10px'}}/>
                                <span className={'icon-font ml-2'}>域次元淘宝店铺</span>
                            </div>
                        </div>
                        <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: '8px',
                            height: '16px',
                            width: '140px',
                            marginTop: '4px',
                            marginBottom: '4px',
                        }}
                             className={'flex items-center justify-center'}
                        >
                            <div className={'flex items-center select-none cursor-pointer'}>
                                <Image alt={'TaobaoIcon'} src={JingDongIcon}
                                       style={{width: '20px', height: '8px'}}/>
                                <span className={'icon-font ml-2'}>域次元京东店铺</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{
                height: '2px',
                background: '#585858',
            }}/>
            <div className={'flex justify-center items-center mt-2.5'}>
                <span>
                    cpoyright ©2022 版权所有
                </span>
            </div>
        </div>
    )
}