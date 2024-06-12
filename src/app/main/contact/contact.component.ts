import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface FormResponse {
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactComponent {
  nameMinLength = 3;
  subjectMinLength = 8;
  messageMinLength = 32;
  responseMessage = '';
  responseSuccess = false;

  form = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(this.nameMinLength),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null, [
      Validators.required,
      Validators.minLength(this.subjectMinLength),
    ]),
    message: new FormControl(null, [
      Validators.required,
      Validators.minLength(this.messageMinLength),
    ]),
    botCheck: new FormControl(null),
  });

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http
      .post<FormResponse>('https://api.web3forms.com/submit', {
        access_key: '989523ca-fff1-4fa1-9ba9-b7e1343c2bb5',
        from_name: this.form.get<string>('name')?.value,
        email: this.form.get<string>('email')?.value,
        subject: this.form.get<string>('subject')?.value,
        message: this.form.get<string>('message')?.value,
        botcheck: !ContactComponent.isEmpty(
          this.form.get<string>('message')?.value
        ),
      })
      .subscribe({
        next: (data) => {
          this.responseSuccess = true;
          this.responseMessage = data.message;
          this.form.reset();
        },
        error: (error) => {
          this.responseSuccess = false;
          this.responseMessage = error.error.message;
        },
      });
  }

  onInputBlur(control: string): void {
    this.patchValue(control, this.form.get<string>(control)?.value?.trim());
  }

  private patchValue(control: string, value: string): void {
    this.form.patchValue({ [control]: value });
  }

  private static isEmpty(value: string): boolean {
    return !value || value.length === 0;
  }
}
