import {Header} from "@/app/components/Header";
import Image from "next/image";
import bgMiniSphere from '@/app/assets/images/bg-mini-sphere.png'
import bgLargeSphere from '@/app/assets/images/bg-sphere-large.png'
import {Banner} from "@/app/components/Home/Banner";
import Mall1 from "@/app/assets/images/mall-1.png"
import Mall2 from "@/app/assets/images/mall-2.png"
import Mall3 from "@/app/assets/images/mall-3.png"
import HomeBottomLeft from "@/app/assets/images/home-bottom-left.png"
import HomeBottomRight from "@/app/assets/images/home-bottom-right.png"
import HomeQrCode from "@/app/assets/images/home-qr-code.png"
import Photo from "@/app/assets/images/home-photo.png"
import {Box} from "@/app/components/Box";
import {Footer} from "@/app/components/Footer";
import Product from "@/app/components/Home/Product";

import "@/app/assets/css/home.css"

export default function Home() {

    return (
        <main style={{minWidth: '1040px'}}>
            <Header router={'/'}></Header>
            {/*定位背景*/}
            <div className={'absolute'} style={{top: '125px', left: '0'}}>
                <Image alt={'bg-mini-sphere'} src={bgMiniSphere} style={{width: '191px', height: '316px'}}
                       priority></Image>
                {/*    左侧半个月球*/}
            </div>
            <div className={'absolute'} style={{right: '55px', top: '170px'}}>
                <Image alt={'bg-mini-sphere'} src={bgLargeSphere} style={{width: '809px', height: '809px'}}
                       priority></Image>
                {/*    右侧大月球*/}
            </div>
            {/*    ZBanner*/}
            <Banner></Banner>
            {/*    商城区域*/}
            <div style={{marginTop: '82px', position: 'sticky'}} className={'flex justify-center'}>
                <span className={'home-mall-font'}>商城</span>
            </div>
            <div style={{position: 'sticky', marginBottom: '100px'}}>
                <Box>
                    <div className={'flex justify-between'}>
                        <a style={{
                            width: '334px',
                            display: 'flex',
                            flexFlow: 'column',
                            alignItems: 'center',
                        }}
                           href={'/'}
                        >
                            <Image alt={'mall-1'} src={Mall1}></Image>
                            <span style={{marginTop: '20px', marginBottom: '10px'}}
                                  className={'mall-title'}>产品商城</span>
                            <span
                                className={'mall-description'}>儿童益智趣味商城，模型、玩具、学习用品、绘本图书应有尽有</span>
                        </a>
                        <a style={{
                            width: '334px',
                            display: 'flex',
                            flexFlow: 'column',
                            alignItems: 'center',
                        }}
                           href={'/'}
                        >
                            <Image alt={'mall-1'} src={Mall2}></Image>
                            <span style={{marginTop: '20px', marginBottom: '10px'}}
                                  className={'mall-title'}>课程商城</span>
                            <span className={'mall-description'}>专业团队打造适合儿童的百科系列课程</span>
                        </a>
                        <a style={{
                            width: '334px',
                            display: 'flex',
                            flexFlow: 'column',
                            alignItems: 'center',
                        }}
                           href={'/'}
                        >
                            <Image alt={'mall-1'} src={Mall3}></Image>
                            <span style={{marginTop: '20px', marginBottom: '10px'}}
                                  className={'mall-title'}>课程商城</span>
                            <span className={'mall-description'}>百科类生态模型素材库</span>
                        </a>
                    </div>
                </Box>
            </div>
            {/*    APP产品功能模块*/}
            <div style={{marginTop: '82px', position: 'sticky'}} className={'flex justify-center'}>
                <span className={'home-mall-font'}>APP产品功能模块</span>
            </div>
            <div className={'flex justify-center items-center'} style={{height: '500px', minWidth: '1040px'}}>
                <Product></Product>
            </div>
            <div className={'relative -bottom-32'}>
                <Box>
                    <div className={'flex justify-between'}>
                        <div>
                            <Image alt={"home-photo"} src={Photo} className={'no-drag'} style={{
                                width: '641px',
                                height: '266px'
                            }} priority></Image>
                            <Image priority alt={"home-bottom-left"}
                                   className={'no-drag'}
                                   src={HomeBottomLeft}
                                   style={{width: '454px', height: '276px', marginLeft: '95px'}}></Image>
                        </div>
                        <div className={'relative'}>
                            <div className={'ml-16'}>
                                <span className={'ml-5'}>少儿动物百科APP</span>
                                <Image alt={'qrCode'}
                                       className={'no-drag'}
                                       src={HomeQrCode} style={{
                                    width: '163px',
                                    height: '163px',
                                    marginTop: '15px'
                                }}></Image>
                            </div>
                            <div>
                                <Image priority alt={"home-bottom-left"}
                                       src={HomeBottomRight}
                                       className={'no-drag'}
                                       style={{width: '290px', height: '349px'}}
                                ></Image>
                            </div>
                            <span className={'relative select-none'}
                                  style={{
                                      top: '-340px',
                                      right: '-90px'
                                  }}
                            >扫描二维码下载</span>
                        </div>
                    </div>
                </Box>
            </div>
            <Footer></Footer>
        </main>
    )
}
