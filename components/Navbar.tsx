import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-600">
          EventsPlugGH
        </h1>

        <div className="flex gap-6">
          <Link href="/vendors">Vendors</Link>
          <Link href="/venues">Venues</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}