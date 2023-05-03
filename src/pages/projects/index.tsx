import React from 'react';
import Article from "@/components/Article/Article";
import Card from '@/components/Card/Card'
import CardContainer from '@/components/Card/CardContainer'
import { useRouter } from 'next/router';

const ProjectsPage = () => {
  const router = useRouter();
  function navigate(url: string) {
    return (e:React.MouseEvent) => {
      router.push(url);
    }
  }
  return (
   <Article title="Projects">
      <CardContainer>
        <Card label="Nebula" onClick={navigate("projects/nebula")} imageSrc="/images/cards/nebula.png" bgPosition="0px 0px" bgSize="150%" />
        <Card label="Work Tracker" onClick={navigate("projects/work-tracker")} imageSrc="/images/cards/django.jpg" bgPosition="-40px 0px" bgSize="150%" />
        <Card label="Loadstone" onClick={navigate("projects/loadstone")} imageSrc="/images/cards/loadstone.png" bgPosition="-8px 0px" bgSize="140%" />
        <Card label="Stealth Game" onClick={navigate("projects/stealth-game")} imageSrc="/images/cards/stealth.jpg" bgPosition="-80px 0px" bgSize="180%" />
        <Card label="Cat Feeder" onClick={navigate("projects/catfeeder")} imageSrc="/images/cards/catfeeder.jpg" bgPosition="-80px 0px" bgSize="150%" />
        <Card label="Brian Fouts" onClick={navigate("projects/brian-fouts")} imageSrc="/images/cards/brian-fouts.png" bgPosition="10px 25px" bgSize="90%" />
      </CardContainer>
    </Article>
  )
}

export default ProjectsPage;