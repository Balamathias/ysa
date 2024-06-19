import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Objectives from "@/components/Objectives";
import Vision from "@/components/Vision";



export default function Home() {
  return (
    <main className="flex flex-col w-full h-full bg-yellow-50/[0.67] min-h-screen gap-y-4">
      <Navbar />
      <Landing />
      <Vision />
      <Objectives />
      <ContactUs />
      <Footer />
    </main>
  );
}
