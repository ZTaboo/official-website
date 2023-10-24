// 商务合作
import {ZBanner} from "@/app/components/ZBanner";
import {Background} from "@/app/components/Background";
import {Footer} from "@/app/components/Footer";
import {Box} from "@/app/components/Box";
import Image from "next/image";
import LeftBg from "@/app/assets/images/business-left.png"
import RightBg from "@/app/assets/images/business-right.png"
import {Header} from "@/app/components/Header";

export default function () {
    return (
        <div style={{minWidth: '1040px', backgroundColor: '#0D0D0D'}}>
            <Header router={'/business'}></Header>
            <ZBanner></ZBanner>
            <Background>
                <Box>
                    <div className={'flex items-center h-full justify-between'} style={{height: '640px'}}>
                        <div style={{
                            position: 'relative',
                            width: '510px',
                            height: '400px',
                        }}>
                            <Image alt={"LeftBg"} src={LeftBg} priority className={'select-none no-drag'}></Image>
                            <span style={{
                                position: 'absolute',
                                right: '60px',
                                top: '130px',
                                fontSize: '28px',
                                fontWeight: '500',
                            }}>市场合作</span>
                            <div style={{
                                fontSize: '14px',
                                lineHeight: '44px',
                                position: 'absolute',
                                right: '30px',
                                top: '210px'
                            }}>
                                <p>联系人：杨先生</p>
                                <p>联系电话：0991-8888888</p>
                                <p>联系邮箱：888888888@baike.com</p>
                            </div>
                        </div>
                        <div style={{
                            position: 'relative',
                            width: '510px',
                            height: '400px',
                        }}>
                            <Image alt={"LeftBg"} src={RightBg} priority className={'select-none no-drag'}></Image>
                            <span style={{
                                position: 'absolute',
                                right: '60px',
                                top: '130px',
                                fontSize: '28px',
                                fontWeight: '500',
                            }}>内容合作</span>
                            <div style={{
                                fontSize: '14px',
                                lineHeight: '44px',
                                position: 'absolute',
                                right: '30px',
                                top: '210px'
                            }}>
                                <p>联系人：杨先生</p>
                                <p>联系电话：0991-8888888</p>
                                <p>联系邮箱：888888888@baike.com</p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Background>
            <Footer></Footer>
        </div>

    )
}