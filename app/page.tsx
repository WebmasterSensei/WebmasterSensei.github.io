import "../app/css/nav.css";
import Header from "@/components/pages/header";
import Header2 from "@/components/pages/header2";
import Experties from "@/components/pages/experties";
import ExpertiesDescription from "@/components/pages/expdesc";
import { MarqueeDemo } from "@/components/pages/marque";
import Projects from "@/components/pages/projects";
import Comments from "@/components/pages/comments";


export default function Home() {
  return (
    <div className="bg">
      <div className="h-screen relative flex w-full flex-col md:flex-row  justify-center md:shadow-xl text-white space-x-10">
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center p-10">
          <Header />
        </div>
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center p-10">
          <Header2 />
        </div>
      </div>
      <div className="h-screen relative flex w-full flex-col md:flex-row  justify-center md:shadow-xl text-white space-x-10">
        <div className=" w-full md:w-1/3 flex flex-col overflow-hidden h-full justify-center p-10">
          <ExpertiesDescription text="Programming is the process of writing instructions that a computer can understand and execute to perform specific tasks. Programmers create algorithms (a set of instructions) to manipulate data, automate tasks, and build software applications, websites, and systems." />
        </div>
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center p-10">
          <Experties />
        </div>
      </div>
      <div className="text-center space-y-5 pt-32">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Testimonies
        </span>
        <p className="text-white/50">I do awesome services for my clients</p>
      </div>

      <div className="h-screen relative flex w-full flex-col md:flex-row  justify-center md:shadow-xl text-white space-x-10">
        <div className=" w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center p-10">
          <MarqueeDemo />
        </div>
        <div className="w-full md:w-1/3 flex flex-col overflow-hidden h-full justify-center p-10">
          <ExpertiesDescription text="Dream big, plan small, and get stuff done one checkmark at a time. Don't just plan—execute, because progress over perfection will help you conquer the day!" />
        </div>
      </div>

      <div className="text-center space-y-5 pt-32">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Projects
        </span>
        <p className="text-white/50">Some Projects Im Working on</p>
      </div>
      <Projects />
      
      <Comments />
    </div>
  );
}
