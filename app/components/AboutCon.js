'use client'
import {useState} from "react";
import Image from "next/image";
import AboutBg1 from '@/app/assets/images/about-bg1.png'
import AboutBg2 from '@/app/assets/images/about-bg2.png'
import AboutBg3 from '@/app/assets/images/about-bg3.png'
import AboutBg5 from '@/app/assets/images/about-bg5.png'
import Icon1 from '@/app/assets/images/about-icon1.png'
import Icon2 from '@/app/assets/images/about-icon2.png'
import Icon3 from '@/app/assets/images/about-icon3.png'
import Zhishichanquan1 from '@/app/assets/images/zhishichanquan1.png'
import '@/app/assets/css/about.css'

export const AboutCon = () => {
    const [selectIndex, setSelectIndex] = useState(1)
    return (
        <div className={'w-full h-full flex justify-between'}>
            <div className={'about-con-left-menu'}>
                <div className={selectIndex === 1 ? 'left-menu-item left-menu-item-select' : 'left-menu-item'}
                     onClick={() => setSelectIndex(1)}
                >
                    <span>公司简介</span>
                </div>
                <div className={selectIndex === 2 ? 'left-menu-item left-menu-item-select' : 'left-menu-item'}
                     onClick={() => setSelectIndex(2)}
                >
                    <span>企业文化</span>
                </div>
                <div className={selectIndex === 3 ? 'left-menu-item left-menu-item-select' : 'left-menu-item'}
                     onClick={() => setSelectIndex(3)}
                >
                    <span>企业荣誉</span>
                </div>
                <div className={selectIndex === 4 ? 'left-menu-item left-menu-item-select' : 'left-menu-item'}
                     onClick={() => setSelectIndex(4)}
                >
                    <span>知识产权</span>
                </div>
                <div className={selectIndex === 5 ? 'left-menu-item left-menu-item-select' : 'left-menu-item'}
                     onClick={() => setSelectIndex(5)}
                >
                    <span>联系我们</span>
                </div>
            </div>
            {
                selectIndex === 1 ?
                    <div className={'right-content h-full relative'}>
                        <div className={'z-10 sticky'}>
                            <p className={'title'}>
                                公司简介
                            </p>
                            <p className={'content'}>
                                新疆云域未来网络科技有限公司是一家致力于研发生产，适用于青少年群体创意手工模型的创新型科技企业，本公司所研产品将智力开发、手工创意、机械原理、电路原理及编程控制融入产品内，并对每款系列都融入不同的IP形象。公司以创新求生存、以品质谋发展为创立理念。以模型为载体呈现自然美、文化美、机械美的使命。以创新的产品、前沿的知识、文化的深入，有效提升青少年科技创新、自然创意的能力为定位。愿景成为全国青少年一站式自然科普模型领域领跑者。发展情况：
                            </p>
                            <p className={'content'}>
                                现阶段公司正在研发打造企业爆款系列产品，APP以开发完毕，正在优化企业文化:
                            </p>
                            <p className={'content'}>
                                愿景：做具有中国文化特色的科普科技模型
                            </p>
                            <p className={'content'}>
                                理念：自然融入科技，创新改变未来 使命：以模型为载体呈现自然美、文化美、机械美
                            </p>
                            <p className={'content'}>
                                定位：通过创新的产品、前沿的知识、文化的深入，有效提升青少年科技创新、自然创意的能力!
                            </p>
                            <p className={'content'}>主要业务：</p>
                            <p className={'content'}>公司两大主营业务机械昆虫产品以及科技及科普类课程。</p>
                        </div>
                        <Image alt={'AboutBg1'} src={AboutBg1} className={'about-bg'}></Image>
                    </div>
                    : selectIndex === 2 ?
                        <div className={'right-content h-full relative'}>
                            <div className={'z-10 sticky'}>
                                <p className={'title'}>
                                    企业文化
                                </p>
                                <p className={'content'}>
                                    愿景：做具有中国文化特色的科普科技模型</p>
                                <p className={'content'}>
                                    理念：自然融入科技，创新改变木来
                                </p>
                                <p className={'content'}>
                                    使命：以模型为载体呈现自然美、文化美、机械美
                                </p>
                                <p className={'content'}>
                                    定位：通过创新的产品、前沿的知识、文化的深入，有效提升青少年科技创新、自然创意的能力!
                                </p>
                            </div>
                            <Image alt={'AboutBg1'} src={AboutBg2} className={'about-bg'}></Image>
                        </div>
                        : selectIndex === 3 ?
                            <div className={'right-content h-full relative'}>
                                <div className={'z-10 sticky'}>
                                    <p className={'title'}>
                                        企业荣誉
                                    </p>
                                    <p className={'content'}>
                                        2011年10月，京东荣获Business
                                        Insider评选出的全球100家最有价值新创网络公司，位居榜单第四名。2011年9月，京东成为首家荣膺《财富》中国最佳雇主的网络零售企业。2011年3月，在“2011易观EnfoCommerce
                                        Award-电子商务之星”评选活动，京东商城荣获“2011易观EnfoCommerce
                                        Award电子商务运营之星——垂直电子商务运营平台”奖，京东董事局主席兼首席执行官刘强东获得了“2011易观EnfoCommerce
                                        Award最具影响力电子商务领军者——用户最认可商业领军人物”奖。2011年2月，京东荣获北京市商务委员会颁发的“2010北京市促销费突出贡献单位奖”。</p>
                                </div>
                                <Image alt={'AboutBg1'} src={AboutBg3} className={'about-bg'}></Image>
                            </div>
                            : selectIndex === 4 ?
                                <div className={'right-content h-full relative'}>
                                    <div className={'z-10 sticky'}>
                                        <p className={'title'}>
                                            知识产权
                                        </p>
                                        <div className={'grid grid-cols-3 gap-5'}>
                                            <div className={'flex items-center'} style={{flexFlow: 'column'}}>
                                                <Image alt={'1'} src={Zhishichanquan1} className={'zhishichanquan'}></Image>
                                                <p className={'mt-3'}>知识产权名称介绍</p>
                                            </div>
                                            <div className={'flex items-center'} style={{flexFlow: 'column'}}>
                                                <Image alt={'1'} src={Zhishichanquan1} className={'zhishichanquan'}></Image>
                                                <p className={'mt-3'}>知识产权名称介绍</p>
                                            </div>
                                            <div className={'flex items-center'} style={{flexFlow: 'column'}}>
                                                <Image alt={'1'} src={Zhishichanquan1} className={'zhishichanquan'}></Image>
                                                <p className={'mt-3'}>知识产权名称介绍</p>
                                            </div>
                                            <div className={'flex items-center'} style={{flexFlow: 'column'}}>
                                                <Image alt={'1'} src={Zhishichanquan1} className={'zhishichanquan'}></Image>
                                                <p className={'mt-3'}>知识产权名称介绍</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : selectIndex === 5 ?
                                    <div className={'right-content h-full relative'}>
                                        <div className={'z-10 sticky'}>
                                            <p className={'title'}>
                                                联系我们
                                            </p>
                                            <div className={'content flex items-center'}>
                                                <Image alt={'icon1'} src={Icon1} className={'icon'}></Image>
                                                <p className={'ml-2'}>新疆维吾尔自治区乌鲁木齐市经济开发区206号</p>
                                            </div>
                                            <div className={'content flex items-center'}>
                                                <Image alt={'icon1'} src={Icon2} className={'icon'}></Image>
                                                <p className={'ml-2'}>0991-8888888</p>
                                            </div>
                                            <div className={'content flex items-center'}>
                                                <Image alt={'icon1'} src={Icon3} className={'icon'}></Image>
                                                <p className={'ml-2'}>666@baike.com</p>
                                            </div>
                                        </div>
                                        <Image alt={'AboutBg1'} src={AboutBg5} className={'about-bg'}></Image>
                                    </div>
                                    : null
            }
        </div>
    )
}