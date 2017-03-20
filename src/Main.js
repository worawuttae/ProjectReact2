import React, { Component,PropTypes} from 'react';

import {Calculate} from './Calculate.js'

export class Main extends Component 
{

  circle = './test.png';
  circle12 = './123.png';
      circle1 = './bak.png';
    circle2 = './cone.png';
    circle3 = './four.png';
    circle4 = './ka.png';

  state = {
        currentPage: "Showmain",
      }
  
  onClickedEiEiZa = (e) =>
  {
    this.setState({currentPage: "gotoCal"});
  }

  render() 
  {
      var renderer = null;


      const buttonsInstance = 
                            <div className="container font-kanit" style={{position:"relative", minHeight:"100vh"}}>
                             <center style={{marginTop:'12%'}}>
                                     <img src={this.circle12} width="654" height="376"/>
                                </center>

                                <div  className="underline-top text-center" style={{width:'600', position:"absolute", bottom:"0", left:"0", marginLeft:"20vw", marginBottom:"90px"}}>
                                  <div className="my-margin-top20">
                                    <a href="#" onClick={this.onClickedEiEiZa} style={{color:'#fff'}}>Go to site</a>
                                  </div>
                               </div>  
                            </div>;

     const gotoCalculate = <Calculate />;

     if(this.state.currentPage == "Showmain")
     {
        renderer = buttonsInstance;
     }
     else
     {
        renderer = gotoCalculate;
     }
    return (

         <div>
              {renderer}
        </div>


       
             
    );
  }
}
