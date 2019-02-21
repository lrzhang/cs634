<!-- \begin{frame}{Activation functions}
    There are several possible - limited to just three here. 
    \begin{enumerate}
        \item Perceptron (for pedagogical reasons)
        $$
                g(a) =  \left\{ \begin{array}{rl}
                    1 & a \geq 0 \\
                    -1 & a < 0 . \end{array} \right.
        $$

        \item Sigmoid (\alert{logistic function}).
            
        $$g(a) = \sigma(a) = \frac{1}{1+e^{-a}}  \hspace{0.3in} \sigma(a) \in (0,1)$$
                \begin{center}
                    \includegraphics[width=0.3\textwidth]{figures/sigmoid.png}
                \end{center}

        Towards either end of the sigmoid function, the $\sigma(a)$ values tend to respond much less to changes in X - \alert{vanishing gradients}. The neuron refuses to learn further or is drastically slow. 
    \end{enumerate}
\end{frame}

\begin{frame}{The RELU activation function - very popular in Deep Learning}
    \begin{itemize}
    \item RELU (Rectified Linear Unit) 
    \begin{center}
        \includegraphics[width=0.4\textwidth]{figures/relu.png}
    \end{center}

    \item Very inexpensive to compute compared to sigmoid. 

    \item Sparsity benefit: Imagine an MLP  with random initialized weights to zero mean ( or normalised ) and almost 50\% of the network yields 0 activation because of the characteristic of ReLu. This means a fewer neurons are firing (sparse activation ) and the network is lighter and more efficient. 
    
    \item Sparsity issue: For negative X, the gradient can go towards 0 and the weights will not get adjusted during descent. 
    \end{itemize}
\end{frame}

\begin{frame}{playground.tensorflow.org}
    \includegraphics[width=\textwidth]{figures/playground-single-neuron.png}
\end{frame}

\begin{frame}{Representations do matter}
    Contrast what \alert{a single neuron} did automatically with the thought process that a data scientist must undergo to transform the input into a suitable representation for a linear classifier to be able to provide a solution. 
    \includegraphics[width=\textwidth]{figures/coordinate-transformative-representation.png}
\end{frame}


\begin{frame}{Training the neuron - the weight space} 

    For convenience let us study the case where the input vector $\vx$ and the parameter vector $\vw$ are both two-dimensional and the function performed by the neuron is: 
    $$	h = g(\vx;\vw) = \frac{1}{1+e^{-(w_1 x_1 + w_2 x_2)}} $$

    \begin{center}\includegraphics{figures/figure259.eps}\end{center}
    
\end{frame}

\begin{frame}{Training the neuron - the weight space} 
    Each  \emph{point} in $\vw$ space corresponds to a \emph{function} of $\vx$. 

    \includegraphics[width=.7\textwidth]{figures/figure260.eps}

\end{frame}

\begin{frame}{Searching the weight space for the optimal weights}
    \begin{center}
        \includegraphics[width=.8\textwidth]{figures/loss-ball.png}
    \end{center}

    \begin{itemize}
        \item The data scientist has to determine based on the problem at hand, the most appropriate objective (also known as loss or error function). 
    \end{itemize}
\end{frame}

\begin{frame}{Cross-Entropy (CE) Cost function for binary classification}

    We assume we have a data set of inputs $\{\vx^{(i)}\}_{i=1}^{m'}$ with
    binary labels $\{y^{(i)}\}_{i=1}^{m'}$, and a neuron whose output $ \hat{y} = g(\vx;\vw)$ is potentially bounded. The cross-entropy \emph{cost function} is intuitive:
    $$ J(\vw) = 
    -
    \sum_i
    \left[
    y^{(i)} \ln g(\vx^{(i)};\vw) + (1-y^{(i)}) \ln (1-g(\vx^{(i)};\vw)) 
    \right] $$
    Each term in this objective function may be recognized as the \emph{information content} of one outcome. It may also be described as the \emph{cross entropy} between
    the empirical probability distribution $(y^{(i)},1-y^{(i)})$  and the probability distribution implied by the output of the neuron $(\hat{y},1-\hat{y})$. The cost function is $\ge 0$ and attains this lower bound if $\hat{y}^{(i)} = y(\vx^{(i)}, \vw)$ for all $i$. 
\end{frame}


\begin{frame}{The beauty of CE cost function}
    The derivative $\vg = \partial J/\partial \vw$ is given by:

    $$ \frac{\partial J}{\partial w_j} =  \sum_i - (y^{(i)} - \hat{y}^{(i)}) x_j^{(i)} $$
    
    Notice the quantity $e^{(i)} \equiv y^{(i)} - \hat{y}^{(i)}$ -  \emph{it tells us that the rate at which the neuron learns depends on the error in the output. The larger the error, the faster the neuron will learn.} 
    The simplest thing to do with a gradient of a cost function is to \emph{descend} it. Since the derivative  $\partial J/\partial \vw$  is a sum of terms $\nabla^{(i)}$ defined by:

        $$ \nabla J_j^{(i)} \equiv - (y^{(i)} - \hat{y}^{(i)}) x_j^{(i)} $$
    
        for $i=1,\ldots, {m'}$, we can obtain a simple on-line algorithm by putting each input through the network one at a time, and adjusting $\vw$ a little (learning rate $\epsilon$) in a direction opposite to $\nabla^{(i)}$.
\end{frame}

\begin{frame}{CE for binary classification with $y^{(i)}=1$}

    \includegraphics[width=\textwidth]{figures/cross-entropy-binary.png}

    CE penalizes greatly confident but wrong misclassifications. 

\end{frame}

\begin{frame}{Overfitting in binary classification}
    \begin{figure}
        \includegraphics[width=\textwidth]{figures/reg_strengths_cs231n.jpeg}
    \end{figure}
    \begin{itemize}
        \item Some use cases in \texttt{tensorflow playground} require to address overfitting by adding in the objective function some \emph{tunable} penalty term that prevents. Such penalty term is usually:
           $$\lambda J_{penalty} = \lambda \left(\sum_l \tW_{(l)}^2 \right) $$
        where $l$ is the hidden layer index and $\tW$ is the weight tensor. 
    \end{itemize}
\end{frame}
 -->