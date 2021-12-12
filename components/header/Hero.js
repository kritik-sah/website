const Hero = () => {
    return (
        <>
            <header className="w-full pt-14 md:pt-0 bg-transparent min-h-screen">
                <div className="container px-2 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen items-center justify-center">


                    <div className="text-gray-50 text-left">
                        <h3 className="mb-2 text-xl md:text-3xl font-bold">
                            Welcome to
                        </h3>
                        <h1 className="mb-6 text-3xl md:text-6xl font-black">
                            Cryptolancer
                        </h1>
                        <p className="mb-8 w-full text-base md:text-lg font-mono">
                            We provide the best digital platform to connect
                            "Talent's", you would love❤️ to work with.
                        </p>

                        <div className="flex mb-8 w-full md:w-10/12 bg-gray-50 rounded-full p-1 items-center">
                            <input className="bg-transparent ml-4 border-0 outline-none w-full p-1 text-gray-900 placeholder:text-grey-700" id="search" type="text" placeholder="Search..." />
                            <button htmlFor="search" className="btn bg-blue-400 btn-circle h-6 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>




                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto md:mx-0 md:w-10/12 leading-4 items-center justify-start">
                            <button className="btn leading-5 btn-lg text-base  bg-blue-800 font-bold text-blue-50">Hire a Tallent</button>
                            <button className="btn leading-5 btn-lg text-base  bg-blue-50 font-bold text-gray-900 hover:text-blue-50">Be a cryptolancer</button>
                            <button className="btn leading-5 btn-lg text-base  bg-blue-50 font-bold text-gray-900 hover:text-blue-50">Switch networks</button>
                        </div>

                    </div>
                    <div className="items-center justify-center  hidden md:flex space-y-2">
                        <div className=" m-auto card bg-white indicator shadow-lg">
                            <div className="card-title">
                            <div className=" absolute z-10 top-1 left-1 badge badge-error">#LIVE</div> 
                            </div>
                            <div className="card-body overflow-y-auto h-96">
                                <div className="h-full">
                                    <table className="table h-full">
                                        <thead className="sticky">
                                            <tr>
                                                <th>from</th>
                                                <th>to</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>50 Dai</td>
                                            </tr>
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>50 Matic</td>
                                            </tr>
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>50 Avax</td>
                                            </tr>
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>0.50 Eth</td>
                                            </tr>
                                        
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>50 BNB</td>
                                            </tr>
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>50 BNB</td>
                                            </tr>
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>50 BNB</td>
                                            </tr>
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>50 BNB</td>
                                            </tr>
                                            <tr className="hover">
                                                <td>from Address</td>
                                                <td>to Address</td>
                                                <td>50 BNB</td>
                                            </tr>
                                           
                                        
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero
