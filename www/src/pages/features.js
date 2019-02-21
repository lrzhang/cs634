import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import EvaluationTable from "../components/evaluation-table"
import EvaluationCell from "../components/evaluation-cell"
import FuturaParagraph from "../components/futura-paragraph"
import { itemListFeatures } from "../utils/sidebar/item-list"
import Container from "../components/container"
import { options, rhythm } from "../utils/typography"
import presets, { colors } from "../utils/presets"

const legendBorderColor = colors.ui.light

const LegendTable = () => {
  const legendBallStyle = {
    float: `none`,
    marginLeft: 0,
    marginRight: 0,
    display: `inline-block`,
  }

  const legendBallCellStyle = {
    display: `table-cell`,
    verticalAlign: `middle`,
    textAlign: `center`,
    padding: 10,
    borderLeft: `1px solid ${legendBorderColor}`,
    borderBottom: `1px solid ${legendBorderColor}`,
  }

  const legendExplanationCellStyle = {
    display: `table-cell`,
    verticalAlign: `middle`,
    textAlign: `center`,
    padding: 10,
    borderLeft: `1px solid ${legendBorderColor}`,
    borderBottom: `1px solid ${legendBorderColor}`,
    [presets.Phablet]: {
      borderBottom: 0,
    },
  }

  const balls = [
    <div css={legendBallCellStyle}>
      <h4 style={{ margin: 0 }}>Icon</h4>
    </div>,
    <div css={legendBallCellStyle}>
      <EvaluationCell num="3" style={legendBallStyle} />
    </div>,
    <div css={legendBallCellStyle}>
      <EvaluationCell num="2" style={legendBallStyle} />
    </div>,
    <div css={legendBallCellStyle}>
      <EvaluationCell num="1" style={legendBallStyle} />
    </div>,
    <div css={legendBallCellStyle}>
      <EvaluationCell num="0" style={legendBallStyle} />
    </div>,
  ]

  const legendText = [
    <div css={legendExplanationCellStyle}>
      <h5 style={{ margin: 0 }}>Feature Availability</h5>
    </div>,
    <div css={legendExplanationCellStyle}>Out of the box</div>,
    <div css={legendExplanationCellStyle}>Plugins available</div>,
    <div css={legendExplanationCellStyle}>Needs customization</div>,
    <div css={legendExplanationCellStyle}>Not possible</div>,
  ]

  return (
    <div>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div
        css={{
          border: `1px solid ${legendBorderColor}`,
          borderLeft: 0,
          fontFamily: options.headerFontFamily.join(`,`),
          display: `none`,
          [presets.Phablet]: {
            display: `table`,
          },
        }}
      >
        <div css={{ display: `table-row` }}>{balls}</div>
        <div css={{ display: `table-row` }}>{legendText}</div>
      </div>
      <div
        css={{
          display: `table`,
          border: `1px solid ${legendBorderColor}`,
          borderLeft: 0,
          fontFamily: options.headerFontFamily.join(`,`),
          [presets.Phablet]: {
            display: `none`,
          },
        }}
      >
        {[0, 1, 2, 3, 4].map(i => (
          <div css={{ display: `table-row` }} key={i}>
            {balls[i]}
            {legendText[i]}
          </div>
        ))}
      </div>
    </div>
  )
}

const FeaturesHeader = () => (
  <section>
    <h1 id="introduction" style={{ marginTop: 0 }}>
      Projects
    </h1>
    <FuturaParagraph>
      This is the list of projects that you can choose from. All projects are competitions in <a href="https://www.kaggle.com">Kaggle.</a> 
      
       <ul>
       <li> Formation of teams (up to 3 students) to complete the assigned projects is allowed but the submissions must be distinct. If you collaborate, add to 
         your submission your collaborators in Github. 
       </li>
       <li>Submission formats are either Kaggle URLs or Colab URLs of your <b>notebooks</b> paired with a github repository that contains the source 
       and a README.md file that explains how to run the notebook (kernel dependencies, etc.). You should not be expecting that the graders will need to perform special setups or wonder on how to run your notebooks. 
      Avoid posting your project code in public until the last day of the submission allowing for some last minute mishaps 
      such as the very unlikely event that Github/Kaggle/Colab are down (probably not going to happen). 
      </li>
          <li>You need to submit all (two) midterm projects.  Midterm projects are due <b> March 14th</b>.The grade of the project will depend on the metric (MSE, Accuracy) achieved. Those that try AutoML 
            (automated feature selection) in their code they need to submit in their write up an explanation as to how the AutoML scheme works. 
            AutoML submissions will be rewarded extra credit but they are not a prerequisite for a good score. 
          </li>
          <li>You need to submit  one (1) final project of your choice. Final projects will be posted during Spring break and they are due <b> May 2nd. </b></li>  
          <li>See the <Link to="/docs/environment/setup">setup</Link> for setting up your development environment.</li>
        </ul>
    </FuturaParagraph>
    {/* <ul css={{ fontFamily: options.headerFontFamily.join(`,`) }}>
      <li>
        <b>Traditional static site generators</b> such as
        {` `}
        <a href="http://jekyllrb.com/">Jekyll</a> let you put text or markdown
        in a specific directory such as <code>pages/</code> in a
        version-controlled codebase. They then build a specific kind of site,
        usually a blog, as HTML files from the content you’ve added. These files
        can be cached and served from a CDN.
      </li>
      <li>
        <b>Content Management Systems</b> (CMSs) like
        {` `}
        <a href="http://wordpress.org/">WordPress</a> give you an online text
        editor to create content. You customize the look and feel through
        choosing themes and plugins, or writing custom PHP or JavaScript code.
        Content is saved in a database, which is retrieved and sent to users
        when they visit the website. Depending on your requirements you can
        self-host your website, or use an official hosting provider.
      </li>
      <li>
        <b>Site builders</b> like
        {` `}
        <a href="http://squarespace.com/">Squarespace</a> are a type of hosted
        closed-source CMS. They focus on making it fast to build a website;
        however, they don’t allow self-hosting or enable you to export your
        website and customize it.
      </li>
    </ul>
    <FuturaParagraph>
      The chart below details Gatsby’s capabilities in comparison with a
      representative from each category. Click on any row to see a more detailed
      explanation on that feature and our rating for each system.
    </FuturaParagraph>
    <h6 id="legend" css={{ textTransform: `uppercase` }}>
      Legend
    </h6>
    <LegendTable /> */}
  </section>
)

const getFeaturesData = function(data) {
  const sections = (data || [])
    .map((row, i) => (row.node.Category ? i : -1))
    .filter(rowNum => rowNum !== -1)
    .map((rowNum, i, arr) => {
      if (i < arr.length - 1) {
        return [rowNum, arr[i + 1]]
      }

      return [rowNum, data.length]
    })
    .map(bounds => data.slice(bounds[0], bounds[1]))

  const sectionHeaders = (data || [])
    .filter(row => row.node.Category)
    .map(row => row.node.Category)

  return {
    sectionHeaders,
    sections,
  }
}

const FeaturesFooter = () => (
  <p css={{ fontSize: `80%`, marginTop: rhythm(1) }}>
    Want to help keep this information complete, accurate, and up-to-date?
    Please comment
    {` `}
    <a
      href="https://github.com/gatsbyjs/gatsby/issues/2444"
      target="_blank"
      rel="noopener noreferrer"
    >
      here.
    </a>
  </p>
)

class FeaturesPage extends Component {
  render() {
    const { sections, sectionHeaders } = getFeaturesData(
      this.props.data.allGatsbySpecsCsv.edges
    )

    return (
      <Layout
        location={this.props.location}
        itemList={itemListFeatures}
        enableScrollSync={true}
      >
        <Container>
          <main id={`reach-skip-nav`}>
            <FeaturesHeader />
            {/* <EvaluationTable
              sections={sections}
              sectionHeaders={sectionHeaders}
            />
            <FeaturesFooter /> */}
          </main>
        </Container>
      </Layout>
    )
  }
}

export default FeaturesPage

export const pageQuery = graphql`
  query {
    allGatsbySpecsCsv {
      edges {
        node {
          Category
          Subcategory
          Feature
          Gatsby
          WordPress
          Squarespace
          Jekyll
          Description
        }
      }
    }
  }
`
