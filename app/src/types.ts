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
