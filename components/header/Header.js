import { useMoralis } from "react-moralis";

const Header = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  return (
    <>
      <div className="rounded-lg shadow bg-blue-400 drawer h-screen">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <div className="w-full py-4 navbar shadow-md bg-white">
            <div className="flex-1 item-center px-2 mx-2">
              <span className="text-lg font-bold">Cryptolancer</span>
            </div>

            <div className="flex-none hidden px-2 mx-2 md:flex">
              <div className="flex items-center">
                <a className="btn btn-ghost btn-sm rounded-btn">HOME</a>

                <a className="btn btn-ghost btn-sm rounded-btn">ABOUT</a>

                <div className="dropdown dropdown-end">
                  <div tabIndex="0" className="btn btn-ghost rounded-btn">
                    GET STARTED
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400 hover:text-blue-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex="0"
                    className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-64"
                  >
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Hire a tallent!!!
                      </a>
                    </li>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        Be a Cryptolancer!!
                      </a>
                    </li>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Post a project!
                      </a>
                    </li>
                  </ul>
                </div>

                <a className="btn btn-ghost btn-sm rounded-btn">CONTACT</a>
              </div>
            </div>

            <div className="flex-none md:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none">
              {isAuthenticated ? (
                <>
                  <label htmlFor="logedin-user-avtar" className="modal-button avatar">
                    <div className="inline-block w-10 h-10 mask mask-hexagon">
                      <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
                    </div>
                  </label>
                  <input
                    type="checkbox"
                    id="logedin-user-avtar"
                    className="modal-toggle"
                  />

                  <div className="modal">
                    <div className="modal-box">

                        <div className="tabs">
                            <a className="tab p-2 tab-lifted tab-active">STATS</a> 
                            <a className="tab p-2 tab-lifted ">ACTIVE</a> 
                            <a className="tab p-2 tab-lifted">MESSAGES</a>
                        </div>


                      <label
                        htmlFor="logedin-user-avtar"
                        className="absolute -top-3 -right-3 btn btn-circle btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-4 h-4 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </label>

                      <div className="modal-action">
                        <label htmlFor="logedin-user-avtar" className="btn btn-primary">
                          Visit Profile
                        </label>
                        <label
                          onClick={logout}
                          htmlFor="logedin-user-avtar"
                          className="btn"
                        >
                          Logout
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <label
                    htmlFor="my-modal-2"
                    className="btn btn-square btn-ghost modal-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-6 h-6 stroke-current"
                      viewBox="0 0 212 189"
                    >
                      <g fill="none" fillRule="evenodd">
                        <polygon
                          fill="#CDBDB2"
                          points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                        />
                        <polygon
                          fill="#CDBDB2"
                          points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                          transform="matrix(-1 0 0 1 256.5 0)"
                        />
                        <polygon
                          fill="#393939"
                          points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                        />
                        <polygon
                          fill="#F89C35"
                          points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                        />
                        <polygon
                          fill="#F89D35"
                          points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                        />
                        <polygon
                          fill="#D87C30"
                          points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                        />
                        <polygon
                          fill="#EA8D3A"
                          points="46.125 101.813 65.25 119.813 65.25 137.813"
                        />
                        <polygon
                          fill="#F89D35"
                          points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                        />
                        <polygon
                          fill="#EB8F35"
                          points="65.25 138.375 60.75 173.25 90.563 152.438"
                        />
                        <polygon
                          fill="#EA8E3A"
                          points="92.25 102.375 95.063 150.188 86.625 125.719"
                        />
                        <polygon
                          fill="#D87C30"
                          points="39.375 138.938 65.25 138.375 60.75 173.25"
                        />
                        <polygon
                          fill="#EB8F35"
                          points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                        />
                        <polygon
                          fill="#E8821E"
                          points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                        />
                        <polygon
                          fill="#DFCEC3"
                          points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                        />
                        <polygon
                          fill="#DFCEC3"
                          points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                          transform="matrix(-1 0 0 1 272.25 0)"
                        />
                        <polygon
                          fill="#393939"
                          points="70.313 112.5 64.125 125.438 86.063 119.813"
                          transform="matrix(-1 0 0 1 150.188 0)"
                        />
                        <polygon
                          fill="#E88F35"
                          points="12.375 .563 88.875 58.5 75.938 27"
                        />
                        <path
                          fill="#8E5A30"
                          d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                        />
                        <g transform="matrix(-1 0 0 1 211.5 0)">
                          <polygon
                            fill="#F89D35"
                            points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                          />
                          <polygon
                            fill="#D87C30"
                            points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                          />
                          <polygon
                            fill="#EA8D3A"
                            points="46.125 101.813 65.25 119.813 65.25 137.813"
                          />
                          <polygon
                            fill="#F89D35"
                            points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                          />
                          <polygon
                            fill="#EB8F35"
                            points="65.25 138.375 60.75 173.25 90 153"
                          />
                          <polygon
                            fill="#EA8E3A"
                            points="92.25 102.375 95.063 150.188 86.625 125.719"
                          />
                          <polygon
                            fill="#D87C30"
                            points="39.375 138.938 65.25 138.375 60.75 173.25"
                          />
                          <polygon
                            fill="#EB8F35"
                            points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                          />
                          <polygon
                            fill="#E8821E"
                            points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                          />
                          <polygon
                            fill="#393939"
                            points="70.313 112.5 64.125 125.438 86.063 119.813"
                            transform="matrix(-1 0 0 1 150.188 0)"
                          />
                          <polygon
                            fill="#E88F35"
                            points="12.375 .563 88.875 58.5 75.938 27"
                          />
                          <path
                            fill="#8E5A30"
                            d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                  <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <h2 className="text-xl mb-4 font-bold text-blue-600">
                        Connect your wallet
                      </h2>
                      <div className="flex justify-center">
                        {/* MetaMask */}
                        <button
                          onClick={() => {
                            authenticate({ provider: "metamask" });
                          }}
                          className="btn btn-circle btn-ghost m-2 btn-lg"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 stroke-current"
                            viewBox="0 0 212 189"
                          >
                            <g fill="none" fillRule="evenodd">
                              <polygon
                                fill="#CDBDB2"
                                points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                              />
                              <polygon
                                fill="#CDBDB2"
                                points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                                transform="matrix(-1 0 0 1 256.5 0)"
                              />
                              <polygon
                                fill="#393939"
                                points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                              />
                              <polygon
                                fill="#F89C35"
                                points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                              />
                              <polygon
                                fill="#F89D35"
                                points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                              />
                              <polygon
                                fill="#D87C30"
                                points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                              />
                              <polygon
                                fill="#EA8D3A"
                                points="46.125 101.813 65.25 119.813 65.25 137.813"
                              />
                              <polygon
                                fill="#F89D35"
                                points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                              />
                              <polygon
                                fill="#EB8F35"
                                points="65.25 138.375 60.75 173.25 90.563 152.438"
                              />
                              <polygon
                                fill="#EA8E3A"
                                points="92.25 102.375 95.063 150.188 86.625 125.719"
                              />
                              <polygon
                                fill="#D87C30"
                                points="39.375 138.938 65.25 138.375 60.75 173.25"
                              />
                              <polygon
                                fill="#EB8F35"
                                points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                              />
                              <polygon
                                fill="#E8821E"
                                points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                              />
                              <polygon
                                fill="#DFCEC3"
                                points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                              />
                              <polygon
                                fill="#DFCEC3"
                                points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                                transform="matrix(-1 0 0 1 272.25 0)"
                              />
                              <polygon
                                fill="#393939"
                                points="70.313 112.5 64.125 125.438 86.063 119.813"
                                transform="matrix(-1 0 0 1 150.188 0)"
                              />
                              <polygon
                                fill="#E88F35"
                                points="12.375 .563 88.875 58.5 75.938 27"
                              />
                              <path
                                fill="#8E5A30"
                                d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                              />
                              <g transform="matrix(-1 0 0 1 211.5 0)">
                                <polygon
                                  fill="#F89D35"
                                  points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                                />
                                <polygon
                                  fill="#D87C30"
                                  points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                                />
                                <polygon
                                  fill="#EA8D3A"
                                  points="46.125 101.813 65.25 119.813 65.25 137.813"
                                />
                                <polygon
                                  fill="#F89D35"
                                  points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                                />
                                <polygon
                                  fill="#EB8F35"
                                  points="65.25 138.375 60.75 173.25 90 153"
                                />
                                <polygon
                                  fill="#EA8E3A"
                                  points="92.25 102.375 95.063 150.188 86.625 125.719"
                                />
                                <polygon
                                  fill="#D87C30"
                                  points="39.375 138.938 65.25 138.375 60.75 173.25"
                                />
                                <polygon
                                  fill="#EB8F35"
                                  points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                                />
                                <polygon
                                  fill="#E8821E"
                                  points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                                />
                                <polygon
                                  fill="#393939"
                                  points="70.313 112.5 64.125 125.438 86.063 119.813"
                                  transform="matrix(-1 0 0 1 150.188 0)"
                                />
                                <polygon
                                  fill="#E88F35"
                                  points="12.375 .563 88.875 58.5 75.938 27"
                                />
                                <path
                                  fill="#8E5A30"
                                  d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </button>

                        <button
                          onClick={() => {
                            authenticate({
                              provider: "walletconnect",
                              mobileLinks: [
                                "metamask",
                                "trust",
                                "rainbow",
                                "argent",
                                "imtoken",
                                "pillar",
                              ],
                            });
                          }}
                          className="btn btn-circle btn-ghost m-2 btn-lg"
                        >
                          <svg
                            className="inline-block w-6 h-6 stroke-current"
                            viewBox="0 0 300 185"
                          >
                            <title>WalletConnect</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="walletconnect-logo-alt"
                                fill="#3B99FC"
                                fillRule="nonzero"
                              >
                                <path
                                  d="M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z"
                                  id="WalletConnect"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>

                      <p className="text-center text-gray-600">--OR--</p>

                      <div className="modal-action">
                        <label htmlFor="my-modal-2" className="btn btn-primary">
                          Accept
                        </label>
                        <label htmlFor="my-modal-2" className="btn">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="drawer-side md:hidden">
          <label htmlFor="my-drawer-3" className="drawer-overlay md:hidden"></label>
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 md:hidden">
            <li>
              <h1 className="text-blue-400 text-3xl font-black relative">
                Cryptolancer 
                <label htmlFor="my-drawer-3" class="btn absolute top-2 right-2 btn-circle btn-xs md:btn-sm lg:btn-md xl:btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6">   
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
                    </svg>
                </label>
              </h1>
            </li>
            <li className="mt-4">
              <a>Home</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Hire a cryptolancer</a>
            </li>
            <li>
              <a>Be a cryptolancer</a>
            </li>
            <li>
              <a>Post a project</a>
            </li>
            <li>
              <a>Explore projects</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
      </div>

      
    </>
  );
};

export default Header;
