'use client'
// 精彩活动
import {Header} from "@/app/components/Header";
import bgSmall from "@/app/assets/images/bg-mini-sphere.png"
import bgLarge from "@/app/assets/images/bg-sphere-large.png"
import Image from "next/image";
import {Box} from "@/app/components/Box";
import {Carousel} from "@arco-design/web-react";
import ActivityIcon1 from '@/app/assets/images/activity-icon1.png'
import {Footer} from "@/app/components/Footer";
import ActivityBanner1 from '@/app/assets/images/activity-banner1.png'
import '@/app/assets/css/activity.css'
import '@arco-design/web-react/dist/css/arco.css'
import {useEffect, useState} from "react";
import {get} from "@/app/utils/http";
import ActivityIcon from '@/app/assets/images/activity-icon.png'

export default function Activity() {
    const [info, setInfo] = useState({
        total: 0,
        currentPage: 1,
        pageSize: 5,
        totalPage: []
    })
    const [list, setList] = useState([])
    const getData = (pageNum, pageSize) => {
        get(`/v1/getArticles/${pageNum}/${pageSize}`).then(r => r.json()).then(r => {
            let tmpPage = []
            let totalPage = Math.ceil(r.total / pageSize)
            for (let i = 1; i <= totalPage; i++) {
                tmpPage.push(i)
            }
            setInfo({
                ...info,
                total: r.total,
                totalPage: tmpPage,
                currentPage: pageNum,
                pageSize: pageSize
            })
            let tmpList = []
            r.data.map(item => {
                const date = new Date(item.CreatedAt);
                const month = date.getMonth() + 1; // 月份从0开始，所以需要加1
                const day = date.getDate();

                const formattedDate = `${month}-${day}`;
                let tmpObj = {
                    key: item.ID,
                    date: formattedDate,
                    title: item.title,
                    introduce: item.introduce,
                }
                tmpList.push(tmpObj)
            })
            setList(tmpList)
        })
    }
    useEffect(() => {
        getData(1, 5)
    }, [])
    return (
        <div style={{height: '100%',minWidth:'1040px',backgroundColor:'#0d0d0d'}}>
            <Header router={"/activity"}></Header>
            <Image alt={'small'} src={bgSmall}
                   className={'no-drag select-none'}
                   style={{width: '156px', height: '316px', position: 'absolute', left: '0', top: '125px'}}
                   priority></Image>
            <Image alt={'small'} src={bgLarge}
                   className={'no-drag select-none'}
                   style={{
                       width: '809px',
                       height: '809px',
                       position: 'absolute',
                       right: '55px',
                       top: '160px',
                   }}
                   priority></Image>
            <Box>
                <div className={'activity-box'}>
                    {/*    第一个元素*/}
                    <div className={list.length !== 0 ? 'flex items-center justify-between' : 'hidden'}
                         style={{height: '205px'}}>
                        <p className={'activity-2023'}>2023</p>
                        <div className={'relative activity-line first'}>
                            <Image alt={'ActivityIcon1'} src={ActivityIcon1}
                                   style={{height: '38px', width: '115px'}}>
                            </Image>
                            <p className={'activity-new'}>NEW!</p>
                        </div>
                        <div style={{width: '687px', height: '160px'}}>
                            <Carousel
                                showArrow='hover'
                            >
                                <a href="https://baidu.com">
                                    <Image
                                        style={{height: '160px', width: '100%'}}
                                        alt={'ActivityBanner1'} src={ActivityBanner1}/>
                                </a>
                                <a href="https://baidu.com">
                                    <Image
                                        style={{height: '160px', width: '100%'}}
                                        alt={'ActivityBanner2'} src={ActivityBanner1}/>
                                </a>
                            </Carousel>
                        </div>
                    </div>

                    {/* 子元素*/}

                    {
                        list.map((item, index) => (
                            <div className={'flex justify-between'} key={item.key} style={{height: '130px'}}>
                                <p className={'activity-2023-null'}></p>
                                <div
                                    className={list.length - 1 === index ? 'relative activity-line last' : 'relative activity-line'}>
                                    <Image alt={'ActivityIcon1 no-drag'} src={ActivityIcon1}
                                           style={{height: '38px', width: '115px'}}>
                                    </Image>
                                    <p className={'activity-new-children'}>{item.date}</p>
                                </div>
                                <div style={{width: '687px', height: '120px'}} className={'activity-content'}>
                                    <div style={{width: '472px'}}>
                                        <p className={'title'}>{item.title}</p>
                                        <p className={'introduce'}>{item.introduce}</p>
                                    </div>
                                    <a href={`/activity/${item.key}`} className={'toBtn'}>
                                        查看详情
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                    <div style={{marginTop: '50px'}} className={'flex justify-center'}>
                        <button className={list.length === 0 ? 'hidden' : 'page-btn'}
                                onClick={() => {
                                    if (info.currentPage > 1) {
                                        getData(info.currentPage - 1, info.pageSize)
                                    }
                                }}
                        >
                            <Image alt={'ActivityIcon'} src={ActivityIcon}
                                   style={{width: '10px', height: '10px'}}></Image>
                        </button>
                        {
                            info.totalPage.map(item => (
                                <button className={info.currentPage === item ? 'page-btn page-btn-select' : 'page-btn'}
                                        key={item} onClick={() => getData(item, info.pageSize)}>{item}</button>
                            ))
                        }
                        <button className={list.length === 0 ? 'hidden' : 'page-btn'}
                                onClick={() => {
                                    if (info.currentPage < info.totalPage.length) {
                                        getData(info.currentPage + 1, info.pageSize)
                                    }
                                }}>
                            <Image alt={'ActivityIcon'} src={ActivityIcon}
                                   style={{width: '10px', height: '10px'}} className={'right'}
                            ></Image>
                        </button>
                    </div>
                </div>
            </Box>

            <div className={'mt-60'}>
                <Footer></Footer>
            </div>
        </div>
    )
}