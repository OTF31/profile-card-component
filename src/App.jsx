import BgPatternBottom from "./assets/bg-pattern-bottom.svg";
import BgPatternTop from "./assets/bg-pattern-top.svg";

import ProfileImage from "./assets/image-victor.jpg";

const App = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#19A2AE] py-[30px]">
        <img
          src={BgPatternTop}
          alt="Background pattern top"
          className="fixed top-0 left-0 -translate-y-[50%] -translate-x-[50%] scale-y-150 lg:scale-y-100 lg:scale-x-150"
        />

        <img
          src={BgPatternBottom}
          alt="Background pattern bottom"
          className="fixed bottom-0 right-0 translate-y-[50%] translate-x-[50%] scale-y-150 lg:scale-y-75 lg:scale-x-150"
        />

        <div className="z-20 h-[375px] w-[325px] rounded-xl bg-white font-kumbhSans lg:w-[350px]">
          <div className="mb-[75px] flex h-[140px] items-center justify-center rounded-t-xl bg-[url('./assets/bg-pattern-card.svg')]">
            <img
              src={ProfileImage}
              alt="Profile"
              className="relative top-[70px] rounded-full border-4 border-white"
            />
          </div>

          <div className="mb-4 text-center">
            <p className="text-[18px]">
              <span className="font-bold">Victor Crest</span>
              <span>&nbsp;&nbsp;</span>
              <span className="text-black/60">26</span>
            </p>
            <h2 className="text-black/60">London</h2>
          </div>

          <div className="h-[1px] w-full bg-slate-200"></div>

          <div className="mt-[25px] flex justify-center gap-11 text-center lg:gap-12">
            <div>
              <p className="text-[18px] font-bold">80K</p>
              <p className="text-xs tracking-widest text-black/60">Followers</p>
            </div>

            <div>
              <p className="text-[18px] font-bold">803K</p>
              <p className="text-xs tracking-widest text-black/60">Likes</p>
            </div>

            <div>
              <p className="text-[18px] font-bold">1.4K</p>
              <p className="text-xs tracking-widest text-black/60">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
