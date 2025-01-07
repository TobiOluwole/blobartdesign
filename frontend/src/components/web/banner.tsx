export default function Banner({image, isTop = false, isImageForced = false}){
    return (
        <>
            {isTop && (<style>
                {`
                    #pageNav {
                        color: black;
                    }
                    
                    #pageNav a:first-child{
                        filter: invert(1);
                    }
                `}
            </style>)}
            <div className="h-[50vh] bg-white overflow-hidden relative">
                <div
                    style={{
                        backgroundImage: `url(${isImageForced ? image : process.env.BACKEND_URL + image})`,
                        backgroundAttachment: 'fixed center',
                        backgroundSize: 'cover'
                    }}
                    className={`w-full object-cover bg-black m-auto h-full`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white from-1% to-white/80"></div>
            </div>
        </>
    )
}