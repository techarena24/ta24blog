import React from "react";
import Image from "next/image";
import Link from "next/link";

function LatestDevices(props) {
  const { phone, width, grid } = props;

  const propStyleForCards = {
    width: width || "100%",
  };
  return (
    <>
      <div className="w-full" style={propStyleForCards}>
        <h2 className="col-span-3 bg-gray-100 self-baseline px-2 py-2">
          Latest Phones
        </h2>

        {/* personal note "i removed the h-[2rem] from the class below. I used this to size the three card layout of the sidebar component. I might need to add css as props for the sidebar later" */}

        <div
          className={` grid justify-center gap-1 my-2 ${grid || "grid-cols-3"}`}
        >
          {phone.map((spec, index) => (
            <Link key={index} href={`/blog/${encodeURIComponent(spec.slug)}`}>
              <div
                key={index}
                className="bg-gray-100 flex flex-col items-center"
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestDevices;
