import Image from "next/image";

export default function PetaBandara() {
  return (
    <>
      <div className=" grid w-full grid-cols-3 gap-5 ">
        <div className=" flex w-full aspect-video relative">
          <Image
            src="/assets/images/peta/dbc9cfa44960ad3a8dba082b3f1a3753.png"
            fill
            alt=""
            className=" relative bg-cover bg-center"
          />
        </div>
        <div className=" flex w-full aspect-video relative">
          <Image
            src="/assets/images/peta/6818f3fb4f1b2f50b4f7a71f71072e7c.png"
            fill
            alt=""
            className=" relative bg-cover bg-center"
          />
        </div>
        <div className=" flex w-full aspect-video relative">
          <Image
            src="/assets/images/peta/e75e06b10322fe3d8bbb46a6fdcb4f23.png"
            fill
            alt=""
            className=" relative bg-cover bg-center"
          />
        </div>
      </div>
    </>
  );
}
