import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { utils } from 'protractor';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  xvalue:number;
  yvalue:number;
  insideRectWidth:number;
  insideRectHeight:number;
  xCenter:number;
  yCenter:number;
  xGrid:number;
  yGrid:number;
  yincrement:any;
  yposition:any;
  xincrement:any;
  xposition:any;
  dragableObject:any;
  tempcheck = false;

  data = {
    insideWidth:this.insideRectWidth
  }


 

  global = this;

  constructor(public commonservice:CommonService){

    var self = this;

  }
  changePosition(){
    
  }
  
    

  ngOnInit() {

    this.data = {
      insideWidth:this.insideRectWidth
    }
  
  
    // this.commonservice.draggable = true;
    this.commonservice.pressing = false;
    this.xvalue = 100;
    this.yvalue = 100;
    this.insideRectWidth = 100;
    this.insideRectHeight = 50;
    this.xGrid = 50;
    this.yGrid = 50;
    this.yincrement = 50;
    this.yposition = 50;


    var canvas =<HTMLCanvasElement> document.getElementById('canvasId');
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 300;

    ctx.beginPath();
    ctx.strokeStyle = "white";
    while(this.xGrid<canvas.height){
      ctx.moveTo(0,this.xGrid);
      ctx.lineTo(canvas.width,this.xGrid);
      ctx.stroke();
      this.xGrid =this.xGrid + 50;
    }
    while(this.yGrid<canvas.width){
      ctx.moveTo(this.yGrid,0);
      ctx.lineTo(this.yGrid,canvas.height);
      ctx.stroke();
      this.yGrid =this.yGrid + 50;
    }
    
    
    ctx.translate(0,295);
    // Y and X axis data start
    ctx.strokeStyle = "gray";
    this.yincrement=0;
    this.yposition = 0;
    for(let i=0;i<7;i++){
      //  ctx.strokeText(this.yincrement,2,-this.yposition);
       this.yincrement+=50;
       this.yposition+=50;
       console.log(this.yposition)
    }
    this.xincrement=0;
    this.xposition = 0;
    for(let i=0;i<12;i++){
      //  ctx.strokeText(this.xincrement,this.xposition,0);
       this.xincrement+=50;
       this.xposition+=50;
       console.log(this.xposition)
    }
   
    // Y axis data end
    
   
    
    // Calculating center of inner container start
     this.xCenter = this.insideRectWidth/2;
     this.yCenter = this.insideRectHeight/2;
     // Calculating center of inner container end
     ctx.fillStyle = "gray";
     var outerStructure = ctx.strokeRect(this.xvalue-this.xCenter,-this.yvalue-this.yCenter,this.insideRectWidth,this.insideRectHeight);
     //  Origin
     ctx.fillStyle = "black";
     var innerOrigin = ctx.fillRect(this.xvalue,-this.yvalue,3,3);  

  }
  
  
 
  
 changeValue(){
    this.data = {
       insideWidth:this.insideRectWidth
    } 

    var temp = this.insideRectWidth;
    this.xGrid = 50;
    this.yGrid = 50;
    var canvas =<HTMLCanvasElement> document.getElementById('canvasId');
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height =300;
    // Grid start
    ctx.beginPath();
    ctx.strokeStyle = "white";
    while(this.xGrid<canvas.height){
      ctx.moveTo(0,this.xGrid);
      ctx.lineTo(canvas.width,this.xGrid);
      ctx.stroke();
      this.xGrid =this.xGrid + 50;
    }
    while(this.yGrid<canvas.width){
      ctx.moveTo(this.yGrid,0);
      ctx.lineTo(this.yGrid,canvas.height);
      ctx.stroke();
      this.yGrid =this.yGrid + 50;
    }
    // Gride end
    ctx.translate(0,295);

    ctx.strokeStyle = "gray";
    // Y and X axis data start
    this.yincrement=0;
    this.yposition = 0;
    for(let i=0;i<7;i++){
      //  ctx.strokeText(this.yincrement,2,-this.yposition);
       this.yincrement+=50;
       this.yposition+=50;
       console.log(this.yposition)
    }
    this.xincrement=0;
    this.xposition = 0;
    for(let i=0;i<12;i++){
      //  ctx.strokeText(this.xincrement,this.xposition,0);
       this.xincrement+=50;
       this.xposition+=50;
       console.log(this.xposition)
    }
    // Y axis data end

  
    // Calculating center of inner container start
    this.xCenter = this.insideRectWidth/2;
    this.yCenter = this.insideRectHeight/2;
    // Calculating center of inner container end
    ctx.fillStyle = "#FF0000";
    ctx.strokeRect(this.xvalue-this.xCenter,-this.yvalue-this.yCenter,this.insideRectWidth,this.insideRectHeight);   
    //  Origin
    ctx.fillStyle = "gray";
    ctx.fillRect(this.xvalue,-this.yvalue,3,3);
    
    return temp;
      
  }

  canvasOffsetvalue(){
    var offsets = {
        xvalue:0,
        yvalue:0,
    }
    var canvas =<HTMLCanvasElement> document.getElementById('canvasId');
    var ctx = canvas.getContext('2d');
    offsets.xvalue = ctx.canvas.offsetLeft;
    offsets.yvalue = ctx.canvas.offsetTop;
    return offsets;
    
  }
  
  
 
  
  drawRectangle(xval,yval){  
    var canvas =<HTMLCanvasElement> document.getElementById('canvasId');
    var ctx = canvas.getContext('2d');
    // Calculating center of inner container start
    this.xCenter = this.insideRectWidth/2;
    this.yCenter = this.insideRectHeight/2;
    // Calculating center of inner container ends
    ctx.clearRect((this.xvalue-this.xCenter)-1,(-this.yvalue-this.yCenter)-1,this.insideRectWidth+2,this.insideRectHeight+2);
    ctx.clearRect(this.xvalue,-this.yvalue,3,3);   
    // Clearing old rectangle start
    
    this.xvalue = xval;
    this.yvalue = 300 - yval; 
    ctx.fillStyle = "#FF0000";
    ctx.strokeRect(this.xvalue-this.xCenter,-this.yvalue-this.yCenter,this.insideRectWidth,this.insideRectHeight);   
    //  Origin
    ctx.fillStyle = "gray";
    ctx.fillRect(this.xvalue,-this.yvalue,3,3);  

    // ctx.fillStyle = "red"
    ctx.clearRect((this.xvalue-this.xCenter)-1,(-this.yvalue-this.yCenter)-1,this.insideRectWidth+2,this.insideRectHeight+2);
    ctx.clearRect(this.xvalue,-this.yvalue,3,3);   
    // Clearing old rectangle ends

  }
  


  moveUp(event){
      
    var insideRectWidth = parseInt((<HTMLInputElement>document.querySelector('.rectwidth')).value)
    var insideRectHeight = parseInt((<HTMLInputElement>document.querySelector('.rectheight')).value)
    
    var canvas =<HTMLCanvasElement> document.getElementById('canvasId');
    var ctx = canvas.getContext('2d');
    var xoffset = ctx.canvas.offsetLeft;
    var yoffset = ctx.canvas.offsetTop;

    // Calculating center of inner container start
    this.xCenter = insideRectWidth/2;
    this.yCenter = insideRectHeight/2;
    // Calculating center of inner container ends
    // Getting the offset value end
    var hitvalueX = event.clientX - xoffset;
    var hitvalueY = event.clientY - yoffset;

    // Clearing old rectangle start
    ctx.clearRect((this.xvalue-this.xCenter)-1,(-this.yvalue-this.yCenter)-1,insideRectWidth+2,insideRectHeight+2);
    ctx.clearRect(this.xvalue,-this.yvalue,3,3);   
    // Clearing old rectangle ends
    // Drawing
    this.xvalue = hitvalueX;
    this.yvalue = 300 - hitvalueY; 
    ctx.strokeStyle = "gray";
    ctx.strokeRect(this.xvalue-this.xCenter,-this.yvalue-this.yCenter,insideRectWidth,insideRectHeight);   
    //  Origin
    ctx.fillStyle = "gray";
    ctx.fillRect(this.xvalue,-this.yvalue,3,3); 

    var xvaluestring = this.xvalue.toString();
    var yvaluestring = this.yvalue.toString();
    (<HTMLInputElement>document.querySelector('.xvalueclass')).value = xvaluestring;
    (<HTMLInputElement>document.querySelector('.yvalueclass')).value = yvaluestring;
    
}


  onmouseMove(event){
      var insideRectWidth = parseInt((<HTMLInputElement>document.querySelector('.rectwidth')).value)
      var insideRectHeight = parseInt((<HTMLInputElement>document.querySelector('.rectheight')).value)
      console.log(insideRectWidth +"Testing..."+insideRectHeight);
      
      // Getting the offset value start
      var canvas =<HTMLCanvasElement> document.getElementById('canvasId');
      var ctx = canvas.getContext('2d');
      var xoffset = ctx.canvas.offsetLeft;
      var yoffset = ctx.canvas.offsetTop;
      // Getting the offset value end
      // Calculating center of inner container start
      this.xCenter = insideRectWidth/2;
      this.yCenter = insideRectHeight/2;
      // Calculating center of inner container ends
      var hitvalueX = event.clientX - xoffset;
      var hitvalueY = event.clientY - yoffset;

      // Clearing old rectangle start
      ctx.clearRect((this.xvalue-this.xCenter)-1,(-this.yvalue-this.yCenter)-1,insideRectWidth+2,insideRectHeight+2);
      ctx.clearRect(this.xvalue,-this.yvalue,3,3);   
      // Clearing old rectangle ends
      // Drawing
      this.xvalue = hitvalueX;
      this.yvalue = 300 - hitvalueY; 
      ctx.fillStyle = "gray";
      ctx.strokeRect(this.xvalue-this.xCenter,-this.yvalue-this.yCenter,insideRectWidth,insideRectHeight);   
      //  Origin
      ctx.fillStyle = "gray";
      ctx.fillRect(this.xvalue,-this.yvalue,3,3);  

      var xvaluestring = this.xvalue.toString();
      var yvaluestring = this.yvalue.toString();
      (<HTMLInputElement>document.querySelector('.xvalueclass')).value = xvaluestring;
      (<HTMLInputElement>document.querySelector('.yvalueclass')).value = yvaluestring;
      
  }

  onMouseDown(e){
    var offsetvalue = this.canvasOffsetvalue();
    // console.log(offsetvalue.xvalue + " "+ offsetvalue.yvalue);
    var hitvalueX = e.clientX - offsetvalue.xvalue;
    var hitvalueY = e.clientY - offsetvalue.yvalue;
    this.drawRectangle(hitvalueX,hitvalueY);
    document.getElementById("canvasId").addEventListener('mouseup',this.moveUp);
    setTimeout(()=>{
    document.getElementById("canvasId").addEventListener('mousemove',this.global.onmouseMove);
    },50)
    setTimeout(()=>{
      document.getElementById("canvasId").removeEventListener('mousemove',this.onmouseMove);
    },500)
}
// Old code end


}

