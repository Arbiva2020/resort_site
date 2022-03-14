import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from "./Title";

export default class Scervices extends Component {
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:"Free coctails",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
        },
        {
            icon:<FaHiking/>,
            title:"Endless hiking",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
        },
        {
            icon:<FaBeer/>,
            title:"Strongest beer",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
        }
    ]
    }
    render() {
    return (
      <section className="services">
          <Title title="services" />
          <div className='services-center'>
            {this.state.services.map((item, index)=>{
                return (<article key={index} className="services">
                  <span style={{color: "#af9a7d", fontSize:"200%"}}>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>  
                </article>
                );
            })}
          </div>
      </section>
    );
  }
}
