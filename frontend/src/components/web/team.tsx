import LangConv from "@/components/web/langConv";

export default function Team({key, data}){
    return (
        <>
            <div className={"m-auto pb-32 max-w-[1140px]"}>
                <h1 className={"text-[40px] font-normal text-[#272727] uppercase relative tracking-[10px] mb-[30px]"}>
                    <LangConv en={data.title_en} tr={data.title_tr}/>
                </h1>

                <div className={"grid lg:grid-cols-6 grid-cols-1 w-full justify-items-center"}>
                    {
                        data.members.map((member, index) =>
                            (
                                <>
                                    <div className={index < 2 ? "col-span-3" : "col-span-2"}>
                                        <div
                                            style={{
                                                backgroundImage: `url(${process.env.BACKEND_URL + member.image})`,
                                                backgroundSize: 'cover'
                                            }}
                                            className={"w-[350px] h-[466px]"}></div>
                                        <div className={"relative overflow-hidden px-5 py-[30px] grid justify-items-center"}>
                                            <h6 className={"text-[17px] uppercase font-light tracking-[3px] text-[#272727] mb-[5px] text-center"}>
                                                {
                                                    member.name.split("<nl>").map((line, index) => (
                                                        <span key={index}>
                                                            {line}
                                                            <br />
                                                        </span>
                                                    ))
                                                }
                                            </h6>
                                            <p className={"text-base font-normal leading-[1.75em] text-[#777] mb-5 text-center"}>
                                                <LangConv en={member.position_en} tr={member.position_tr}/>
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}