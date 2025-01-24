'use client';

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <div className="p-4 my-2 border rounded shadow">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
              <img className="h-auto w-[200px] rounded-xl m-auto" src="/472032168_591829453557382_6223193399783281202_n.jpg" alt=""/>
          </div>
          <div>
            <h2 className="text-xl font-bold">Kanisporn Konhirungit</h2>
            <p>I possess five years of experience as a software engineer, specializing in full-stack development. My expertise encompasses a range of technologies, including React, Node.js, Vue.js, JavaScript, TypeScript, Next.js, HTML, and CSS.</p>
            <div className="grid grid-cols-2 w-[80px] ml-2 mt-5">
              <div>
                <img className="h-auto w-[20px] rounded-lg" src="/email-svgrepo-com.svg"/>
              </div>
              <div>
                <p>kanisphon.konh@outlook.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-[80px] ml-2 ">
              <div>
                <img className="h-auto w-[20px] rounded-lg" src="/phone-call-svgrepo-com.svg"/>
              </div>
              <div>
                <p>0810742323</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
