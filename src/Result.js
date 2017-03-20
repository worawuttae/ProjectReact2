import React, { Component} from 'react';

export class Result extends Component 
{
  circle = './test.png';
      circle1 = './bak.png';
    circle2 = './cone.png';
    circle3 = './four.png';
    circle4 = './ka.png';

  CalculateCircle = (e) =>
  {
      return (4/3)*3.14*this.props.long_circle;
  }
  CalculateSquare = (e) =>
  {
      return this.props.long_square*this.props.long_square*this.props.long_square;
  }
  CalculateCone = (e) =>
  {
      return (1/3)*this.props.long_cone*this.props.height_cone;
  }
  CalculateBoxSquare = (e) =>
  {
      return this.props.long_box*this.props.width_box*this.props.height_box;
  }
  CalculateCapsule = (e) =>
  {
      return 3.14*this.props.longbase_capsule*this.props.longbase_capsule*this.props.long_capsule;
  }
  render() 
  {
    
    return (
         <div>
            <h1 className="text-center " style={{marginTop:'5%'}}>ผลลัพธ์ปริมาตร</h1>
            <center className="row" style={{marginTop:'10%'}}>
                <div className="col-md-4 text-center">
                    
                    <img src={this.circle} width="150" height="100"/>
                    <p></p>
                    ปริมาตร 
                    <input className="font-kanit-black" label='Text' placeholder='Enter value' value={this.CalculateCircle()}/>
                </div>
                <div className="col-md-4 text-center">
                    
                    <img src={this.circle1} width="150" height="100"/>
                    <p></p>
                    ปริมาตร 
                    <input className="font-kanit-black" label='Text' placeholder='Enter value' value={this.CalculateSquare()}/>
                </div>
                <div className="col-md-4 text-center">
                    
                    <img src={this.circle2} width="150" height="100"/>
                    <p></p>
                    ปริมาตร 
                    <input className="font-kanit-black" label='Text' placeholder='Enter value' value={this.CalculateCone()}/>
                </div>
            </center>  
            <div className="row" style={{marginTop:'5%'}}>
                <div className="col-md-6 text-center">
                    
                    <img src={this.circle3} width="150" height="100"/>
                    <p></p>
                    ปริมาตร 
                    <input className="font-kanit-black" label='Text' placeholder='Enter value' value={this.CalculateBoxSquare()}/>
                </div>
                <div className="col-md-6 text-center">
                    
                    <img src={this.circle4} width="150" height="100"/>
                    <p></p>
                    ปริมาตร 
                    <input className="font-kanit-black" label='Text' placeholder='Enter value' value={this.CalculateCapsule()}/>
                </div>
            </div>
        </div> 
    );
  }


}
