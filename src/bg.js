import React, { Component} from 'react';
export class Result extends Component 
{
  circle = './test.png';

   }
  render() 
  {
    
    return (
         <div>
            <h1 className="text-center " style={{marginTop:'5%'}}>ผลลัพธ์ปริมาตร</h1>
            <center className="row" style={{marginTop:'10%'}}>
                <div className="col-md-4 text-center">
                    <p style={{marginBottom:'2%'}}>ทรงกลม:</p>
                    <img src={this.circle} width="100" height="100"/>