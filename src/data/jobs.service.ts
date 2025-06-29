import { Injectable } from "@angular/core";
import { Job } from "../models/job.model";

@Injectable({ providedIn: "root" })
export class JobsService {
    data: Job[] = [
        {
            "id": "1",
            "title": "Senior Backend Engineer",
            "company": "Anonymous Fintech Startup",
            "location": "Remote",
            "salaryMin": 170000,
            "salaryMax": 210000,
            "tags": [
                "Remote",
                "Python",
                "Django",
                "PostgreSQL",
            ],
            "description":
                "Our client is scaling their core payments platform and needs a senior backend engineer with strong experience in Python and Django. Prior fintech experience is a plus.",
            "recruiterNote":
                "Hey, I came across your profile and thought you might be a great fit for a backend role with a fast-growing fintech startup. They're looking to move fast and are paying well.",
            "datePosted": new Date("2025-06-19T00:00:00Z"),
        },
        {
            "id": "2",
            "title": "Full Stack Developer (React + Node)",
            "company": "Stealth AI Startup",
            "location": "San Francisco, CA (Hybrid)",
            "salaryMin": 150000,
            "salaryMax": 180000,
            "tags": [
                "Hybrid",
                "React",
                "Node.js",
                "Startup",
                "Equity",
            ],
            "description":
                "An early-stage AI startup is looking for a full stack developer to join their small but experienced team. You'll work on everything from UI to infrastructure.",
            "recruiterNote":
                "Saw your GitHub and thought you might be interested in a role that combines frontend polish with backend architecture. This company just raised a seed round from a16z.",
            "datePosted": new Date("2025-06-20T00:00:00Z"),
        },
        {
            "id": "3",
            "title": "DevOps Engineer",
            "company": "Cloud Consultancy",
            "location": "New York, NY",
            "salaryMin": 140000,
            "salaryMax": 165000,
            "tags": [
                "AWS",
                "Terraform",
                "Kubernetes",
                "On-site",
            ],
            "description":
                "Looking for a DevOps engineer to help maintain and scale cloud infrastructure for enterprise clients. Strong AWS and IaC experience is required.",
            "recruiterNote":
                "Client in NYC is looking to fill this role in the next 2 weeks. Very straightforward interview process (2 rounds). Office is in Midtown.",
            "datePosted": new Date("2025-06-21T00:00:00Z"),
        },
        {
            "id": "4",
            "title": "Machine Learning Engineer",
            "company": "Top-Tier Hedge Fund",
            "location": "Remote or NYC",
            "salaryMin": 200000,
            "salaryMax": 250000,
            "tags": [
                "Remote",
                "ML",
                "Finance",
                "Python",
                "TensorFlow",
            ],
            "description":
                "Contribute to predictive models and research pipelines for one of the top quantitative hedge funds. Expect high code quality and a research-driven team.",
            "recruiterNote":
                "Not publicly posted — high comp and great team culture. Looking for PhD or equivalent industry experience.",
            "datePosted": new Date("2025-06-22T00:00:00Z"),
        },
        {
            "id": "5",
            "title": "Staff Frontend Engineer",
            "company": "Anonymous Consumer App",
            "location": "Los Angeles, CA (Remote OK)",
            "salaryMin": 180000,
            "salaryMax": 220000,
            "tags": [
                "React",
                "Typescript",
                "Remote",
                "Consumer",
                "Design",
            ],
            "description":
                "Lead frontend development for a high-traffic consumer web app. Strong focus on performance, animation, and mobile responsiveness.",
            "recruiterNote":
                "This one’s fun — product gets millions of MAUs and they want someone to own the frontend. Remote-friendly, but HQ is in LA.",
            "datePosted": new Date("2025-06-18T00:00:00Z"),
        },
    ];
}
