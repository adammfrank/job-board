export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    salaryMin: number;
    salaryMax: number;
    tags: string[];
    description: string;
    recruiterNote: string;
    datePosted: Date;
}
