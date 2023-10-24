export const Box = ({children}) => {
    return (
        <div style={{width: '1040px', minWidth: '1040px'}} className={'m-auto h-full'}>
            {children}
        </div>
    )
}