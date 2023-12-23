import Image from "next/image";
function Terms() {
  return (
    <div className="h-screen py-24 bg-gray-950 text-xl flex items-center justify-center text-white">
      <Image src="/terms.svg" className="mt-12" width={400} height={400} />
    </div>
  );
}

export default Terms;
