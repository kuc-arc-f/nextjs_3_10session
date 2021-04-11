// https://nextjs.org/docs/authentication
// https://www.npmjs.com/package/next-iron-session

import React from 'react'
import Link from 'next/link';
import Layout from '../components/layout'
import withSession from '../libs/session'

//
function Page(props) {
console.log(props.user )
  return (
    <Layout>
      <div className="container">
        <hr className="mt-2 mb-2" />        
        <h3>Session - Test</h3>
      </div>
    </Layout>
    )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  var user = req.session.get('user')
  if (!user) { 
    user = {}
  }
// req.session.destroy();
  return {
    props: { user} 
  }
})

export default Page
