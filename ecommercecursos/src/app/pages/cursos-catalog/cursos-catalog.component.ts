
 import { NgFor, NgIf } from '@angular/common';
 import { Component } from '@angular/core';
 import { CursosCardsComponent } from '../../components/cursos-cards/cursos-cards.component';
 import { ICurso } from '../../interface/cursos.interface';
 //import { Component, EventEmitter, Output, OnInit } from '@angular/core';


  @Component({
    selector: 'app-cursos-catalog',
    standalone: true,
    imports: [ NgFor, NgIf, CursosCardsComponent ],
    templateUrl: './cursos-catalog.component.html',
    styleUrl: './cursos-catalog.component.css'
  })
  export class CursosCatalogComponent {
    
    teste: string = 'ABC';
    cursosList: ICurso[] = [
{
      "id": 1,
     "title": "Curso de Gastronomia - Descobrindo os Sabores do Mundo",
     "author": "Marina Gonzaga",
     "description": "Este curso oferece uma jornada emocionante através dos diversos sabores e técnicas culinárias encontradas ao redor do globo. Se você é um entusiasta da culinária ou aspirante a chef, este curso proporcionará uma experiência única de aprendizado e descoberta.",
     "published_date": new Date(),
     "price": 59.99,
    //  "imgUrl": https://images.app.goo.gl/S5yMvBvd48Fo7eN27,
     "totalInStock": 20,
     "totalAddedToCart": 0,
   },

   {
    "id": 2,
   "title": "Curso de Marketing Digital: Dominando o Mundo Online",
   "author": "Eduardo Cunha",
   "description": "Explore o emocionante mundo do marketing digital neste curso abrangente e prático. Desde as estratégias de mídia social até o SEO e o marketing de conteúdo, você aprenderá todas as habilidades essenciais necessárias para se destacar no mundo online. Com instrutores experientes e estudos de caso reais, você estará pronto para enfrentar os desafios do marketing digital e contribuições para o sucesso do seu negócio ou carreira.",
   "published_date": new Date(),
   "price": 99.99,
   "totalInStock": 20,
   "totalAddedToCart": 0,
 },
 {
  "id": 3,
 "title": "Curso de Automaquiagem: Revelando Sua Beleza Interior",
 "author": "Elisa Brito",
 "description": "Descubra o poder da automaquiagem neste curso interativo e divertido. De técnicas básicas a truques avançados, você aprenderá a realçar sua beleza natural e expressar sua criatividade por meio da maquiagem. Com dicas de especialistas e projeções passo a passo, você se sentirá confiante para criar looks deslumbrantes para qualquer ocasião. Explore seu potencial de beleza e liberte sua autoexpressão com o curso de automaquiagem!",
 "published_date": new Date(),
 "price": 89.99,
 "totalInStock": 20,
 "totalAddedToCart": 0,
},
{
  "id": 4,
 "title": "Curso de Investimento: Construindo seu Futuro Financeiro",
 "author": "Gabriel Ferraz",
 "description": "Prepare-se para dominar o mundo dos investimentos neste curso abrangente e prático. Desde os fundamentos da bolsa de valores até estratégias avançadas de investimento, você aprenderá a construir e diversificar seu portfólio para alcançar seus objetivos financeiros. Com insights de especialistas e simulações de mercado realistas, você estará preparado para tomar decisões informadas e maximizar seus retornos de investimento. Invista no seu futuro financeiro com o curso de investimento!",
 "published_date": new Date(),
 "price": 59.99,
 "totalInStock": 20,
 "totalAddedToCart": 0,
},
    ];

  }

// export class CursosCatalogComponent implements OnInit {
  //@Output() addCursoToCart: EventEmitter<ICurso> = new EventEmitter();

  // teste: string = 'ABC';
  // cursosList: ICurso[] = [];

//    ngOnInit() {
//      this.cursosList =JSON.parse(localStorage.getItem("cursosList") || "[]");
//    }

//    warnAboutAddCursoToCart(curso: ICurso){
//      this.addCursoToCart.emit(curso);
//    }
//  }

