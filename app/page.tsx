import { Metadata } from "next";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="relative h-screen">
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Camera"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <h1>Hello World</h1>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("");

  return {
    title: "",
    description: "",
  };
}
