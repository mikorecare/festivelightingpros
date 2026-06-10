import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Rest of your homepage content */}
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-[#1d3156]">
            Festive Lighting Pros
          </h1>
          <p className="mt-4 text-gray-600">
            Professional outdoor lighting solutions for your home or business.
          </p>
        </div>
      </main>
    </>
  );
}
