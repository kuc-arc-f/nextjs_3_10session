import React from 'react'
import Router from 'next/router'
import Link from 'next/link';
import Layout from '../components/layout'
import FlashBox from '../components/FlashBox'
import withSession from '../libs/session'

//
export default class extends React.Component {
  static async getInitialProps(ctx) {
    return {
      data: "",
      items: [],
      BASE_URL: process.env.BASE_URL,
    }
  }
  constructor(props){
    super(props)
  }
  async handleClick(){
    console.log("#-handleClick")
  //  console.log(this.state)
    await this.test_session()
  }
  async test_session(){
    try {
//console.log(item)
      const res = await fetch(process.env.BASE_URL +'/api/sesion_write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',},
        body: JSON.stringify({}),
      });
      if (res.status != 200) {
        throw new Error(await res.text());
      }
      Router.push('/session');
    } catch (error) {
      console.error(error);
    }     
  }     
  render(){
    return (
    <Layout>
      <div className="body_main_wrap">
        <div className="container">test:
        <hr />
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>
            Write Session
          </button>
        </div>        
        </div>
      </div>
    </Layout>
    )
  }
}
