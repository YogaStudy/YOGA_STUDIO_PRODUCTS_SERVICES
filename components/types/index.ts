export interface FormPostTypes {
  _id?: string;
  title: string;
  content: string;
  image: string;
  tag: string;
  // likes: number;
}
export interface FormEditTypes {
  _id: string;
  title: string;
  content: string;
  image: string;
  tag: string;
}

export interface FormPostEmailTypes {
  subjectEmail: string;
  renderHtml: string;
}
