import React , {useState , useEffect} from 'react'
import ScrollToTop from '../../helpers/ScrollToTop';
import { Collapse, ConfigProvider, Space } from "antd";
const {Panel} = Collapse

export default function FAQ() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      document.title = "سوالات متداول";
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);


    const PanelStyle = {
      backgroundColor: "#fff",
      lineHeight: "26px",
    };

    const items = [
      {
        key: "1",
        label: "١. نحوه ثبت نام در سایت نماوا چگونه است؟",
        children: (
          <p>
            ثبت نام در نماوا با شماره تلفن همراه انجام می ‌گیرد. پس از انتخاب
            گزینه عضویت، شماره تلفن همراه خود را وارد می‌ کنید. سپس کد تایید از
            طریق پیامک برای شما ارسال می‌ شود. پس از وارد کردن کد چهار رقمی،
            اطلاعات (نام، نام خانوادگی، رمز عبور) از شما دریافت می ‌شود. رمز
            عبور انتخابی می ‌بایست ترکیبی از کاراکترهای عدد و حرف بوده و بیشتر
            از چهار کاراکتر باشد.
          </p>
        ),
      },
      {
        key: "2",
        label: "٢. چرا باید برای تماشای فیلم ‌ها اشتراک تهیه کنم؟",
        children: (
          <p>
            حقوق صاحبین اثر تمامی فیلم های ایرانی، خارجی، سریال‌ ها، انیمیشن‌ ها
            و مستندات موجود در نماوا، بصورت کاملا قانونی خریداری شده و در نماوا
            قرار داده شده اند. شما با پرداخت مبلغ مربوط به خرید اشتراک، در عین
            اینکه فیلم را قانونی تماشا می کنید، از صاحبین اثر نیز حمایت می ‌کنید
            و باعث محتوای با کیفیت‌ تر خواهید شد. ضمنا شما با خرید اشتراک، در
            طول مدت تعیین شده، به تمامی محتواهای نماوا دسترسی خواهید داشت و
            میتوانید هر کدام را هر چند بار که خواستید تماشا کنید.
          </p>
        ),
      },
      {
        key: "3",
        label: "٣. چگونه می ‌توانم فیلم‌ های نماوا را دانلود کنم؟",
        children: (
          <p>
            امکان دانلود فیلم‌ های نماوا از طریق اپلیکیشن های اندروید و iOS و
            اپلیکیشن ویندوز وجود دارد.
          </p>
        ),
      },
      {
        key: "4",
        label:
          "۴. با خرید اشتراک نماوا، آیا قادر به استفاده از ترافیک رایگان خواهم بود؟",
        children: (
          <p>
            خیر. خرید اشتراک نماوا فقط برای دسترسی به تمامی فیلم‌ های نماوا
            می‌باشد و هزینه ‌ایست که بابت رعایت حقوق صاحبین اثر پرداخت می ‌کنید.
            ترافیک نماوا تنها برای مشترکین شاتل رایگان است و برای مشترکین سایر
            اپراتورها به صورت نیم بها محاسبه می ‌گردد.
          </p>
        ),
      },
      {
        key: "5",
        label: "۵. برای استفاده از ترافیک رایگان چه باید کرد؟",
        children: (
          <p>
            برای تمامی مشترکین DSL شاتل ترافیک مصرفی سایت نماوا کاملا رایگان
            محاسبه می گردد و حجم مصرفی کاربران سایر اپراتورها پس از خرید اشتراک
            بصورت نیم‌بها محاسبه می شود. ترافیک مصرفی مشترکین اپراتورهای
            مخابرات، پارس آنلاین، آسیاتک، های‌وب، مبین‌نت، پیشگامان، داتک،
            فن‌آوا، صفر و یک، خورشید‌نت و شبدیز که اشتراک خود را تا قبل از تاریخ
            ۱۶ آذر ۹۸ فعال کرده اند تا تاریخ ۱ دی ۹۹ رایگان و پس آن به صورت نیم
            ‌بها محاسبه می‌شود.{" "}
          </p>
        ),
      },
      {
        key: "6",
        label:
          "۶. در هنگام پخش فیلم ‌ها از نماوا، ارور دریافت می ‌کنم. مشکل از کجاست؟",
        children: (
          <p>
            چنانچه حین پخش با هرگونه خطا مواجه شدید، به صفحه تماس با ما مراجعه و
            مشکل خود را مطرح نمایید تا در اولین فرصت مشکل را بررسی و برطرف کنیم.
          </p>
        ),
      },
      {
        key: "7",
        label:
          "٧. به صورت همزمان، چند کاربر می‌توانند از اکانت یک شخص استفاده کنند و فیلم ببینند؟",
        children: (
          <p>
            با یک ip می‌توان روی هر چند دستگاه که بخواهید به صورت همزمان فیلم
            تماشا کنید. اما در صورتی که با بیش از یک ip اقدام به تماشای فیلم
            کنید، خطای پخش همزمان دریافت خواهید کرد. ضمن اینکه به کاربران گرامی
            توصیه می‌شود اطلاعات کاربری خود را در اختیار دیگران قرار ندهند.
          </p>
        ),
      },
      {
        key: "8",
        label:
          "٨. فیلم‌ های نماوا در تلویزیون هوشمند من پخش نمی‌شود. مشکل از کجاست؟",
        children: (
          <p>
            چنانچه حین پخش با تلویزیون هوشمند با هرگونه مشکلی مواجه شدید، به
            صفحه تماس با ما مراجعه و جزییات مشکل خود را مطرح نمایید. در نظر
            داشته باشید که ممکن است دستگاه شما، سیستم پخش فیلم در نماوا را
            پشتیبانی نکند، اما سعی ما بر این است که راه حلی برای تمامی مشکلات
            شما پیدا کنیم.
          </p>
        ),
      },
      {
        key: "9",
        label:
          "٩. در صورت بروز مشکل در خرید از نماوا مانند فعال نشدن اشتراک و یا ثبت نشدن پرداخت، امکان پیگیری از چه طریقی وجود دارد؟",
        children: (
          <p>
            چنانچه جهت خرید اشتراک اقدام کرده‌ اید و مبلغی از حساب شما کم شده
            اما پرداخت صورت نگرفته، لطفا تا ۷۲ ساعت تامل کنید تا پول به حساب شما
            بازگردد. پس از سپری شدن این مدت، چنانچه مبلغ به حساب شما بازنگشت،
            می‌ توانید شماره کارت بانکی که پرداخت با آن صورت گرفته را به همراه
            تاریخ خرید برای ما از طریق صفحه تماس با ما ارسال کنید تا بررسی شود.
            اگر پرداخت در نماوا برگشت خورده بود و مبلغ به شما بازنگشت، می‌بایست
            با پشتیبانی درگاه بانکی مورد نظر تماس بگیرید.
          </p>
        ),
      },
      {
        key: "10",
        label:
          "١٠. کاربران مقیم خارج از کشور به چه ترتیب می‌ توانند اشتراک نماوا را تهیه کنند و به چه فیلم‌ هایی دسترسی خواهند داشت؟",
        children: (
          <p>
            خرید از نماوا تنها با کارت های عضو شبکه شتاب امکان پذیر است. ضمن
            اینکه مشترکین خارج از کشور با ip های خارجی تنها به عناوین ایرانی
            موجود در نماوا دسترسی خواهند داشت.
          </p>
        ),
      },
      {
        key: "11",
        label: "۱۱. شرایط ویژه نماوا برای کاربران شاتل موبایل چیست؟",
        children: (
          <p>
            کاربران شاتل موبایل می توانند بدون خرید اشتراک از نماوا استفاده
            نمایند و ترافیک مصرفی آن ها تمام بها محاسبه خواهد شد.
          </p>
        ),
      },
      {
        key: "12",
        label: "۱٢. شرایط استفاده کاربران ایرانسل و رایتل چگونه است؟",
        children: (
          <p>
            کاربران این اپراتورها که تا تاریخ ٣٠ اسفندماه ۱۳۹۹ امکان تماشای
            محتوای نماوا را بدون خرید اشتراک و با حجم مصرفی تمام بها داشته اند،
            پس از این تاریخ تنها با خرید اشتراک، امکان استفاده از سرویس نماوا را
            خواهند داشت. لازم به ذکر است که ترافیک مصرفی آن ها، پس از خرید
            اشتراک به صورت نیم بها محاسبه خواهد شد.
          </p>
        ),
      },
      {
        key: "13",
        label: "۱٣. پردیس نماوا چیست؟",
        children: (
          <p>
            پردیس نماوا، نام خدمت جدیدی است که از فروردین ۱۳۹۹ هم‌زمان با شیوع
            "کرونا" و با توجه به بسته بودن مراکز تفریحی و سینماهای کشور، در
            نماوا اضافه شده است. این خدمت به کاربران نماوا امکان می‌دهد، بدون
            نیاز به مراجعه به سینما، به تماشای آنلاین فیلم‌های روز سینمایی
            ایرانی بنشینند.
          </p>
        ),
      },
      {
        key: "14",
        label:
          "۱۴. آیا برای تماشای فیلم‌های روز، باید پرداخت جداگانه‌ای صورت گیرد؟",
        children: (
          <p>
            بله، شرایط این بخش مشابه خرید بلیت سینماست. برای تماشای فیلم‌های
            "پردیس نماوا" نیاز است برای هر فیلم به صورت جداگانه پرداخت انجام
            شود.
          </p>
        ),
      },
      {
        key: "15",
        label: "۱۵. تا چه زمانی به فیلم‌های خریداری شده دسترسی دارم؟",
        children: (
          <p>
            کاربران پس از پرداخت، برای هر فیلم به مدت ۸ ساعت فرصت دارند تا فیلم
            خریداری شده را تماشا کنند. بی‌تردید پس از این مدت‌، دسترسی به فیلم
            خریداری شده وجود نخواهد داشت.
          </p>
        ),
      },
      {
        key: "16",
        label: "۱۶. آیا امکان دانلود برای بخش فیلم‌های پردیس نماوا وجود دارد؟",
        children: (
          <p>
            با توجه به اهمیت حفاظت از آثار سینمایی، برای فیلم‌های بخش پردیس
            نماوا، امکان دانلود آفلاین وجود ندارد.
          </p>
        ),
      },
      {
        key: "17",
        label: "۱٧.  مدت زمان اکران هر فیلم  روز سینمایی در نماوا  چه مدت است؟",
        children: (
          <p>
            مدت اکران هر فیلم سینمایی در پردیس نماوا متغیر و در صفحه مربوط به آن
            فیلم قابل مشاهده است.
          </p>
        ),
      },
      {
        key: "18",
        label:
          '۱٨. فیلم‌های بخش "پردیس نماوا" در چه دستگاه‌هایی قابل مشاهده است؟',
        children: (
          <p>
            فیلم‌های سینمایی پردیس نماوا، برای تمامی دستگاه‌ها قابل مشاهده است.
          </p>
        ),
      },
      {
        key: "19",
        label:
          "فیلم‌های سینمایی پردیس نماوا، برای تمامی دستگاه‌ها قابل مشاهده است.",
        children: (
          <p>
            ترافیک مصرفی مشترکین شاتل در زمان تماشا فیلم‌های نماوا رایگان‌، و
            برای بقیه سرویس‌دهندگان نیم‌بها محاسبه می‌شود.
          </p>
        ),
      },
      {
        key: "20",
        label: '٢٠. سرویس خرید "اشتراک با تمدید خودکار" چیست؟',
        children: (
          <p>
            " اشتراک با تمدید خودکار" ویژگی جدیدی در نماواست؛ که طی آن کاربر
            اجازه‌ی برداشت مبلغ محدود، طی شرایط خاص و به مدت محدود از حساب
            کاربری خود را به نماوا می‌دهد.
          </p>
        ),
      },
      {
        key: "21",
        label:
          '٢۱. مزایای استفاده از سرویس "اشتراک با تمدید خودکار" برای من چیست؟',
        children: (
          <p>
            در این شیوه شما نیازی به پرداخت ماهانه‌ی مبلغ خرید اشتراک ندارید؛ و
            در ضمن اینکه تا پایان مدت قرارداد مبلغ حق اشتراک نماوا برای شما بدون
            تغییر باقی خواهد ماند و دسترسی شما به سرویس نماوا بی‌وقفه ادامه
            خواهد داشت.
          </p>
        ),
      },
      {
        key: "22",
        label: "٢٢. منظور از قرارداد در این نوع پرداخت چیست؟",
        children: (
          <p>
            به منظور امکان برداشت نماوا از حساب بانکی شما؛ قراردادی با تکمیل
            مراحل پرداخت اول، بین نماوا و کاربر ایجاد می‌شود؛ مدت زمان این
            قرارداد ۶ ماه است و طی آن کاربر به نماوا اجازه‌ی برداشت محدود از
            حساب بانکی خود را در فواصل زمانی مشخص می‌دهد.
          </p>
        ),
      },
      {
        key: "23",
        label: "٢٣. در صورت بروز مشکل در این شیوه‌ی پرداخت چه کاری انجام دهم؟",
        children: (
          <p>
            در صورت بروز هرگونه مشکل، ما در کنار شما هستیم و می‌توانید از طریق
            صفحه‌ی تماس با ما و یا با شماره تماس پشتیبانی نماوا 91000111 (021)
            داخلی 1 تماس حاصل فرمایید.
          </p>
        ),
      },
      {
        key: "24",
        label:
          "٢۴. آیا امکان لغو قرارداد پرداخت با تمدید خودکار برای من وجود دارد؟",
        children: (
          <p>
            بله، امکان لغو کردن قرارداد پس از ثبت آن توسط کاربر وجود دارد و
            فعال‌سازی این سرویس منوط به ثبت قرارداد مجدد (حداقل ۱۴ روز پس از لغو
            اشتراک) توسط کاربر است.
          </p>
        ),
      },
      {
        key: "25",
        label: "٢۵. در صورت لغو قرارداد اشتراک‌های قبلی غیرفعال خواهد شد؟",
        children: (
          <p>
            بعد از لغو قرارداد و در صورتی که از قبل اشتراک فعالی داشته باشید، تا
            پایان آخرین روز اشتراک فعال شده امکان دسترسی به محتوای نماوا را
            خواهد داشت. به این معنا که در صورت لغو قرارداد در اشتراک‌ها و
            پرداخت‌های قبل از لغو اشتراک تغیری ایجاد نخواهد شد و تنها بعد از این
            زمان هیچ برداشتی از حساب شما صورت نخواهد گرفت.
          </p>
        ),
      },
      {
        key: "26",
        label: "٢۶. امکان باز پرداخت مبلغ اشتراک برای من فراهم است؟",
        children: (
          <p>
            طبق قوانین نماوا، در صورت پرداخت و فعال شدن اشتراک در هر دوره؛ امکان
            بازگشت مبلغ اشتراک وجود ندارد؛ اما شما هر زمان که مایل باشید
            می‌توانید قرارداد سرویس "اشتراک با تمدید خودکار" خود را لغو کنید.
          </p>
        ),
      },
    ];


  return (
    <div
      className={`${
        windowWidth > 768 ? "contact-us-white-bgc" : "white-bgc"
      } FAQSection container-padding-2`}
      style={{ padding: "80px 0 40px"}}
    >
      <ScrollToTop />
      <div className="container">
        <div className=" d-flex flex-column justify-center align-center gap-4">
          <h1 className="font-weight-normal font-md-18 font-sm-20 font-16">سوالات متداول نماوا</h1>
          <div className="FAQContainer border-radius-12">
            <ConfigProvider
              theme={{
                components: {
                  Collapse: {
                    headerBg: "#fff",
                    fontSize: "12px",
                    colorTextHeading: "#1993ff",
                    colorText: "#000",
                    colorBorder: false,
                  },
                },
              }}
            >
              <Space direction="vertical" className="col-12">
                {/*expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}*/}
                <Collapse
                  className="d-flex flex-column "
                  style={{ padding: "12px 0", backgroundColor: "#fff" }}
                  bordered={false}
                >
                  {items.map((item) => (
                    <Panel
                      header={item.label}
                      key={item.key}
                      style={PanelStyle}
                    >
                      <p className="">{item.children}</p>
                    </Panel>
                  ))}
                </Collapse>
              </Space>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
