import '@/app/assets/css/registered.css'
import {Box} from "@/app/components/Box";
import {Footer} from "@/app/components/Footer";
import RegisteredLogo from '@/app/assets/images/registered-logo.png'
import Image from "next/image";
import {RegisteredCon} from "@/app/components/RegisteredCon";

export default function Registered() {
    return (
        <div className={'registered-box'}>
            <Box>
                <div className={'h-full flex justify-center z-20 sticky'}>
                    <div className={'children-box'}>
                        <div className={'flex justify-center'}>
                            <Image alt={'RegisteredLogo'} src={RegisteredLogo} className={'logo no-drag'}></Image>
                        </div>
                        <RegisteredCon></RegisteredCon>
                    </div>
                </div>
            </Box>
            <div className={'absolute bottom-0 left-0 w-full z-10'}>
                <Footer bg={true}></Footer>
            </div>
        </div>
    )
}