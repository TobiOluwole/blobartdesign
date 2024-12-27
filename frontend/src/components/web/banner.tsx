export default function Banner({image, isTop = false}){
    return (
        <>
            {isTop && (<style>
                {`
                    #pageNav a {
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
                        backgroundImage: `url(${process.env.BACKEND_URL + image})`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover'
                    }}
                    className={`w-full object-cover bg-black m-auto h-full`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white from-5% to-white/75"></div>
            </div>
        </>
    )
}