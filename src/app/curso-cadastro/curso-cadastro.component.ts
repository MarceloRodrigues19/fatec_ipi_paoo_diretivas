import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {

  @Output() cursoAdicionado = new EventEmitter();

  adicionarCurso (nomeCurso, periodo) {
    const curso = {
      nomeCurso: nomeCurso,
      periodo: periodo
    };
    this.cursoAdicionado.emit(curso);
  }

}