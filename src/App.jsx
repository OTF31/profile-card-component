import BgPatternBottom from "./assets/bg-pattern-bottom.svg";
import BgPatternTop from "./assets/bg-pattern-top.svg";
import BgPatternCard from "./assets/bg-pattern-card.svg";

import ProfileImage from "./assets/image-victor.jpg";

const App = () => {
  // bg-[#19A2AE]
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#19A2AE]">
        <div className="fixed top-0 left-0 h-[400px] w-[200px] bg-[url('./assets/bg-pattern-top.svg')] bg-right-bottom bg-no-repeat"></div>
        <div className="fixed bottom-0 right-0 h-[400px] w-[200px] bg-[url('./assets/bg-pattern-bottom.svg')] bg-left-top bg-no-repeat"></div>

        <div className="z-20 h-[375px] w-[325px] rounded-xl bg-white font-kumbhSans">
          <div className="mb-[75px] flex h-[140px] items-center justify-center bg-[url('./assets/bg-pattern-card.svg')]">
            <img
              src={ProfileImage}
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

          <div className="mt-[25px] flex justify-center gap-11 text-center">
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

      {/* <img src={BgPatternBottom} className="fixed bottom-0 right-0" />
      <img src={BgPatternTop} className="fixed left-0 top-0" /> */}
    </>
  );
};

export default App;
