import { Component, inject, Input, input, OnInit, Output, output } from '@angular/core';
import { AppService } from '../app.service';
import { RouterOutlet } from '@angular/router';
import { CardItem, postResponsModel } from '../app.model';
import { JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'homeComponent',
    templateUrl: 'home.component.html',
    imports: [RouterOutlet,JsonPipe,ButtonModule,DialogModule,AvatarModule,AvatarGroupModule,InputTextModule, IftaLabelModule,FormsModule],
    providers: [AppService]
})

export class mainPageComponent implements OnInit {



 appService=inject(AppService)
 
  postBlog!:CardItem[] 
  
   
  showDialog:boolean=false
  
  ngOnInit(): void {
   
    this.appService.getPosts().subscribe({
      next:((data: any)=>{
       if(data.products instanceof Array){
        this.postBlog=data.products as CardItem[]  
       }
      }),
      error:((error)=>{
        
      }),
      complete:(()=>{
        
      })
    }
    )
    
  }
  handleDelete(id:number):void{
    this.postBlog=this.postBlog.filter(item => item.id !== id)
    }
    showdialog(){
      this.showDialog = true
    }
    

}
