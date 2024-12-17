import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import ShortSec from "@/components/ShortSec";
import { secData, type SecData } from "@/utils/dynamicpage";

export default async function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  const data = secData.find((item: SecData) => item.id === params.productid);

  // const image = "hersofa.png"
  return (
    <div>
      <BreadCrumb title="Product Page" url="/" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full max-w-md mx-auto sm:max-w-none">
              <Image
                src={`${data?.image}`}
                alt="Asgaard sofa main view"
                layout="responsive"
                height={400}
                width={400}
                className="object-cover rounded-lg"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 sm:justify-center overflow-x-auto">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 border rounded-lg cursor-pointer overflow-hidden"
                >
                  <Image
                    src={`${data?.image}`}
                    alt={`Asgaard sofa view ${index}`}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">{data?.title}</h1>
              <p className="text-xl text-gray-700">Rs. {data?.price}.00</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-500">(5 Customer Reviews)</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Setting the bar as one of the loudest speakers in its class, the Kilburn
              is a compact, stout-hearted hero with a well-balanced audio that boasts
              clear midrange and extended highs for a superior sound experience.
            </p>

            {/* Size Selection */}
            <div>
              <span className="block text-sm font-medium text-gray-700">Size</span>
              <div className="flex gap-2 mt-2">
                {["M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 border rounded-lg flex items-center justify-center text-sm hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <span className="block text-sm font-medium text-gray-700">Color</span>
              <div className="flex gap-2 mt-2">
                <button className="w-6 h-6 rounded-full bg-purple-600" />
                <button className="w-6 h-6 rounded-full bg-black" />
                <button className="w-6 h-6 rounded-full bg-yellow-700" />
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button className="px-4 py-2 border-r">-</button>
                <input
                  type="number"
                  value="1"
                  readOnly
                  className="w-12 text-center border-none focus:outline-none"
                />
                <button className="px-4 py-2 border-l">+</button>
              </div>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                Add To Cart
              </button>
            </div>

            {/* Product Metadata */}
            <div className="space-y-2 pt-4 border-t text-sm text-gray-600">
              <div className="flex justify-between">
                <span>SKU</span>
                <span>SS001</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span>
                <span>Sofas</span>
              </div>
              <div className="flex justify-between">
                <span>Tags</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex justify-between">
                <span>Share</span>
                <div className="flex gap-2">
                  <Link href="#" className="text-lg text-blue-600">
                    <CiFacebook />
                  </Link>
                  <Link href="#" className="text-lg text-blue-500">
                    <CiLinkedin />
                  </Link>
                  <Link href="#" className="text-lg text-pink-500">
                    <CiInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShortSec title="More Products" />
      <Service />
    </div>
  );
}
