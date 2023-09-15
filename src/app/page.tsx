import Blog from "@/components/Blog";
import Random from "@/components/Random";
import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <Random />
      <Blog />
    </div>
  );
}
