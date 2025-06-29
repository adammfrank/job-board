import { Component, inject } from "@angular/core";

import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { z } from "zod";
import { zodTextFormat } from "openai/helpers/zod";

import OpenAI from "openai";
import { Job } from "../../models/job.model";
import { JobsService } from "../../data/jobs.service";

@Component({
  selector: "app-create-job",
  templateUrl: "./create-job.component.html",
  styleUrl: "./create-job.component.css",
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class CreateJobComponent {
  private fb = inject(FormBuilder);
  private jobsService: JobsService = inject(JobsService);
  jobForm = this.fb.group({
    apiKey: [null, Validators.required],
    description: [null, Validators.required],
  });

  async onSubmit(): Promise<void> {
    const client = new OpenAI({
      apiKey: this.jobForm.value.apiKey!,
      dangerouslyAllowBrowser: true,
    });

    const JobDescription = z.object({
      id: z.string(),
      title: z.string(),
      company: z.string(),
      location: z.string(),
      salaryMin: z.number(),
      salaryMax: z.number(),
      tags: z.array(z.string()),
      description: z.string(),
      recruiterNote: z.string(),
      datePosted: z.string().transform((str) => new Date(str)),
    });

    const response = await client.responses.create({
      model: "gpt-4o",
      input: [
        {
          role: "system",
          content:
            `You are an expert at structured data extraction. You will be given unstructured text from a job description and you should convert it into the given structure.
            If you cannot extract a value for any field then please put an empty string in that field.`,
        },
        {
          role: "user",
          content: this.jobForm.value.description!,
        },
      ],
      text: {
        format: zodTextFormat(
          JobDescription,
          "job_description",
        ),
      },
    });

    const jobData: Job = JobDescription.parse(JSON.parse(response.output_text));

    this.jobsService.addJob(jobData);

    alert("Job Added");
  }
}
