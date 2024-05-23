import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrl: './calcular.component.scss',
})
export class CalcularComponent implements OnInit {
  pago: number = 0;
  consumo: any = 0;
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      spent: this.fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.consumo = '';
  }

  calcularPago(): void {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
    } else {
      this.consumo = this.paymentForm.get('spent')?.value;
      if (this.consumo <= 4) {
        this.pago = 50;
      }
      if (this.consumo > 4 && this.consumo <= 8) {
        this.pago = 85;
      }
      if (this.consumo > 8) {
        this.pago = 85 + 4.5 * (this.consumo - 8);
      }
    }
  }
}
