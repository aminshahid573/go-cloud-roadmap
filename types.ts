import React from 'react';

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  resources?: { title: string; url: string }[];
  isCheckable: true;
  subTopics?: string[];
  whyItMatters?: string;
  projectIdea?: string;
}

export interface InfoItem {
    title: string;
    description: string;
    isCheckable: false;
    subItems?: string[];
    details?: { key: string, value: string }[];
}

export interface RoadmapSectionType {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: (RoadmapItem | InfoItem)[];
  type: 'roadmap' | 'info';
}