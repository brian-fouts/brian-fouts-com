import React, { ReactNode } from 'react';
import Article from "@/components/Article/Article";

import Card from '@/components/Card/Card'
import CardContainer from '@/components/Card/CardContainer'
import { useRouter } from 'next/router';


const ExperiencePage = () => {
  const router = useRouter();
  function navigate(url: string) {
    return (e: React.MouseEvent) => {
      router.push(url);
    }
  }
  return (
    <Article title="Experience">
        <CardContainer>
          <Card label="Osaro" onClick={navigate("experience/osaro")} imageSrc="/images/cards/osaro.jpg" bgPosition="-100px 0px" bgSize="200%" />
          <Card label="Kindred" onClick={navigate("experience/kindred")} imageSrc="/images/cards/kindred.jpg" bgPosition="-100px 0px" bgSize="200%" />
          <Card label="Outpost" onClick={navigate("experience/outpost")} imageSrc="/images/cards/outpost.jpg" bgPosition="-100px 0px" bgSize="200%"  />
          <Card label="Savonix" onClick={navigate("experience/savonix")} imageSrc="/images/cards/savonix.png" bgSize="110%"  />
          <Card label="NovoEd" onClick={navigate("experience/novoed")}  imageSrc="/images/cards/novoed.jpg" bgPosition="-90px 0px" bgSize="200%" />
          <Card label="Tapzaic" onClick={navigate("experience/tapzaic")} imageSrc="/images/cards/tapzaic.jpg" bgPosition="0px 0px" bgSize="100%" />
          <Card label="Zynga" onClick={navigate("experience/zynga")} imageSrc="/images/cards/zynga.png" bgPosition="-90px 0px" bgSize="200%" />
        </CardContainer>
    </Article>
  )
}

export default ExperiencePage;