---
title: Linear Regression
---

![Bayes](images/bayes.jpg)
The treatment in this section will proceed as follows. First we will discuss the Ordinary Least Squares  (or the Maximum Likelihood) estimate of the model parameters. We will then introduce the Bayesian approach to estimating the model parameters and look at the so called *predictive* distribution for the simple [data set](/docs/lectures/ml-math/ml-problem-statement) we started our journey on.

## OLS as Maximum Likelihood Estimation
[These notes](https://www.cs.indiana.edu/~predrag/classes/2016fallb365x/ols.pdf) summarize the ML approach (in section 2) and are provided here as they are more expansive compared to Bishop Section 1.2.5 and at the same time do make the connection to the [Linear Algebra lecture](/docs/lectures/ml-math/linear-algebra-for-ml).  

![Figure3.2-bishop](images/Figure3.2.png)
*Geometrical Interpretation of Ordinary Least Squares*

## Bayesian Linear Regression

In the [probability section](/docs/lectures/ml-math/probability) we have covered an instructive example of coin tossing and saw how the posterior distribution is updated with the draws. The Bayesian setting is obviously generic enough and here we provide just the intuition (for the interested reader the mathematical treatment is in Bishop Section 3.3) behind its application to linear regression.

The Bayesian update of the posterior can be intuitively understood using a graphical example of a linear model of the form:
$$g(x,\mathbf{w})= w_0 + w_1 x$$ (our hypothesis). The reason why we pick this example is illustrative as the model has just two parameters and is amendable to visualization. 

![Figure3.7-bishop](images/Figure3.7.png)
*Instructive example of Bayesian learning as data points are streamed in. Notice the dramatic improvement in the posterior the moment the 2nd data point arrives. Why is that?*

Back to our model for the sinusoidal dataset, and assuming Gaussian basis functions, we can look at the predictive distribution as the number of data points are coming in. 

![Figure3.8a-bishop](images/Figure3.8a.png)
![Figure3.8b-bishop](images/Figure3.8b.png)
![Figure3.8c-bishop](images/Figure3.8c.png)
![Figure3.8d-bishop](images/Figure3.8d.png)

<!--Height and income
via example provided in Chapter 2 of [Gellman](https://www.amazon.com/Analysis-Regression-Multilevel-Hierarchical-Models/dp/052168689X) - a classic in the statistics literature.

[This paper](http://www.timothy-judge.com/Height%20paper--JAP%20published.pdf) captures the effect of physical height on workplace success and income. It is provided here as a case study for linear regression and is motivated by 
<iframe src="https://faculty.psau.edu.sa/filedownload/doc-12-pdf-a1997d0d31f84d13c1cdc44ac39a8f2c-original.pdf" width="800" height="1200"></iframe> -->
