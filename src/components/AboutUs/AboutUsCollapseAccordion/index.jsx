import React, {  useState } from "react";
import { Collapse, ConfigProvider, Space } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
const {Panel} = Collapse;
export default function AboutUsAccordion(){
    const [borderTop, setBorderTop] = useState('accordionBorderTopNone');
    const [activeAccordion, setActiveAccordion] = useState(null);
    
    const changeBorderTop = (key) => {
        setActiveAccordion(key === activeAccordion ? null : key);
        setBorderTop(key === activeAccordion ? 'accordionBorderTopNone' : 'accordionBorderTop');
    };
    
    const PanelStyle ={
        marginBottom: 16,
        backgroundColor:'#222327',
        borderRadius:'12px',
        lineHeight: '26px',
        padding:'24px 0',
    }
    return(
    <div className="container-md container">
        <ConfigProvider
            theme={{
                components: {
                    Collapse: {
                        headerBg: " #222327",
                        fontSize: "16px",
                        colorTextHeading: "#fff",
                        colorText: "#fff",
                        colorBorder: false,
                    },
                },
            }}
        >
        <Space direction="vertical" className="col-12"> 
    {/*expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}*/}
            <Collapse className="d-flex flex-column gap-1" style={{padding: '12px 0' , backgroundColor:'#121212'}}  bordered={false}>
                <Panel  onClick={() => changeBorderTop(1)} header="۱. آیا برای تماشای محتوای نماوا نیاز به خرید اشتراک وجود دارد؟ " key="1" style={PanelStyle}>
                <p  className={borderTop} >
                                بله، برای تماشای تمامی محتوای نماوا به جز قسمت{" "}
                                <Link 
                                    className="aboutUsActiveColor"
                                    to="https://www.namava.ir/live"
                                >
                                    پخش زنده‌ی مسابقات ورزشی
                                </Link>{" "}
                                نیاز به خرید اشتراک وجود دارد.
                            </p>
                </Panel>
                <Panel onClick={() => changeBorderTop(2)}  header="۲. پروفایل کاربری چیست؟ با ساخت اکانت (ایجاد حساب کاربری) چه تفاوتی دارد؟" key="2" style={PanelStyle}>
                <p className={borderTop}>
                                حساب کاربری نماوا پس از ثبت‌نام کاربر به صورت
                                خودکار ایجاد می‌شود. در هر حساب کاربری، امکان
                                ساخت پروفایل‌های مختلف (از جمله پروفایل‌های مختص
                                کودکان) با تنظیمات اختصاصی هر پروفایل و
                                نگه‌داشتن سابقه‌ی تماشای هر پروفایل وجود دارد.
                            </p>
                </Panel>
                <Panel onClick={() => changeBorderTop(3)}  header="۳. آیا برای ساخت پروفایل جدید نیاز به پرداخت جداگانه وجود دارد؟" key="3" style={PanelStyle}>
                <p className={borderTop}>
                                خیر، شما با هر حساب کاربری می‌توانید ۵ پروفایل
                                جداگانه داشته باشید.{" "}
                                <Link
                                    to="https://www.namava.ir/pages/multiprofile"
                                    className="aboutUsActiveColor"
                                >
                                    اطلاعات بیشتر
                                </Link>
                            </p>
                </Panel>
                <Panel onClick={() => changeBorderTop(4)}  header="۴. دانلود آفلاین چیست و دانلود محتوا روی کدام یک از دستگاه‌ها امکان‌پذیر است؟" key="4" style={PanelStyle}>
                <p className={borderTop}>
                                دانلود آفلاین به معنای ذخیره‌ی محتوا روی دستگاه
                                و امکان مشاهده آن‌ها در زمانی است که دسترسی به
                                اینترنت ندارید.
                                <br />
                                شما امکان دانلود محتوای نماوا را روی گوشی‌ و
                                تبلت‌های اندرویدی و iOS و همچنین روی وب دارید.
                                در صورت دانلود محتوا شما امکان پخش محتوا را بدون
                                اینترنت و در موقعیت دلخواه خواهید داشت.
                            </p>
                </Panel>
                <Panel onClick={() => changeBorderTop(5)}  header="۵. پردیس نماوا چیست و برای  تماشای محتوای پردیس از چه طریقی اقدام کنم؟" key="5" style={PanelStyle}>
                <p className={borderTop}>
                                پردیس نماوا به منظور نمایش فیلم‌های روی پرده‌ی
                                سینماهای ایران و دسترسی آنلاین کاربران به
                                فیلم‌های سینمایی روز در نماوا اضافه شده است.
                                برای مشاهده فیلم‌های پردیس نماوا می‌توانید از
                                طریق صفحه‌ی هر فیلم بلیط تهیه و تا ۸ ساعت پس از
                                آن زمان دارید تا فیلم را مشاهده کنید.{" "}
                                <Link
                                    className="activeaboutUsActiveColor"
                                    to="https://www.namava.ir/collection-1327-pardis"
                                >
                                    اطلاعات بیشتر
                                </Link>
                            </p>
                </Panel>
                <Panel onClick={() => changeBorderTop(6)}  header="۶. برای دانلود به‌روزترین نسخه‌ی اپلیکیشن نماوا از چه طریق می‌توانم اقدام کنم؟" key="6" style={PanelStyle}>
                <p className={borderTop}>
                                برای دانلود آخرین نسخه‌ برنامه‌ی نماوا از طریق{" "}
                                <Link to="https://www.namava.ir/pages/apps">
                                    صفحه‌ی اپلیکیشن‌های نماوا
                                </Link>{" "}
                                و یا فروشگاه های آنلاین دانلود اپلیکیشن اقدام
                                کنید.
                            </p>
                </Panel>
                <Panel onClick={() => changeBorderTop(7)}  header="۷. اشتراک تمدید خودکار نماوا چیست؟  " key="7" style={PanelStyle}>
                <p className={borderTop}>
                                اشتراک تمدید خودکار، یک روش امن و راحت برای
                                پرداخت‌های دوره‌ای است. این شیوه به شما امکان آن
                                را می‌دهد که با یک قرارداد اشتراک نماوای خود را
                                فعال کنید و پس از آن مبلغ اشتراک به صورت ماهانه
                                از حساب شما کسر خواهد شد. مبلغ اشتراک در دوره‌ی
                                قرارداد شما تغییری نخواهد داشت.{" "}
                                <Link to="https://www.namava.ir/pages/directdebit">
                                    اطلاعات بیشتر
                                </Link>
                            </p>
                </Panel>
            </Collapse>
            
            </Space>
        </ConfigProvider>
    </div>
    );
};