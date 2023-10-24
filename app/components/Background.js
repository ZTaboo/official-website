import Image from "next/image";
import LeftSphere from '../assets/images/bg-mini-sphere.png';
import RightSphere from '../assets/images/bg-sphere-large.png';


export const Background = ({children}) => {
    return (
        <div className={'relative'} style={{overflow: 'hidden', minWidth: '1040px'}}>
            <Image alt={'left'}
                   className={'absolute no-drag select-none'}
                   src={LeftSphere} style={{
                width: '156px',
                height: '316px',
                left: '0',
                top: '60px',
            }} priority></Image>
            <Image alt={'left'}
                   className={'absolute no-drag select-none'}
                   src={RightSphere} style={{
                width: '809px',
                height: '699px',
                right: '55px',
                top: '95px',
            }} priority></Image>
            <div className={'sticky'}>
                {children}
            </div>
        </div>
    )
}