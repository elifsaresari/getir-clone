export interface FacebookProps {
    className: string
}

const Facebook: React.FC<FacebookProps> = (props: FacebookProps) => {

    const { className} = props

return (<svg  className={className} width="20px"height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g>
        <path fill='none'  d="M0 0h24v24H0z"/>
        <path
            d=" M32 16.097c0-8.838-7.163-16-16-16s-16 7.162-16 16c0 7.987 5.85 14.606 13.5 15.806v-11.181h-4.063v-4.625h4.063v-3.525c0-4.009 2.387-6.225 6.044-6.225 1.75 0 3.581 0.313 3.581 0.313v3.938h-2.019c-1.987 0-2.606 1.234-2.606 2.5v3h4.437l-0.709 4.625h-3.728v11.181c7.65-1.2 13.5-7.819 13.5-15.806z"/>
    </g>
</svg>)
}
export default Facebook
