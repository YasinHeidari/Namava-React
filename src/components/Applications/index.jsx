import React , {useState , useEffect , useMemo} from 'react'
import TV from "./AppContents/TV";
import Pc from "./AppContents/Pc"
import "./index.css"
import AndroidTV from './AppContents/AndroidTV';
import IOS from './AppContents/IOS';
import Android from './AppContents/Android';

export default function Applications() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [activeContent , setActiveContent] = useState(null);

  const buttons =useMemo(() => [
    {
      id: 1,
      labelImg: (activeButtonId === 1 ?(
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6.74072"
            y="10.5918"
            width="38.5185"
            height="26.963"
            rx="5"
            fill="#cccccc"
            stroke="#cccccc"
            strokeWidth="2"
          ></rect>
          <line
            x1="2.92578"
            y1="40.4062"
            x2="49.0739"
            y2="40.4062"
            stroke="#cccccc"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <line
            x1="2.92578"
            y1="40.4062"
            x2="49.0739"
            y2="40.4062"
            stroke="#cccccc"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <path
            d="M21.004 25.3591V28H19.7676V20.8909H22.4858C23.2798 20.8909 23.9101 21.0985 24.3767 21.5136C24.8464 21.9258 25.0813 22.4712 25.0813 23.15C25.0813 23.847 24.8525 24.3894 24.3949 24.7773C23.9373 25.1652 23.2964 25.3591 22.4722 25.3591H21.004ZM21.004 24.3682H22.4858C22.9252 24.3682 23.2601 24.2652 23.4904 24.0591C23.7237 23.85 23.8404 23.55 23.8404 23.1591C23.8404 22.7773 23.7222 22.4712 23.4858 22.2409C23.2525 22.0106 22.9313 21.8924 22.5222 21.8864H21.004V24.3682ZM31.5771 25.6864C31.5074 26.4439 31.2286 27.0348 30.7407 27.4591C30.2529 27.8833 29.6029 28.0955 28.7907 28.0955C28.2241 28.0955 27.7241 27.9621 27.2907 27.6955C26.8604 27.4258 26.5286 27.0439 26.2953 26.55C26.0619 26.0561 25.9407 25.4818 25.9316 24.8273V24.1636C25.9316 23.4909 26.0498 22.9 26.2862 22.3909C26.5225 21.8788 26.8635 21.4848 27.3089 21.2091C27.7544 20.9303 28.268 20.7909 28.8498 20.7909C29.6347 20.7909 30.2665 21.0045 30.7453 21.4318C31.2241 21.8591 31.5013 22.4621 31.5771 23.2409H30.3498C30.2892 22.7288 30.1392 22.3606 29.8998 22.1364C29.6604 21.9091 29.3104 21.7955 28.8498 21.7955C28.3135 21.7955 27.9013 21.9924 27.6135 22.3864C27.3256 22.7773 27.1771 23.3515 27.168 24.1091V24.7364C27.168 25.5061 27.3059 26.0924 27.5816 26.4955C27.8574 26.8985 28.2604 27.1 28.7907 27.1C29.2756 27.1 29.6392 26.9909 29.8816 26.7727C30.1271 26.5545 30.2832 26.1924 30.3498 25.6864H31.5771Z"
            fill="white"
          ></path>
        </svg>
      ) : (
        <svg  width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6.74072" y="10.5918" width="38.5185" height="26.963" rx="5" fill="url(#paint0_linear_28650_742)" stroke="url(#paint1_linear_28650_742)" stroke-width="2"></rect><line x1="2.92578" y1="40.4062" x2="49.0739" y2="40.4062" stroke="url(#paint2_linear_28650_742)" stroke-width="2" stroke-linecap="round"></line><line x1="2.92578" y1="40.4062" x2="49.0739" y2="40.4062" stroke="url(#paint3_linear_28650_742)" stroke-width="2" stroke-linecap="round"></line><path d="M21.004 25.3591V28H19.7676V20.8909H22.4858C23.2798 20.8909 23.9101 21.0985 24.3767 21.5136C24.8464 21.9258 25.0813 22.4712 25.0813 23.15C25.0813 23.847 24.8525 24.3894 24.3949 24.7773C23.9373 25.1652 23.2964 25.3591 22.4722 25.3591H21.004ZM21.004 24.3682H22.4858C22.9252 24.3682 23.2601 24.2652 23.4904 24.0591C23.7237 23.85 23.8404 23.55 23.8404 23.1591C23.8404 22.7773 23.7222 22.4712 23.4858 22.2409C23.2525 22.0106 22.9313 21.8924 22.5222 21.8864H21.004V24.3682ZM31.5771 25.6864C31.5074 26.4439 31.2286 27.0348 30.7407 27.4591C30.2529 27.8833 29.6029 28.0955 28.7907 28.0955C28.2241 28.0955 27.7241 27.9621 27.2907 27.6955C26.8604 27.4258 26.5286 27.0439 26.2953 26.55C26.0619 26.0561 25.9407 25.4818 25.9316 24.8273V24.1636C25.9316 23.4909 26.0498 22.9 26.2862 22.3909C26.5225 21.8788 26.8635 21.4848 27.3089 21.2091C27.7544 20.9303 28.268 20.7909 28.8498 20.7909C29.6347 20.7909 30.2665 21.0045 30.7453 21.4318C31.2241 21.8591 31.5013 22.4621 31.5771 23.2409H30.3498C30.2892 22.7288 30.1392 22.3606 29.8998 22.1364C29.6604 21.9091 29.3104 21.7955 28.8498 21.7955C28.3135 21.7955 27.9013 21.9924 27.6135 22.3864C27.3256 22.7773 27.1771 23.3515 27.168 24.1091V24.7364C27.168 25.5061 27.3059 26.0924 27.5816 26.4955C27.8574 26.8985 28.2604 27.1 28.7907 27.1C29.2756 27.1 29.6392 26.9909 29.8816 26.7727C30.1271 26.5545 30.2832 26.1924 30.3498 25.6864H31.5771Z" fill="white"></path><defs><linearGradient id="paint0_linear_28650_742" x1="26" y1="10.5918" x2="26" y2="37.5548" gradientUnits="userSpaceOnUse"><stop stop-color="#FF7E7E"></stop><stop offset="1" stop-color="#ED5D49"></stop></linearGradient><linearGradient id="paint1_linear_28650_742" x1="26" y1="10.5918" x2="26" y2="37.5548" gradientUnits="userSpaceOnUse"><stop stop-color="#FF7E7E"></stop><stop offset="1" stop-color="#ED5D49"></stop></linearGradient><linearGradient id="paint2_linear_28650_742" x1="25.9999" y1="41.4062" x2="25.9999" y2="42.4062" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_28650_742" x1="25.9999" y1="41.4062" x2="25.9999" y2="42.4062" gradientUnits="userSpaceOnUse"><stop stop-color="#ED5D49"></stop><stop offset="1" stop-color="#FF7E7E"></stop></linearGradient></defs></svg>
        )
      ),
      label: "کامپیوتر و لپ تاپ",
      className: "redButton",
      content: <Pc />,
    },
    {
      id: 2,
      labelImg: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.92578"
            y="10.5918"
            width="48.1481"
            height="26.963"
            rx="5"
            fill="#cccccc"
            stroke="#cccccc"
            strokeWidth="2"
          ></rect>
          <line
            x1="15.4443"
            y1="40.4062"
            x2="36.5555"
            y2="40.4062"
            stroke="#cccccc"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <path
            d="M25.0944 21.8864H22.8763V28H21.6535V21.8864H19.4535V20.8909H25.0944V21.8864ZM28.5271 26.45L30.3362 20.8909H31.6907L29.1316 28H27.9362L25.3862 20.8909H26.7407L28.5271 26.45Z"
            fill="white"
          ></path>
        </svg>
      ),
      label: "تلویزیون هوشمند",
      className: "purpleButton",
      content: <TV />,
    },
    {
      id: 3,
      labelImg: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.92578"
            y="10.5918"
            width="48.1481"
            height="26.963"
            rx="5"
            fill="#cccccc"
            stroke="#cccccc"
            strokeWidth="2"
          ></rect>
          <line
            x1="15.4443"
            y1="40.4062"
            x2="36.5555"
            y2="40.4062"
            stroke="#cccccc"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <g clipPath="url(#clip0_28650_3119)">
            <path
              d="M22.9279 27.1359C22.9279 27.4175 23.1583 27.6479 23.4399 27.6479H23.9519V29.4399C23.9519 29.8649 24.2949 30.2079 24.7199 30.2079C25.1448 30.2079 25.4879 29.8649 25.4879 29.4399V27.6479H26.5119V29.4399C26.5119 29.8649 26.8549 30.2079 27.2799 30.2079C27.7048 30.2079 28.0479 29.8649 28.0479 29.4399V27.6479H28.5599C28.8415 27.6479 29.0719 27.4175 29.0719 27.1359V22.0159H22.9279V27.1359ZM21.6479 22.0159C21.2229 22.0159 20.8799 22.359 20.8799 22.7839V26.3679C20.8799 26.7929 21.2229 27.1359 21.6479 27.1359C22.0728 27.1359 22.4159 26.7929 22.4159 26.3679V22.7839C22.4159 22.359 22.0728 22.0159 21.6479 22.0159ZM30.3519 22.0159C29.9269 22.0159 29.5839 22.359 29.5839 22.7839V26.3679C29.5839 26.7929 29.9269 27.1359 30.3519 27.1359C30.7768 27.1359 31.1199 26.7929 31.1199 26.3679V22.7839C31.1199 22.359 30.7768 22.0159 30.3519 22.0159ZM27.8072 19.0258L28.4728 18.3602C28.5752 18.2578 28.5752 18.0991 28.4728 17.9967C28.3704 17.8943 28.2117 17.8943 28.1093 17.9967L27.3516 18.7545C26.9471 18.5497 26.4863 18.4319 25.9999 18.4319C25.5084 18.4319 25.0476 18.5497 24.638 18.7545L23.8751 17.9967C23.7727 17.8943 23.614 17.8943 23.5116 17.9967C23.4092 18.0991 23.4092 18.2578 23.5116 18.3602L24.1823 19.031C23.4245 19.589 22.9279 20.485 22.9279 21.5039H29.0719C29.0719 20.485 28.5752 19.5839 27.8072 19.0258V19.0258ZM24.9759 20.4799H24.4639V19.9679H24.9759V20.4799ZM27.5359 20.4799H27.0239V19.9679H27.5359V20.4799Z"
              fill="white"
            ></path>
          </g>
        </svg>
      ),
      label: "اندروید تی‌وی",
      className: "yellowButton",
      content: <AndroidTV />,
    },
    {
      id: 4,
      labelImg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.531 20.7579C27.5191 18.5729 28.5073 16.9238 30.5077 15.7093C29.3884 14.1078 27.6977 13.2267 25.4651 13.0541C23.3516 12.8874 21.0417 14.2865 20.1963 14.2865C19.3033 14.2865 17.2553 13.1136 15.6478 13.1136C12.3258 13.1672 8.79541 15.7629 8.79541 21.0436C8.79541 22.6034 9.08118 24.2148 9.65271 25.8778C10.4148 28.0628 13.1653 33.4209 16.0348 33.3316C17.5351 33.2959 18.5948 32.2659 20.5475 32.2659C22.4407 32.2659 23.4231 33.3316 25.096 33.3316C27.9894 33.2899 30.4779 28.42 31.2042 26.2291C27.3226 24.4014 27.531 20.871 27.531 20.7579ZM24.1613 10.9823C25.7866 9.05335 25.6378 7.29708 25.5901 6.66602C24.1553 6.74936 22.4943 7.64238 21.5477 8.74377C20.5059 9.92256 19.8927 11.3812 20.0236 13.0243C21.5775 13.1434 22.9944 12.3456 24.1613 10.9823Z"
            fill="#CCCCCC"
          ></path>
        </svg>
      ),
      label: "آی او اس",
      className: "blueButton",
      content: <IOS />,
    },
    {
      id: 5,
      labelImg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_28650_1705)">
            <path
              d="M12.3202 27.8398C12.3202 28.5438 12.8962 29.1198 13.6002 29.1198H14.8802V33.5998C14.8802 34.6622 15.7378 35.5198 16.8002 35.5198C17.8626 35.5198 18.7202 34.6622 18.7202 33.5998V29.1198H21.2802V33.5998C21.2802 34.6622 22.1378 35.5198 23.2002 35.5198C24.2626 35.5198 25.1202 34.6622 25.1202 33.5998V29.1198H26.4002C27.1042 29.1198 27.6802 28.5438 27.6802 27.8398V15.0398H12.3202V27.8398ZM9.1202 15.0398C8.0578 15.0398 7.2002 15.8974 7.2002 16.9598V25.9198C7.2002 26.9822 8.0578 27.8398 9.1202 27.8398C10.1826 27.8398 11.0402 26.9822 11.0402 25.9198V16.9598C11.0402 15.8974 10.1826 15.0398 9.1202 15.0398ZM30.8802 15.0398C29.8178 15.0398 28.9602 15.8974 28.9602 16.9598V25.9198C28.9602 26.9822 29.8178 27.8398 30.8802 27.8398C31.9426 27.8398 32.8002 26.9822 32.8002 25.9198V16.9598C32.8002 15.8974 31.9426 15.0398 30.8802 15.0398ZM24.5186 7.56461L26.1826 5.90061C26.4386 5.64461 26.4386 5.2478 26.1826 4.9918C25.9266 4.7358 25.5298 4.7358 25.2738 4.9918L23.3794 6.88621C22.3682 6.37421 21.2162 6.07981 20.0002 6.07981C18.7714 6.07981 17.6194 6.37421 16.5954 6.88621L14.6882 4.9918C14.4322 4.7358 14.0354 4.7358 13.7794 4.9918C13.5234 5.2478 13.5234 5.64461 13.7794 5.90061L15.4562 7.57741C13.5618 8.97261 12.3202 11.2126 12.3202 13.7598H27.6802C27.6802 11.2126 26.4386 8.95981 24.5186 7.56461V7.56461ZM17.4402 11.1998H16.1602V9.91981H17.4402V11.1998ZM23.8402 11.1998H22.5602V9.91981H23.8402V11.1998Z"
              fill="#CCCC"
            ></path>
          </g>
        </svg>
      ),
      label: "اندروید",
      className: "greenButton",
      content: <Android/>,
    },
  ]);

  useEffect(() => {

    document.title = "دانلود اپلیکیشن های نماوا";
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the default mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later
      setDeferredPrompt(e);
      // Update UI to show the install button
      setShowInstallButton(true);
    };
    

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);
  useEffect(() => {
    // Set default active button and content
    setActiveButtonId(buttons[0].id);
    setActiveContent(buttons[0].content);
  }, [buttons]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        // Clear the deferred prompt
        setDeferredPrompt(null);
        // Hide the install button
        setShowInstallButton(false);
      });
    }
  };

  const handleButtonClick = (button) => {
    setActiveButtonId(button.id);
    setActiveContent(button.content);
  };

  return (
    <div className="d-flex flex-column">
      <div className="appHeroSection">
        <div className="appContainer">
          <div className="d-flex justify-btw align-center ">
            <div className="d-flex flex-column align-start gap-4 ">
              <h2 className="font-xxl-24 font-md-20 font-16 white-color">
                دانلود اپلیکیشن کامپیوتر و لپ تاپ
              </h2>
              <p className="white-color font-xxl-20 font-md-18 font-14 font-weight-normal">
                لذت تماشای نماوا حتی بدون اینترنت
              </p>
              {showInstallButton && (
                <button
                  className="installButton d-flex justify-center align-center gap-1 border-radius-12"
                  style={{ border: "1px solid #fff", padding: ".5rem" }}
                  onClick={handleInstallClick}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0002 17.1667H3.8335M15.6391 9.2963L10.9168 14.0185M10.9168 14.0185L6.19461 9.2963M10.9168 14.0185V3"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="font-12 white-color" id="install">
                    دانلود‌ها
                  </p>
                </button>
              )}
            </div>
            <img
              className="max-w-auto h-auto object-cover"
              style={{ width: "440px" }}
              src="https://static.namava.ir/Content/Upload/Images/66411fa3-f5dd-453b-a55f-84ddd150c609.png"
              alt="laptop"
            />
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column gap-8 justify-center align-center white-bgc"
        style={{ padding: "3rem 0" }}
      >
        <div className="appContainer d-flex flex-column justify-center align-center gap-5">
          <h3 className="font-md-18 font-weight-normal">دستگاه‌‌ها</h3>
          <div className='d-flex flex-row-reverse justify-center align-center gap-4'>
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={() => handleButtonClick(button)}
                className={`d-flex flex-column gap-2 justify-center align-center ${button.className}`}
              >
                {button.labelImg}
                <p className='black-color'>{button.label}</p>
              </button>
            ))}
          </div>
          <div>
            {activeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

