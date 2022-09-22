export interface GetirYemekProps {
    baseColor: string
    color: string
    className: string
    onClick: () => void
}

const GetirYemek: React.FC<GetirYemekProps>=(props: GetirYemekProps) => {

    const {color, className, onClick, baseColor} = props

    return <svg onClick={onClick}  viewBox="0 0 131 24" className={className}  xmlns="http://www.w3.org/2000/svg" fill={color}>
        <path
            d="M26.038 9.24c0-2.74-2.237-4.527-5.52-4.527-3.111 0-6.367 2.237-6.367 7.215 0 3.799 2.303 6.606 6.275 6.606 2.237 0 4.699-1.271 5.322-2.145 0 0-.424-1.642-1.588-1.642-.609 0-1.059.238-1.562.437-.516.212-1.138.41-1.933.41-1.112 0-3.018-.437-3.018-2.833 0 0 .9.265 2.939.265 4.395.013 5.454-1.84 5.454-3.786zM20.65 7.678c1.509 0 2.237.821 2.237 1.575 0 .887-.794 1.456-2.237 1.456-2.105 0-2.899-.291-2.899-.305-.013-1.258.993-2.727 2.899-2.727zm13.556 7.943c-1.509 0-2.29-1.271-2.436-1.827-.146-.543-.238-1.324-.238-2.131l.026-4.104h1.099c.887 0 1.562-.265 2.052-.781.477-.516.728-1.218.728-2.078h-3.865l-.026-1.814.013-1.403.04-.847.053-.543c-1.178 0-2.065.252-2.687.755s-.927 1.324-.927 2.489l-.026 9.081c0 3.72 1.774 6.142 5.163 6.142 1.668 0 2.886-.9 2.886-2.264 0-.477-.066-.728-.106-.887-.305.08-.847.212-1.747.212zm8.486.171c-.755 0-1.231-.543-1.231-1.443V7.797l.013-1.403.04-.847.053-.543c-1.191 0-2.092.252-2.714.755s-.927 1.324-.927 2.489L37.9 14.92c0 2.383 1.535 3.707 3.468 3.627 1.218-.053 2.277-.622 2.277-1.906 0-.529-.093-.966-.093-.966-.265.066-.463.119-.861.119zM51.363 5.03c-.728 0-1.469.079-2.211.252-.741.159-1.416.477-2.012.94s-1.086 1.099-1.456 1.919-.569 1.867-.569 3.164v3.746c0 1.152.146 2.224.847 2.754.755.582 1.642.609 2.82.609l-.053-.675-.04-.847-.013-1.403v-4.805c0-1.138.185-2.595 2.184-2.767 1.125-.093 2.118-.53 2.118-1.747 0-.278-.066-.821-.212-1.138h-1.403zM6.248 4.713C2.145 4.713 0 7.585 0 11.08c0 3.23 1.972 6.262 5.56 6.262 1.853 0 2.939-.794 3.204-1.019v1.615c0 1.853-.728 3.098-2.595 3.098-.9 0-1.575-.252-2.184-.543-.556-.265-.966-.569-1.509-.569-1.39 0-1.774 1.721-1.774 1.734C1.747 23.007 4.143 24 6.156 24c3.958 0 6.142-2.303 6.142-6.884v-5.361c-.013-4.183-1.867-7.043-6.05-7.043zm-.013 9.518c-1.536 0-2.714-.966-2.714-3.098 0-2.277 1.205-3.455 2.714-3.455 1.483 0 2.568.9 2.568 3.283 0 2.436-1.178 3.27-2.568 3.27zM38.8 3.693a2.04 2.04 0 0 0 .887.212c.728 0 1.297-.344 1.721-1.033a2.08 2.08 0 0 0 .265-1.006 2.03 2.03 0 0 0-.238-.953 1.61 1.61 0 0 0-.715-.675A1.69 1.69 0 0 0 39.859 0c-.331 0-.662.093-.98.278s-.556.45-.741.781c-.172.291-.265.635-.265 1.006a1.86 1.86 0 0 0 .238.927c.159.291.397.53.688.702z"
            fill={color}/>
        <g fill={baseColor}>
            <path
                d="M81.942 9.429c0-2.767-2.264-4.567-5.56-4.567-3.137 0-6.42 2.25-6.42 7.281 0 3.839 2.317 6.672 6.328 6.672 2.264 0 4.739-1.284 5.361-2.171 0 0-.424-1.655-1.602-1.655-.622 0-1.072.238-1.575.45-.529.212-1.152.41-1.959.41-1.125 0-3.045-.45-3.045-2.859 0 0 .9.265 2.965.265 4.435 0 5.507-1.88 5.507-3.826zm-5.427-1.575c1.522 0 2.25.834 2.25 1.589 0 .9-.807 1.469-2.264 1.469-2.118 0-2.925-.291-2.925-.304 0-1.284 1.006-2.753 2.939-2.753zm-9.214.08a25.31 25.31 0 0 1-.953 2.992l-1.165 2.793-1.099 2.33-.781 1.575-1.456 2.714c-.437.728-.86 1.297-1.258 1.734-.41.437-.821.741-1.231.94-.41.185-.86.291-1.337.291-.516 0-.94-.119-1.244-.357-.318-.238-.477-.503-.477-.781v-.847h1.072c.265 0 .516-.026.741-.093.225-.053.463-.185.715-.397s.516-.53.807-.953.622-1.006 1.006-1.734c-.516-.794-1.033-1.708-1.562-2.714l-1.483-3.164L56.354 8.9a25.52 25.52 0 0 1-.847-3.362h1.297c.463 0 .794.146.993.437a3.13 3.13 0 0 1 .41.913l.582 2.158.821 2.356 1.019 2.37c.371.781.768 1.522 1.191 2.197l1.125-2.264 1.138-2.793.953-2.873c.278-.953.477-1.787.583-2.528h.9c.305 0 .556.066.755.212s.305.41.305.808c0 .132-.04.357-.106.662l-.172.741z"/>
            <path
                d="M58.021 23.951c-.675 0-1.218-.172-1.641-.49-.596-.45-.728-.94-.728-1.284v-1.483h1.708a2.13 2.13 0 0 0 .556-.066l.04-.013c.093-.026.238-.079.45-.265.199-.159.424-.437.688-.821a15.54 15.54 0 0 0 .794-1.337l-1.39-2.449c-.516-.966-1.006-2.025-1.509-3.217l-1.271-3.415c-.371-1.112-.662-2.277-.861-3.442l-.132-.755h2.065c.86 0 1.297.384 1.522.715l.013.013c.238.371.397.741.49 1.099v.013c.132.622.331 1.337.569 2.105l.807 2.317 1.006 2.33.583 1.152.569-1.205 1.125-2.753.94-2.833c.278-.966.463-1.774.569-2.436l.079-.556h1.456c.45 0 .834.119 1.138.331.371.278.569.715.569 1.324 0 .172-.04.41-.119.794l-.185.768a25.57 25.57 0 0 1-.98 3.058l-1.178 2.833-.119.252-.993 2.105-.265.516-.516 1.046-1.483 2.78c-.437.715-.887 1.337-1.337 1.84-.45.49-.927.847-1.43 1.085l-.013.013c-.49.212-1.033.331-1.589.331zm-1.072-1.986v.212c0 .053.053.146.225.265.199.159.49.225.861.225s.728-.079 1.072-.225c.344-.172.702-.437 1.033-.794.384-.424.781-.98 1.178-1.628.463-.768.94-1.668 1.43-2.661l.53-1.072.252-.516.98-2.065.119-.238 1.152-2.753c.384-.98.688-1.933.927-2.912v-.026a9.71 9.71 0 0 0 .159-.702l.093-.53c0-.225-.053-.291-.053-.291-.079-.053-.199-.079-.371-.079h-.357a20.38 20.38 0 0 1-.516 2.065l-.966 2.912-1.152 2.833L62.39 16.3l-.529.953-.582-.913c-.424-.662-.834-1.43-1.231-2.264l-1.032-2.409-.834-2.396-.596-2.197c-.053-.225-.159-.45-.318-.702-.026-.04-.119-.146-.463-.146h-.516l.675 2.528a34.31 34.31 0 0 0 1.231 3.309l1.456 3.111 1.536 2.661.199.318-.172.331-1.046 1.8c-.344.49-.636.834-.927 1.086-.331.278-.635.45-.966.529-.265.079-.569.119-.9.119h-.424v-.053zm44.121-3.666c-.41 0-.754-.132-1.019-.41s-.397-.662-.397-1.165v-5.586c0-1.324-.238-2.277-.715-2.846s-1.138-.847-2.012-.847c-1.046 0-1.8.278-2.264.847s-.702 1.496-.702 2.767V18.3h-.728c-.516 0-.887-.132-1.112-.41s-.331-.662-.331-1.165v-5.586c0-1.152-.238-2.052-.728-2.714-.49-.649-1.191-.98-2.105-.98-.953 0-1.655.291-2.131.874s-.715 1.522-.715 2.82v7.175h-.688c-.463 0-.821-.132-1.085-.384-.265-.265-.397-.662-.397-1.191v-5.864c0-.728.119-1.416.344-2.078s.556-1.244.993-1.734c.437-.503.98-.887 1.615-1.178.649-.291 1.377-.437 2.197-.437.953 0 1.734.199 2.383.596.635.397 1.152.966 1.549 1.708A4.79 4.79 0 0 1 94.69 6.08c.702-.424 1.469-.622 2.303-.622 1.575 0 2.78.463 3.601 1.403s1.231 2.356 1.231 4.249v7.241h-.755v-.053z"/>
            <path
                d="M102.433 18.961h-1.972v-.132a1.76 1.76 0 0 1-.847-.516c-.371-.397-.569-.927-.569-1.588v-5.586c0-1.165-.199-2.012-.569-2.462-.357-.424-.847-.635-1.549-.635-.86 0-1.456.199-1.787.622-.371.45-.569 1.284-.569 2.383v7.85h-1.337c-.715 0-1.244-.212-1.588-.635-.318-.384-.463-.887-.463-1.549v-5.586c0-1.033-.199-1.8-.609-2.356-.371-.49-.9-.728-1.615-.728-.755 0-1.297.212-1.668.649-.384.463-.583 1.284-.583 2.436v7.784h-1.284c-.609 0-1.112-.185-1.509-.556l-.013-.013c-.384-.384-.569-.927-.569-1.615v-5.864a7.43 7.43 0 0 1 .371-2.277c.251-.741.622-1.403 1.112-1.946.477-.543 1.086-.993 1.814-1.324s1.549-.49 2.449-.49c1.059 0 1.946.225 2.701.688a4.94 4.94 0 0 1 1.258 1.152 5.37 5.37 0 0 1 1.324-1.112c.781-.477 1.655-.715 2.621-.715 1.761 0 3.124.543 4.05 1.615.914 1.046 1.377 2.608 1.377 4.646v7.863h.026zm-17.672-1.456c.159.146.371.212.662.212h.079V11.15c0-1.456.278-2.502.847-3.203.596-.728 1.469-1.099 2.595-1.099 1.112 0 1.972.41 2.595 1.218.569.781.847 1.774.847 3.084v5.586c0 .357.066.622.199.781.119.159.41.185.635.185h.119V11.07c0-1.403.278-2.462.834-3.151.582-.715 1.496-1.072 2.74-1.072 1.046 0 1.88.357 2.475 1.059.582.688.86 1.747.86 3.23v5.586c0 .344.08.582.225.741a.75.75 0 0 0 .583.225h.145v-6.579c0-1.734-.357-3.031-1.085-3.852-.702-.808-1.734-1.191-3.151-1.191-.741 0-1.39.172-1.986.53-.609.371-1.099.86-1.456 1.456l-.543.927-.503-.94c-.344-.649-.794-1.138-1.337-1.483-.556-.344-1.231-.503-2.065-.503-.741 0-1.377.119-1.946.384-.583.265-1.033.596-1.403 1.019a4.27 4.27 0 0 0-.874 1.536 5.72 5.72 0 0 0-.318 1.88v5.864c.013.357.093.622.225.768zm31.453-8.076c0-2.767-2.263-4.567-5.559-4.567-3.138 0-6.421 2.25-6.421 7.281 0 3.839 2.317 6.672 6.328 6.672 2.264 0 4.739-1.284 5.361-2.171 0 0-.423-1.655-1.602-1.655-.622 0-1.072.238-1.575.45-.529.212-1.152.41-1.959.41-1.125 0-3.045-.45-3.045-2.859 0 0 .9.265 2.966.265 4.447 0 5.506-1.88 5.506-3.826zm-5.427-1.575c1.522 0 2.25.834 2.25 1.589 0 .9-.807 1.469-2.263 1.469-2.118 0-2.926-.291-2.926-.305.013-1.284 1.019-2.753 2.939-2.753zm10.735-4.782v7.874c1.273-1.66 2.52-3.344 4.03-4.792.787-.736 1.573-.861 2.621-.861h1.884v.125c-.936.786-3.993 4.255-5.353 5.99l3.257 3.843c1.198 1.198 1.734 1.448 2.545 1.71-.337 1.048-.886 1.61-2.221 1.61-.736 0-1.585-.337-2.159-.911-1.684-1.735-3.157-3.694-4.604-5.628v6.439l-1.048.025c-1.523.025-2.247-.786-2.247-2.321V.888h1.049c1.584 0 2.246.911 2.246 2.184z"/>
        </g>


    </svg>
}

export default GetirYemek