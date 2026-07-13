import Carousel from "@/components/Carousel/Carousel";
import Card from "@/components/Card/Card";

export default function Home() {

  return (

    <Carousel>

      <Card
        image="/images/doctor.jpg"
        title="Professional Doctors"
        description="Highly experienced specialists available for consultation."
      />

      <Card
        image="/images/service.jpg"
        title="Quality Care"
        description="Patient-centered healthcare with modern facilities."
      />

      <Card
        image="/images/lab.jpg"
        title="Advanced Laboratory"
        description="Accurate diagnostics using state-of-the-art equipment."
      />

    </Carousel>

  );

}