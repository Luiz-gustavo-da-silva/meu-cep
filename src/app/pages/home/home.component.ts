import { Component, OnInit } from '@angular/core';
import { DddService } from '../../core/services/ddd.service';
import { Ddd } from '../../core/models/ddd-interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ddd: string = '';
  public dddResponse: Ddd | null = null;

  constructor(readonly dddService: DddService) {}

  ngOnInit(): void {}

  getDdd(): void {
    const dddStr = this.ddd.trim();
    if (dddStr.length === 2) {
      this.dddService.getDdd(dddStr).subscribe({
        next: (response) => {
          this.dddResponse = response;
        },
        error: (err) => {
          console.error('Erro ao buscar o DDD:', err);
          this.dddResponse = null;
        },
      });
    }
  }
  
}
