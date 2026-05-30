export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  exampleItems: string[];
  iconName: string;
}

export interface ClientRequestItem {
  id: string;
  title: string;
  explanation: string;
  options: string[];
  guidance: string;
}

export interface PreparationItem {
  number: string;
  title: string;
  description: string;
  tips: string;
}

export interface EstimationConfig {
  itemType: string;
  fabricNeeded: string;
  baseDuration: string;
  priceEstimateInfo: string;
  notes: string;
}
