import Image from "next/image";
import Banner from "@/app/assets/images/business-top.png";

export const ZBanner = () => {
    return (
        <div style={{minWidth: '1040px'}}>
            <div style={{height: '366px', overflow: 'hidden'}}>
                <Image alt={'ZBanner'} src={Banner} style={{height: 'auto', width: '100%'}} priority
                       className={'no-drag select-none'}></Image>
            </div>
        </div>
    )
}