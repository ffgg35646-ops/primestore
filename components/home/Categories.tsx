import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800",
  },
  {
    name: "Gaming",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800",
  },
  {
    name: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
  },
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
  },
];


export default function Categories() {

  return (

    <section className="py-16">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-10">

          <h2 className="text-4xl font-black">
            Shop By Category
          </h2>

          <p className="mt-2 text-gray-600">
            Find products by your favorite category
          </p>

        </div>



        <div className="grid gap-6 md:grid-cols-4">


          {categories.map((category) => (

            <Link
              key={category.name}
              href={`/products?category=${category.name}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >


              <img
                src={category.image}
                alt={category.name}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
              />


              <div className="p-5">

                <h3 className="text-xl font-black">
                  {category.name}
                </h3>


                <p className="mt-2 text-blue-600">
                  Explore Products →
                </p>


              </div>


            </Link>


          ))}


        </div>


      </div>


    </section>

  );
}
