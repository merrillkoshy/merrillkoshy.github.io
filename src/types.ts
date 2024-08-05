interface Option {
  id: string;
  option: string;
}
export interface Questions {
  id: string;
  question: string;
  answer: string;
  options: Option[];
  section_id: string;
  question_type: string;
}

export interface Sections {
  id: string;
  section: string;
  level: string;
  questions: Questions[];
}
