import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}

export interface CaseProps {
  title: string;
  context: string;
  outcome: string;
}

export type TypebotConfig = {
  tag: string;
  id: string;
  apiHost: string;
};