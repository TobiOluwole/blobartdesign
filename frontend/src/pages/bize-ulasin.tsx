import Banner from "@/components/web/banner";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import WebFrame from "@/components/web/frame";
import Link from "next/link";
import {useState} from "react";
import axios from "@/utils/axiosInstance";
import LangConv from "@/components/web/langConv";
import Head from "next/head";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';

function ContactUs(){
    const socials = useSelector((state: RootState) => state.web.socials);
    const language = useSelector((state: RootState) => state.web.lang);
    const [messageSent, isMessageSent] = useState(false)
    const [form, fillContactForm] = useState({name: '', email: '', message: ''})
    const [recaptchaScore, setRecaptchaScore] = useState(0)

    function sendContactMail(e){
        e.preventDefault();
        axios.post('/page/contact/', form )
            .then(() => {
                isMessageSent(true)
                fillContactForm({name: '', email: '', message: ''})
            }).catch(() => {
            isMessageSent(false)
        })
    }

    function verifyRecaptcha(token){
        axios.get('/recaptchaVerify/'+ token )
            .then((data) => {
                const score = data.data.score
                if(typeof score === 'number'){
                    setRecaptchaScore(score)
                }
            })
    }

    return (
        <>
            <Head>
                <title>{`BLOB ART & DESIGN | ${language == 'en' ? 'CONTACT US' : 'Bİze Ulaşın'.toUpperCase()}`}</title>
            </Head>

            <GoogleReCaptchaProvider reCaptchaKey={'6LcN25ceAAAAAEXZmSe20i4yVNwHJs9eqHFSU4Bj'}>
                <GoogleReCaptcha
                    className="google-recaptcha-custom-class"
                    onVerify={verifyRecaptcha}
                />
            </GoogleReCaptchaProvider>

            <Banner image={'/img/banner.jpg'} isTop={true} isImageForced={true}/>

            <div className={" text-[#777] pl-3 pb-32 max-w-[1140px] m-auto"}>
                <h1 className={"text-4xl mb-4 text-[#272727] tracking-headerWide sm:leading-8 md:leading-[65px] break-words uppercase"}>
                    <LangConv en={'CONTACT US'} tr={'Bİze Ulaşın'}/>
                </h1>
                <div className={"flex w-full flex-wrap md:flex-row flex-col"}>
                    <div className={"basis-1/3 mb-12"}>
                        <div className="mb-6">
                            <h6 className={"font-semibold text-[#58585a]"}>
                                <LangConv en={'Address'} tr={'Adres'}/>
                            </h6>
                        </div>
                        <p><a className={"text-[#777]"} target="_blank"
                              href={`${socials.location_link}`}> {socials.address} </a></p>
                    </div>
                    <div className={"basis-1/3 mb-12"}>
                        <div className="mb-6">
                            <h6 className={"font-semibold text-[#58585a]"}>
                                <LangConv en={'Contact Information'} tr={'İletişim Bilgileri'}/>
                            </h6>
                        </div>
                        <p className={"mb-6"}>
                            <span className={"font-semibold text-[#58585a] mr-1"}>
                                <LangConv en={'Phone'} tr={'Telefon'}/> :
                            </span>
                            <a className={"text-[#777]"} target="_blank" href={`tel:${socials.phone}`}>
                                {socials.phone}
                            </a>
                        </p>
                        <p>
                            <span className={"font-semibold text-[#58585a] mr-1"}>
                                <LangConv en={'Email'} tr={'E-posta'}/> :
                            </span>
                            <a className={"text-[#777]"} target="_blank" href={`mailto:${socials.email}`}>
                                {socials.email}
                            </a>
                        </p>
                        <hr className={"w-[75%] mt-5"}/>


                        <div className="py-8 mt-8 flex items-center w-full">
                            <div className="flex self-center md:m-auto">
                                <Link target="_blank" href={socials.facebook ?? '/#'}
                                      className="grid place-content-center border rounded-full text-[#777] mr-2 p-3">
                                    <svg viewBox="0 0 17 17" className="h-3 w-3 m-auto">
                                        <path
                                            d="M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z"
                                            fill="#777"/>
                                    </svg>
                                </Link>
                                <Link target="_blank" href={socials.twitter ?? '/#'}
                                      className="grid place-content-center border rounded-full text-[#777] mr-2 p-3">
                                    <svg viewBox="0 0 17 17" className="h-3 w-3 m-auto">
                                        <path
                                            d="M17 3.236c-0.626 0.27-1.305 0.464-2.007 0.539 0.723-0.431 1.273-1.11 1.532-1.919-0.669 0.399-1.424 0.69-2.211 0.841-0.636-0.68-1.542-1.1-2.545-1.1-1.931 0-3.484 1.564-3.484 3.483 0 0.27 0.033 0.54 0.086 0.799-2.891-0.15-5.469-1.531-7.184-3.646-0.302 0.517-0.475 1.111-0.475 1.759 0 1.208 0.615 2.275 1.553 2.901-0.571-0.022-1.111-0.184-1.575-0.442 0 0.010 0 0.032 0 0.043 0 1.692 1.197 3.095 2.794 3.419-0.291 0.075-0.604 0.118-0.917 0.118-0.226 0-0.442-0.021-0.657-0.054 0.442 1.381 1.726 2.384 3.257 2.417-1.198 0.938-2.697 1.488-4.326 1.488-0.291 0-0.561-0.010-0.841-0.042 1.543 0.992 3.376 1.564 5.351 1.564 6.407 0 9.913-5.307 9.913-9.912 0-0.152 0-0.302-0.010-0.454 0.678-0.496 1.271-1.112 1.746-1.802zM14.263 5.491c0 3.701-2.765 8.912-8.913 8.912-0.492 0-0.979-0.040-1.458-0.118 0.67-0.276 1.305-0.646 1.891-1.104 0.333-0.26 0.466-0.702 0.332-1.103-0.134-0.401-0.505-0.675-0.928-0.684-0.545-0.011-1.055-0.197-1.467-0.509 0.004-0.001 0.008-0.002 0.012-0.003 0.452-0.116 0.763-0.528 0.751-0.994-0.011-0.467-0.343-0.862-0.8-0.955-0.652-0.132-1.203-0.516-1.559-1.046 0.035 0.002 0.069 0.004 0.104 0.005 0.013 0 0.025 0 0.038 0 0.432 0 0.817-0.278 0.951-0.692 0.138-0.426-0.024-0.891-0.397-1.14-0.63-0.42-1.030-1.096-1.098-1.841 1.824 1.582 4.146 2.531 6.597 2.658 0.017 0.001 0.035 0.001 0.052 0.001 0.291 0 0.568-0.127 0.759-0.349 0.202-0.235 0.283-0.551 0.22-0.854-0.044-0.209-0.066-0.41-0.066-0.595 0-1.369 1.114-2.483 2.484-2.483 0.698 0 1.342 0.278 1.815 0.784 0.116 0.124 0.261 0.215 0.417 0.266-0.019 0.146-0.006 0.297 0.043 0.444 0.063 0.191 0.18 0.352 0.33 0.47-0.089 0.164-0.132 0.353-0.119 0.544 0.010 0.129 0.009 0.257 0.009 0.386z"
                                            fill="#777"/>
                                    </svg>
                                </Link>
                                <Link target="_blank" href={socials.instagram ?? '/#'}
                                      className="grid place-content-center border rounded-full text-[#777] mr-2 p-3">
                                    <svg version="1.1" className="h-3 w-3 m-auto"
                                         viewBox="0 0 17 17">
                                        <path
                                            d="M13 0h-9c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4v-9c0-2.2-1.8-4-4-4zM16 13c0 1.654-1.346 3-3 3h-9c-1.654 0-3-1.346-3-3v-6h3.207c-0.286 0.61-0.457 1.283-0.457 2 0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75c0-0.717-0.171-1.39-0.457-2h3.207v6zM12.25 9c0 2.068-1.682 3.75-3.75 3.75s-3.75-1.682-3.75-3.75 1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75zM12.152 6c-0.872-1.059-2.176-1.75-3.652-1.75s-2.78 0.691-3.652 1.75h-3.848v-2c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v2h-3.848zM14.454 2.722v1.298c0 0.299-0.244 0.543-0.542 0.543h-1.368c-0.3-0.001-0.544-0.245-0.544-0.543v-1.298c0-0.299 0.244-0.543 0.544-0.543h1.368c0.298 0 0.542 0.244 0.542 0.543z"
                                            fill="#777"/>
                                    </svg>
                                </Link>
                                <Link target="_blank" href={socials.linkedin ?? '/#'}
                                      className="grid place-content-center border rounded-full text-[#777] mr-2 p-3">
                                    <svg viewBox="0 0 17 17" className="h-3 w-3 m-auto">
                                        <path
                                            d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"
                                            fill="#777"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        recaptchaScore > 0.4999999999999999999 ?
                            <form className={"basis-1/3"} onSubmit={sendContactMail}>
                                <div className="mb-6">
                                    <h6 className={"font-semibold text-[#58585a]"}>
                                        <LangConv en={'Contact Form'} tr={'İletişim formu'}/>
                                    </h6>
                                </div>
                                {
                                    messageSent &&
                                    <div
                                        className={"text-[#777] border rounded-none border-solid border-[#58585a] relative mb-4 px-5 py-3"}>
                                        <LangConv en={'Your message was sent successfully.'}
                                                  tr={'Mesajınız başarıyla gönderildi'}/>
                                    </div>
                                }
                                <div>

                                    <input value={form.name} onChange={(e) => {
                                        fillContactForm({...form, name: e.target.value})
                                    }} required type={"text"}
                                           placeholder={language == 'en' ? "Name Surname" : "İsim Soyismi"}
                                           className={"max-w-full h-auto bg-transparent shadow-none block w-full leading-[1.5em] text-base font-normal text-[#777] bg-none mb-2.5 px-0 py-2.5 border-b-[#f4f4f4] border-[0_0_1px] border-solid border-b"}/>
                                    <input value={form.email} onChange={(e) => {
                                        fillContactForm({...form, email: e.target.value})
                                    }} required type={"email"} placeholder={language == 'en' ? "E-mail" : "E-posta"}
                                           className={"mt-5 max-w-full h-auto bg-transparent shadow-none block w-full leading-[1.5em] text-base font-normal text-[#777] bg-none mb-2.5 px-0 py-2.5 border-b-[#f4f4f4] border-[0_0_1px] border-solid border-b"}/>

                                    <textarea value={form.message} onChange={(e) => {
                                        fillContactForm({...form, message: e.target.value})
                                    }} required rows={5} placeholder={language == 'en' ? "Message" : "Mesaj"}
                                              className={"mt-5 max-w-full h-auto bg-transparent shadow-none block w-full leading-[1.5em] text-base font-normal text-[#777] bg-none mb-2.5 px-0 py-2.5 border-b-[#f4f4f4] border-[0_0_1px] border-solid border-b"}></textarea>
                                </div>
                                <div className={"grid justify-items-center w-full pt-5"}>
                                    <input type={"submit"}
                                           className={"cursor-pointer font-light uppercase text-white relative text-base tracking-[3px] m-0 px-6 py-2 bg-[#58585a] mx-auto "}
                                           value={language == 'en' ? "SEND FORM" : "FORMU GÖNDER"}/>
                                </div>
                            </form> :
                            <div
                                className={"basis-1/3 text-[#777] border rounded-none border-solid border-[#58585a] relative mb-4 px-5 py-3 h-fit"}>
                                <LangConv en={'We suspect you may be a robot. Please refresh this page.'}
                                          tr={'Robot olabileceğinizden şüpheleniyoruz. Lütfen bu sayfayı yenileyin.'}/>
                            </div>
                    }
                </div>

                <div className={"mt-16 p-5"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.4720016697343!2d33.3614209815597!3d35.19471028629777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1723ef2422a1%3A0x1863da52c96c2b36!2zTWXFn2UgU2ssIEvDvMOnw7xrIEtheW1ha2zEsSA5OTAxMA!5e0!3m2!1sen!2s!4v1735912741359!5m2!1sen!2s" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}

export default WebFrame(ContactUs)