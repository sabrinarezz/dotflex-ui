import Carousel from "@/KRISH_COMPONENTS/Carousel/Carousel";
import Card from "@/KRISH_COMPONENTS/Card/Card";
import Footer from "@/KRISH_COMPONENTS/Footer/Footer";
import Footer_2 from "@/KRISH_COMPONENTS/Footer_2/Footer 2";
import Hero from "@/KRISH_COMPONENTS/Hero/Hero";
import Workflow from "@/KRISH_COMPONENTS/Workflow/Workflow";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <Carousel>
        <Card
          image="/images/doctor.jpg"
          title="TILE HERE"
          description="DESCRIPTION HERE"
        />

        <Card
          image="/images/service.jpg"
          title="TILE HERE"
          description="DESCRIPTION HERE"
        />

        <Card
          image="/images/lab.jpg"
          title="TILE HERE"
          description="DESCRIPTION HERE"
        />
      </Carousel>

      

      <Footer />

      <br />

      <Footer_2 />

      <br />

      <Hero />

      <br />

      <Workflow />

      <br />
    </main>
    
  );
}