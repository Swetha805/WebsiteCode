import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { Checks } from './checks';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.css']
})
export class ChecksComponent implements OnInit {

  constructor(private details:DetailsService, private route: Router) { }
  checkDetails:Checks[]=[]
  

  ngOnInit(): void {
    this.getAll()
    
  }

  getAll(){
  
  
    this.details.fetchDetails().subscribe((success)=>{
     this.checkDetails=success
    
  })
}
delete(data:Checks){
  console.log(data)
  this.details.deleteDetails(data.id).subscribe((success)=>{
    this.getAll()
    

  })
}


}
