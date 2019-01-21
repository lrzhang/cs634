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
            <li> <a href="https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"> Pattern Recognition & Machine Learning, by Bishop, 2006 </a></li>
            <li><a href="https://github.com/janishar/mit-deep-learning-book-pdf">Deep Learning, by Ian Goodfellow, et.al., 2016. </a></li>
            <li><a href="https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1491962291/ref=sr_1_3?ie=UTF8&qid=1547836944&sr=8-3&keywords=hands+on+machine+learning+with+scikit-learn+and+tensorflow">Hands-On Machine Learning with Scikit-Learn and TensorFlow, by Aurélien Géron, 2017</a></li>
  
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
              <strong>Week 5: (2/21/2019)</strong> This week we address one of the cornerstones of learning algorithms - the Perceptron and generalized linear models for classification - the Logistic Regression. We review Stochastic Gradient Descent and make the connection between perceptrons and neurons. We expand into shallow neural networks and we use Tensorflow to model neural networks. 
              </li>
              <li>
              <strong>Week 6: (2/28/2019) </strong> Kernel methods are used extensively even in today's deep learning dominated field.  They are used as components together with deep neural networks or perhaps more importantly as stand alone solutions to applications that require very small latencies such as robotics. Here we focus on Max Margin Classifiers such as Support Vector Machines. 
              </li>
              <li>
              <strong>Week 7: (3/7/2019) </strong>  The setting this week changes to that of unsupervised learning. We review workhorses of ML such as K-means, KNN and Decision Trees. 
              </li>
              <li>
              <strong>Week 8: (3/14/2019) </strong>  We hold our midterm exam (30 mins) and dedicate the rest of the time to going over Random Forests. Random Forests have been used successfully in many ML use cases. In this lecture we conclude our journey into classical ML algorithms. 
              </li>
              <li>
              <strong>Week 9: (3/21/2019) </strong>  Enjoy your Spring Break!
              </li>
              <li>
              <strong>Week 10: (3/28/2019) </strong>  This week we have a Guest Lecturer - he will go over some key Data Mining applications. 
              </li>
              <li>
              <strong>Week 11: (4/4/2019) </strong>  We connect back to the perceptron algorithm and we start the exploration into the deep learning space by connecting multiple perceptrons together in layers. We explain how MLPs learn via SGD and how backpropagation in MLPs dramatically improves the estimation of the required gradients. 
              </li>
              <li>
              <strong>Week 12: (4/11/2019) </strong>  We continue on backpropation by highlighting how we need to control  gradient flow to avoid vanishing gradients or gradient explosion in Deep Neural Networks. We go over a DNN example highlighting the training difficulties / issues. 
              </li>
              <li>
              <strong>Week 13: (4/18/2019) </strong>  CNNs are almost synonymous with deep learning. This architecture although known for some time, it is finding application in a diverse set of use cases involving unstructured data such as computer vision. We review the principles of convolution and pooling and understand what they offer relative to fully connected layers. At the end we go over a classic object detection example.  
              </li>
              <li>
              <strong>Week 14: (4/25/2019) </strong>  We conclude the course with going over a complete end to end tensorflow pipeline use case, spending some time on hyperparameter optimization. 
              </li>
              <li>
              <strong>Week 15: (5/2/2019) </strong>  In this last lecture, we review what we learned and we recognize students to excelled in their final projects by giving them the opportunity to present them.  
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
