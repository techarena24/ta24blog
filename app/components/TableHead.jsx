import React from "react";
import deviceImg from "../../public/images/Galaxy_S24.avif";


function TableHead() {
    const optionDemos = [
        {
          id: 1,
          features: "Battery",
          specs: "6000mAh",
          overview: "45W Charging",
          image: deviceImg,
        },
    
        {
          id: 2,
          features: "Camera",
          specs: "50MP",
          overview: "2160p",
          image: deviceImg,
        },
    
        {
          id: 3,
          features: "Display",
          specs: "6.67-inch",
          overview: "1080x2400 pixels",
          image: deviceImg,
        },
    
        {
          id: 4,
          features: "Chipset",
          specs: "8/12GB RAM",
          overview: "Snapdragon 8 Gen 4",
          image: deviceImg,
        },
      ];
  return (
    <>
      <thead className="bg-orange-100">
        <tr className="bg-yellow-500">
          <td className="bg-green-800 px-2 py-2">{phone.phone_name}</td>
          <td className="bg-blue-800 px-2 py-2">Release Date</td>
        </tr>

        <tr className="phone-row">
          <td className="w-[40%]">
            <Image
              src={phone.image}
              height={150}
              width={150}
              className="h-72 w-64"
              alt="phone"
            />
          </td>
          <td className="w-[60%]">
            <div className="flex">
              <div className="flex-1">
                <ul>
                  {optionDemos &&
                    optionDemos.map(
                      (
                        spec // Check if specifications exist
                      ) => (
                        <li
                          key={spec.id}
                          className="bg-yellow-200 border-2 px-2"
                        >
                          <Image
                            src={spec.image}
                            height={30}
                            width={30}
                            alt="phone"
                          />
                          <h3>{spec.features}</h3>
                          <p>{spec.specs}</p>
                        </li>
                      )
                    )}
                </ul>
              </div>
              <div className="flex-1">
                <ul>
                  {optionDemos &&
                    optionDemos.map(
                      (
                        spec // Check if specifications exist
                      ) => (
                        <li
                          key={spec.id}
                          className="bg-yellow-200 border-2 px-2"
                        >
                          <Image
                            src={spec.image}
                            height={30}
                            width={30}
                            alt="phone"
                          />
                          <h3>{spec.features}</h3>
                          <p>{spec.specs}</p>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          </td>
        </tr>

        <tr className="border-2 text-left px-2 py-2">
          <th className="border-2 text-left px-2 py-2">Technology</th>
          <th className="border-2 text-left px-2 py-2">Specifications</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
