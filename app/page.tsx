 import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Vendors from "../components/Vendors";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <Vendors />
    </>
  );
}