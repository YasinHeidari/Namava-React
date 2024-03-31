import React from "react";
import { Collapse, ConfigProvider, Space } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
const AboutUsAccordion = () => (
    <Space direction="vertical">
        <ConfigProvider
            theme={{
                components: {
                    Collapse: {
                        headerBg: " #222327",
                        contentBg: "#222327",
                        fontSize: "16px",
                        colorTextHeading: "#fff",
                        colorText: "#fff",
                        colorBorder: false,
                    },
                },
            }}
        >
            <Collapse
                collapsible="header"
                items={[
                    {
                        key: "1",
                        label: "۱. آیا برای تماشای محتوای نماوا نیاز به خرید اشتراک وجود دارد؟",

                        children: (
                            <p>
                                بله، برای تماشای تمامی محتوای نماوا به جز قسمت{" "}
                                <Link
                                    className="aboutUsActiveColor"
                                    to="https://www.namava.ir/live"
                                >
                                    پخش زنده‌ی مسابقات ورزشی
                                </Link>{" "}
                                نیاز به خرید اشتراک وجود دارد.
                            </p>
                        ),
                    },
                ]}
            />
            <Collapse
                collapsible="header"
                items={[
                    {
                        key: "2",
                        label: "۲. پروفایل کاربری چیست؟ با ساخت اکانت (ایجاد حساب کاربری) چه تفاوتی دارد؟",
                        children: (
                            <p>
                                حساب کاربری نماوا پس از ثبت‌نام کاربر به صورت
                                خودکار ایجاد می‌شود. در هر حساب کاربری، امکان
                                ساخت پروفایل‌های مختلف (از جمله پروفایل‌های مختص
                                کودکان) با تنظیمات اختصاصی هر پروفایل و
                                نگه‌داشتن سابقه‌ی تماشای هر پروفایل وجود دارد.
                            </p>
                        ),
                    },
                ]}
            />
            <Collapse
                collapsible="header"
                items={[
                    {
                        key: "3",
                        label: "۳. آیا برای ساخت پروفایل جدید نیاز به پرداخت جداگانه وجود دارد؟",
                        children: (
                            <p>
                                خیر، شما با هر حساب کاربری می‌توانید ۵ پروفایل
                                جداگانه داشته باشید.{" "}
                                <Link
                                    to="https://www.namava.ir/pages/multiprofile"
                                    className="aboutUsActiveColor"
                                >
                                    اطلاعات بیشتر
                                </Link>
                            </p>
                        ),
                    },
                ]}
            />
            <Collapse
                collapsible="header"
                items={[
                    {
                        key: "4",
                        label: "۴. دانلود آفلاین چیست و دانلود محتوا روی کدام یک از دستگاه‌ها امکان‌پذیر است؟",
                        children: (
                            <p>
                                دانلود آفلاین به معنای ذخیره‌ی محتوا روی دستگاه
                                و امکان مشاهده آن‌ها در زمانی است که دسترسی به
                                اینترنت ندارید.
                                <br />
                                شما امکان دانلود محتوای نماوا را روی گوشی‌ و
                                تبلت‌های اندرویدی و iOS و همچنین روی وب دارید.
                                در صورت دانلود محتوا شما امکان پخش محتوا را بدون
                                اینترنت و در موقعیت دلخواه خواهید داشت.
                            </p>
                        ),
                    },
                ]}
            />
            <Collapse
                collapsible="header"
                items={[
                    {
                        key: "5",
                        label: "۵. پردیس نماوا چیست و برای  تماشای محتوای پردیس از چه طریقی اقدام کنم؟",
                        children: (
                            <p>
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
                        ),
                    },
                ]}
            />
            <Collapse
                collapsible="header"
                items={[
                    {
                        key: "6",
                        label: "۶. برای دانلود به‌روزترین نسخه‌ی اپلیکیشن نماوا از چه طریق می‌توانم اقدام کنم؟",
                        children: (
                            <p>
                                برای دانلود آخرین نسخه‌ برنامه‌ی نماوا از طریق{" "}
                                <Link to="https://www.namava.ir/pages/apps">
                                    صفحه‌ی اپلیکیشن‌های نماوا
                                </Link>{" "}
                                و یا فروشگاه های آنلاین دانلود اپلیکیشن اقدام
                                کنید.
                            </p>
                        ),
                    },
                ]}
            />
            <Collapse
                collapsible="header"
                items={[
                    {
                        key: "7",
                        label: "۷. اشتراک تمدید خودکار نماوا چیست؟  ",
                        children: (
                            <p>
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
                        ),
                    },
                ]}
            />
        </ConfigProvider>
    </Space>
);
export default AboutUsAccordion;
