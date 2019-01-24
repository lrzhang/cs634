---
title: Data Mining Overview
---

## Summary

* We provide an architecture-oriented definition of data mining.
* We explain key ML terms.

## What is data mining?

According to wikipedia, data mining is the process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems. Data mining is an interdisciplinary subfield of computer science and statistics with an overall goal to extract information from a data set and transform the information into a comprehensible structure for further use.

![Data Mining Positioning](images/ml-ai-categorization.png)
*Data Mining Positioning*

## ML Terms
 The performance of simpler machine learning algorithms depends heavily on the **representation** of the data they are given.  Each piece of, relevant to the problem, information that is included in the representation is known as a **feature**.

Modern ML systems **learn** the most suitable representations (still with a some help from data scientists) - an example is shown in the picture below. 

![Hierarchical Features](images/hierarchical-features-classification.png)
*Hierarchical Feature Learning*

In **Supervised** learning we present a training set $\{\vx_1,...,\vx_N\}$ together with their labels, the target vectors $\vy$.

![USPS](images/usps.png)

Construct a model such that a suitably chosen loss function is minimized for a *different* set of input data, the so-called test set. The ability to correctly *predict* / *classify* when observing the test set, is called **generalization**.
 
![Zillow](images/home-prices-area.png)

Birdseye view of home prices - Zillow predicts prices for similar homes in the same market.

In unsupervised learning, we present a training set $\{x_1,...,x_N\}$ without labels. We construct a partition of the data into some number K of **clusters**, such that a suitably chosen loss function is minimized for a *different* set of input data, the so-called test set.

![USPS](images/unsupervised.png)


## A typical AI stack today

As we have seen from the [syllabus](docs/syllabus), this course approaches supervised and unsupervised learning methods from an applied perspective - this means teaching concepts but at the same time looking how these concepts are applied in the industry to solve real world problems. In this respect here we take an architecture driven definiition of data mining, presenting the components of data mining in a form of a software stack but also how the components are mechanized in what we call **ML Pipelines** to provide the ML utility to applications. For a complete overview of real world ML pipelines used today go through the [TFX](http://stevenwhang.com/tfx_paper.pdf) paper in its entirety.

![AI stack](images/ai-stack.svg)
*AI Stack circa 2019*

### Landscape of the AI ecosystem

Right-mouse click and select open in a new tab to view it. In this class we will deal with 2-3 components of this (very fluid) ecosystem.  

<section class="bg-apple">
              <div class="wrap">
                  <h2>Linux Foundation - Deep Learning Foundation</h2>
          <iframe width="2120" height="630" src="https://landscape.lfdl.io/format=landscape&fullscreen=yes" frameborder="0" allowfullscreen></iframe>
          </div>
</section>

## The four pipelines of an end to end data mining platform

![E2E ML Pipeline](images/acumos-E2E.svg)
*Example of end to end pipeline - serial arrangement*

![Data Pipeline](images/acumos-DP1.svg)
*Example of Data Pipeline*

![Model Training Pipeline](images/acumos-MTP.svg)
*Example of Model Training Pipeline*

![Model Evaluation and Validation Pipeline](images/acumos-MEVP.svg)
*Example of Model Evaluation and Validation Pipeline*

![Serving Pipeline](images/acumos-SP.svg)
*Example of Serving Pipeline*

