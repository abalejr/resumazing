export interface WorkHistoryItem {
  id: number;
  company: string
  jobTitle: string
  location: string
  dateRange: string
  description: string
}

export interface AcademicQualification {
  id: number;
  school: string;
  location: string;
  graduationYear: number;
}

export interface ProfessionalExperience {
  id: number;
  experienceSummary: string;
}

export interface Proficiency {
  id: number;
  title: string;
  score: 1 | 2 | 3 | 4 | 5;
}

export interface Passion {
  id: number;
  title: string;
}
