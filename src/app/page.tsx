import Carousel from "@/components/Carousel/Carousel";
import Card from "@/components/Card/Card";

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
    </main>
  );
}