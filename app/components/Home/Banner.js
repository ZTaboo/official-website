'use client'
import {Box} from "@/app/components/Box";
import Image from "next/image";
import Banner1 from "@/app/assets/images/banner-1.png";
import Banner2 from "@/app/assets/images/banner-2.png";
import Banner3 from "@/app/assets/images/banner-3.png";
import Banner4 from "@/app/assets/images/banner-4.png";
import BannerChildren1 from "@/app/assets/images/banner-children-1.png";
import BannerChildren2 from "@/app/assets/images/banner-children-2.png";
import BannerChildren3 from "@/app/assets/images/banner-children-3.png";
import BannerChildren4 from "@/app/assets/images/banner-children-4.png";
import BannerChildren5 from "@/app/assets/images/banner-children-5.png";
import RightIcon from '@/app/assets/images/right-icon.png'
import {useState} from "react";

export const Banner = () => {
    const [banner, setBanner] = useState(1)

    const bannerOneBtn = (index) => {
        setBanner(index)
    }
    return (
        <div className={'w-full select-none'} style={{marginTop: '50px', position: 'sticky'}}>
            <Box>
                <a href=""
                   className={'no-drag'}
                >
                    <Image alt={"1"}
                           className={'no-drag'}
                           src={banner === 1 ? Banner1 : banner === 2 ? Banner2 : banner === 3 ? Banner3 : banner === 4 ? Banner4 : Banner1}
                           priority
                           style={{width: '1040px', height: '400px'}}
                    ></Image>
                </a>
                <div style={{marginTop: '40px'}} className={'flex justify-between'}>
                    <div id={'oneBanner'} onClick={() => {
                        bannerOneBtn(1)
                    }}
                         className={banner === 1 ? 'banner-item cursor-pointer banner-item-select' : 'banner-item cursor-pointer'}>
                        <Image alt={"BannerChildren1"} src={BannerChildren1} priority
                               className={'no-drag'}
                               style={{
                                   height: '78px',
                                   width: '150px'
                               }}
                        ></Image>
                    </div>
                    <div
                        className={banner === 2 ? 'banner-item cursor-pointer banner-item-select' : 'banner-item cursor-pointer'}
                        onClick={() => {
                            bannerOneBtn(2)
                        }}>
                        <Image alt={"BannerChildren1"}
                               className={'no-drag'}
                               style={{
                                   height: '78px',
                                   width: '150px'
                               }}
                               src={BannerChildren2} priority></Image>
                    </div>
                    <div
                        className={banner === 3 ? 'banner-item cursor-pointer banner-item-select' : 'banner-item cursor-pointer'}
                        onClick={() => {
                            bannerOneBtn(3)
                        }}>
                        <Image alt={"BannerChildren1"}
                               className={'no-drag'}
                               style={{
                                   height: '78px',
                                   width: '150px'
                               }}
                               src={BannerChildren3} priority></Image>
                    </div>
                    <div
                        className={banner === 4 ? 'banner-item cursor-pointer banner-item-select' : 'banner-item cursor-pointer'}
                        onClick={() => {
                            bannerOneBtn(4)
                        }}>
                        <Image alt={"BannerChildren1"}
                               className={'no-drag'}
                               style={{
                                   height: '78px',
                                   width: '150px'
                               }}
                               src={BannerChildren4} priority></Image>
                    </div>
                    <div
                        className={banner === 5 ? 'banner-item cursor-pointer banner-item-select' : 'banner-item cursor-pointer'}
                        onClick={() => {
                            bannerOneBtn(5)
                        }}>
                        <Image alt={"BannerChildren1"}
                               className={'no-drag'}
                               style={{
                                   height: '78px',
                                   width: '150px'
                               }}
                               src={BannerChildren5} priority></Image>
                    </div>
                    <div className={'banner-item-more cursor-pointer flex justify-center items-center select-none'}>
                        <span>更多细节</span>
                        <Image alt={"rightIcon"} priority src={RightIcon} style={{width: '16px', height: '16px'}}
                               className={'ml-1'}/>
                    </div>
                </div>
            </Box>
        </div>
    )
}