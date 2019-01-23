---
title: Data Mining Overview
---

## Summary

* We provide an architecture-oriented definition of data mining. 

## What is Data Mining?

According to wikipedia, data mining is the process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems. Data mining is an interdisciplinary subfield of computer science and statistics with an overall goal to extract information from a data set and transform the information into a comprehensible structure for further use.

As we have seen from the [syllabus](docs/syllabus), this course approaches data mining from an applied perspective - this means teaching concepts but at the same time looking how these concepts are applied in the industry to solve real world problems. In this respect in this page we take an architecture driven definiition of data mining, presenting the components of data mining in a form of a software stack but also how the components are mechanized in what we call **ML Pipelines** to provide the ML utility to applications. 

## The AI stack (in 2019)

We will use a primitive version of the AI stack during the course. 

![AI stack](images/ai-stack.svg)
*AI Stack circa 2019*

### Landscape of the AI Ecosystem

Right-mouse click and select open in a new tab to view it. In this class we will deal with 2-3 components of this ecosystem.  

<section class="bg-apple">
              <div class="wrap">
                  <h2>Linux Foundation - Deep Learning Foundation</h2>
          <iframe width="2120" height="630" src="https://landscape.lfdl.io/format=landscape&fullscreen=yes" frameborder="0" allowfullscreen></iframe>
          </div>
</section>

## The Four Pipelines of an End to End Data Mining Functional Architectures

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

<!-- 
## Taxi-tariff optimization - Dynamic Pricing -->
