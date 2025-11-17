import Image from "next/image";
import Timeline from "@/app/components/Timeline";
import {BottomNavigation} from "@mui/material";

export default function Home() {
  return (
    <div>
      <section className={"flex flex-col items-center justify-center bg-indigo-900 min-h-[calc(100dvh-2.5rem)]"}>
        <div className={"text-center bg-black/50 p-18 border-4 border-gray-200/80"}>
          <h1 className={"text-white text-4xl md:text-7xl"}>I'M MICHAEL CHO</h1>
          <h2 className={"text-white text-xl md:text-4xl"}>Full-stack developer</h2>
        </div>
      </section>
      <section className={"bg-green-900 pt-20 pb-40"}>
        <div className={"grid grid-cols-3 gap-8 max-w-5/6 xl:max-w-3/5 mx-auto"}>
          <h1 className={"col-span-3 text-center text-white text-4xl mb-4"}>About Me</h1>
          <div className={"col-span-3 xl:col-span-2 border-amber-500 border-2"}>
            <h3 className={"text-xl font-semibold"}>
              Shing Kei Cho (Michael)
              <br/>
              <span className={"text-lg font-normal"}>
                Full-stack Developer
              </span>
            </h3>
            <br/>
            <p>Software developer with 4 years of full-stack experience in building new applications and maintaining
              complex systems. Proficient in Java Spring, Flutter, and ReactJS. Key projects include the development of
              an EV charging solution, and contributing to a fully automated retail store system. Also designed and
              implemented a merchant pick-pack system and order shipping gateway, significantly improving warehouse
              workflow efficiency.</p>
            <br/>
            <p>
              Experienced in deploying and managing services on GCP and AWS with Kubernetes.
              Self-motivated with excellent communication and teamwork skills; passionate about continuous learning and
              tackling new challenges.
            </p>
          </div>
          <div className={"border-blue-500 border-2"}>
            <p>testing testing testing testing testing testing testing testing testing testing testing testing testing
              testing</p>
          </div>
        </div>
      </section>
      <section className={"bg-red-900 min-h-[calc(100dvh-2.5rem)] pt-20 pb-40"}>
        <h1 className={"col-span-3 text-center text-white text-4xl mb-4"}>Skill Set</h1>
        <div className={"w-xl h-32 border-2 border-cyan-300"}>
          <div className={"grid grid-cols-6 gap-y-4 items-center"}>
            <div className={"col-span-2 text-xl"}>Test: </div>
            <div className={"col-span-4 flex items-center h-full gap-x-4"}>
              {Array.from({length: 6}).map((item, i) => (
                <div key={`${i}-0-circle`} className={`h-full max-h-full aspect-square ${i < 3 ? "bg-white" : "bg-gray-500"} rounded-[50%]`}></div>))}
            </div>
            <div className={"col-span-2 text-xl"}>Test: </div>
            <div className={"col-span-4 flex items-center h-full gap-x-4"}>
              {Array.from({length: 6}).map((item, i) => (
                <div key={`${i}-1-circle`} className={`h-full max-h-full aspect-square ${i < 5 ? "bg-white" : "bg-gray-500"} rounded-[50%]`}></div>))}
            </div>
            <div className={"col-span-2 text-xl"}>Test: </div>
            <div className={"col-span-4 flex items-center h-full gap-x-4"}>
              {Array.from({length: 6}).map((item, i) => (
                <div key={`${i}-1-circle`} className={`h-full max-h-full aspect-square ${i < 4 ? "bg-white" : "bg-gray-500"} rounded-[50%]`}></div>))}
            </div>
            <div className={"col-span-2 text-xl"}>Test: </div>
            <div className={"col-span-4 flex items-center h-full gap-x-4"}>
              {Array.from({length: 6}).map((item, i) => (
                <div key={`${i}-1-circle`} className={`h-full max-h-full aspect-square ${i < 5 ? "bg-white" : "bg-gray-500"} rounded-[50%]`}></div>))}
            </div>
          </div>
        </div>
      </section>
      <section className={"bg-gray-700 pt-20 pb-40"}>
        <h1 className={"col-span-3 text-center text-white text-4xl mb-4"}>Experience</h1>
        <Timeline></Timeline>
      </section>
      <footer>
      </footer>
    </div>
    // <div className="font-sans grid grid-cols-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 border-4 border-red-300">
    //   <main className="flex flex-col gap-[32px] items-center sm:items-start border-2 w-full">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>
    //
    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="flex gap-[24px] flex-wrap items-center justify-center border-2">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
