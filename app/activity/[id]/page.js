// 'use client'
import {get} from "@/app/utils/http";
import {Header} from "@/app/components/Header";
import {Box} from "@/app/components/Box";
import '@/app/assets/css/activity.css'
import {Footer} from "@/app/components/Footer";


export default async function Content({params}) {
    let resData = await get(`/v1/getArticle/${params.id}`).then(r => r.json())
    const dateTime = new Date(resData.data.CreatedAt);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // 月份从0开始，需要加1
    const day = dateTime.getDate();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();
    resData.data.year = `${year}-${month}-${day}`;
    resData.data.date = `${hours}:${minutes}:${seconds}`
    return (
        <div style={{minWidth: '1040px',backgroundColor:'#0D0D0D'}}>
            <Header router={'/activity'}></Header>
            <Box>
                <div style={{marginTop: '88px', minWidth: '1040px'}}>
                    <div style={{
                        width: '940px',
                        margin: 'auto',
                        userSelect: 'none'
                    }}>
                        <div className={'flex top-font'}>
                            精彩活动 &gt; 详情
                        </div>
                        <div className={'content'}>
                            <div className={'title'}>
                                {resData.data.title}
                            </div>
                            <div style={{marginBottom: '20px'}}>
                                <span style={{
                                    fontSize: '14px',
                                    color: '#ACACAC'
                                }}>{resData.data.year}</span>
                                <span style={{
                                    marginLeft: '40px',
                                    fontSize: '14px',
                                    color: '#ACACAC'
                                }}>{resData.data.date}</span>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: resData.data.content}}>

                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <div style={{marginTop: '100px'}}>
                <Footer></Footer>
            </div>
        </div>
    )
}
