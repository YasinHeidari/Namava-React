import React , {useState, useEffect}from 'react'

export default function TermsAndConditions() {

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
  return (
    <div
      className={`${
        windowWidth > 768 ? "contact-us-white-bgc" : "white-bgc"
      } FAQSection container-padding-2`}
      style={{ padding: "7rem 0 40px" }}
    >
      <div className="container">
        <div className="d-flex flex-column justify-center align-center gap-4">
          <h1 className="font-weight-normal font-md-18 font-sm-20 font-16">
            قوانین و مقررات سایت
          </h1>
          <div
            className="FAQContainer border-radius-12 white-bgc"
            style={{ padding: "2rem" }}
          >
            <p>
              تمامی محتواهای موجود در سرویس نماوا در چارچوب قوانین و مقررات
              جمهوری اسلامی ایران، قانون حمایت از حقوق مصرف‌کننده و قانون تجارت
              الکترونیک است. سرویس مذکور با نام تجاری "Namava" ثبت شده است و از
              حق کپی‌رایت برخوردار است. در صورتی که در سایت‌های دیگر با موارد
              نقض کپی‌رایت نماوا مواجه شدید، لطفا به آدرس ایمیل
              support@namava.ir اطلاع دهید.
              <br />
              از تمامی کاربران گرامی سایت نماوا تقاضا می‌‌شود پیش از استفاده از
              خدمات این سایت، تمامی قوانین ذکر شده را با دقت مطالعه فرمایند.
              <br />
              انجام و تکمیل مراحل ثبت نام پس از مطالعه این قوانین و مقررات به
              منزله پذیرش و موافقت کاربر با این قوانین و امضا توافقنامه‌ای بین
              سایت نماوا و کاربر است و رعایت تمامی مفاد آن الزامی است. لازم به
              ذکر است در صورت نقض هر یک از مفاد این توافقنامه توسط کاربر، نماوا
              مجاز است دسترسی کاربر را مسدود نماید. لازم به توضیح و یادآوری است
              که نماوا حق دارد بنا به ضرورت و یا صلاح‌دید، تغییراتی در مفاد
              توافقنامه خود با کاربران ایجاد کند. این تغییرات می‌تواند در هر
              زمان و بدون اطلاع‌رسانی به کاربران صورت گیرد. بنابراین کاربران
              می‌بایست هر چند وقت یکبار مروری بر شرایط و قوانین نماوا در این
              توافقنامه داشته باشند تا از تغییرات احتمالی آن آگاه شوند. <br />
              تمامی قوانین نماوا در این صفحه منتشر و به‌روز رسانی می‌شود. از
              آنجایی که این تغییرات ‌می‌تواند تغییرات محدود در برخی از قوانین تا
              تغییر کل محتوای توافقنامه را دربر گیرد، به کاربران گرامی توصیه
              ‌می‌شود در فواصل زمانی مناسب، بخش قوانین سایت نماوا را مرور نمایند
              تا در جریان تغییرات احتمالی قرار گیرند. بدیهی است کاربران ملزم به
              رعایت قوانین این توافقنامه و تمامی تغییرات در مفاد آن بوده و در
              صورت نقض قوانین هیچگونه عذری از طرف کاربر، از جمله عدم اطلاع از
              قوانین و یا تغییرات انجام شده، پذیرفته نخواهد بود.
              <br /> <br />
              ۱- استفاده از سرویس نماوا هیچگونه حقی اعم از مالکیت محتوای موجود
              بر روی سایت شامل فیلم‌ها و سریال‌ها، فروش، انتشار و یا پخش عمومی
              این محتوا برای کاربر ایجاد نمی‌کند.
              <br />
              ۲- کاربر حق ندارد محتوای دانلود شده نماوا را در اختیار سایرین قرار
              دهد.
              <br />
              ۳-محتوای منتشر شده بر روی سایت نماوا با رعایت تمام ملاحظات فنی
              تهیه و در اختیار کاربران قرار می‌گیرد. بنابراین نماوا هیچگونه
              مسئولیتی در قبال مشکلات و اختلالات نرم‌افزاری و سخت‌افزاری وارده
              به کامپیوتر و گوشی هوشمند کاربر ندارد.
              <br />
              ۴-مدیریت محتوای موجود بر روی سرویس نماوا منحصراً در اختیار نماوا
              است و نماوا مختار است در صورت صلاح‌دید در محتوا تغییر ایجاد کند و
              یا دسترسی به بخشی از محتوا را محدود یا مسدود کند. لازم به ذکر است
              در مدیریت محتوا، اطلاع رسانی قبلی به کاربران ضرورتی ندارد.
              <br />
              ۵- نماوا می‌تواند در ابتدا و یا میان محتواهای در حال پخش در
              وب‌سایت و اپلیکیشن‌های خود، اقدام به نمایش تبلیغات کند. <br />
              ۶- نماوا متعهد می‌شود اطلاعات شخصی کاربران را فقط نزد خود نگه دارد
              و از افشای آن به هر شخص یا گروه سوم شخص اجتناب ورزد. تنها در
              مواردی که به موجب قوانین جمهوری اسلامی ایران و بنا به درخواست رسمی
              ارگان‌ها و سازمان‌های دولتی دارای صلاحیت نیاز به اطلاعات شخصی
              کاربران باشد، نماوا موظف به همکاری طبق قانون خواهد بود و هیچ
              مسئولیتی متوجه نماوا نخواهد بود.
              <br />
              ۶-۱ .هنگام ثبت نام و عضویت در سایت نماوا، متقاضی موظف به ثبت
              مشخصات فردی خود شامل: نام، نام خانوادگی، آدرس ایمیل و یا شماره
              تلفن همراه است. پس از انجام مراحل ثبت‌نام و تایید نهایی عضویت،
              حساب کاربری تشکیل خواهد شد و کلیه فعالیت‌های کاربر در سایت نماوا
              اعم از خرید اشتراک، خرید فیلم پردیس، فیلم‌های مشاهده شده به صورت
              آنلاین و غیره در آن ثبت می‌شود. کاربر ‌می‌تواند در هر زمان به حساب
              کاربری خود در سایت مراجعه کرده و اطلاعات خود را، به جز ایمیل و
              شماره تلفن همراه، ویرایش کند.
              <br />
              ۷- بدیهی است محیط وب از امنیت کامل برخوردار نیست بنابراین اگر در
              حین انتقال اطلاعات هر گونه دسترسی توسط افراد یا گروه‌های سوم شخص
              به اطلاعات کاربر ممکن شود، هیچ مسئولیتی متوجه نماوا نخواهد بود.
              <br />
              ۸- محتوای موجود بر روی نماوا برای مطابقت با قوانین رسانه‌های کشور
              جمهوری اسلامی ایران بازبینی شده‌است، ولی اگر در هر صورت مضامینی به
              نظر کاربر مناسب نمی‌آیند، کاربر می‌بایست نظر خود را به نماوا اعلام
              نماید. بدیهی است تصمیم‌‌گیری در خصوص ایجاد تغییر در مضامین به موجب
              قوانین در حیطه اختیارات نماوا است.
              <br />
              ۹- کاربر مجاز نیست اطلاعات کاربری خود را در اختیار دیگران قرار
              دهد. در صورتی که کاربر اطلاعات کاربری خود را در اختیار دیگران قرار
              دهد، مسئولیت هر گونه مشکلی که به واسطه این امر رخ دهد به عهده
              کاربر است.
              <br />
              ۱۰- هر کاربر فقط مجاز به ایجاد یک شناسه کاربری ‌‌است.
              <br />
              ۱۱- در صورت بروز شرایط اضطراری و خارج از کنترل همچون زلزله، سیل
              و... که قطع سرویس و یا اختلال در خدمات نماوا را به همراه داشته
              باشد، قرارداد مابین نماوا و کاربران تا رفع مشکل و وضعیت اضطراری به
              صورت معلق باقی می‌ماند و پس از بازگشت به شرایط عادی از سر گرفته
              می‌شود.
              <br />
              ۱۲- در اشتراک‌های ماهیانه نماوا، هر یک ماه مساوی با ۳۰ روز محاسبه
              ‌می‌شود.
              <br />
              ۱۳- طبق قوانین سایت نماوا مجموع اشتراک‌های خریداری شده توسط کاربر
              حداکثر ۲۴ ماه ‌می‌تواند باشد. در خصوص هر گونه خرید اشتباه در
              نماوا، تمامی ضرر زیان‌ها به عهده کاربر ‌‌است و هزینه اشتراک
              خریداری شده به هیچ عنوان مسترد نخواهد شد و هیچ مسئولیتی در قبال
              بازگرداندن وجه دریافت شده، متوجه نماوا نخواهد بود.
              <br />
              ۱۴- نماوا تلاش خواهد کرد که دسترسی به نماوا در همه‌ی دستگاه‌ها
              امکان پذیر باشد؛ اما بدیهی‌ست که پشتیبانی از تمامی دستگاه‌های
              موجود در بازار امکان‌پذیر نیست و پلتفرم‌ها و دستگاه‌هایی که تحت
              پشتیبانی نماوا نیست در سایت اعلام شده است.
              <br />
              ۱۵- هر کاربر نماوا امکان نمایش تنها یک پخش همزمان خواهد داشت، یعنی
              چنانچه کاربری با بیش از یک IP اقدام به تماشای آنلاین فیلم نماید،
              پیغام "در حال حاضر فرد دیگری با این حساب کاربری درحال تماشای فیلم
              است." را مشاهده خواهد کرد.
              <br />
              ۱۶-مشاهده تمامی محتوای موجود در سایت نماوا تنها از طریق IPهای داخل
              ایران امکان‌پذیر خواهد بود و در صورتی که کاربر خارج از ایران است و
              یا اینکه از انواع VPN استفاده می‎کند، تنها ‌می‌تواند فیلم‌ها و
              سریال‌های ایرانی را تماشا نماید. ممکن است در موارد خاص، برخی
              فیلم‌های ایرانی بخاطر اکران بین المللی، تا مدتی برای کاربران خارج
              از ایران قابل تماشا نباشند که بر حسب مورد در صفحه مختص به همان
              فیلم اطلاع رسانی خواهد شد.
              <br />
              ۱۷- نماوا، دارای مجوز‌های لازم از مراجع مربوط بوده و هرگونه
              بهره‌برداری و سوءاستفاده از محتوای نماوا، پیگرد قانونی دارد.
              <br />
              ۱۸-نماوا می‌تواند بدون اطلاع قبلی شرایط استفاده را تغییر دهد و
              استفاده از سرویس نماوا به معنی قبول شرایط جدید خواهد بود.
              <br />
              ۱۹- مکالمات تلفنی برقرار شده بین کاربران و مجموعه نماوا به منظور
              آموزش و کنترل کیفیت ضبط شده و تنها در صورت دستور مرجع قضایی و به
              شرط موجود بودن، در اختیار دستگاه قضا قرار خواهد گرفت.
              <br />
              ۲۰-&nbsp;ارسال هر نوع پیامک از سوی گروه شرکت‌‌‌‌های شاتل مانند
              اطلاع‌رسانی جشنواره‌ها، سررسید دوره و ... مجاز است.
            </p>
            <p>
              <br />
              قوانین مربوط به "دانلود آفلاین در ویندوز و اپلیکیشن نماوا":
              <br />
              ۱- این قابلیت وجود دارد که کاربر در لیست دانلود خود ۵۰ فیلم
              نگهداری و برای دانلود فیلم‌های بیشتر، از لیست دانلودش یک یا چند
              مورد را حذف نماید.
              <br />
              ۲- فیلم‌ها و سریال‌های دانلود شده به مدت ۳۰ روز قابل تماشا هستند و
              پس از آن دانلود منقضی خواهد شد.
              <br />
              ۳- در صورت انقضای محتوای دانلود شده و به منظور دانلود مجدد محتوا
              کاربر نیاز به اشتراک فعال خواهد داشت.
            </p>
            <p>
              <br />
              قوانین مربوط به "پردیس نماوا":
              <br />
              ۱- مدت اکران هر فیلم سینمایی در پردیس نماوا متغیر و در صفحه مربوط
              به آن فیلم قابل مشاهده است.
              <br />
              ۲- مدت زمان دسترسی به فیلم‌های خریداری شده در این بخش ۸ ساعت خواهد
              بود و کاربران در این مدت می‌توانند فیلم خریداری شده را به صورت
              نامحدود تماشا کنند. پس از اتمام این مدت، فیلم از دسترسی کاربران
              گرامی خارج خواهد شد.
              <br />
              ۳- هزینه‌ی تماشای آنلاین فیلم‌های پردیس نماوا، در صفحه مربوط به هر
              فیلم قابل مشاهده است.
              <br />
              ۴- امکان دانلود آفلاین برای فیلم‌های این بخش وجود ندارد.
              <br /> <br />
              قوانین مربوط به "سرویس پرداخت با تمدید خودکار":
              <br />
              ۱- نماوا حق برداشت بیش از مبلغ اشتراک در هر ماه از حساب کاربر را
              ندارد، این مبلغ در هنگام ثبت قرارداد به اطلاع کاربر می‌رسد.
              <br />
              ۲- مبلغ اشتراک در طی دوره‌ی ۱۲ ماهه این قرارداد برای کاربر بدون
              تغییر باقی خواهد ماند.
              <br />
              ۳- کاربر در صورت تمایل، امکان لغو قرارداد خود را دارد و پس از لغو
              قرارداد برداشتی از حساب ایشان توسط نماوا صورت نخواهد گرفت.
              <br />
              ۴- کاربر تا ۱۴ روز پس از لغو سرویس تمدید خودکار خود، امکان فعال
              سازی مجدد این سرویس را نخواهد داشت.
              <br />
              ۵- امکان عودت وجه اشتراک‌های خریداری شده قبل از لغو اشتراک، به
              کاربر وجود ندارد.
              <br /> <br /> <br />• در صورت وجود هر گونه سوال و یا بروز هر مشکلی
              می‌توانید هفت روز هفته، ۲۴ ساعت شبانه‌روز با ما در تماس باشید.
            </p>
            <p>
              تلفن تماس: ۹۱۰۰۰۱۱۱-۰۲۱
              <br />
              ایمیل: support@namava.ir
            </p>
            <p>
              <br />
              توافقنامه حاضر که به تایید سایت نماوا و کاربر می‌رسد، از قوانین
              کشور جمهوری اسلامی ایران تبعیت می‌کند. در صورت وجود ابهام در این
              شرایط با ایمیل support@namava.ir با ما در تماس باشید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}