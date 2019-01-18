import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import presets, { colors } from "../utils/presets"
import { rhythm } from "../utils/typography"
import { WebpackIcon, ReactJSIcon, GraphQLIcon } from "../assets/logos"
import { vP } from "../components/gutters"
import Container from "../components/container"
import MastheadBg from "../components/masthead-bg"
import MastheadContent from "../components/masthead"
import Cards from "../components/cards"
import Card from "../components/card"
import UsedBy from "../components/used-by"
import CardHeadline from "../components/card-headline"
import Diagram from "../components/diagram"
import FuturaParagraph from "../components/futura-paragraph"
import Button from "../components/button"
import TechWithIcon from "../components/tech-with-icon"
import HomepageEcosystem from "../components/homepage/homepage-ecosystem"
import HomepageBlog from "../components/homepage/homepage-blog"
import HomepageNewsletter from "../components/homepage/homepage-newsletter"
import {
  setupScrollersObserver,
  unobserveScrollers,
} from "../utils/scrollers-observer"

class IndexRoute extends React.Component {
  componentDidMount() {
    setupScrollersObserver()
  }

  componentWillUnmount() {
    unobserveScrollers()
  }

  combineEcosystemFeaturedItems = ({ starters, plugins, numFeatured = 3 }) =>
    new Array(numFeatured)
      .fill(undefined)
      .reduce(
        (merged, _, index) => merged.concat([starters[index], plugins[index]]),
        []
      )

  render() {
    const {
      data: {
        allMarkdownRemark: { edges: postsData },
        allStartersYaml: { edges: startersData },
        allNpmPackage: { edges: pluginsData },
      },
    } = this.props

    const starters = startersData.map(item => {
      const {
        node: {
          fields: {
            starterShowcase: { slug, name, description, stars },
          },
          childScreenshot: {
            screenshotFile: {
              childImageSharp: { fixed: thumbnail },
            },
          },
        },
      } = item

      return {
        slug: `/starters${slug}`,
        name,
        description,
        stars,
        thumbnail,
        type: `Starter`,
      }
    })

    const plugins = pluginsData.map(item => {
      item.node.type = `Plugin`

      return item.node
    })

    const ecosystemFeaturedItems = this.combineEcosystemFeaturedItems({
      plugins,
      starters,
    })

    const posts = postsData.map(item => item.node)

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <meta
            name="Description"
            content="Blazing fast modern site generator for React. Go beyond static sites: build blogs, ecommerce sites, full-blown apps, and more with Gatsby."
          />
        </Helmet>
        <div css={{ position: `relative` }}>
          <MastheadBg />
          <div
            css={{
              display: `flex`,
              flexDirection: `row`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
            }}
          >
            <MastheadContent />
            {/* <UsedBy /> */}
            <div
              css={{
                padding: rhythm(presets.gutters.default / 2),
                paddingBottom: 0,
                flex: `0 0 100%`,
                maxWidth: `100%`,
                [presets.Hd]: { padding: vP, paddingTop: 0, paddingBottom: 0 },
              }}
            >
              <main
                id={`reach-skip-nav`}
                css={{
                  display: `flex`,
                  flexDirection: `row`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                }}
              >
                <Cards>
                  <Card>
                    <CardHeadline>
                      Instructors
                    </CardHeadline>
                    <FuturaParagraph>
                      Pantelis Monogioudis, Ph.D, Bell Labs.
                    </FuturaParagraph>
                    <FuturaParagraph>
                      [Contact info will be given in class.]
                    </FuturaParagraph>
                  </Card>
                  <Card>
                  <CardHeadline>Grading Policy</CardHeadline>
                    <FuturaParagraph>
                      <li>Weights</li>
                      <ul>
                        Midterm Project: 25%, Final Project: 30%, Term Paper:
                        10%, Exam: 35%
                      </ul>
                      <li>Scale</li>
                      <ul>
                        A: 93% and above, B+: 86%-92.9%, B: 78%-85.9%, C+:
                        70%-77.9%, C: 60%-69.9%, F: Below 60%
                      </ul>
                    </FuturaParagraph>
                  </Card>
                  <Card>
                  <CardHeadline>Course Highlights</CardHeadline>
                    <FuturaParagraph>
                      All course discussions will take place in Moodle.
                    </FuturaParagraph>
                    <FuturaParagraph>
                      Stay tuned for updates in the Projects link at the top of
                      this page.
                    </FuturaParagraph>
                    <FuturaParagraph>
                    Some proficiency in programming, linear algebra, basic
                      probability and statistics is expected. We will go through
                      the basics in the first weeks of the course.
                    </FuturaParagraph>
                  </Card>
                  {/* <Diagram /> */}
                  {/* <div css={{ flex: `1 1 100%` }}>
                    <Container hasSideBar={false}>
                      <div
                        css={{
                          textAlign: `center`,
                          padding: `${rhythm(1)} 0 ${rhythm(1.5)}`,
                        }}
                      >
                        <h1 css={{ marginTop: 0 }}>Curious yet?</h1>
                        <FuturaParagraph>
                          It only takes a few minutes to get up and running!
                        </FuturaParagraph>
                        <Button
                          secondary
                          to="/docs/"
                          overrideCSS={{ marginTop: `1rem` }}
                        >
                          Get Started
                        </Button>
                      </div>
                    </Container>
                  </div> */}
                </Cards>

                {/* <HomepageEcosystem featuredItems={ecosystemFeaturedItems} /> */}

                {/* <HomepageBlog posts={posts} /> */}

                {/* <HomepageNewsletter /> */}
              </main>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexRouteQuery(
    $featuredStarters: [String]!
    $featuredPlugins: [String]!
  ) {
    file(relativePath: { eq: "gatsby-explanation.png" }) {
      childImageSharp {
        fluid(maxWidth: 870) {
          src
          srcSet
          sizes
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
      limit: 4
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/docs.blog/" }
        fields: { released: { eq: true } }
      }
    ) {
      edges {
        node {
          ...HomepageBlogPostData
        }
      }
    }
    allStartersYaml(
      filter: {
        fields: { starterShowcase: { slug: { in: $featuredStarters } } }
      }
      sort: { order: DESC, fields: [fields___starterShowcase___stars] }
    ) {
      edges {
        node {
          fields {
            starterShowcase {
              slug
              description
              stars
              name
            }
          }
          childScreenshot {
            screenshotFile {
              childImageSharp {
                fixed(width: 64, height: 64) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
      }
    }
    allNpmPackage(filter: { name: { in: $featuredPlugins } }) {
      edges {
        node {
          slug
          name
          description
          humanDownloadsLast30Days
        }
      }
    }
  }
`
