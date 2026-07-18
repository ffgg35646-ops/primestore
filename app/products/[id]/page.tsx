import Image from "next/image";
import Link from "next/link";
import { Star, Truck, ShieldCheck } from "lucide-react";

import { products } from "@/data/products";
import AddToCartButton from "@/components/product/AddToCartButton";


export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;


  const product = products.find(
    (item) => item.id === Number(id)
  );


  if (!product) {

    return (
      <main className="py-20 text-center">

        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>

      </main>
    );

  }



  return (

    <main className="bg-slate-50 py-16">

      <div className="mx-auto max-w-7xl px-6">


        <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-2">


          <div>


            <div className="overflow-hidden rounded-3xl">

              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={700}
                className="h-[500px] w-full object-cover"
              />

            </div>



            <div className="mt-5 grid grid-cols-3 gap-4">


              {[1,2,3].map((item)=> (

                <div
                  key={item}
                  className="rounded-xl border p-2"
                >

                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="rounded-lg"
                  />

                </div>

              ))}


            </div>


          </div>





          <div>


            <span className="font-semibold text-blue-600">
              {product.category}
            </span>



            <h1 className="mt-4 text-5xl font-black">
              {product.name}
            </h1>




            <div className="mt-5 flex items-center gap-2">


              <div className="flex text-yellow-400">


                {[1,2,3,4,5].map((star)=> (

                  <Star
                    key={star}
                    size={20}
                    className="fill-yellow-400"
                  />

                ))}


              </div>


              <span className="text-gray-500">
                (120 Reviews)
              </span>


            </div>





            <div className="mt-8 flex items-center gap-4">


              <span className="text-4xl font-black text-blue-600">
                ${product.price}
              </span>


              <span className="text-xl text-gray-400 line-through">
                ${product.oldPrice}
              </span>


            </div>





            <p className="mt-6 leading-8 text-gray-600">

              This premium product offers excellent quality,
              modern design and reliable performance.
              Designed to provide the best shopping experience.

            </p>





            <div className="mt-8 space-y-4">


              <div className="flex items-center gap-3">

                <Truck className="text-blue-600"/>

                <span>
                  Free shipping on orders over $50
                </span>

              </div>





              <div className="flex items-center gap-3">

                <ShieldCheck className="text-blue-600"/>

                <span>
                  Secure payment and warranty included
                </span>

              </div>


            </div>





            <AddToCartButton product={product} />



          </div>



        </div>






        <div className="mt-12 rounded-3xl bg-white p-8">


          <h2 className="text-3xl font-black">
            Product Information
          </h2>


          <p className="mt-5 leading-8 text-gray-600">

            High quality materials, modern technology and
            carefully selected components make this product
            a perfect choice for customers.

          </p>


        </div>






        <div className="mt-12">


          <h2 className="mb-8 text-3xl font-black">
            Related Products
          </h2>



          <div className="grid gap-6 md:grid-cols-4">


            {products.slice(0,4).map((item)=>(


              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="rounded-2xl bg-white p-4 shadow hover:shadow-lg"
              >


                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="rounded-xl"
                />


                <h3 className="mt-3 font-bold">
                  {item.name}
                </h3>


              </Link>


            ))}


          </div>


        </div>



      </div>


    </main>

  );

}
