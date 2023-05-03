import React from 'react';
import CloudCard from '@/components/Card/Service/Cloud/CloudCard'
import SecurityCard from '@/components/Card/Service/Security/SecurityCard'
import CardContainer from '@/components/Card/CardContainer'
import DevOpsCard from '@/components/Card/Service/DevOps/DevOpsCard';
import PerformanceCard from '@/components/Card/Service/Performance/PerformanceCard';
import DatabasesCard from '@/components/Card/Service/Databases/DatabasesCard';
import MobileCard from '@/components/Card/Service/Mobile/MobileCard';
import WebDevelopmentCard from '@/components/Card/Service/WebDevelopment/WebDevelopmentCard';
import GameDevelopmentCard from '@/components/Card/Service/GameDevelopment/GameDevelopmentCard';
import AutomatedTestingCard from '@/components/Card/Service/AutomatedTesting/AutomatedTestingCard';
import { useRouter } from 'next/router';
import Article from "@/components/Article/Article";


const SkillsPage = () => {
  const router = useRouter();
  function navigate(url: string) {
    return (e:MouseEvent) => {
      router.push(url);
    }
  }
  return (
    <Article title="Skills">
        <CardContainer>
          <CloudCard onClick={navigate("skills/cloud")} />
          <DevOpsCard onClick={navigate("skills/devops")} />
          <WebDevelopmentCard onClick={navigate("skills/web-development")} />
          <PerformanceCard onClick={navigate("skills/performance")} />
          <SecurityCard onClick={navigate("skills/security")} />
          <DatabasesCard onClick={navigate("skills/databases")} />
          <MobileCard onClick={navigate("skills/mobile")} />
          <GameDevelopmentCard onClick={navigate("skills/game-development")} />
          <AutomatedTestingCard onClick={navigate("skills/automated-testing")} />
        </CardContainer>
    </Article>
  )
}

export default SkillsPage;