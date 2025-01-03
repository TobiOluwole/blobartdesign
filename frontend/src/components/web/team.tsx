export default function Team({key, data}){
    return (
        <>
            <div className={"max-w-[75%]  m-auto pb-32"}>
                <h1 className={"text-[40px] font-normal text-[#272727] uppercase relative tracking-[10px] mb-[30px]"}>{data.title_en}</h1>

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
                                            <h6 className={"text-[17px] uppercase font-light tracking-[3px] text-[#272727] mb-[5px]"}> {member.name}</h6>
                                            <p className={"text-base font-normal leading-[1.75em] text-[#777] mb-5;"}>{member.position_en}</p>
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