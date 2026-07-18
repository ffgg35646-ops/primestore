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
  {
    name: "Smart Phones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
];


export default function CategoriesPage() {

  return (

    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-7xl px-6">


        <h1 className="text-5xl font-black">
          Categories
        </h1>

        <p className="mt-3 text-gray-600">
          Explore our product categories
        </p>



        <div className="mt-10 grid gap-8 md:grid-cols-3">


          {categories.map((category)=>(

            <Link
              key={category.name}
              href={`/products?category=${category.name}`}
              className="overflow-hidden rounded-3xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl"
            >

              <img
                src={category.image}
                alt={category.name}
                className="h-64 w-full object-cover"
              />


              <div className="p-6">

                <h2 className="text-2xl font-black">
                  {category.name}
                </h2>


                <p className="mt-3 text-blue-600">
                  View Products →
                </p>


              </div>


            </Link>

          ))}


        </div>


      </div>


    </main>

  );

}
