import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/info';
import menu from '../components/Home/Menu';
import Menu from "../components/Home/Menu";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby` ,'application' , `react`]}/>
    
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="Rahul's  Data" 
    styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu}/>
  </Layout>
);


export const query = graphql`
{
  img:file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulCoffeItem{
    edges{
      node {
        id
        title
        category
        image{
          fixed(width:80,height:80){
          ...GatsbyContentfulFixed_tracedSVG
        }
         
        }
      }
    }
  }
}`

export default IndexPage
