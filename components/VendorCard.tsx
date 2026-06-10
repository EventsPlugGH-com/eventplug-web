 import Link from "next/link";

type VendorProps = {
  vendor: {
    name: string;
    location: string;
    category: string;
    image: string;
  };
  id: number;
};

export default function VendorCard({ vendor, id }: VendorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={vendor.image}
        alt={vendor.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">
          {vendor.name}
        </h2>

        <p className="text-gray-600 mb-2">
          {vendor.location}
        </p>

        <p className="text-yellow-600 font-semibold mb-4">
          {vendor.category}
        </p>

        <Link
          href={`/vendors/${id}`}
          className="block w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 text-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}