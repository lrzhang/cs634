import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import { itemListDocs } from "../../utils/sidebar/item-list"
import Container from "../../components/container"
import EmailCaptureForm from "../../components/email-capture-form"
import DocSearchContent from "../../components/docsearch-content"

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} itemList={itemListDocs}>
        <DocSearchContent>
          <Container>
            <Helmet>
              <title>Docs</title>
            </Helmet>
            <h1 id="gatsby-documentation" css={{ marginTop: 0 }}>
              Syllabus
            </h1>
            <p>The process of learning is a multi-step endeavor that involves, data analysis, visualization, learning algorithms, model analysis  - all done in a well orchestrated framework to deliver automated machine intelligence to humans and systems that require it. 

            In this course we will learn from structured and unstructured data using both classical machine learning, in supervised and unsupervised settings, as well as deeper architectures (convolutional neural networks) in supervised settings only. The schedule below highlights the journey. </p>
            <h2>Books</h2>

            <h2>Class Schedule</h2>
            <p>The schedule is based on <a> https://www.njit.edu/registrar/spring-2019-academic-calendar/ </a> :</p>
            <ol>
              <li>
              <strong>Week 1 (1/24/2019) : </strong> We start with an introduction to data mining, what what are the stages of machine learning pipelines and how data scientists support them. We use industrial examples to highlight how companies (Uber, etc.) mechanize and embed machine learning into products and services.  
              </li>
              <li>
              <strong>Week 2: (1/31/2019) </strong> We review programming techniques in Python and going over two ML frameworks that we will be using in this course.  Amongst classical ML frameworks, we will cover data frameworks such as Pandas and SciKit Learn. Amongst deep learning frameworks, we will cover Tensorflow. The later is in fact a generic computational framework actively used in solving problems outside of deep learning. 
              </li>
              <li>
              <strong>Week 3: (2/7/2019) </strong> We review mathematical principles from linear algebra and probability - these are usually prerequisites for this course but we also start using the background we developed in Week 2 to understand the elements of a data mining application.  We use the Netflix case study as an example that brings together big matrices and machine learning algorithms. 
              </li>
              <li>
              <strong>Week 4: (2/14/2019) </strong> We review least squares problems and its relationship to Maximum Likelihood and apply the method to problematic situations that reveal overfitting. We understand regularization and how can solve the overfitting problem using a popular house price prediction dataset.  
              </li>
              <li>
              <strong>Week 5: 2/21/2019</strong> This week we address one of the cornerstones of learning algorithms - the Perceptron and generalized linear models for classification - the Logistic Regression. We review Stochastic Gradient Descent and make the connection between perceptrons and neurons. We expand into shallow neural networks and we use Tensorflow to model neural networks. 
              </li>
              <li>
              <strong>Week 6: 2/28/2019</strong> Kernel methods are used extensively even in today's deep learning dominated field.  They are used as components together with deep neural networks or perhaps more importantly as stand alone solutions to applications that require very small latencies such as robotics. Here we focus on Max Margin Classifiers such as Support Vector Machines. 
              </li>
              <li>
              <strong>Week 6: 2/28/2019</strong> Kernel methods are used extensively even in today's deep learning dominated field.  They are used as components together with deep neural networks or perhaps more importantly as stand alone solutions to applications that require very small latencies such as robotics. Here we focus on Max Margin Classifiers such as Support Vector Machines. 
              </li>
            </ol>
            {/* <EmailCaptureForm signupMessage="Want to keep up with the latest tips &amp; tricks? Subscribe to our newsletter!" /> */}
          </Container>
        </DocSearchContent>
      </Layout>
    )
  }
}

export default IndexRoute
