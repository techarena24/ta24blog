import React from "react";
// import deviceImg from "../../public/images/Galaxy_S24.avif";
import Image from "next/image";

function LatestDevicesSidebar(props) {

    const {specifications, width, grid} = props;

    const propStyleForCards = {
        width: width || "40%",
    }
  return (
    <>
      <div className="" style={propStyleForCards}>
        <h2 className="col-span-3 bg-red-400 self-baseline px-2 py-2">
          Latest Phones
        </h2>

        {/* personal note "i removed the h-[2rem] from the class below. I used this to size the three card layout of the sidebar component. I might need to add css as props for the sidebar later" */}
        <div className={`bg-green-400 grid justify-center gap-1 ${grid || "grid-cols-3"}`}>
          {specifications.map((spec, index) => (
            <div
              key={index}
              className="bg-yellow-500 flex flex-col items-center"
            >
              <Image
                src={spec.image}
                height={150}
                width={150}
                alt="phone"
                className="w-32"
              />
              <h3 className="text-center">{spec.phone_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestDevicesSidebar;
