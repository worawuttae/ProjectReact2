import React, { Component,PropTypes} from 'react';
import {Result} from './Result.js';
export class Calculate extends Component 
{
    circle = './test.png';
    circle1 = './bak.png';
    circle2 = './cone.png';
    circle3 = './four.png';
    circle4 = './ka.png';
    


    state = {
        currentPage: "",

        long_circle : 0,

        long_square : 0,

        long_cone :0,
        height_cone: 0,

        long_box :0,
        width_box :0,
        height_box :0,

        longbase_capsule:0,
        long_capsule:0
    }

    OnChangeTextCircle = (e) =>
    {
        this.setState({long_circle: e.target.value});
    }
    OnChangeTextSquare = (e) =>
    {
        this.setState({long_square: e.target.value});
    }
    OnChangeTextCone1 = (e) =>
    {
        this.setState({long_cone: e.target.value});
    }
    OnChangeTextCone2 = (e) =>
    {
        this.setState({height_cone: e.target.value});
    }
    OnChangeTextBox1= (e) =>
    {
        this.setState({long_box: e.target.value});
    }
    OnChangeTextBox2= (e) =>
    {
        this.setState({width_box: e.target.value});
    }
    OnChangeTextBox3= (e) =>
    {
        this.setState({height_box: e.target.value});
    }
    OnChangeTextCapsule1= (e) =>
    {
        this.setState({longbase_capsule: e.target.value});
    }
    OnChangeTextCapsule2= (e) =>
    {
        this.setState({long_capsule: e.target.value});
    }
    onClickedEiEiZa = (e) =>
    {
        this.setState({currentPage: "ResultPage"});
    }
  render() 
  {
    var renderer = null;
    const calculatePage = <div>
                             <h1 className="text-center " style={{marginTop:'5%'}}>คำนวณปริมาตร</h1>
                                <div className="row" style={{marginTop:'10%'}}>
                                    <div className="col-md-4 text-center">
                                        <img src={this.circle} width="150" height="100"/>
                                        <p style={{marginTop:'2%'}}>ความยาวรัศมีที่ฐาน:</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextCircle}/>
                                    </div>
                                    <div className="col-md-4 text-center" >
                                    <img src={this.circle1} width="150" height="100"/>
                                        <p style={{marginTop:'2%'}}>ความยาวเส้นขอบ:</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextSquare}/>
                                    </div>
                                    <div className="col-md-4 text-center" >
                                        <img src={this.circle2} width="150" height="100"/>
                                        <p style={{marginTop:'2%'}}>ความยาวรัศมีที่ฐาน:</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextCone1}/>
                                        <p style={{marginTop:'2%'}}>ความสูง</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextCone2}/>
                                    </div>
                                </div>  
                                <div className="row" style={{marginTop:'5%'}}>
                                    <div className="col-md-6 text-center">
                                        <img src={this.circle3} width="150" height="100"/>
                                        <p style={{marginTop:'2%'}}>ความยาว:</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextBox1}/>
                                        <p style={{marginTop:'2%'}}>ความกว้าง</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextBox2}/>
                                        <p style={{marginTop:'2%'}}>ความสูง</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextBox3}/>
                                    </div>
                                    <div className="col-md-6 text-center" >
                                    <img src={this.circle4} width="150" height="100"/>
                                        <p style={{marginTop:'2%'}}>ความยาวรัศมีที่ฐาน:</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextCapsule1}/>
                                        <p style={{marginTop:'2%'}}>ความยาว</p>
                                        <input className="font-kanit-black" label='Text' placeholder='Enter value' onChange={this.OnChangeTextCapsule2}/>
                                    </div>
                                </div>
                                {this.state.long_circle}
                                <center style={{marginTop:'5%'}}>
                                    <button type="button" className="btn btn-success " onClick={this.onClickedEiEiZa}>คำนวณ</button>
                                </center>
                            </div>;
    
    const resultPage = <Result  long_circle={this.state.long_circle} long_square={this.state.long_square} long_cone={this.state.long_cone} height_cone={this.state.height_cone} long_box={this.state.long_box} width_box={this.state.width_box} height_box={this.state.height_box} longbase_capsule={this.state.longbase_capsule} long_capsule={this.state.long_capsule}/>;
    if(this.state.currentPage == "")
    {
        renderer = calculatePage;
    }
    else
    {
        renderer = resultPage;
    }

    return (
          <div className="container font-kanit" >
              {renderer}
              
          </div>
      
    );
  }
}