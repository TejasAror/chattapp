// app/not-found.tsx or pages/404.tsx (depending on your structure)

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Image src="/images/error.svg" width={500} height={500} alt="404" />
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
