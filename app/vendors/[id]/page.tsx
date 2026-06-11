 import { vendors } from "../data";

export default async function VendorProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const vendor = vendors.find(
    (v) => v.id === Number(id)
  );

  if (!vendor) {
    return <h1>Vendor not found</h1>;
  }

  return (
  
  <main className="max-w-5xl mx-auto py-12 px-6">
    <img
      src={vendor.image}
      alt={vendor.name}
      className="w-full h-96 object-cover rounded-xl mb-8"
    />

    <h1 className="text-5xl font-bold mb-4">
      {vendor.name}
    </h1>

    <p className="text-xl text-gray-600 mb-2">
      📍 {vendor.location}
    </p>

    <p className="text-yellow-600 font-semibold mb-6">
      {vendor.category}
    </p>

    <p className="text-lg mb-8">
      {vendor.description}
    </p>

    <h2 className="text-3xl font-bold mt-10 mb-6">
  Gallery
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  {vendor.gallery?.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`${vendor.name} Gallery ${index + 1}`}
      className="w-full h-64 object-cover rounded-lg"
    />
  ))}
</div>

    <div className="flex gap-4">

      <a
        href={`https://wa.me/${vendor.whatsapp}`}
        target="_blank"
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
>
        WhatsApp
        </a>
     
       <a
         href={'tel:${vendor.phone}'}

      className="bg-yellow-500 text-black px-6 py-3 rounded-lg">
        Call Vendor
      </a>
    </div>
  </main>
);
}