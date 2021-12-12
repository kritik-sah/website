const _offcanvasmenu = () => {
    return (
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 md:hidden">
            <li>
              <h1 className="text-blue-400 text-3xl font-black relative">
                Cryptolancer 
                <label htmlFor="my-drawer-3" className="btn absolute top-2 right-2 btn-circle btn-xs md:btn-sm lg:btn-md xl:btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current md:w-6 md:h-6">   
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>                       
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
    )
}

export default _offcanvasmenu
