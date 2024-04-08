import { loader } from "@public/assets/icons";
import Image from "next/image";
const CircularProgress = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src={loader}
        alt="Loading..."
        width={30}
        height={30}
        className="object-contain rounded-full "
      />
    </div>
  );
};

export default CircularProgress;
