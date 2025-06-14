
export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  logo: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  provider: string;
  year: string;
}

export interface Award {
  name: string;
  organization: string;
  year: string;
}
