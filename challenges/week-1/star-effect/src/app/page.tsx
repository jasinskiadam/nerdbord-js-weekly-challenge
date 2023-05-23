import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#2A2A2A] w-[1440px] h-[700px] relative">
      <div className="absolute w-[1060px] h-[520px] shadow-xd top-[100px] left-1/2 transform -translate-x-1/2 rounded-[10px]">
        <p className=" absolute bottom-[50px] text-2xl text-center h-[42px] w-[400px] left-1/2 transform -translate-x-1/2 ">
          The universe is you.
        </p>
      </div>
    </main>
  );
}
