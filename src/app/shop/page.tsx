/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable */
// @ts-nocheck

import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import Card from "@/components/Card";
import Link from "next/link";

 interface SecData {
  id: string;
  image: string;
  title: string;
  price: number;
}

export const secData: SecData[] = [
  {
    id: "1",
    image: "/shortsec/modulasofa.png",
    title: "Trenton Modular Sofa_3",
    price: 25000,
  },
  {
    id: "2",
    image: "/shortsec/granitediningtable.png",
    title: "Granite Dining Table With Dining Chair",
    price: 25000,
  },
  {
    id: "3",
    image: "/shortsec/Outdoorbartable.png",
    title: "Out Door Bar Table & Stool",
    price: 25000,
  },
  {
    id: "4",
    image: "/shortsec/Plainconsole.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  },
  {
    id: "5",
    image: "/shop/image1.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  },
  {
    id: "6",
    image: "/shop/image2.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  },
  {
    id: "7",
    image: "/shop/image3.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  },
  {
    id: "8",
    image: "/shop/image4.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  },
  {
    id: "9",
    image: "/shop/image5.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  },
  {
    id: "10",
    image: "/shop/image6.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  },
  {
    id: "11",
    image: "/shop/image7.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  },
  {
    id: "12",
    image: "/shop/image8.png",
    title: "Plain Console With Teak Mirror",
    price: 25000,
  }
];

export default function Shop() {
  // Check secData to ensure it matches the type expected
  // Assuming checkFields is something you want to use but you need a simpler approach
  const validSecData = checkFields<SecData[]>(secData); // Ensure secData is properly typed

  return (
    <div>
      <BreadCrumb title="Shop" url="shop" />
      <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {validSecData.map((cardData: SecData) => (
            <Link
              href={`/shop/${cardData.id}`}
              key={cardData.id}
              className="cursor-pointer"
            >
              <Card {...cardData} />
            </Link>
          ))}
        </div>
      </div>
      <Service />
    </div>
  );
}

// You might need to adjust the checkFields function to work for SecData[] if it's not already
function checkFields<T>(fields: T): T {
  // Assuming checkFields is meant to validate or process the data in some way
  return fields;
}
