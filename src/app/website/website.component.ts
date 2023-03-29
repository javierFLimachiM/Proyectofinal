import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/servicios/postservice.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit{
  //estoy heredando o implemtando el uso de un oninit
//variable para signar los post del backend
  posts:any;
//para llamar al servicio post que toiene el metodo listar
  constructor(public postService:PostService){
    
  }
  //es un metodo para inicializar variables cuando esta cargando el componenete
  ngOnInit(): void {
    //cuando carga el componente se llama al metodo listarposts
    this.listarPosts();
  }

  listarPosts()
  {
    //llamando al servicio para consumir las lista de posts
    this.postService.listarPosts().subscribe(data=>{
      //llenar la variable posts con el data que llega del backend
      this.posts = data;
    })
  }
}