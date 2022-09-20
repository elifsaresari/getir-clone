export interface GetirBuyukProps {
    baseColor:string
    color: string
    className: string
    onClick: () => void
}

const GetirBuyuk: React.FC<GetirBuyukProps> = (props: GetirBuyukProps) => {
    const {color, className,baseColor,onClick} = props
    return <svg onClick={onClick}  viewBox="0 0 122 24" className={className} xmlns="http://www.w3.org/2000/svg" fill={baseColor}>
        <path
            d="M20.643 7.688c1.51 0 2.234.824 2.234 1.573 0 .886-.799 1.46-2.247 1.46-2.097 0-2.895-.3-2.895-.3 0-1.273.999-2.733 2.908-2.733zm5.379 1.56c0-2.733-2.246-4.53-5.516-4.53-3.108 0-6.365 2.234-6.365 7.214 0 3.807 2.297 6.615 6.278 6.615 2.234 0 4.693-1.273 5.317-2.147 0 0-.424-1.635-1.585-1.635-.611 0-1.061.237-1.56.449a4.95 4.95 0 0 1-1.934.399c-1.111 0-3.02-.449-3.02-2.833 0 0 .899.262 2.945.262 4.381-.012 5.441-1.86 5.441-3.794zm8.175 6.378c-1.51 0-2.296-1.273-2.434-1.822-.172-.694-.256-1.407-.25-2.122l.025-4.094h1.098c.886 0 1.573-.262 2.047-.774s.724-1.211.724-2.084h-3.869l-.025-1.822.012-1.398.037-.849a4.52 4.52 0 0 1 .062-.549c-1.173 0-2.072.25-2.683.749s-.924 1.323-.924 2.484l-.025 9.086c0 3.719 1.772 6.153 5.154 6.153 1.672 0 2.895-.899 2.895-2.259a2.71 2.71 0 0 0-.112-.886 7.45 7.45 0 0 1-1.735.187zm8.486.174c-.749 0-1.236-.549-1.236-1.435V7.813l.013-1.398.037-.849a5.21 5.21 0 0 1 .062-.549c-1.198 0-2.097.25-2.708.749s-.924 1.323-.924 2.484l-.025 6.677c0 2.384 1.535 3.707 3.469 3.632 1.223-.05 2.272-.624 2.272-1.909a5.34 5.34 0 0 0-.087-.961c-.285.075-.579.112-.874.112zM38.789 3.707a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949a1.64 1.64 0 0 0-.711-.686A1.66 1.66 0 0 0 39.85 0a1.87 1.87 0 0 0-.974.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm12.568 1.335a10.25 10.25 0 0 0-2.209.25 5.04 5.04 0 0 0-2.009.936 4.94 4.94 0 0 0-1.46 1.922c-.374.824-.562 1.872-.562 3.158v3.757c0 1.161.15 2.234.849 2.758.761.574 1.647.599 2.821.599-.025-.112-.037-.449-.062-.674a7.66 7.66 0 0 1-.038-.849l-.012-1.398v-4.818c0-1.136.187-2.596 2.184-2.758 1.123-.1 2.122-.524 2.122-1.747-.002-.387-.069-.771-.2-1.136h-1.423zM6.215 14.24c-1.535 0-2.708-.973-2.708-3.108 0-2.271 1.198-3.457 2.708-3.457 1.485 0 2.571.899 2.571 3.282 0 2.446-1.173 3.282-2.571 3.282zm.025-9.523C2.147 4.718 0 7.588 0 11.083c0 3.233 1.972 6.253 5.554 6.253 1.86 0 2.933-.786 3.207-1.023v1.622c0 1.86-.724 3.095-2.596 3.095-.899 0-1.573-.25-2.197-.537-.549-.262-.961-.574-1.51-.574-1.398 0-1.785 1.722-1.772 1.735C1.735 23.002 4.131 24 6.14 24c3.956 0 6.14-2.309 6.14-6.889v-5.354c-.012-4.181-1.86-7.039-6.041-7.039z"
            fill={color}/>
        <path
            d="M71.775 3.707a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949a1.64 1.64 0 0 0-.711-.686A1.66 1.66 0 0 0 72.836 0a1.87 1.87 0 0 0-.973.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.87 1.87 0 0 0 .237.936 1.97 1.97 0 0 0 .674.686zm5.28 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949-.161-.296-.41-.536-.711-.686A1.66 1.66 0 0 0 78.115 0a1.87 1.87 0 0 0-.973.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm20.954 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.723-1.036.174-.308.264-.657.262-1.011a1.95 1.95 0 0 0-.237-.949c-.161-.296-.41-.536-.712-.686A1.66 1.66 0 0 0 99.07 0a1.87 1.87 0 0 0-.974.287 1.95 1.95 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm5.267 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.723-1.036.173-.308.264-.657.262-1.011a1.94 1.94 0 0 0-.238-.949 1.64 1.64 0 0 0-.711-.686 1.66 1.66 0 0 0-.861-.237c-.345.004-.682.104-.974.287a1.95 1.95 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.85 1.85 0 0 0 .236.934 1.84 1.84 0 0 0 .675.688zM61.142 7.638c-1.66 0-2.908 1.635-2.908 3.694 0 3.033 1.298 4.281 3.257 4.281 1.635 0 2.821-1.572 2.821-3.694-.013-3.207-1.161-4.281-3.17-4.281zm0 10.896c-3.382 0-6.215-2.771-6.215-6.727V.612h1.123c1.273 0 2.159.736 2.159 2.271v3.844c.661-.949 1.785-2.009 3.569-2.009 3.357 0 5.928 2.746 5.928 6.627 0 3.981-2.546 7.189-6.565 7.189zm8.449-6.216V7.364c0-1.548.811-2.346 2.721-2.346h.587v7.413c0 2.246.948 3.183 2.296 3.183 1.498 0 2.671-.974 2.671-3.407V7.364c0-1.548.836-2.346 2.721-2.346h.611v7.513c0 3.844-2.571 5.991-5.828 5.991-3.844.012-5.778-2.097-5.778-6.203zm26.184 0V7.364c0-1.548.811-2.346 2.721-2.346h.587v7.413c0 2.246.948 3.183 2.296 3.183 1.498 0 2.671-.974 2.671-3.407V7.364c0-1.548.836-2.346 2.721-2.346h.611v7.513c0 3.844-2.571 5.991-5.828 5.991-3.844.012-5.779-2.097-5.779-6.203zM85.342 22.515c-1.223 0-2.296-.811-2.296-2.034v-.636l1.86-.125c1.198-.075 1.61-.562 2.321-2.421-1.735-2.621-4.231-9.173-4.68-12.281h1.735c.449-.007.887.144 1.236.427s.588.68.674 1.121c.462 2.546 1.448 5.292 2.646 7.613 1.073-2.471 2.271-6.465 2.571-9.148h1.423c1.048 0 1.548.462 1.548 1.548 0 1.398-2.296 7.413-2.908 8.836-2.446 5.753-3.744 7.101-6.128 7.101zm27.294-19.719v7.875c1.273-1.66 2.521-3.345 4.032-4.793.786-.736 1.572-.861 2.621-.861h1.884v.125c-.936.786-3.994 4.256-5.354 5.991l3.257 3.844c1.198 1.198 1.735 1.448 2.546 1.71-.337 1.048-.886 1.61-2.221 1.61a3.2 3.2 0 0 1-2.159-.911c-1.685-1.735-3.158-3.694-4.606-5.629v6.44l-1.048.025c-1.523.025-2.246-.786-2.246-2.321V.612h1.048c1.585 0 2.246.911 2.246 2.184z"
            fill={baseColor}/>
    </svg>
}

export default GetirBuyuk