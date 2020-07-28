import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  textoBotao = "Esconder/Exibir"
  esconder = false;

  alterarExibicao () {
    this.esconder = !this.esconder;
  }

  pessoas = [
    { nome: "Marcelo", cpf: 44667598160 },
    { nome: "Felipe", cpf: 77777777777 },
    { nome: "Samara", cpf: 17689832910 }
  ]

  onAdicionarPessoa(pessoa) {
    this.pessoas = [pessoa, ...this.pessoas];
  }

  cursos = [
    { nomeCurso: "ADS", periodo: "Vespertino" },
    { nomeCurso: "Gestão de RH", periodo: "Noturno" },
    { nomeCurso: "Eventos", periodo: "Vespertino" }
  ]

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
  }

}
