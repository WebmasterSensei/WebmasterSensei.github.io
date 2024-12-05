export default function Projects() {
  return (
    <div className="h-screen relative flex w-full flex-col md:flex-row  justify-center md:shadow-xl p-10 text-white">
      <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center p-2">
        <div className="card m-auto text-gray-300 w-full hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">CCM</div>
            <div className="text-gray-300 uppercase tracking-widest">Local</div>
            <div className="text-gray-400 mt-8">
              <p>Cheque Clearing Monitoring System</p>
            </div>
          </div>

          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center p-2">
        <div className="card m-auto text-gray-300 w-full hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">ALTURASH</div>
            <div className="text-gray-300 uppercase tracking-widest">
              Online
            </div>
            <div className="text-gray-400 mt-8">
              {/* <p className="font-bold">Ecomerce Alturash</p> */}
              <p>Alturas Web Application Alturash.com</p>
            </div>
          </div>

          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center p-2">
        <div className="card m-auto text-gray-300 w-full hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">GC</div>
            <div className="text-gray-300 uppercase tracking-widest">Local</div>
            <div className="text-gray-400 mt-8">
              <p>
                Gift Checks Monitoring <br />
                System{" "}
              </p>
            </div>
          </div>

          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center p-2">
        <div className="card m-auto text-gray-300 w-full hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">BRS</div>
            <div className="text-gray-300 uppercase tracking-widest">Local</div>
            <div className="text-gray-400 mt-8">
              <p>
                Bank Reconcilation <br /> System
              </p>
            </div>
          </div>

          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </div>
      </div>
    </div>
  );
}
