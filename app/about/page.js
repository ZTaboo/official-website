import {Header} from "@/app/components/Header";
import {ZBanner} from "@/app/components/ZBanner";
import {Footer} from "@/app/components/Footer";
import {Box} from "@/app/components/Box";
import '@/app/assets/css/about.css'
import {AboutCon} from "@/app/components/AboutCon";
import {Background} from "@/app/components/Background";

export default function About() {
    return (
        <div style={{minWidth:'1040px',backgroundColor:'#0D0D0D'}}>
            <Header router={'/about'}></Header>
            <ZBanner></ZBanner>
            <Background>
                <div style={{
                    marginTop: '80px',
                }}>
                    <Box>
                        <div className={'flex'} style={{
                            lineHeight: '37px',
                            marginBottom: '12px',
                            userSelect: 'none'
                        }}>
                            <p className={'w-full flex justify-center about-title-us -mr-1'}
                               style={{
                                   borderLeft: '1px solid white'
                               }}
                            >ABOUT US</p>
                            <p className={'w-full flex justify-center about-title'}>关于我们</p>
                            <p className={'w-full flex justify-center about-title-us -ml-1'} style={{
                                borderRight: '1px solid white'
                            }}>ABOUT US</p>
                        </div>
                        <div style={{minHeight: '360px', marginBottom: '109px', maxHeight: '100%'}}>
                            <AboutCon></AboutCon>
                        </div>
                    </Box>
                </div>
            </Background>

            <Footer></Footer>
        </div>
    )
}