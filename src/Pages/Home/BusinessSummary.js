import React from "react";

const BusinessSummary = () => {
  return (
    <div className="flex justify-center items-center flex-col py-20  px-2">
      <div className="title">
        <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
          Business <span className="text-green-700">Summary</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-8">
        {/* partner summary  */}
        <div className="partner">
          <div class="stats shadow-md hover:bg-base-200 p-10">
            <div class="stat flex justify-center items-center flex-col">
              <div className="icon my-2">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.76703 16.9213L1.25224 15.6711C0.748882 15.8784 0.418917 16.3673 0.415029 16.9117C0.411141 17.456 0.734089 17.9496 1.23444 18.1641L1.76703 16.9213ZM38.8486 1.65247L40.0988 2.16725C40.3066 1.66255 40.1906 1.08238 39.8046 0.696433C39.4187 0.310482 38.8385 0.19445 38.3338 0.402269L38.8486 1.65247ZM23.5797 38.734L22.337 39.2666C22.5514 39.767 23.045 40.0899 23.5894 40.086C24.1337 40.0821 24.6226 39.7522 24.8299 39.2488L23.5797 38.734ZM2.28182 18.1715L39.3634 2.90266L38.3338 0.402269L1.25224 15.6711L2.28182 18.1715ZM37.5984 1.13768L22.3295 38.2192L24.8299 39.2488L40.0988 2.16725L37.5984 1.13768ZM24.8224 38.2014L18.2786 22.9326L15.7932 23.9977L22.337 39.2666L24.8224 38.2014ZM17.5685 22.2224L2.29962 15.6786L1.23444 18.1641L16.5033 24.7079L17.5685 22.2224ZM37.8926 0.696433L16.0799 22.5091L17.9919 24.4212L39.8046 2.6085L37.8926 0.696433Z"
                    fill="#006837"
                  />
                </svg>
              </div>
              <div class="stat-value">500+</div>
              <div class="stat-desc text-xl">Partner</div>
            </div>
          </div>
        </div>
        {/* customers summary  */}
        <div className="customers">
          <div class="stats shadow-md hover:bg-base-200 p-10">
            <div class="stat flex justify-center items-center flex-col">
              <div className="icon my-2">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.4927 15.5148C45.0207 14.9868 45.0207 14.1308 44.4927 13.6028C43.9647 13.0748 43.1086 13.0748 42.5806 13.6028L44.4927 15.5148ZM36.5567 21.5387L35.6007 22.4947C36.1287 23.0227 36.9848 23.0227 37.5128 22.4947L36.5567 21.5387ZM33.5864 16.6564C33.0584 16.1284 32.2023 16.1285 31.6743 16.6565C31.1463 17.1845 31.1463 18.0406 31.6743 18.5685L33.5864 16.6564ZM36.9928 40.734V42.086C37.7395 42.086 38.3449 41.4807 38.3449 40.734H36.9928ZM2.09253 40.734H0.740495C0.740495 41.4807 1.34582 42.086 2.09253 42.086L2.09253 40.734ZM42.5806 13.6028L35.6007 20.5827L37.5128 22.4947L44.4927 15.5148L42.5806 13.6028ZM31.6743 18.5685L35.6007 22.4947L37.5127 20.5826L33.5864 16.6564L31.6743 18.5685ZM10.8176 28.9984H28.2677V26.2944H10.8176V28.9984ZM35.6408 36.3715V40.734H38.3449V36.3715H35.6408ZM3.44456 40.734V36.3715H0.740495V40.734H3.44456ZM28.2677 28.9984C32.3398 28.9984 35.6408 32.2995 35.6408 36.3715H38.3449C38.3449 30.806 33.8332 26.2944 28.2677 26.2944V28.9984ZM10.8176 26.2944C5.25217 26.2944 0.740495 30.806 0.740495 36.3715H3.44456C3.44456 32.2995 6.74558 28.9984 10.8176 28.9984V26.2944ZM26.9157 10.1963C26.9157 14.2683 23.6147 17.5693 19.5427 17.5693V20.2734C25.1081 20.2734 29.6198 15.7617 29.6198 10.1963H26.9157ZM19.5427 17.5693C15.4707 17.5693 12.1696 14.2683 12.1696 10.1963H9.46557C9.46557 15.7617 13.9772 20.2734 19.5427 20.2734V17.5693ZM12.1696 10.1963C12.1696 6.12425 15.4707 2.82323 19.5427 2.82323V0.119157C13.9772 0.119157 9.46557 4.63083 9.46557 10.1963H12.1696ZM19.5427 2.82323C23.6147 2.82323 26.9157 6.12425 26.9157 10.1963H29.6198C29.6198 4.63083 25.1081 0.119157 19.5427 0.119157V2.82323ZM2.09253 42.086H36.9928V39.382H2.09253V42.086Z"
                    fill="#006837"
                  />
                </svg>
              </div>

              <div class="stat-value">450+</div>
              <div class="stat-desc text-xl">Customers</div>
            </div>
          </div>
        </div>
        {/* community summary   */}
        <div className="community">
          <div class="stats shadow-md hover:bg-base-200 p-10">
            <div class="stat flex justify-center items-center flex-col">
              <div className="icon my-2">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 52 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.6907 32.3713H0.33867C0.33867 33.1181 0.943996 33.7234 1.6907 33.7234L1.6907 32.3713ZM6.05324 33.7234C6.79995 33.7234 7.40527 33.1181 7.40527 32.3713C7.40527 31.6246 6.79995 31.0193 6.05324 31.0193V33.7234ZM8.57151 23.0492C9.29465 22.8631 9.72999 22.126 9.54387 21.4029C9.35774 20.6797 8.62064 20.2444 7.8975 20.4305L8.57151 23.0492ZM12.1465 15.8236C12.8505 16.0725 13.623 15.7035 13.8718 14.9994C14.1206 14.2954 13.7516 13.523 13.0476 13.2741L12.1465 15.8236ZM13.0476 3.48075C13.7516 3.23191 14.1206 2.45946 13.8718 1.75543C13.623 1.05141 12.8505 0.682405 12.1465 0.931242L13.0476 3.48075ZM49.6786 32.3713V33.7234C50.4253 33.7234 51.0306 33.1181 51.0306 32.3713H49.6786ZM45.3161 31.0193C44.5694 31.0193 43.964 31.6246 43.964 32.3713C43.964 33.1181 44.5694 33.7234 45.3161 33.7234V31.0193ZM43.4718 20.4305C42.7487 20.2444 42.0116 20.6797 41.8254 21.4029C41.6393 22.126 42.0746 22.8631 42.7978 23.0492L43.4718 20.4305ZM39.2228 0.931242C38.5188 0.682405 37.7463 1.05141 37.4975 1.75543C37.2487 2.45946 37.6177 3.23191 38.3217 3.48075L39.2228 0.931242ZM38.3217 13.2741C37.6177 13.523 37.2487 14.2954 37.4975 14.9994C37.7463 15.7035 38.5188 16.0725 39.2228 15.8236L38.3217 13.2741ZM38.7723 32.3714V33.7234C39.519 33.7234 40.1243 33.1181 40.1243 32.3714H38.7723ZM12.597 32.3714H11.245C11.245 33.1181 11.8503 33.7234 12.597 33.7234V32.3714ZM0.33867 30.1901V32.3713H3.04274V30.1901H0.33867ZM1.6907 33.7234H6.05324V31.0193H1.6907V33.7234ZM3.04274 30.1901C3.04274 26.7564 5.39118 23.8678 8.57151 23.0492L7.8975 20.4305C3.55147 21.5491 0.33867 25.4927 0.33867 30.1901H3.04274ZM6.88247 8.37744C6.88247 11.8175 9.08158 14.7404 12.1465 15.8236L13.0476 13.2741C11.0293 12.5608 9.58654 10.6359 9.58654 8.37744H6.88247ZM12.1465 0.931242C9.08158 2.01453 6.88247 4.93743 6.88247 8.37744H9.58654C9.58654 6.11903 11.0293 4.19411 13.0476 3.48075L12.1465 0.931242ZM48.3266 30.1901V32.3713H51.0306V30.1901H48.3266ZM49.6786 31.0193H45.3161V33.7234H49.6786V31.0193ZM51.0306 30.1901C51.0306 25.4927 47.8178 21.5491 43.4718 20.4305L42.7978 23.0492C45.9781 23.8678 48.3266 26.7564 48.3266 30.1901H51.0306ZM38.3217 3.48075C40.34 4.19411 41.7828 6.11903 41.7828 8.37744H44.4868C44.4868 4.93743 42.2877 2.01453 39.2228 0.931242L38.3217 3.48075ZM41.7828 8.37744C41.7828 10.6359 40.34 12.5608 38.3217 13.2741L39.2228 15.8236C42.2877 14.7404 44.4868 11.8175 44.4868 8.37744H41.7828ZM21.3221 22.8171H30.0472V20.113H21.3221V22.8171ZM37.4202 30.1901V32.3714H40.1243V30.1901H37.4202ZM13.9491 32.3714V30.1901H11.245V32.3714H13.9491ZM30.0472 22.8171C34.1192 22.8171 37.4202 26.1181 37.4202 30.1901H40.1243C40.1243 24.6247 35.6126 20.113 30.0472 20.113V22.8171ZM21.3221 20.113C15.7567 20.113 11.245 24.6247 11.245 30.1901H13.9491C13.9491 26.1181 17.2501 22.8171 21.3221 22.8171V20.113ZM38.7723 31.0193H12.597V33.7234H38.7723V31.0193ZM30.8764 8.37742C30.8764 11.2448 28.552 13.5692 25.6847 13.5692V16.2733C30.0454 16.2733 33.5805 12.7382 33.5805 8.37742H30.8764ZM25.6847 13.5692C22.8173 13.5692 20.4929 11.2448 20.4929 8.37742H17.7888C17.7888 12.7382 21.3239 16.2733 25.6847 16.2733V13.5692ZM20.4929 8.37742C20.4929 5.51009 22.8173 3.18565 25.6847 3.18565V0.481584C21.3239 0.481584 17.7888 4.01667 17.7888 8.37742H20.4929ZM25.6847 3.18565C28.552 3.18565 30.8764 5.51009 30.8764 8.37742H33.5805C33.5805 4.01667 30.0454 0.481584 25.6847 0.481584V3.18565Z"
                    fill="#006837"
                  />
                </svg>
              </div>

              <div class="stat-value">300+</div>
              <div class="stat-desc text-xl">Community</div>
            </div>
          </div>
        </div>
        {/* positive feedback summary  */}
        <div className="feedback">
          <div class="stats shadow-md hover:bg-base-200 p-10">
            <div class="stat flex justify-center items-center flex-col">
              <div className="icon my-2">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.4636 18.6599C28.7169 18.6599 28.1115 19.2653 28.1115 20.012C28.1115 20.7587 28.7169 21.364 29.4636 21.364V18.6599ZM29.4854 21.364C30.2321 21.364 30.8374 20.7587 30.8374 20.012C30.8374 19.2653 30.2321 18.6599 29.4854 18.6599V21.364ZM20.7385 18.6599C19.9918 18.6599 19.3865 19.2653 19.3865 20.012C19.3865 20.7587 19.9918 21.364 20.7385 21.364V18.6599ZM20.7603 21.364C21.507 21.364 22.1123 20.7587 22.1123 20.012C22.1123 19.2653 21.507 18.6599 20.7603 18.6599V21.364ZM12.0134 18.6599C11.2667 18.6599 10.6614 19.2653 10.6614 20.012C10.6614 20.7587 11.2667 21.364 12.0134 21.364V18.6599ZM12.0352 21.364C12.7819 21.364 13.3873 20.7587 13.3873 20.012C13.3873 19.2653 12.7819 18.6599 12.0352 18.6599V21.364ZM29.0274 36.5897L29.4549 35.3071C29.0368 35.1677 28.577 35.2409 28.2228 35.5031L29.0274 36.5897ZM41.4606 40.7341L41.0331 42.0168C41.5189 42.1787 42.0545 42.0523 42.4166 41.6902C42.7788 41.328 42.9052 40.7924 42.7433 40.3066L41.4606 40.7341ZM37.3162 28.3009L36.2045 27.5313C35.9623 27.8812 35.899 28.3247 36.0335 28.7284L37.3162 28.3009ZM29.4636 21.364H29.4854V18.6599H29.4636V21.364ZM20.7385 21.364H20.7603V18.6599H20.7385V21.364ZM12.0134 21.364H12.0352V18.6599H12.0134V21.364ZM28.5998 37.8724L41.0331 42.0168L41.8882 39.4515L29.4549 35.3071L28.5998 37.8724ZM42.7433 40.3066L38.5988 27.8733L36.0335 28.7284L40.1779 41.1617L42.7433 40.3066ZM20.7385 37.2007C11.2454 37.2007 3.54976 29.505 3.54976 20.012H0.845689C0.845689 30.9985 9.752 39.9048 20.7385 39.9048V37.2007ZM3.54976 20.012C3.54976 10.5189 11.2454 2.82323 20.7385 2.82323V0.119157C9.752 0.119157 0.845689 9.02547 0.845689 20.012H3.54976ZM20.7385 2.82323C30.2316 2.82323 37.9272 10.5189 37.9272 20.012H40.6313C40.6313 9.02547 31.725 0.119157 20.7385 0.119157V2.82323ZM29.0274 36.5897C28.2228 35.5031 28.2233 35.5028 28.2238 35.5024C28.224 35.5023 28.2245 35.5019 28.2248 35.5016C28.2255 35.5012 28.2261 35.5007 28.2266 35.5003C28.2277 35.4995 28.2287 35.4988 28.2295 35.4982C28.2312 35.497 28.2322 35.4963 28.2325 35.496C28.2333 35.4955 28.2315 35.4967 28.2273 35.4997C28.2187 35.5056 28.2001 35.5183 28.1713 35.5367C28.1138 35.5737 28.0158 35.634 27.8765 35.7101C27.5981 35.8623 27.1545 36.0783 26.5405 36.2987C25.3149 36.7385 23.397 37.2007 20.7385 37.2007V39.9048C23.7179 39.9048 25.9444 39.3855 27.4539 38.8438C28.2073 38.5734 28.7788 38.2986 29.1736 38.0827C29.371 37.9749 29.5241 37.8817 29.6336 37.8114C29.6883 37.7762 29.7322 37.7467 29.7652 37.7238C29.7817 37.7124 29.7955 37.7026 29.8067 37.6947C29.8122 37.6907 29.8171 37.6872 29.8213 37.6841C29.8234 37.6825 29.8254 37.6811 29.8272 37.6798C29.828 37.6792 29.8289 37.6785 29.8297 37.678C29.8301 37.6777 29.8307 37.6772 29.8309 37.6771C29.8314 37.6767 29.832 37.6763 29.0274 36.5897ZM37.9272 20.012C37.9272 22.5732 37.4667 24.4935 37.0228 25.7514C36.8005 26.3813 36.5817 26.8469 36.4255 27.1448C36.3474 27.2938 36.2849 27.4008 36.2456 27.4654C36.226 27.4977 36.2121 27.5194 36.2049 27.5304C36.2013 27.5359 36.1994 27.5388 36.1993 27.5389C36.1993 27.539 36.1997 27.5384 36.2005 27.5371C36.201 27.5365 36.2015 27.5357 36.2022 27.5347C36.2025 27.5343 36.2029 27.5337 36.2033 27.5332C36.2035 27.5329 36.2038 27.5324 36.2039 27.5323C36.2042 27.5318 36.2045 27.5313 37.3162 28.3009C38.4278 29.0704 38.4282 29.0699 38.4285 29.0694C38.4287 29.0693 38.429 29.0687 38.4293 29.0684C38.4298 29.0676 38.4303 29.0668 38.4309 29.066C38.432 29.0643 38.4333 29.0625 38.4347 29.0605C38.4374 29.0565 38.4406 29.0517 38.4443 29.0463C38.4516 29.0354 38.4608 29.0216 38.4715 29.005C38.4931 28.9718 38.5214 28.9272 38.5555 28.8713C38.6235 28.7596 38.7144 28.6024 38.8204 28.4004C39.0323 27.9962 39.3042 27.412 39.5727 26.6513C40.1103 25.128 40.6313 22.9039 40.6313 20.012H37.9272Z"
                    fill="#006837"
                  />
                </svg>
              </div>

              <div class="stat-value">460+</div>
              <div class="stat-desc text-xl">Partner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;