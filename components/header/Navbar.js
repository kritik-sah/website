import Mainmenu from './_mainmenu'
import LoginAuth from './_loginAuth'
const Navbar = () => {
    return (
        <div className="w-full fixed top-0 z-50 py-4 px-6 navbar shadow-md bg-white">
            <div className="flex-1 item-center px-2 mx-2">
              <span className="text-lg font-bold">Cryptolancer</span>
            </div>

            <Mainmenu/>

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

              <LoginAuth/>
   
          </div>
    )
}

export default Navbar
