---
title: Probability and Information Theory Basics
---

## Book Chapters
 From Ian Goodfellow's book:
<iframe src="https://www.deeplearningbook.org/contents/prob.html" width="800" height="1200"></iframe>

We will go through the main points during the lecture and treat also [MacKay's book (Chapter 2)](https://www.inference.org.uk/itprnn/book.pdf) that is also instructive and a much better in introducing probability concepts.   

## Key Concepts to understand

### Probability
The pictures below are from MacKays book and despite their conceptual simplicity they hide many questions that we will go over the lecture. 

#### Probability distributions

![bivariate-Gaussian](images/figure21.png)
*Probability distribution over the letters of the English alphabet (letter 27 symbolizes space)*

**Joint probability distributions**
![bivariate-Gaussian](images/figure22.png)
*Joint probability $P(x,y)$ distribution over the 27x27 possible bigrams $xy$ found in this document: https://www.tldp.org/FAQ/pdf/Linux-FAQ.pdf*

What is the marginal probability $P(x)$ ?

**Conditional probability distribution**

![bivariate-Gaussian](images/conditional-bigrams.png)
*Conditional probability distribution over the 27x27 possible bigrams $xy$ found in this document: https://www.tldp.org/FAQ/pdf/Linux-FAQ.pdf*

Are $x$ and $y$ independent ?

**Multi-variate Gaussian distribution**

$$f_{\mathbf X}(x_1,\ldots,x_k) = \frac{\exp\left(-\frac 1 2 ({\mathbf x}-{\boldsymbol\mu})^\mathrm{T}{\boldsymbol\Sigma}^{-1}({\mathbf x}-{\boldsymbol\mu})\right)}{\sqrt{(2\pi)^n|\boldsymbol\Sigma|}}$$
where where <${\mathbf x}$ is a real 'n'-dimensional column vector and $|\boldsymbol\Sigma|\equiv \operatorname{det}\boldsymbol\Sigma$ is the determinant of $\boldsymbol\Sigma$. 

Apart from the definition, you need to connect the geometric interpretation of the bivariate Gaussian distribution to the eigendecomposition in the linear algebra lecture as shown in the Figure 2.7 of Bishop:

![bivariate-Gaussian](images/Figure2.7.png)

Such geometric interpretations will be very useful when we study dimensionality reduction via Principal Component Analysis (PCA).

### Probabilistic Modeling 

1. The whole purpose of probabilistic modeling is to introduce uncertainty into our problem statement. There are three types of uncertainties:

    * Inherent stochasticity - e.g. impact of wind in self-driving car control systems at moderate to high speed. 
    * Incomplete observability - e.g. sensor imperfections causing loss of sensing information
    * Incomplete modeling - e.g. models and algorithms that are not implementable to an analog world and need to be discretized.

2. Probabilities can be used in two ways.
    * Probabilities can describe frequencies of outcomes in random experiments
    * Probabilities can also be used, more generally, to describe degrees of belief in propositions that do not involve random variables. This more general use of probability to quantify beliefs is known as the Bayesian viewpoint. It is also known as the subjective interpretation of probability, since the probabilities depend on assumptions.

3. The Bayesian theorem is the cornerstone of probabilistic modeling. If $\mathbf{\theta}$ denotes the unknown parameters, $D$ denotes the dataset and $\mathcal{H}$ denotes the hypothesis space  - the model we have seen in [the ML problem statement section](/docs/lectures/ml-math/ml-problem-statement).

> $$ P(\mathbf{\theta} | D, \mathcal{H}) =  \frac{P( D | \mathbf{\theta}, \mathcal{H}) P(\mathbf{\theta} | \mathcal{H}) }{ P(D|\mathcal{H}} $$

> The Bayesian framework allows the introduction of priors from a wide variety of sources (experts, other data, past posteriors, etc.) For example,a medical patient is exhibiting symptoms x, y and z. There are a number of diseases that could be causing all of them, but only a single disease is present. A doctor (the expert) has beliefs about which disease, but a second doctor may have slightly different beliefs.

> NOTE: The [Probabilistic Programming & Bayesian Methods for Hackers](http://camdavidsonpilon.github.io/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers/) book is one of the best resources out there containing practical python examples. In addition they have been recoded recently to work in [Tensorflow Probability](https://medium.com/tensorflow/an-introduction-to-probabilistic-programming-now-available-in-tensorflow-probability-6dcc003ca29e) an industrial-strength framework that can bring together Deep Learning and domain-specific probabilistic modeling. The book cant match the rigorousness of Bishop's book but it offers a good treatment on problems and use cases and should be considered complimentary.

#### Bayesian update example
<iframe src="https://nbviewer.jupyter.org/github/pantelis/handson-ml/blob/master/Bayesian_update_coin_flip.ipynb" width="900" height="1200"></iframe>

This example is instructive beyond the habit of having coin flip examples in every textbook in probability theory and statistics. It is useful to understand the conjugate prior distribution being discussed in Bishop's section 2.1.1 and Figure 3 that the code above replicates.  Armed with this understanding, we can now treat the Bayesian update for linear regression as described in the [linear regression section](/docs/lectures/regression/linear-regression).