import { Component, inject } from "@angular/core";

import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";

import OpenAI from "openai";

@Component({
  selector: "app-create-job",
  templateUrl: "./create-job.component.html",
  styleUrl: "./create-job.component.css",
  imports: [
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class CreateJobComponent {
  private fb = inject(FormBuilder);
  jobForm = this.fb.group({
    apiKey: [null, Validators.required],
    description: [null, Validators.required],
  });

  async onSubmit(): Promise<void> {
    const client = new OpenAI({
      apiKey: this.jobForm.value.apiKey!,
      dangerouslyAllowBrowser: true,
    });
    console.log("DESCRIPTION: " + this.jobForm.value.description);
    const response = await client.responses.create({
      model: "gpt-4.1",
      input: "Write a one-sentence bedtime story about a unicorn.",
    });
    console.log(response);
    alert("Thanks!");
  }
}
