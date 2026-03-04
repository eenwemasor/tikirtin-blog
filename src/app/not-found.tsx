import Button from "@/components/ui/Button";
import Link from "next/link";
import { format } from "date-fns";
import { baseUrl } from "@/utils";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-6xl font-black text-center text-primary/30 md:text-9xl">
          ERROR
        </h1>
        <p className="mt-3 mb-6 text-base text-black sm:text-lg text-center">
          We can’t seem to find the page you are looking for!
        </p>
        <Link href={baseUrl} className="flex items-center justify-center ">
          <Button className="cursor-pointer">Back to Home Page</Button>
        </Link>
      </div>
      <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 ">
        © {format(new Date(), "yyyy")} - Tikirtin
      </p>
    </div>
  );
}
