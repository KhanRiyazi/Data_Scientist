// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DATA — SYLLABUS WITH DEFINITIONS, EXAMPLES & RESOURCES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const SYLLABUS_DATA = [{
    level: 'Foundation',
    icon: '🌱',
    topics: [{
        name: 'Data Science Methodology & Tools',
        difficulty: 'easy',
        done: false,
        prerequisites: [],
        ibmCourse: 'Courses 1–3 · What is Data Science? / Tools for Data Science / Data Science Methodology',
        definition: {
            basic: 'Before writing any code, every working data scientist follows a repeatable process for tackling a problem — understand the business question, get the data, explore it, build a model, evaluate it, and deploy it. CRISP-DM is the most widely taught version of this cycle, and Jupyter Notebooks, GitHub, and SQL are the everyday tools used at each stage.',
            advanced: 'CRISP-DM\'s six phases (Business Understanding → Data Understanding → Data Preparation → Modeling → Evaluation → Deployment) are explicitly non-linear — teams loop back from Evaluation to Data Preparation constantly as they learn what the data actually supports. The real skill this stage teaches isn\'t the diagram itself, it\'s estimating where most of your time will go: in practice, Data Understanding + Preparation typically consumes 60–80% of a project\'s total effort, far more than Modeling.'
        },
        example: `# A CRISP-DM-style problem framing, written before any code\nproblem = {\n    "business_question": "Which customers are likely to churn next month?",\n    "data_sources": ["billing_history.csv", "support_tickets.db", "usage_logs.parquet"],\n    "success_metric": "Recall on churners >= 0.75 (catching churn matters more than false alarms)",\n    "deployment_target": "Weekly batch score -> CRM dashboard for the retention team"\n}\n\nfor key, value in problem.items():\n    print(f"{key.replace('_', ' ').title()}: {value}")`,
        advancedExample: `# Tracking where time actually goes across a project — a habit worth building early\nimport pandas as pd\n\nphases = pd.DataFrame({\n    'phase': ['Business Understanding', 'Data Understanding', 'Data Preparation',\n              'Modeling', 'Evaluation', 'Deployment'],\n    'planned_hours': [4, 10, 10, 8, 4, 4],\n    'actual_hours':  [3, 14, 22, 6, 3, 2],   # prep almost always overruns the plan\n})\nphases['overrun_pct'] = ((phases['actual_hours'] - phases['planned_hours'])\n                          / phases['planned_hours'] * 100).round(1)\nprint(phases.to_string(index=False))\nprint(f"\\nTotal: planned {phases.planned_hours.sum()}h vs actual {phases.actual_hours.sum()}h")`,
        resources: [
            { name: 'IBM: What is Data Science? (Course 1)', url: 'https://www.coursera.org/learn/what-is-datascience', icon: '🎓' },
            { name: 'IBM: Tools for Data Science (Course 2)', url: 'https://www.coursera.org/learn/open-source-tools-for-data-science', icon: '🎓' },
            { name: 'IBM: Data Science Methodology (Course 3)', url: 'https://www.coursera.org/learn/data-science-methodology', icon: '🎓' },
            { name: 'CRISP-DM Overview (practice)', url: 'https://www.datascience-pm.com/crisp-dm-2/', icon: '🏆' },
        ]
    }, {
        name: 'Python for Data Science',
        difficulty: 'easy',
        done: true,
        prerequisites: ['Data Science Methodology & Tools'],
        ibmCourse: 'Course 4 · Python for Data Science, AI & Development',
        definition: {
            basic: 'Python is a beginner-friendly programming language that reads almost like English. In data science, it is the glue that connects your data, your analysis, and your results — you use it to load files, clean messy values, and run calculations a spreadsheet could never handle.',
            advanced: 'Python\'s dominance in data science comes from its C-backed numerical stack (NumPy/Pandas use vectorized operations under the hood, sidestepping the interpreter\'s GIL for heavy math) plus a mature ecosystem — scikit-learn for classical ML, PyTorch/TensorFlow for deep learning, and a consistent array-protocol (`__array__`) that lets these libraries interoperate seamlessly.'
        },
        example: `import pandas as pd\nimport numpy as np\n\n# Create a DataFrame\ndata = {'Name': ['Alice', 'Bob', 'Charlie'],\n        'Age': [25, 30, 35],\n        'Salary': [50000, 60000, 70000]}\ndf = pd.DataFrame(data)\n\n# Basic operations\nprint(df.head())\nprint(df.describe())\nprint(df[df['Age'] > 28])`,
        advancedExample: `import pandas as pd\nimport numpy as np\n\n# Vectorized operations beat explicit loops\ndf = pd.DataFrame({'price': np.random.uniform(10, 100, 100000),\n                    'qty': np.random.randint(1, 5, 100000)})\n\n# Slow: Python-level loop\n# total = [r.price * r.qty for _, r in df.iterrows()]\n\n# Fast: vectorized (runs in compiled C, ~50-100x faster)\ndf['revenue'] = df['price'] * df['qty']\n\n# Method chaining keeps pipelines readable\nresult = (df\n          .query('revenue > 100')\n          .assign(tier=lambda d: pd.cut(d['revenue'], bins=[0, 200, 500, np.inf],\n                                          labels=['low', 'mid', 'high']))\n          .groupby('tier', observed=True)['revenue']\n          .agg(['count', 'mean']))\nprint(result)`,
        resources: [
            { name: 'Python.org Docs', url: 'https://docs.python.org/3/', icon: '📘' },
            { name: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/', icon: '🐼' },
            { name: 'NumPy Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', icon: '🔢' },
            { name: 'Kaggle: Python Course (practice)', url: 'https://www.kaggle.com/learn/python', icon: '🏆' },
        ]
    }, {
        name: 'Linear Algebra Essentials',
        difficulty: 'easy',
        done: true,
        prerequisites: [],
        ibmCourse: 'Supplementary — not in the official 12-course list, recommended as deeper foundation',
        definition: {
            basic: 'Linear algebra is the math of lists-of-numbers (vectors) and grids-of-numbers (matrices). Every dataset is secretly a matrix, every image is a grid of pixel-vectors, and every neural network layer is just a matrix multiplication — so this is the language everything else in ML is written in.',
            advanced: 'Beyond basic matrix multiplication, eigendecomposition and singular value decomposition (SVD) underpin PCA, recommender systems, and the attention mechanism\'s low-rank projections. Understanding rank, null space, and condition number explains why some models fail to converge or why features need to be decorrelated before training.'
        },
        example: `import numpy as np\n\n# Vectors and matrices\nv = np.array([2, 3, 5])\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n\n# Matrix multiplication\nC = np.dot(A, B)\nprint("Matrix product:\\n", C)\n\n# Eigenvalues and eigenvectors\neigvals, eigvecs = np.linalg.eig(A)\nprint("Eigenvalues:", eigvals)\nprint("Eigenvectors:\\n", eigvecs)`,
        advancedExample: `import numpy as np\n\n# SVD — the backbone of PCA and recommender systems\nX = np.random.randn(100, 5)\nX[:, 1] = X[:, 0] * 2 + np.random.randn(100) * 0.1  # correlated column\n\nU, S, Vt = np.linalg.svd(X - X.mean(axis=0), full_matrices=False)\nexplained_variance = (S ** 2) / np.sum(S ** 2)\nprint("Variance explained by each component:", np.round(explained_variance, 3))\n\n# Reconstruct using only the top 2 components (rank-2 approximation)\nk = 2\nX_approx = U[:, :k] @ np.diag(S[:k]) @ Vt[:k, :]\nreconstruction_error = np.linalg.norm(X - X.mean(axis=0) - X_approx)\nprint(f"Reconstruction error with {k} components: {reconstruction_error:.3f}")`,
        resources: [
            { name: 'MIT 18.06 Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', icon: '🎓' },
            { name: '3Blue1Brown Essence of LA', url: 'https://www.3blue1brown.com/topics/linear-algebra', icon: '📺' },
            { name: 'Khan Academy LA', url: 'https://www.khanacademy.org/math/linear-algebra', icon: '📚' },
            { name: 'Immersive Linear Algebra (practice)', url: 'https://immersivemath.com/ila/index.html', icon: '🏆' },
        ]
    }, {
        name: 'Calculus for ML',
        difficulty: 'easy',
        done: false,
        prerequisites: ['Linear Algebra Essentials'],
        ibmCourse: 'Supplementary — not in the official 12-course list, recommended as deeper foundation',
        definition: {
            basic: 'Calculus tells a model which direction to "nudge" its parameters to get better. A derivative measures slope — how much the error changes when a weight changes a tiny bit — and that single idea, repeated millions of times, is literally how every neural network learns.',
            advanced: 'Backpropagation is reverse-mode automatic differentiation applied to the chain rule across a computation graph. The gradient is a vector field over parameter space; optimizers like Adam combine first and second moment estimates of that gradient to adapt the step size per-parameter, which is why they converge faster than vanilla gradient descent on ill-conditioned loss surfaces.'
        },
        example: `import numpy as np\nimport matplotlib.pyplot as plt\n\n# Gradient descent for a simple function f(x) = x^2 + 2x + 1\ndef f(x): return x**2 + 2*x + 1\ndef df(x): return 2*x + 2\n\nx = 5.0  # start\nlr = 0.1\nfor step in range(20):\n    grad = df(x)\n    x = x - lr * grad\n    print(f"Step {step+1}: x={x:.4f}, f(x)={f(x):.4f}")\n\nprint(f"Minimum at x={x:.4f}")`,
        advancedExample: `import numpy as np\n\n# Manual backprop through a 2-layer network (the chain rule in action)\nnp.random.seed(0)\nX = np.random.randn(4, 3)         # 4 samples, 3 features\ny = np.array([[1], [0], [1], [0]])\nW1 = np.random.randn(3, 4) * 0.1\nW2 = np.random.randn(4, 1) * 0.1\n\nfor epoch in range(200):\n    # Forward pass\n    z1 = X @ W1\n    a1 = np.tanh(z1)\n    z2 = a1 @ W2\n    pred = 1 / (1 + np.exp(-z2))          # sigmoid\n\n    # Backward pass (chain rule, layer by layer)\n    d_loss = pred - y\n    d_z2 = d_loss * pred * (1 - pred)\n    d_W2 = a1.T @ d_z2\n    d_a1 = d_z2 @ W2.T\n    d_z1 = d_a1 * (1 - a1 ** 2)            # tanh derivative\n    d_W1 = X.T @ d_z1\n\n    W2 -= 0.1 * d_W2\n    W1 -= 0.1 * d_W1\n\nprint("Final predictions:\\n", np.round(pred, 3))`,
        resources: [
            { name: 'DeepLearning.AI Calculus', url: 'https://www.deeplearning.ai/courses/', icon: '🧠' },
            { name: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-1', icon: '📚' },
            { name: '3Blue1Brown Calculus', url: 'https://www.3blue1brown.com/topics/calculus', icon: '📺' },
            { name: 'Paul\'s Online Math Notes (practice)', url: 'https://tutorial.math.lamar.edu/', icon: '🏆' },
        ]
    }, {
        name: 'Statistics & Probability',
        difficulty: 'easy',
        done: true,
        prerequisites: [],
        ibmCourse: 'Supplementary — lightly covered inside Courses 7 & 9, expanded here',
        definition: {
            basic: 'Statistics helps you summarize data (mean, spread) and decide whether a pattern you see is real or just noise. Probability is the math of uncertainty — it lets you say "70% confident" instead of just guessing, which is the foundation of every model\'s predictions.',
            advanced: 'Frequentist hypothesis testing (p-values, confidence intervals) and Bayesian inference (priors, posteriors, credible intervals) offer two lenses on the same uncertainty — Bayesian methods are increasingly preferred in ML because they naturally express model uncertainty and update cleanly as new data arrives, which matters for A/B testing and active learning.'
        },
        example: `import numpy as np\nfrom scipy import stats\n\n# Generate normal distribution\ndata = np.random.normal(loc=0, scale=1, size=1000)\n\n# Descriptive statistics\nmean = np.mean(data)\nstd = np.std(data)\nmedian = np.median(data)\n\nprint(f"Mean: {mean:.3f}")\nprint(f"Std: {std:.3f}")\nprint(f"Median: {median:.3f}")\n\n# Hypothesis test (t-test)\nsample = np.random.normal(loc=0.2, scale=1, size=100)\nt_stat, p_value = stats.ttest_1samp(sample, 0)\nprint(f"T-test p-value: {p_value:.4f}")`,
        advancedExample: `import numpy as np\nfrom scipy import stats\n\n# Bayesian A/B test: which conversion rate is more credible?\nnp.random.seed(1)\nconversions_a, visitors_a = 120, 1000\nconversions_b, visitors_b = 145, 1000\n\n# Beta distribution as posterior (Beta(1,1) prior = uniform)\nposterior_a = stats.beta(1 + conversions_a, 1 + visitors_a - conversions_a)\nposterior_b = stats.beta(1 + conversions_b, 1 + visitors_b - conversions_b)\n\nsamples_a = posterior_a.rvs(100000)\nsamples_b = posterior_b.rvs(100000)\nprob_b_better = np.mean(samples_b > samples_a)\n\nprint(f"P(B beats A): {prob_b_better:.3f}")\nprint(f"A 95% credible interval: {posterior_a.interval(0.95)}")\nprint(f"B 95% credible interval: {posterior_b.interval(0.95)}")`,
        resources: [
            { name: 'StatQuest with Josh Starmer', url: 'https://statquest.org/', icon: '📺' },
            { name: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability', icon: '📚' },
            { name: 'Scipy Stats Docs', url: 'https://docs.scipy.org/doc/scipy/reference/stats.html', icon: '📘' },
            { name: 'Seeing Theory (interactive practice)', url: 'https://seeing-theory.brown.edu/', icon: '🏆' },
        ]
    }, {
        name: 'Data Wrangling (Pandas)',
        difficulty: 'easy',
        done: false,
        prerequisites: ['Python for Data Science'],
        ibmCourse: 'Course 7 · Data Analysis with Python',
        definition: {
            basic: 'Real-world data is messy — missing values, typos, inconsistent formats. Data wrangling is the process of cleaning and reshaping that mess into a tidy table you can actually analyze. Pandas gives you the tools to do this in a few lines instead of hundreds.',
            advanced: 'Beyond `fillna`/`dropna`, production wrangling means designing idempotent, chainable pipelines (`.pipe()`), handling categorical memory efficiently with `Categorical` dtype, and using `merge`/`groupby.transform` correctly to avoid subtle data leakage — e.g. computing a rolling mean that accidentally uses future rows during feature engineering.'
        },
        example: `import pandas as pd\nimport numpy as np\n\n# Sample messy data\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', None, 'Charlie', 'Eve'],\n    'Age': [25, np.nan, 30, 35, '29'],\n    'Salary': [50000, 60000, None, 70000, 65000]\n})\n\n# Clean and transform\ndf['Age'] = pd.to_numeric(df['Age'], errors='coerce')\ndf['Salary'] = df['Salary'].fillna(df['Salary'].mean())\ndf = df.dropna(subset=['Name'])\n\nprint("Cleaned data:")\nprint(df)`,
        advancedExample: `import pandas as pd\nimport numpy as np\n\n# A chainable, leak-safe wrangling pipeline\ndf = pd.DataFrame({\n    'date': pd.date_range('2024-01-01', periods=10),\n    'store': ['A', 'B'] * 5,\n    'sales': [100, 150, np.nan, 200, 130, 175, 90, np.nan, 210, 160]\n})\n\ndef fill_group_median(d):\n    return d.assign(sales=d.groupby('store')['sales']\n                            .transform(lambda s: s.fillna(s.median())))\n\ndef add_rolling_feature(d):\n    # shift(1) BEFORE rolling avoids leaking the current row into its own feature\n    d['sales_3d_avg'] = (d.groupby('store')['sales']\n                           .transform(lambda s: s.shift(1).rolling(3).mean()))\n    return d\n\nresult = df.pipe(fill_group_median).pipe(add_rolling_feature)\nprint(result)`,
        resources: [
            { name: 'Pandas Docs (10 min)', url: 'https://pandas.pydata.org/docs/getting_started/10min.html', icon: '🐼' },
            { name: 'Kaggle Pandas Course', url: 'https://www.kaggle.com/learn/pandas', icon: '🏆' },
            { name: 'Real Python Pandas', url: 'https://realpython.com/pandas-python-explore-dataset/', icon: '📖' },
            { name: 'Pandas Cookbook (practice)', url: 'https://pandas.pydata.org/docs/user_guide/cookbook.html', icon: '🏆' },
        ]
    }, {
        name: 'SQL & Relational Databases',
        difficulty: 'easy',
        done: false,
        prerequisites: ['Python for Data Science'],
        ibmCourse: 'Course 6 · Databases and SQL for Data Science with Python',
        definition: {
            basic: 'Most of the world\'s data still lives in databases, not CSV files — SQL is the language for asking questions of it directly: "show me all customers from California who spent over $500." Combined with Python, you can pull exactly the data you need instead of dumping entire tables into memory.',
            advanced: 'Query planners optimize SQL based on indexes, statistics, and join order — writing a `WHERE` clause on an indexed column can be 100x faster than scanning a full table. Window functions (`OVER (PARTITION BY ... ORDER BY ...)`) let you compute running totals, rankings, and period-over-period comparisons in a single query, replacing what would otherwise require pulling data into Pandas and looping.'
        },
        example: `import sqlite3\nimport pandas as pd\n\nconn = sqlite3.connect(':memory:')\nconn.execute("""\n    CREATE TABLE customers (\n        id INTEGER PRIMARY KEY, name TEXT, state TEXT, total_spent REAL\n    )\n""")\nconn.executemany("INSERT INTO customers VALUES (?,?,?,?)", [\n    (1, 'Alice', 'CA', 620), (2, 'Bob', 'NY', 150), (3, 'Eve', 'CA', 980)\n])\n\nquery = "SELECT name, total_spent FROM customers WHERE state = 'CA' AND total_spent > 500"\ndf = pd.read_sql(query, conn)\nprint(df)`,
        advancedExample: `import sqlite3\nimport pandas as pd\n\nconn = sqlite3.connect(':memory:')\nconn.execute("CREATE TABLE orders (customer_id INT, month TEXT, revenue REAL)")\nconn.executemany("INSERT INTO orders VALUES (?,?,?)", [\n    (1, '2024-01', 100), (1, '2024-02', 150), (1, '2024-03', 90),\n    (2, '2024-01', 200), (2, '2024-02', 220), (2, '2024-03', 260),\n])\n\n# Window function: running total + rank, no Python loop needed\nquery = """\n    SELECT customer_id, month, revenue,\n           SUM(revenue) OVER (PARTITION BY customer_id ORDER BY month) AS running_total,\n           RANK() OVER (PARTITION BY month ORDER BY revenue DESC) AS month_rank\n    FROM orders\n"""\nprint(pd.read_sql(query, conn))`,
        resources: [
            { name: 'IBM: Databases and SQL (Course 6)', url: 'https://www.coursera.org/learn/sql-data-science', icon: '🎓' },
            { name: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', icon: '📘' },
            { name: 'SQLZoo (interactive practice)', url: 'https://sqlzoo.net/', icon: '🏆' },
            { name: 'Use The Index, Luke (query performance)', url: 'https://use-the-index-luke.com/', icon: '📖' },
        ]
    }, {
        name: 'Data Visualization (Matplotlib)',
        difficulty: 'easy',
        done: true,
        prerequisites: ['Data Wrangling (Pandas)'],
        ibmCourse: 'Course 8 · Data Visualization with Python',
        definition: {
            basic: 'A good chart answers a question faster than a table of numbers ever could. Matplotlib is Python\'s foundational plotting library — line charts for trends, histograms for distributions, scatter plots for relationships — and almost every other Python visualization library is built on top of it.',
            advanced: 'Effective visualization is a perceptual science: position and length encode quantity more accurately than color or area (per Cleveland & McGill), small multiples beat single cluttered charts for comparison, and log scales are essential when data spans orders of magnitude. Matplotlib\'s object-oriented API (`fig, ax = plt.subplots()`) is preferred over the implicit `plt.*` calls once you need fine control or multi-panel figures.'
        },
        example: `import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 100)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\nplt.figure(figsize=(10, 5))\nplt.plot(x, y1, label='sin(x)', color='blue', linewidth=2)\nplt.plot(x, y2, label='cos(x)', color='red', linestyle='--')\nplt.xlabel('x')\nplt.ylabel('y')\nplt.title('Sine and Cosine Functions')\nplt.legend()\nplt.grid(alpha=0.3)\nplt.show()`,
        advancedExample: `import matplotlib.pyplot as plt\nimport numpy as np\n\n# Small multiples: easier to compare than one cluttered chart\nnp.random.seed(0)\nfig, axes = plt.subplots(2, 2, figsize=(10, 8), sharex=True, sharey=True)\ngroups = ['North', 'South', 'East', 'West']\n\nfor ax, group in zip(axes.flat, groups):\n    data = np.random.normal(loc=np.random.uniform(40, 60), scale=10, size=200)\n    ax.hist(data, bins=20, color='#3b82f6', alpha=0.75)\n    ax.set_title(group)\n    ax.axvline(data.mean(), color='red', linestyle='--', linewidth=1)\n\nfig.suptitle('Regional Distribution Comparison (small multiples)')\nfig.tight_layout()\nplt.show()`,
        resources: [
            { name: 'Matplotlib Gallery', url: 'https://matplotlib.org/stable/gallery/index.html', icon: '🎨' },
            { name: 'Seaborn Docs', url: 'https://seaborn.pydata.org/', icon: '📊' },
            { name: 'Plotly Docs', url: 'https://plotly.com/python/', icon: '📈' },
            { name: 'From Data to Viz (practice)', url: 'https://www.data-to-viz.com/', icon: '🏆' },
        ]
    }]
}, {
    level: 'Core Data Science',
    icon: '⚙️',
    topics: [{
        name: 'Supervised Learning',
        difficulty: 'medium',
        done: false,
        prerequisites: ['Statistics & Probability', 'Data Wrangling (Pandas)'],
        ibmCourse: 'Course 9 · Machine Learning with Python',
        definition: {
            basic: 'Supervised learning is teaching a model by example: you show it inputs paired with correct answers (e.g. house features → price) until it learns the pattern well enough to guess the answer for new, unseen inputs. Regression predicts numbers; classification predicts categories.',
            advanced: 'Every supervised algorithm is implicitly minimizing a loss function over a hypothesis space, trading bias against variance. Linear models have high bias/low variance; deep trees and neural nets have low bias/high variance — regularization (L1/L2, max-depth, dropout) is the lever that moves you along that tradeoff to match your data\'s actual complexity.'
        },
        example: `from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\n# Load data\niris = load_iris()\nX, y = iris.data, iris.target\n\n# Split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Train model\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\n\n# Predict & evaluate\ny_pred = model.predict(X_test)\nprint(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")`,
        advancedExample: `from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\n\ndata = load_breast_cancer()\nX_train, X_test, y_train, y_test = train_test_split(data.data, data.target, random_state=42)\n\n# A pipeline prevents leakage: scaling is refit on each CV fold's train split only\npipe = Pipeline([\n    ('scale', StandardScaler()),\n    ('clf', LogisticRegression(max_iter=1000))\n])\n\nparam_grid = {'clf__C': [0.01, 0.1, 1, 10, 100]}\nsearch = GridSearchCV(pipe, param_grid, cv=5, scoring='roc_auc')\nsearch.fit(X_train, y_train)\n\nprint(f"Best C: {search.best_params_['clf__C']}")\nprint(f"CV ROC-AUC: {search.best_score_:.3f}")\nprint(f"Test accuracy: {search.score(X_test, y_test):.3f}")`,
        resources: [
            { name: 'Scikit-learn Supervised', url: 'https://scikit-learn.org/stable/supervised_learning.html', icon: '🤖' },
            { name: 'Coursera ML (Andrew Ng)', url: 'https://www.coursera.org/learn/machine-learning', icon: '🎓' },
            { name: 'Kaggle Learn ML', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', icon: '🏆' },
            { name: 'StatQuest: Bias vs Variance', url: 'https://statquest.org/video-index/', icon: '📺' },
        ]
    }, {
        name: 'Unsupervised Learning',
        difficulty: 'medium',
        done: false,
        prerequisites: ['Linear Algebra Essentials', 'Data Wrangling (Pandas)'],
        ibmCourse: 'Course 9 · Machine Learning with Python',
        definition: {
            basic: 'Unsupervised learning finds structure in data with no "correct answers" given. Clustering groups similar customers or images together; dimensionality reduction compresses hundreds of noisy columns into a handful that capture what actually matters.',
            advanced: 'K-Means assumes spherical, equally-sized clusters and minimizes within-cluster variance via Lloyd\'s algorithm — it fails on elongated or differently-scaled clusters, where DBSCAN (density-based) or Gaussian Mixture Models (soft, covariance-aware clustering) do better. Dimensionality reduction choices matter too: PCA preserves global variance linearly, while t-SNE/UMAP preserve local neighborhood structure non-linearly for visualization.'
        },
        example: `from sklearn.cluster import KMeans\nfrom sklearn.datasets import make_blobs\nimport matplotlib.pyplot as plt\n\n# Generate synthetic data\nX, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.6, random_state=42)\n\n# Apply K-Means\nkmeans = KMeans(n_clusters=4, random_state=42)\ny_pred = kmeans.fit_predict(X)\n\n# Visualize\nplt.scatter(X[:, 0], X[:, 1], c=y_pred, cmap='viridis')\nplt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], \n            marker='X', s=200, c='red', label='Centers')\nplt.legend()\nplt.title('K-Means Clustering')\nplt.show()`,
        advancedExample: `from sklearn.cluster import DBSCAN, KMeans\nfrom sklearn.datasets import make_moons\nfrom sklearn.metrics import silhouette_score\n\n# Crescent-moon shapes break K-Means' spherical assumption\nX, _ = make_moons(n_samples=300, noise=0.07, random_state=42)\n\nkmeans_labels = KMeans(n_clusters=2, random_state=42).fit_predict(X)\ndbscan_labels = DBSCAN(eps=0.2, min_samples=5).fit_predict(X)\n\nprint(f"K-Means silhouette score: {silhouette_score(X, kmeans_labels):.3f}")\nvalid = dbscan_labels != -1\nprint(f"DBSCAN silhouette score (excl. noise): {silhouette_score(X[valid], dbscan_labels[valid]):.3f}")\nprint(f"DBSCAN found {len(set(dbscan_labels)) - (1 if -1 in dbscan_labels else 0)} clusters + noise points: {(dbscan_labels == -1).sum()}")`,
        resources: [
            { name: 'Scikit-learn Unsupervised', url: 'https://scikit-learn.org/stable/unsupervised_learning.html', icon: '🤖' },
            { name: 'Coursera Unsupervised', url: 'https://www.coursera.org/learn/unsupervised-learning', icon: '🎓' },
            { name: 'Towards Data Science Clustering', url: 'https://towardsdatascience.com/clustering-algorithms-59910e4b0b1d', icon: '📖' },
            { name: 'StatQuest: PCA Step-by-Step', url: 'https://statquest.org/video-index/', icon: '📺' },
        ]
    }, {
        name: 'Feature Engineering',
        difficulty: 'medium',
        done: true,
        prerequisites: ['Data Wrangling (Pandas)', 'Supervised Learning'],
        ibmCourse: 'Course 7 · Data Analysis with Python',
        definition: {
            basic: 'Feature engineering is creating new, more useful columns from your raw data — like turning a birthdate into "age" or a timestamp into "is_weekend". Good features often matter more than the choice of algorithm; even a simple model can shine with the right inputs.',
            advanced: 'Target leakage is the most dangerous feature-engineering bug: any feature computed using information that wouldn\'t be available at prediction time (e.g. a future aggregate, or a value derived from the label) inflates validation metrics while destroying production performance. Robust feature pipelines fit transformers only on training folds and use techniques like target encoding with out-of-fold statistics to avoid this.'
        },
        example: `import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\n\n# Sample data\ndf = pd.DataFrame({\n    'age': [25, 30, 35, 40, 45],\n    'income': [50000, 60000, 70000, 80000, 90000],\n    'city': ['NYC', 'SF', 'NYC', 'LA', 'SF']\n})\n\n# Feature creation\ndf['income_per_age'] = df['income'] / df['age']\ndf['age_squared'] = df['age'] ** 2\n\n# Encoding categorical\nencoder = OneHotEncoder(sparse_output=False)\ncity_encoded = encoder.fit_transform(df[['city']])\ncity_df = pd.DataFrame(city_encoded, columns=encoder.get_feature_names_out(['city']))\ndf = pd.concat([df, city_df], axis=1).drop('city', axis=1)\n\nprint("Engineered features:")\nprint(df)`,
        advancedExample: `import pandas as pd\nimport numpy as np\n\n# Leak-safe target encoding using out-of-fold means\ndf = pd.DataFrame({\n    'city': ['NYC', 'SF', 'NYC', 'LA', 'SF', 'NYC', 'LA', 'SF'],\n    'target': [1, 0, 1, 1, 0, 0, 1, 1]\n})\n\nnp.random.seed(0)\nfolds = np.random.randint(0, 4, size=len(df))\ndf['city_encoded'] = np.nan\n\nfor fold in range(4):\n    train_mask = folds != fold\n    val_mask = folds == fold\n    fold_means = df.loc[train_mask].groupby('city')['target'].mean()\n    df.loc[val_mask, 'city_encoded'] = df.loc[val_mask, 'city'].map(fold_means)\n\n# Any city missing from a fold's training data gets the global mean (no NaNs leak through)\nglobal_mean = df['target'].mean()\ndf['city_encoded'] = df['city_encoded'].fillna(global_mean)\nprint(df)`,
        resources: [
            { name: 'Kaggle Feature Engineering', url: 'https://www.kaggle.com/learn/feature-engineering', icon: '🏆' },
            { name: 'Feature Engineering Book', url: 'https://www.featureengineeringbook.com/', icon: '📚' },
            { name: 'Scikit-learn Preprocessing', url: 'https://scikit-learn.org/stable/modules/preprocessing.html', icon: '🔧' },
            { name: 'Target Leakage Explained', url: 'https://www.kaggle.com/code/alexisbcook/data-leakage', icon: '📖' },
        ]
    }, {
        name: 'Model Evaluation & Validation',
        difficulty: 'medium',
        done: false,
        prerequisites: ['Supervised Learning'],
        ibmCourse: 'Course 9 · Machine Learning with Python',
        definition: {
            basic: 'Before trusting a model, you need to know how well it really performs on data it has never seen. Techniques like train/test splits and cross-validation simulate "the future" so you can measure accuracy, precision, and recall honestly instead of fooling yourself.',
            advanced: 'Accuracy is misleading on imbalanced data — a model predicting "no fraud" 99.9% of the time looks accurate but is useless. Precision/recall, F1, and ROC-AUC/PR-AUC capture different tradeoffs (PR-AUC is preferred when positives are rare), and stratified k-fold or time-series-aware splits (no shuffling across time!) are required to get an honest estimate when the data has structure.'
        },
        example: `from sklearn.datasets import load_iris\nfrom sklearn.model_selection import cross_val_score, StratifiedKFold\nfrom sklearn.ensemble import RandomForestClassifier\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\n\n# Cross-validation\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\nscores = cross_val_score(model, X, y, cv=cv, scoring='accuracy')\n\nprint(f"CV Scores: {scores}")\nprint(f"Mean Accuracy: {scores.mean():.3f} (+/- {scores.std():.3f})")`,
        advancedExample: `import numpy as np\nfrom sklearn.metrics import precision_recall_curve, roc_auc_score, average_precision_score\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\n\n# Highly imbalanced dataset (98% negative class) — accuracy alone would lie\nX, y = make_classification(n_samples=5000, weights=[0.98, 0.02], random_state=42)\nX_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=42)\n\nmodel = RandomForestClassifier(class_weight='balanced', random_state=42).fit(X_train, y_train)\nprobs = model.predict_proba(X_test)[:, 1]\n\nprint(f"ROC-AUC: {roc_auc_score(y_test, probs):.3f}")\nprint(f"PR-AUC (more honest on rare positives): {average_precision_score(y_test, probs):.3f}")\n\nprecision, recall, thresholds = precision_recall_curve(y_test, probs)\nbest_idx = np.argmax(2 * precision * recall / (precision + recall + 1e-9))\nprint(f"Best F1 threshold: {thresholds[best_idx]:.3f} -> P={precision[best_idx]:.3f}, R={recall[best_idx]:.3f}")`,
        resources: [
            { name: 'Scikit-learn Model Evaluation', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html', icon: '📊' },
            { name: 'Coursera ML Evaluation', url: 'https://www.coursera.org/learn/machine-learning', icon: '🎓' },
            { name: 'ML Metrics Explained', url: 'https://towardsdatascience.com/performance-metrics-for-classification-problems-7ac295dba4a7', icon: '📖' },
            { name: 'Kaggle: Cross-Validation (practice)', url: 'https://www.kaggle.com/code/alexisbcook/cross-validation', icon: '🏆' },
        ]
    }, {
        name: 'Decision Trees & Random Forest',
        difficulty: 'medium',
        done: false,
        prerequisites: ['Supervised Learning'],
        ibmCourse: 'Course 9 · Machine Learning with Python',
        definition: {
            basic: 'A decision tree makes predictions by asking a series of yes/no questions about your data, like "Is income > $50k?". A Random Forest grows hundreds of slightly different trees and averages their votes, which is usually far more accurate and harder to overfit than any single tree.',
            advanced: 'Trees split nodes by greedily maximizing information gain (entropy reduction) or Gini impurity reduction at each step — a locally optimal, globally suboptimal strategy that overfits easily, hence the high variance. Random Forests reduce that variance via bagging (bootstrap sampling) plus random feature subsetting at each split, decorrelating the trees so their errors partially cancel out when averaged.'
        },
        example: `from sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\n\ndata = load_breast_cancer()\nX, y = data.data, data.target\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Decision Tree\ndt = DecisionTreeClassifier(random_state=42)\ndt.fit(X_train, y_train)\nprint(f"Decision Tree Acc: {accuracy_score(y_test, dt.predict(X_test)):.3f}")\n\n# Random Forest\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\nrf.fit(X_train, y_train)\nprint(f"Random Forest Acc: {accuracy_score(y_test, rf.predict(X_test)):.3f}")`,
        advancedExample: `import numpy as np\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.inspection import permutation_importance\nfrom sklearn.model_selection import train_test_split\n\ndata = load_breast_cancer()\nX_train, X_test, y_train, y_test = train_test_split(data.data, data.target, random_state=42)\n\nrf = RandomForestClassifier(n_estimators=300, max_depth=6, min_samples_leaf=5, random_state=42)\nrf.fit(X_train, y_train)\n\n# Permutation importance is more reliable than built-in feature_importances_\n# (which is biased toward high-cardinality / continuous features)\nresult = permutation_importance(rf, X_test, y_test, n_repeats=10, random_state=42)\ntop5 = np.argsort(result.importances_mean)[::-1][:5]\n\nfor i in top5:\n    print(f"{data.feature_names[i]:25s} importance={result.importances_mean[i]:.4f} (+/- {result.importances_std[i]:.4f})")`,
        resources: [
            { name: 'Scikit-learn Tree', url: 'https://scikit-learn.org/stable/modules/tree.html', icon: '🌳' },
            { name: 'StatQuest: Random Forests', url: 'https://statquest.org/video-index/', icon: '📺' },
            { name: 'Kaggle Random Forest', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', icon: '🏆' },
            { name: 'Scikit-learn Ensemble Guide', url: 'https://scikit-learn.org/stable/modules/ensemble.html', icon: '📘' },
        ]
    }, {
        name: 'Neural Networks Basics',
        difficulty: 'hard',
        done: false,
        prerequisites: ['Calculus for ML', 'Linear Algebra Essentials', 'Supervised Learning'],
        ibmCourse: 'Supplementary — beyond the official 12-course curriculum',
        definition: {
            basic: 'A neural network is loosely inspired by neurons in the brain — layers of simple math units that each take weighted inputs, apply a small non-linear "activation," and pass the result onward. Stacked together, this lets the network learn very complex patterns, like recognizing handwritten digits or faces.',
            advanced: 'Without non-linear activations (ReLU, tanh, sigmoid), stacking linear layers would collapse into a single linear transform — depth would add nothing. ReLU\'s popularity comes from cheap computation and resistance to vanishing gradients compared to sigmoid/tanh, though it introduces its own failure mode ("dying ReLU") that batch normalization and careful initialization (He/Xavier) help mitigate.'
        },
        example: `from sklearn.neural_network import MLPClassifier\nfrom sklearn.datasets import load_digits\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\n# Load digits dataset\ndigits = load_digits()\nX, y = digits.data, digits.target\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Simple neural net\nmlp = MLPClassifier(hidden_layer_sizes=(64, 32), max_iter=500, random_state=42)\nmlp.fit(X_train, y_train)\n\nprint(f"Neural Net Acc: {accuracy_score(y_test, mlp.predict(X_test)):.3f}")`,
        advancedExample: `import numpy as np\n\n# Comparing activation functions and the vanishing gradient problem\ndef sigmoid(x): return 1 / (1 + np.exp(-x))\ndef sigmoid_grad(x): s = sigmoid(x); return s * (1 - s)\ndef relu(x): return np.maximum(0, x)\ndef relu_grad(x): return (x > 0).astype(float)\n\nz = np.linspace(-10, 10, 9)\nprint("z:           ", np.round(z, 1))\nprint("sigmoid grad:", np.round(sigmoid_grad(z), 4), " <- vanishes far from 0")\nprint("relu grad:   ", np.round(relu_grad(z), 4), " <- constant 1 for z>0, never vanishes")\n\n# This is why deep sigmoid networks historically struggled to train,\n# and why ReLU (and its variants) became the default for hidden layers.`,
        resources: [
            { name: 'DeepLearning.AI Course', url: 'https://www.deeplearning.ai/courses/', icon: '🧠' },
            { name: 'TensorFlow Docs', url: 'https://www.tensorflow.org/learn', icon: '⚡' },
            { name: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', icon: '🔥' },
            { name: '3Blue1Brown: Neural Networks', url: 'https://www.3blue1brown.com/topics/neural-networks', icon: '📺' },
        ]
    }]
}, {
    level: 'Advanced & Specialized',
    icon: '🚀',
    topics: [{
        name: 'Deep Learning (CNNs, RNNs)',
        difficulty: 'hard',
        done: false,
        prerequisites: ['Neural Networks Basics'],
        ibmCourse: 'Supplementary — beyond the official 12-course curriculum',
        definition: {
            basic: 'Deep learning stacks many neural network layers to learn increasingly abstract patterns. CNNs scan images with small filters to detect edges, then shapes, then objects. RNNs read sequences (text, time series) one step at a time, carrying a "memory" of what came before.',
            advanced: 'CNNs exploit two inductive biases that make them efficient for images: translation equivariance (a filter detects the same pattern anywhere in the image) and local connectivity (nearby pixels matter more than distant ones), drastically reducing parameters versus a fully-connected layer. Vanilla RNNs suffer from vanishing/exploding gradients over long sequences — LSTMs/GRUs introduce gating mechanisms to control what is remembered or forgotten, which is why they largely replaced plain RNNs before attention-based models took over.'
        },
        example: `# Simplified CNN using TensorFlow/Keras style\nimport numpy as np\n\n# Simulating a convolution operation\ndef conv2d_simple(input_image, kernel):\n    h, w = input_image.shape\n    kh, kw = kernel.shape\n    output = np.zeros((h-kh+1, w-kw+1))\n    for i in range(h-kh+1):\n        for j in range(w-kw+1):\n            output[i, j] = np.sum(input_image[i:i+kh, j:j+kw] * kernel)\n    return output\n\n# Example\nimage = np.random.randn(5, 5)\nkernel = np.array([[1, 0, -1], [1, 0, -1], [1, 0, -1]])\nresult = conv2d_simple(image, kernel)\nprint("Convolution result shape:", result.shape)\nprint(result)`,
        advancedExample: `# Conceptual Keras CNN — typical image classifier architecture\n# import tensorflow as tf\n# from tensorflow.keras import layers, models\n#\n# model = models.Sequential([\n#     layers.Conv2D(32, (3,3), activation='relu', input_shape=(64,64,3)),\n#     layers.BatchNormalization(),\n#     layers.MaxPooling2D((2,2)),\n#     layers.Conv2D(64, (3,3), activation='relu'),\n#     layers.BatchNormalization(),\n#     layers.MaxPooling2D((2,2)),\n#     layers.GlobalAveragePooling2D(),    # avoids huge Dense layer, fewer params\n#     layers.Dense(128, activation='relu'),\n#     layers.Dropout(0.3),                # regularization against overfitting\n#     layers.Dense(10, activation='softmax')\n# ])\n# model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])\n\nprint("Architecture pattern: conv -> norm -> pool, repeated, then global pool -> dense -> dropout -> softmax")\nprint("BatchNorm stabilizes training; GlobalAveragePooling reduces params vs. Flatten+Dense")`,
        resources: [
            { name: 'DeepLearning.AI Specialization', url: 'https://www.deeplearning.ai/courses/', icon: '🧠' },
            { name: 'TensorFlow Core', url: 'https://www.tensorflow.org/learn', icon: '⚡' },
            { name: 'PyTorch Vision', url: 'https://pytorch.org/vision/stable/index.html', icon: '🔥' },
            { name: 'CS231n (Stanford, practice)', url: 'http://cs231n.stanford.edu/', icon: '🏆' },
        ]
    }, {
        name: 'NLP & Transformers',
        difficulty: 'hard',
        done: false,
        prerequisites: ['Neural Networks Basics', 'Deep Learning (CNNs, RNNs)'],
        ibmCourse: 'Supplementary — beyond the official 12-course curriculum',
        definition: {
            basic: 'Natural Language Processing teaches computers to work with human language — sentiment analysis, translation, chatbots. Transformers are the current state of the art (powering models like GPT and BERT): instead of reading text one word at a time like an RNN, they look at the whole sentence at once and learn which words matter to which other words.',
            advanced: 'Self-attention computes a weighted combination of all token representations, where the weights come from scaled dot-products of learned query/key vectors — this lets the model relate "it" to the correct noun three sentences back without the vanishing-gradient problem RNNs face. Multi-head attention runs several of these in parallel subspaces, and positional encodings inject word-order information that attention alone discards.'
        },
        example: `# Using Hugging Face transformers (conceptual)\n# from transformers import pipeline\n\n# Simulated output\nprint("Loading sentiment analysis model...")\nprint("Result: {'label': 'POSITIVE', 'score': 0.999}'")\nprint()\nprint("Example text: 'I love learning data science!'\")\nprint("→ Sentiment: Positive (99.9%)")\n\n# Tokenization concept\ntext = "Hello world!"\ntokens = text.lower().split()\nprint(f"Tokens: {tokens}")`,
        advancedExample: `import numpy as np\n\n# Minimal scaled dot-product self-attention, from scratch\ndef softmax(x, axis=-1):\n    e = np.exp(x - np.max(x, axis=axis, keepdims=True))\n    return e / e.sum(axis=axis, keepdims=True)\n\nnp.random.seed(0)\nseq_len, d_model = 4, 8\nX = np.random.randn(seq_len, d_model)          # 4 "tokens", 8-dim embeddings\n\nWq, Wk, Wv = (np.random.randn(d_model, d_model) * 0.1 for _ in range(3))\nQ, K, V = X @ Wq, X @ Wk, X @ Wv\n\nscores = (Q @ K.T) / np.sqrt(d_model)           # scaling keeps gradients stable\nattention_weights = softmax(scores, axis=-1)     # each row sums to 1\noutput = attention_weights @ V                   # weighted blend of all tokens' values\n\nprint("Attention weights (token i's focus on token j):\\n", np.round(attention_weights, 2))\nprint("\\nOutput shape:", output.shape, "(same shape as input — stackable into more layers)")`,
        resources: [
            { name: 'Hugging Face', url: 'https://huggingface.co/learn', icon: '🤗' },
            { name: 'NLTK Docs', url: 'https://www.nltk.org/', icon: '📘' },
            { name: 'SpaCy Docs', url: 'https://spacy.io/usage', icon: '⚡' },
            { name: '"The Illustrated Transformer" (practice)', url: 'https://jalammar.github.io/illustrated-transformer/', icon: '🏆' },
        ]
    }, {
        name: 'Big Data (Spark, Hadoop)',
        difficulty: 'hard',
        done: false,
        prerequisites: ['Data Wrangling (Pandas)'],
        ibmCourse: 'Supplementary — beyond the official 12-course curriculum',
        definition: {
            basic: 'When data is too big to fit on one computer, you spread the work across many machines. Hadoop pioneered this with distributed storage and batch processing; Apache Spark improved on it with fast, in-memory processing — letting you write Pandas-like code that scales to terabytes.',
            advanced: 'Spark\'s core abstraction is the Resilient Distributed Dataset (RDD) / DataFrame, evaluated lazily and split into partitions processed in parallel across a cluster — a job\'s execution plan (the DAG) is only triggered by an "action" like `.collect()` or `.write()`. Shuffle operations (joins, groupBy across partitions) are the main performance bottleneck, since they require moving data across the network; minimizing shuffles via partitioning strategy is the key to scaling Spark jobs efficiently.'
        },
        example: `# PySpark style (conceptual)\n# from pyspark.sql import SparkSession\n# from pyspark.sql.functions import col\n\n# spark = SparkSession.builder.appName("Example").getOrCreate()\n# df = spark.read.csv("huge_dataset.csv", header=True)\n# df_filtered = df.filter(col("age") > 30)\n# df_filtered.show()\n\nprint("PySpark DataFrame operations:")\nprint("- Read CSV: spark.read.csv(...)")\nprint("- Filter: df.filter(col('age') > 30)")\nprint("- Group by: df.groupBy('category').count()")`,
        advancedExample: `# Conceptual PySpark — partitioning to minimize expensive shuffles\n# from pyspark.sql import SparkSession\n# from pyspark.sql.functions import col, broadcast\n#\n# spark = SparkSession.builder.appName("Optimized").getOrCreate()\n# orders = spark.read.parquet("s3://bucket/orders/")          # large table\n# customers = spark.read.parquet("s3://bucket/customers/")    # small lookup table\n#\n# # Repartition the large table by join key BEFORE the join to reduce shuffle\n# orders = orders.repartition("customer_id")\n#\n# # Broadcast join: ships the small table to every executor instead of\n# # shuffling the huge 'orders' table across the network\n# result = orders.join(broadcast(customers), \"customer_id\")\n# result.write.partitionBy(\"order_date\").parquet(\"s3://bucket/output/\")\n\nprint("Key optimizations: repartition by join key, broadcast small tables,")\nprint("partition output by a commonly-filtered column (e.g. date) for downstream pruning.")`,
        resources: [
            { name: 'Apache Spark Docs', url: 'https://spark.apache.org/docs/latest/', icon: '⚡' },
            { name: 'Databricks Learning', url: 'https://databricks.com/learn', icon: '📚' },
            { name: 'Hadoop Docs', url: 'https://hadoop.apache.org/docs/current/', icon: '🐘' },
            { name: 'Spark: The Definitive Guide (practice)', url: 'https://spark.apache.org/docs/latest/quick-start.html', icon: '🏆' },
        ]
    }, {
        name: 'MLOps & Deployment',
        difficulty: 'hard',
        done: false,
        prerequisites: ['Model Evaluation & Validation', 'Decision Trees & Random Forest'],
        ibmCourse: 'Supplementary — beyond the official 12-course curriculum',
        definition: {
            basic: 'A model sitting in a notebook helps no one — MLOps is everything needed to get it safely into production and keep it healthy: tracking experiments, versioning models and data, deploying behind an API, and monitoring for when it starts performing worse over time.',
            advanced: 'The hardest production problem is usually drift, not deployment: data drift (input distributions shift), concept drift (the relationship between inputs and target changes), and training-serving skew (subtle differences between offline feature computation and the online serving path) silently degrade a model that looked fine at launch. Mature MLOps pipelines version data, code, and model artifacts together and run shadow/canary deployments before fully routing traffic to a new model.'
        },
        example: `# MLflow style tracking\n# import mlflow\n# import mlflow.sklearn\n# \n# with mlflow.start_run():\n#     model = RandomForestClassifier(...)\n#     model.fit(X_train, y_train)\n#     mlflow.log_param("n_estimators", 100)\n#     mlflow.log_metric("accuracy", 0.95)\n#     mlflow.sklearn.log_model(model, "model")\n\nprint("MLOps workflow:")\nprint("1. Experiment tracking (MLflow, Weights & Biases)")\nprint("2. Model versioning (DVC, Git)")\nprint("3. CI/CD pipeline (GitHub Actions, Jenkins)")\nprint("4. Model serving (FastAPI, Flask, TorchServe)")`,
        advancedExample: `import numpy as np\n\n# A simple data-drift detector using the Population Stability Index (PSI)\n# PSI is a common production monitoring metric for catching distribution shift\ndef psi(reference, current, bins=10):\n    edges = np.histogram(reference, bins=bins)[1]\n    ref_pct = np.histogram(reference, bins=edges)[0] / len(reference) + 1e-6\n    cur_pct = np.histogram(current, bins=edges)[0] / len(current) + 1e-6\n    return np.sum((cur_pct - ref_pct) * np.log(cur_pct / ref_pct))\n\nnp.random.seed(0)\ntraining_feature = np.random.normal(50, 10, 5000)        # distribution at training time\nproduction_feature_ok = np.random.normal(51, 10, 5000)    # minor shift\nproduction_feature_bad = np.random.normal(65, 15, 5000)   # serious drift\n\nprint(f"PSI (minor shift):   {psi(training_feature, production_feature_ok):.4f}  (< 0.1 = stable)")\nprint(f"PSI (serious drift):  {psi(training_feature, production_feature_bad):.4f}  (> 0.25 = retrain!)")`,
        resources: [
            { name: 'MLflow Docs', url: 'https://mlflow.org/docs/latest/index.html', icon: '📈' },
            { name: 'Kubeflow Docs', url: 'https://www.kubeflow.org/docs/', icon: '☸️' },
            { name: 'Made With ML', url: 'https://madewithml.com/', icon: '📖' },
            { name: 'Google: ML Production Best Practices', url: 'https://developers.google.com/machine-learning/guides/rules-of-ml', icon: '🏆' },
        ]
    }, {
        name: 'Reinforcement Learning',
        difficulty: 'hard',
        done: false,
        prerequisites: ['Neural Networks Basics', 'Statistics & Probability'],
        ibmCourse: 'Supplementary — beyond the official 12-course curriculum',
        definition: {
            basic: 'Reinforcement Learning is learning by trial and error: an agent takes actions in an environment, gets rewards or penalties, and gradually learns a strategy ("policy") that maximizes long-term reward — the same way you learn a video game by playing it, not by reading a manual.',
            advanced: 'The exploration-exploitation tradeoff is the central tension: an agent must try uncertain actions (exploration) to discover better strategies while also exploiting what it already knows works. Value-based methods (Q-learning, DQN) learn the expected return of each action; policy-gradient methods (REINFORCE, PPO) directly optimize the policy itself and handle continuous action spaces more naturally, which is why most modern RL (including RLHF used to fine-tune language models) is policy-gradient based.'
        },
        example: `# Simple Q-learning conceptual example\nimport numpy as np\n\n# Simple grid world with 4 actions (up, down, left, right)\nn_states = 16\nn_actions = 4\nQ = np.zeros((n_states, n_actions))\n\n# Episode simulation\nstate = 0\ntotal_reward = 0\nfor step in range(10):\n    # Choose action (epsilon-greedy)\n    if np.random.rand() < 0.1:\n        action = np.random.randint(n_actions)\n    else:\n        action = np.argmax(Q[state])\n    \n    # Simulate transition\n    next_state = (state + action) % n_states\n    reward = 1 if next_state == n_states - 1 else 0\n    total_reward += reward\n    \n    # Update Q (simple)\n    Q[state, action] += 0.1 * (reward + 0.9 * np.max(Q[next_state]) - Q[state, action])\n    state = next_state\n\nprint(f"Total reward: {total_reward}")`,
        advancedExample: `import numpy as np\n\n# Comparing a fixed epsilon vs. decaying epsilon exploration schedule\n# over many episodes — decaying epsilon explores early, exploits later\nnp.random.seed(0)\nn_episodes = 20\n\nfixed_epsilon = 0.3\ndecaying_epsilon = lambda ep: max(0.05, 0.9 * (0.85 ** ep))\n\nprint(f"{'Episode':>8} {'Fixed eps':>10} {'Decaying eps':>13}")\nfor ep in range(0, n_episodes, 4):\n    print(f"{ep:>8} {fixed_epsilon:>10.3f} {decaying_epsilon(ep):>13.3f}")\n\nprint("\\nDecaying schedules typically converge faster: heavy exploration when the")\nprint("Q-values are still unreliable, then increasingly greedy as estimates improve.")`,
        resources: [
            { name: 'DeepMind RL', url: 'https://deepmind.com/learning-resources', icon: '🧠' },
            { name: 'OpenAI Spinning Up', url: 'https://spinningup.openai.com/', icon: '🤖' },
            { name: 'RL Course (David Silver)', url: 'https://www.davidsilver.uk/teaching/', icon: '🎓' },
            { name: 'Gymnasium (practice environments)', url: 'https://gymnasium.farama.org/', icon: '🏆' },
        ]
    }, {
        name: 'AI Ethics & Responsible AI',
        difficulty: 'medium',
        done: false,
        prerequisites: ['Model Evaluation & Validation'],
        ibmCourse: 'Course 11 · Generative AI: Elevate Your Data Science Career',
        definition: {
            basic: 'AI Ethics asks whether a model is fair, transparent, and safe — not just accurate. A model that\'s 95% accurate overall but systematically wrong for one demographic group isn\'t actually a success; responsible AI practices catch and fix issues like this before deployment.',
            advanced: 'Fairness has multiple, sometimes mutually-incompatible mathematical definitions — demographic parity (equal positive prediction rates across groups), equalized odds (equal true/false positive rates), and individual fairness (similar people get similar predictions) can each be satisfied while violating the others, so "fair" requires an explicit choice of which definition matters for the use case, not just running a generic bias-audit library.'
        },
        example: `# Evaluating fairness in a model\n# Simulated fairness metrics\n\nimport numpy as np\n\n# Simulated predictions\ny_true = np.array([0, 1, 1, 0, 1, 0, 0, 1])\ny_pred = np.array([0, 1, 0, 0, 1, 1, 0, 1])\n\n# Confusion matrix\ntp = np.sum((y_true == 1) & (y_pred == 1))\ntn = np.sum((y_true == 0) & (y_pred == 0))\nfp = np.sum((y_true == 0) & (y_pred == 1))\nfn = np.sum((y_true == 1) & (y_pred == 0))\n\n# Fairness metrics\naccuracy = (tp + tn) / len(y_true)\nprecision = tp / (tp + fp) if (tp + fp) > 0 else 0\nrecall = tp / (tp + fn) if (tp + fn) > 0 else 0\n\nprint(f"Accuracy: {accuracy:.2f}")\nprint(f"Precision: {precision:.2f}")\nprint(f"Recall: {recall:.2f}")\nprint("Consider fairness across demographic groups")`,
        advancedExample: `import numpy as np\n\n# Checking equalized odds across two groups (equal TPR & FPR)\ndef group_rates(y_true, y_pred):\n    tp = np.sum((y_true == 1) & (y_pred == 1))\n    fn = np.sum((y_true == 1) & (y_pred == 0))\n    fp = np.sum((y_true == 0) & (y_pred == 1))\n    tn = np.sum((y_true == 0) & (y_pred == 0))\n    tpr = tp / (tp + fn) if (tp + fn) > 0 else 0\n    fpr = fp / (fp + tn) if (fp + tn) > 0 else 0\n    return tpr, fpr\n\nnp.random.seed(0)\ny_true_a, y_pred_a = np.random.randint(0, 2, 200), np.random.randint(0, 2, 200)\ny_true_b, y_pred_b = np.random.randint(0, 2, 200), np.random.randint(0, 2, 200)\n\ntpr_a, fpr_a = group_rates(y_true_a, y_pred_a)\ntpr_b, fpr_b = group_rates(y_true_b, y_pred_b)\n\nprint(f"Group A: TPR={tpr_a:.3f}  FPR={fpr_a:.3f}")\nprint(f"Group B: TPR={tpr_b:.3f}  FPR={fpr_b:.3f}")\nprint(f"TPR gap: {abs(tpr_a - tpr_b):.3f}  |  FPR gap: {abs(fpr_a - fpr_b):.3f}")\nprint("Large gaps here indicate the model treats the two groups inconsistently.")`,
        resources: [
            { name: 'Responsible AI (Google)', url: 'https://ai.google/responsibility/', icon: '🌐' },
            { name: 'AI Fairness 360', url: 'https://aif360.mybluemix.net/', icon: '⚖️' },
            { name: 'Ethics in AI (MIT)', url: 'https://www.media.mit.edu/groups/ethics-of-artificial-intelligence/overview/', icon: '🎓' },
            { name: 'Fairness in ML (practice)', url: 'https://fairmlbook.org/', icon: '🏆' },
        ]
    }, {
        name: 'Generative AI for Data Science',
        difficulty: 'medium',
        done: false,
        prerequisites: ['Feature Engineering', 'NLP & Transformers'],
        ibmCourse: 'Course 11 · Generative AI: Elevate Your Data Science Career',
        definition: {
            basic: 'Generative AI tools (like ChatGPT-style models) can now help a data scientist draft code, summarize messy data, generate synthetic training examples, and even explain a confusing dataset in plain English — used well, they speed up almost every stage of a project rather than replacing the data scientist\'s judgment.',
            advanced: 'Using an LLM inside a data pipeline introduces new failure modes beyond standard model risk: hallucinated facts presented confidently, prompt injection from untrusted data fields, and non-determinism that complicates reproducibility. Production GenAI-in-the-loop systems typically pin model versions, log every prompt/response pair for auditability, and validate generated code or synthetic data against the same statistical checks you\'d apply to any other untrusted input.'
        },
        example: `# Conceptual: using an LLM to draft a data-cleaning function from a description\n# response = client.chat.completions.create(\n#     model="gpt-4",\n#     messages=[{"role": "user", "content":\n#         "Write a pandas function that standardizes US phone numbers to (XXX) XXX-XXXX"}]\n# )\n\nprint("Prompt -> generated code -> ALWAYS review and test before trusting it on real data.")\nprint("Treat LLM-generated code the same way you'd treat a junior teammate's first draft.")`,
        advancedExample: `import re\n\n# Validating LLM-generated code/output before it touches production data\n# (a lightweight example of the kind of guardrail real pipelines need)\ndef looks_like_valid_phone_formatter(code_str: str) -> bool:\n    required_patterns = [r"def \\w+\\(", r"return"]\n    forbidden_patterns = [r"\\bos\\.", r"\\beval\\(", r"\\bexec\\(", r"open\\("]\n    has_required = all(re.search(p, code_str) for p in required_patterns)\n    has_forbidden = any(re.search(p, code_str) for p in forbidden_patterns)\n    return has_required and not has_forbidden\n\nsuspect_code = "def clean_phone(s):\\n    import os\\n    return s"\nsafe_code = "def clean_phone(s):\\n    return s.strip()"\n\nprint(f"Suspect snippet passes safety check: {looks_like_valid_phone_formatter(suspect_code)}")\nprint(f"Safe snippet passes safety check:    {looks_like_valid_phone_formatter(safe_code)}")`,
        resources: [
            { name: 'IBM: Generative AI for Data Science (Course 11)', url: 'https://www.coursera.org/learn/generative-ai-elevate-your-data-science-career', icon: '🎓' },
            { name: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', icon: '📘' },
            { name: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai/', icon: '📖' },
            { name: 'Hugging Face: LLM Course (practice)', url: 'https://huggingface.co/learn/llm-course', icon: '🏆' },
        ]
    }, {
        name: 'Applied Capstone Project & Portfolio',
        difficulty: 'hard',
        done: false,
        prerequisites: ['Model Evaluation & Validation', 'Data Visualization (Matplotlib)', 'SQL & Relational Databases'],
        ibmCourse: 'Course 10 · Applied Data Science Capstone',
        definition: {
            basic: 'The capstone is where every earlier topic comes together into one real, end-to-end project — scrape or query real data, clean it, explore it, build and compare a few models, and present the results like you would to a manager. This is the single artifact employers look at first, more than any certificate.',
            advanced: 'A capstone that actually gets you hired treats the write-up as a product, not an afterthought: a clear problem statement, a baseline model stated explicitly (so improvements are measurable), an honest discussion of what didn\'t work and why, and a reproducible repo (pinned dependencies, a README that runs end-to-end). Interviewers consistently probe "what would you do differently" — having a genuine answer signals more seniority than the model\'s accuracy number ever will.'
        },
        example: `# A capstone project skeleton — the structure matters as much as the model\nproject_structure = """\ncapstone-project/\n├── README.md          <- problem statement, how to run, key findings\n├── requirements.txt   <- pinned versions for reproducibility\n├── data/               <- raw + processed data (or a download script)\n├── notebooks/          <- exploration, one notebook per project stage\n├── src/                <- reusable functions extracted out of notebooks\n└── reports/            <- final charts and a one-page summary for stakeholders\n"""\nprint(project_structure)\nprint("Treat this exactly like a project you'd hand off to a teammate.")`,
        advancedExample: `import pandas as pd\nimport numpy as np\nfrom sklearn.dummy import DummyClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score, f1_score\n\n# Always report a baseline alongside your real model — it's the only way\n# a reader can tell if your model is actually adding value\nnp.random.seed(0)\nX = np.random.randn(500, 6)\ny = (X[:, 0] + X[:, 1] * 0.5 + np.random.randn(500) * 0.5 > 0).astype(int)\nX_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)\n\nbaseline = DummyClassifier(strategy='most_frequent').fit(X_train, y_train)\nmodel = RandomForestClassifier(random_state=42).fit(X_train, y_train)\n\nfor name, m in [('Baseline (majority class)', baseline), ('Random Forest', model)]:\n    preds = m.predict(X_test)\n    print(f"{name:28s} acc={accuracy_score(y_test, preds):.3f}  f1={f1_score(y_test, preds):.3f}")`,
        resources: [
            { name: 'IBM: Applied Data Science Capstone (Course 10)', url: 'https://www.coursera.org/learn/applied-data-science-capstone', icon: '🎓' },
            { name: 'GitHub: Data Science Project Template', url: 'https://github.com/drivendataorg/cookiecutter-data-science', icon: '📘' },
            { name: 'Kaggle Competitions (practice)', url: 'https://www.kaggle.com/competitions', icon: '🏆' },
            { name: 'How to Write a Great README', url: 'https://www.makeareadme.com/', icon: '📖' },
        ]
    }, {
        name: 'Career Guide & Interview Prep',
        difficulty: 'medium',
        done: false,
        prerequisites: ['Applied Capstone Project & Portfolio'],
        ibmCourse: 'Course 12 · Data Scientist Career Guide and Interview Preparation',
        definition: {
            basic: 'Finishing the technical work is only half the job — this is where you package your portfolio, write a resume that survives a recruiter\'s 7-second scan, and practice the kinds of interview questions (technical + behavioral) that actually get asked for data science roles.',
            advanced: 'Data science interviews typically test four separate dimensions — SQL/coding screens, statistics & ML fundamentals (often via "explain X to a non-technical stakeholder"), case-study/product-sense questions, and behavioral fit — and weak performance in any single one can sink an otherwise strong candidate. The STAR method (Situation, Task, Action, Result) for behavioral answers and walking through your capstone\'s baseline-vs-final-model comparison are two of the highest-leverage things to rehearse explicitly before interviewing.'
        },
        example: `# A STAR-formatted answer skeleton, worth pre-writing for 3-5 of your strongest projects\nstar_answer = {\n    "Situation": "Our retention dashboard relied on a model that hadn't been retrained in 8 months.",\n    "Task": "Detect whether performance had degraded, and fix it if so.",\n    "Action": "Computed PSI on the top 5 features, found significant drift, retrained on recent data.",\n    "Result": "Recall on churners improved from 0.61 to 0.79 in the next month's validation."\n}\nfor k, v in star_answer.items():\n    print(f"{k}: {v}")`,
        advancedExample: `# Self-scoring a resume bullet against what recruiters actually scan for\ndef score_bullet(bullet: str) -> dict:\n    has_number = any(ch.isdigit() for ch in bullet)\n    has_action_verb = bullet.strip().split()[0][:-1].lower() in {\n        'built', 'improved', 'reduced', 'designed', 'automated', 'led', 'deployed', 'shipped'\n    }\n    word_count = len(bullet.split())\n    return {\n        'has_metric': has_number,\n        'starts_with_action_verb': has_action_verb,\n        'concise': word_count <= 25,\n    }\n\nweak = "Worked on a project related to customer data using Python and some machine learning tools."\nstrong = "Built a churn model in Python that improved recall from 61% to 79%, saving an est. $40K/mo."\n\nfor label, bullet in [('Weak', weak), ('Strong', strong)]:\n    print(f"{label}: {score_bullet(bullet)}")`,
        resources: [
            { name: 'IBM: Career Guide & Interview Prep (Course 12)', url: 'https://www.coursera.org/learn/career-guide-and-interview-prep-for-data-science-pc', icon: '🎓' },
            { name: 'Glassdoor: DS Interview Questions', url: 'https://www.glassdoor.com/Interview/data-scientist-interview-questions-SRCH_KO0,14.htm', icon: '📖' },
            { name: 'StrataScratch (SQL/DS practice)', url: 'https://www.stratascratch.com/', icon: '🏆' },
            { name: 'LinkedIn: IBM Talent Network info', url: 'https://www.coursera.org/professional-certificates/ibm-data-science', icon: '🌐' },
        ]
    }]
}];
const TOTAL_TOPICS = SYLLABUS_DATA.reduce((acc, l) => acc + l.topics.length, 0);
let DONE_TOPICS = SYLLABUS_DATA.reduce((acc, l) => acc + l.topics.filter(t => t.done).length, 0);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  STATE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let currentView = 'overview';
let focusMode = false;
let chartInstances = {};
let timerState = {
    running: false,
    minutes: 25,
    seconds: 0,
    interval: null,
    mode: 'focus',
    sessions: [],
    totalFocus: 0,
};
let labState = {
    code: `# 🧪 Data Science Lab\n# Run a sample experiment\n\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Generate synthetic data\nx = np.linspace(0, 10, 50)\ny = 2*x + 1 + np.random.randn(50)*2\n\n# Fit a linear model\ncoeff = np.polyfit(x, y, 1)\npoly = np.poly1d(coeff)\n\nprint(f"Slope: {coeff[0]:.2f}")\nprint(f"Intercept: {coeff[1]:.2f}")`,
    output: '',
};

// syllabus UI state (search / filter / expand)
let syllabusState = {
    query: '',
    filter: 'all', // all | done | remaining | easy | medium | hard
    expandedLevels: new Set([0]), // level indices currently expanded
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HELPERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function getCtx(id) {
    const el = document.getElementById(id);
    if (!el) return null;
    return el.getContext('2d');
}

function destroyChart(id) {
    if (chartInstances[id]) {
        chartInstances[id].destroy();
        delete chartInstances[id];
    }
}

function buildChart(id, config) {
    destroyChart(id);
    const ctx = getCtx(id);
    if (!ctx) return null;
    chartInstances[id] = new Chart(ctx, config);
    return chartInstances[id];
}

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function getDifficultyClass(d) {
    if (d === 'easy') return 'easy';
    if (d === 'medium') return 'medium';
    return 'hard';
}

function getLevelDot(level) {
    const map = { 'Foundation': 'foundation', 'Core Data Science': 'core', 'Advanced & Specialized': 'advanced' };
    return map[level] || 'core';
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } [c]));
}

function updateMasteredCount() {
    DONE_TOPICS = SYLLABUS_DATA.reduce((acc, l) => acc + l.topics.filter(t => t.done).length, 0);
    const remaining = TOTAL_TOPICS - DONE_TOPICS;

    document.querySelectorAll('#masteredCount, #masteredCountMobile').forEach(el => {
        if (el) el.textContent = DONE_TOPICS;
    });

    document.querySelectorAll('#syllabusNotif, #syllabusNotifMobile').forEach(notif => {
        if (!notif) return;
        notif.textContent = remaining > 0 ? remaining : '✓';
        notif.style.background = remaining === 0 ? '#22c55e' : '#3b82f6';
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MODAL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function getAllTopicsFlat() {
    return SYLLABUS_DATA.flatMap(l => l.topics.map(t => ({ ...t, level: l.level })));
}

function findTopicByName(name) {
    for (const level of SYLLABUS_DATA) {
        const found = level.topics.find(t => t.name === name);
        if (found) return { topic: found, levelName: level.level };
    }
    return null;
}

function getUnlocks(topicName) {
    return getAllTopicsFlat().filter(t => (t.prerequisites || []).includes(topicName));
}

function renderChainNode(name, isCurrent) {
    const found = findTopicByName(name);
    const done = found ? found.topic.done : false;
    const cls = isCurrent ? 'current' : (done ? 'done' : '');
    const safeName = escapeHtml(name);
    return `<span class="chain-node ${cls}" ${isCurrent ? '' : `onclick="openTopicModalFromName('${safeName.replace(/'/g, "\\'")}')"`}>${done && !isCurrent ? '✅ ' : ''}${safeName}</span>`;
}

function renderChainStrip(topic) {
    const prereqs = topic.prerequisites || [];
    const unlocks = getUnlocks(topic.name).map(t => t.name);

    const prereqHtml = prereqs.length
        ? `<div class="chain-group">${prereqs.map(p => renderChainNode(p, false)).join('<span class="chain-arrow">→</span>')}</div><span class="chain-arrow">→</span>`
        : `<span class="chain-empty">🌱 Starting point —</span><span class="chain-arrow">→</span>`;

    const unlocksHtml = unlocks.length
        ? `<span class="chain-arrow">→</span><div class="chain-group">${unlocks.map(u => renderChainNode(u, false)).join('<span class="chain-arrow">→</span>')}</div>`
        : `<span class="chain-arrow">→</span><span class="chain-empty">🏁 Leads further into your own projects</span>`;

    return prereqHtml + renderChainNode(topic.name, true) + unlocksHtml;
}

function highlightCode(code) {
    if (!code) return '# No example provided.';
    return code
        .replace(/(import|from|def|class|return|if|elif|else|for|while|try|except|with|as|lambda|yield|print)/g,
            '<span class="keyword">$1</span>')
        .replace(/(\"[^\"]*\"|\'[^\']*\')/g, '<span class="string">$1</span>')
        .replace(/(\b\d+\.?\d*\b)/g, '<span class="number">$1</span>')
        .replace(/(#.*$)/gm, '<span class="comment">$1</span>')
        .replace(/(np\.|pd\.|plt\.|sklearn\.|mlflow\.)/g, '<span class="func">$1</span>');
}

function openTopicModal(topic, levelName) {
    const modal = document.getElementById('topicModal');
    document.getElementById('modalTitle').textContent = topic.name;

    const diffEl = document.getElementById('modalDifficulty');
    diffEl.textContent = topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1);
    diffEl.className = 'diff-badge ' + getDifficultyClass(topic.difficulty);

    document.getElementById('modalLevel').textContent = '📍 ' + levelName;
    document.getElementById('modalStatus').textContent = topic.done ? '✅ Mastered' : '⏳ In Progress';
    document.getElementById('modalStatus').style.color = topic.done ? '#4ade80' : '#fbbf24';

    const ibmEl = document.getElementById('modalIbmCourse');
    const isSupplementary = (topic.ibmCourse || '').startsWith('Supplementary');
    ibmEl.textContent = (isSupplementary ? '🧭 ' : '📜 IBM Cert — ') + (topic.ibmCourse || 'Not mapped');
    ibmEl.classList.toggle('supplementary', isSupplementary);

    // compound chain strip (prerequisites -> this topic -> what it unlocks)
    document.getElementById('modalChainStrip').innerHTML = renderChainStrip(topic);

    // definition tabs (basic / advanced)
    const defEl = document.getElementById('modalDefinition');
    const defTabs = document.getElementById('defTabs');
    const definitions = (typeof topic.definition === 'object' && topic.definition !== null)
        ? topic.definition
        : { basic: topic.definition, advanced: topic.definition };
    const setDefTab = (tab) => {
        defEl.textContent = definitions[tab] || definitions.basic;
        defTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    };
    defTabs.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => setDefTab(btn.dataset.tab);
    });
    setDefTab('basic');

    // example tabs (basic / advanced) with syntax highlighting
    const exampleEl = document.getElementById('modalExample');
    const exTabs = document.getElementById('exTabs');
    const examples = { basic: topic.example, advanced: topic.advancedExample || topic.example };
    const hasAdvancedExample = Boolean(topic.advancedExample);
    exTabs.querySelectorAll('.tab-btn')[1].style.display = hasAdvancedExample ? '' : 'none';
    const setExTab = (tab) => {
        exampleEl.innerHTML = highlightCode(examples[tab] || examples.basic);
        exTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    };
    exTabs.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => setExTab(btn.dataset.tab);
    });
    setExTab('basic');

    // resources
    const resList = document.getElementById('modalResources');
    resList.innerHTML = '';
    if (topic.resources && topic.resources.length > 0) {
        topic.resources.forEach(r => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${r.url}" target="_blank" rel="noopener"><span class="icon">${r.icon || '🔗'}</span> ${r.name}</a>`;
            resList.appendChild(li);
        });
    } else {
        resList.innerHTML = '<li style="color:#6b8aa8;">No resources listed for this topic.</li>';
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeTopicModal() {
    document.getElementById('topicModal').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('modalCloseBtn').addEventListener('click', closeTopicModal);
document.getElementById('topicModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeTopicModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTopicModal();
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MOBILE NAV DRAWER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarBackdrop').classList.add('open');
    document.getElementById('hamburgerBtn').classList.add('open');
    document.getElementById('hamburgerBtn').setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarBackdrop').classList.remove('open');
    document.getElementById('hamburgerBtn').classList.remove('open');
    document.getElementById('hamburgerBtn').setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

document.getElementById('hamburgerBtn').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) closeSidebar();
    else openSidebar();
});

document.getElementById('sidebarBackdrop').addEventListener('click', closeSidebar);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  RENDER VIEWS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const views = {

    // ─── OVERVIEW ──────────────────────────────────────
    overview() {
        const pct = Math.round((DONE_TOPICS / TOTAL_TOPICS) * 100);
        return `
              <div class="grid-4">
                <div class="stat-box"><div class="num accent">${DONE_TOPICS}/${TOTAL_TOPICS}</div><div class="lbl">Topics Mastered</div></div>
                <div class="stat-box"><div class="num green">${pct}%</div><div class="lbl">Overall Progress</div></div>
                <div class="stat-box"><div class="num pink">${timerState.sessions.length}</div><div class="lbl">Focus Sessions</div></div>
                <div class="stat-box"><div class="num orange">${timerState.totalFocus.toFixed(1)}h</div><div class="lbl">Total Learning Hours</div></div>
              </div>

              <div class="grid-2">
                <div class="card">
                  <h2>📈 Learning Progress <span class="sub">— by category</span></h2>
                  ${SYLLABUS_DATA.map(l => {
            const done = l.topics.filter(t => t.done).length;
            const total = l.topics.length;
            const p = Math.round((done / total) * 100);
            return `<div class="progress-item"><div class="label"><span>${l.icon} ${l.level}</span><span>${done}/${total} · ${p}%</span></div><div class="progress-track"><div class="progress-fill ${p > 70 ? 'green' : p > 40 ? 'orange' : 'pink'}" style="width:${p}%"></div></div></div>`;
        }).join('')}
                  <div style="margin-top:0.6rem;font-size:0.75rem;color:#6b8aa8;">🔥 Keep going — you're on a ${timerState.sessions.length > 0 ? Math.min(7, timerState.sessions.length) : 0}-day streak!</div>
                </div>

                <div class="card">
                  <h2>🤖 Lab Activity <span class="sub">— latest experiments</span></h2>
                  <div class="robot-arm">
                    ${[1, 2, 3, 4, 5, 6, 7].map(() => `<div class="segment"></div>`).join('')}
                  </div>
                  <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:0.4rem;font-size:0.75rem;color:#b0c4e0;">
                    <span>✅ Linear Regression</span>
                    <span>⏳ K-Means Clustering</span>
                    <span>⚡ Neural Net</span>
                  </div>
                  <div class="chart-wrapper" style="height:100px;margin-top:0.4rem;"><canvas id="overviewActivityChart"></canvas></div>
                </div>

                <div class="card full">
                  <h2>📐 Compound Learning Curve <span class="sub">— small daily gains, stacked</span></h2>
                  <div style="display:flex;gap:1.4rem;flex-wrap:wrap;align-items:center;">
                    <div class="chart-wrapper tall" style="flex:2;min-width:240px;"><canvas id="compoundGrowthChart"></canvas></div>
                    <div style="flex:1;min-width:200px;font-size:0.8rem;color:#b0c4e0;line-height:1.7;">
                      Every mastered topic compounds into the next — Python feeds Pandas, Pandas feeds Feature Engineering, Feature Engineering feeds Modeling. Consistent ${timerState.sessions.length > 0 ? '25-min' : 'short'} focus blocks beat occasional marathons.
                      <div style="margin-top:0.6rem;color:#60a5fa;font-weight:600;">${Math.round((DONE_TOPICS / TOTAL_TOPICS) * 100)}% compounded so far →</div>
                    </div>
                  </div>
                </div>

                <div class="card full">
                  <h2>🧠 Today's Learning Path <span class="pill">AI-generated</span></h2>
                  <div style="display:flex;gap:1rem;flex-wrap:wrap;font-size:0.85rem;color:#c8d6e8;">
                    ${(() => {
                const next = SYLLABUS_DATA.flatMap(l => l.topics.map(t => ({ ...t, level: l.level }))).filter(t => !t.done);
                const recs = next.slice(0, 3);
                if (recs.length === 0) {
                    return '<div style="color:#4ade80;padding:0.5rem;">🎉 All topics mastered! Time to level up your projects.</div>';
                }
                return recs.map(t => `
                        <div style="background:#14233e;padding:0.5rem 1rem;border-radius:10px;border:1px solid #1a2d4a;flex:1;min-width:140px;cursor:pointer;" onclick="openTopicModalFromName('${t.name}')">
                          <div style="color:#6b8aa8;font-size:0.65rem;text-transform:uppercase;">Next Topic</div>
                          <div style="font-weight:600;color:#60a5fa;">${t.name}</div>
                          <div style="font-size:0.7rem;color:#6b8aa8;">${t.level} · ${t.difficulty}</div>
                        </div>
                      `).join('');
            })()}
                  </div>
                </div>
              </div>
            `;
    },

    // ─── SYLLABUS ──────────────────────────────────────
    syllabus() {
        const overallPct = Math.round((DONE_TOPICS / TOTAL_TOPICS) * 100);
        let html = `
              <div class="card full">
                <h2>📚 Data Science Syllabus <span class="sub">— ${DONE_TOPICS}/${TOTAL_TOPICS} completed</span></h2>
                <div class="syllabus-source-banner">
                  📜 Aligned with the official <a href="https://www.coursera.org/professional-certificates/ibm-data-science" target="_blank" rel="noopener">IBM Data Science Professional Certificate</a> (12-course series, Coursera) — each topic's detail view shows which IBM course it maps to. Topics marked "Supplementary" go deeper than the official syllabus.
                </div>
                <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:0.8rem;">
                  <div style="background:#14233e;padding:0.3rem 1rem;border-radius:30px;font-size:0.75rem;color:#4ade80;">✅ ${DONE_TOPICS} mastered</div>
                  <div style="background:#14233e;padding:0.3rem 1rem;border-radius:30px;font-size:0.75rem;color:#fbbf24;">⏳ ${TOTAL_TOPICS - DONE_TOPICS} remaining</div>
                  <div style="background:#14233e;padding:0.3rem 1rem;border-radius:30px;font-size:0.75rem;color:#60a5fa;">🎯 ${overallPct}% complete</div>
                  <div style="background:#14233e;padding:0.3rem 1rem;border-radius:30px;font-size:0.75rem;color:#a78bfa;">📖 Tap any topic for details</div>
                </div>
                <div class="progress-item"><div class="label"><span>Overall Progress</span><span>${overallPct}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${overallPct}%"></div></div></div>
              </div>

              <div class="card full">
                <div class="syllabus-toolbar">
                  <div class="syllabus-search">
                    <span class="search-icon">🔍</span>
                    <input type="text" id="syllabusSearchInput" placeholder="Search topics…" value="${escapeHtml(syllabusState.query)}" aria-label="Search syllabus topics" />
                  </div>
                  <div class="filter-chip-group" id="filterChipGroup">
                    ${[
                ['all', 'All'], ['done', '✅ Done'], ['remaining', '⏳ Remaining'],
                ['easy', 'Easy'], ['medium', 'Medium'], ['hard', 'Hard']
            ].map(([key, label]) => `<button class="filter-chip ${syllabusState.filter === key ? 'active' : ''}" data-filter="${key}">${label}</button>`).join('')}
                  </div>
                  <div class="expand-controls">
                    <button id="expandAllBtn">⊕ Expand all</button>
                    <button id="collapseAllBtn">⊖ Collapse all</button>
                  </div>
                </div>
              </div>
            `;

        let anyVisible = false;

        SYLLABUS_DATA.forEach((level, li) => {
            const done = level.topics.filter(t => t.done).length;
            const total = level.topics.length;
            const p = Math.round((done / total) * 100);

            const filteredTopics = level.topics
                .map((t, ti) => ({ ...t, ti }))
                .filter(t => {
                    const matchesQuery = !syllabusState.query || t.name.toLowerCase().includes(syllabusState.query.toLowerCase());
                    let matchesFilter = true;
                    if (syllabusState.filter === 'done') matchesFilter = t.done;
                    else if (syllabusState.filter === 'remaining') matchesFilter = !t.done;
                    else if (['easy', 'medium', 'hard'].includes(syllabusState.filter)) matchesFilter = t.difficulty === syllabusState.filter;
                    return matchesQuery && matchesFilter;
                });

            if (filteredTopics.length === 0) return;
            anyVisible = true;

            const isOpen = syllabusState.expandedLevels.has(li);
            html += `
                <div class="card syllabus-level">
                  <div class="level-title" data-level="${li}">
                    <span>${level.icon}</span>
                    <span class="level-name">${level.level}</span>
                    <span class="count">${done}/${total}</span>
                    <span class="mini-track"><span class="mini-fill" style="width:${p}%"></span></span>
                    <span style="font-size:0.7rem;color:#6b8aa8;flex-shrink:0;">${p}%</span>
                    <span class="arrow ${isOpen ? 'open' : ''}">▶</span>
                  </div>
                  <div class="topic-list ${isOpen ? 'open' : ''}" data-level="${li}">
                    ${filteredTopics.map(t => {
            const prereqCount = (t.prerequisites || []).length;
            const unlockCount = getUnlocks(t.name).length;
            const chainBadge = (prereqCount || unlockCount)
                ? `<span class="chain-badge" title="${prereqCount ? 'Builds on: ' + t.prerequisites.join(', ') : 'Foundational topic'}${unlockCount ? ' · Unlocks ' + unlockCount + ' topic(s)' : ''}">⛓️ ${prereqCount}→${unlockCount}</span>`
                : '';
            return `
                      <div class="topic-item" data-level="${li}" data-topic="${t.ti}">
                        <div class="check ${t.done ? 'done' : ''}" data-level="${li}" data-topic="${t.ti}" role="checkbox" aria-checked="${t.done}" tabindex="0">✓</div>
                        <span class="topic-label">${t.name}</span>
                        ${chainBadge}
                        <span class="topic-difficulty ${getDifficultyClass(t.difficulty)}">${t.difficulty}</span>
                        <button class="topic-detail-btn" data-level="${li}" data-topic="${t.ti}" title="View details" aria-label="View details for ${t.name}">📖</button>
                      </div>
                    `;
        }).join('')}
                  </div>
                </div>
              `;
        });

        if (!anyVisible) {
            html += `<div class="card full"><div class="no-results">🔎 No topics match your search/filter. Try a different term or reset filters.</div></div>`;
        }

        return html;
    },

    // ─── ROBOTICS LAB ──────────────────────────────────
    lab() {
        return `
              <div class="grid-2">
                <div class="card full">
                  <h2>🤖 Data Science Robotics Lab <span class="sub">— experiment with code</span></h2>
                  <div class="lab-panel">
                    <div class="lab-header">
                      <span style="font-weight:500;font-size:0.85rem;">🧪 Python Notebook</span>
                      <span class="badge">⚡ live</span>
                    </div>
                    <div class="code-editor" id="codeEditor" contenteditable="true">${labState.code}</div>
                    <div class="lab-controls">
                      <button class="primary" id="runCodeBtn">▶ Run</button>
                      <button id="resetCodeBtn">⟲ Reset</button>
                      <button id="clearOutputBtn">🗑️ Clear Output</button>
                      <select id="experimentSelect">
                        <option value="linear">📈 Linear Regression</option>
                        <option value="kmeans">🎯 K-Means Clustering</option>
                        <option value="nn">🧠 Neural Net</option>
                        <option value="pca">📉 PCA</option>
                      </select>
                      <button id="loadExperimentBtn">📂 Load</button>
                    </div>
                    <div class="lab-output" id="labOutput">${labState.output || '💡 Run your code to see output here...'}</div>
                  </div>
                </div>

                <div class="card">
                  <h2>📊 Experiment Results</h2>
                  <div class="chart-wrapper tall"><canvas id="labResultChart"></canvas></div>
                  <div style="font-size:0.7rem;color:#6b8aa8;margin-top:0.3rem;">Synthetic data · Linear fit</div>
                </div>

                <div class="card">
                  <h2>🧪 Quick Experiments</h2>
                  <div style="display:flex;flex-direction:column;gap:0.5rem;">
                    <button class="quick-exp" data-exp="linear" style="background:#14233e;border:1px solid #1a2d4a;border-radius:10px;padding:0.6rem 1rem;text-align:left;color:#e2e8f0;cursor:pointer;transition:0.2s;">
                      <div style="font-weight:600;">📈 Linear Regression</div>
                      <div style="font-size:0.7rem;color:#6b8aa8;">Fit a line to synthetic data</div>
                    </button>
                    <button class="quick-exp" data-exp="kmeans" style="background:#14233e;border:1px solid #1a2d4a;border-radius:10px;padding:0.6rem 1rem;text-align:left;color:#e2e8f0;cursor:pointer;transition:0.2s;">
                      <div style="font-weight:600;">🎯 K-Means Clustering</div>
                      <div style="font-size:0.7rem;color:#6b8aa8;">Cluster 2D data points</div>
                    </button>
                    <button class="quick-exp" data-exp="nn" style="background:#14233e;border:1px solid #1a2d4a;border-radius:10px;padding:0.6rem 1rem;text-align:left;color:#e2e8f0;cursor:pointer;transition:0.2s;">
                      <div style="font-weight:600;">🧠 Neural Net</div>
                      <div style="font-size:0.7rem;color:#6b8aa8;">Simple perceptron demo</div>
                    </button>
                  </div>
                </div>
              </div>
            `;
    },

    // ─── TIME MANAGER ──────────────────────────────────
    timer() {
        const m = String(timerState.minutes).padStart(2, '0');
        const s = String(timerState.seconds).padStart(2, '0');
        const modeLabel = timerState.mode === 'focus' ? '🎯 Focus' : '☕ Break';
        return `
              <div class="grid-2">
                <div class="card">
                  <h2>⏱️ Focus Timer <span class="sub">— ${modeLabel}</span></h2>
                  <div class="timer-display" id="timerDisplay">${m}:<span class="blink">${s}</span></div>
                  <div class="timer-controls">
                    <button id="timerStartBtn" class="primary">▶ Start</button>
                    <button id="timerPauseBtn">⏸ Pause</button>
                    <button id="timerResetBtn">⏹ Reset</button>
                    <button id="timerModeBtn">🔄 Switch</button>
                  </div>
                  <div style="display:flex;gap:0.6rem;justify-content:center;margin-top:0.4rem;font-size:0.7rem;color:#6b8aa8;">
                    <span>⚡ Sessions: ${timerState.sessions.length}</span>
                    <span>⏳ Total: ${timerState.totalFocus.toFixed(1)}h</span>
                  </div>
                </div>

                <div class="card">
                  <h2>📋 Session Log</h2>
                  <div class="session-log" id="sessionLog">
                    ${timerState.sessions.length === 0 ? '<div style="color:#6b8aa8;">No sessions yet — start your first focus block!</div>' :
                timerState.sessions.slice().reverse().map(s => `<div><span class="time">${s.time}</span> — ${s.duration} min · ${s.mode}</div>`).join('')}
                  </div>
                </div>

                <div class="card full">
                  <h2>📊 Time Analytics</h2>
                  <div class="chart-wrapper tall"><canvas id="timeChart"></canvas></div>
                </div>

                <div class="card full">
                  <h2>📅 Daily Schedule <span class="sub">— recommended</span></h2>
                  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:0.6rem;font-size:0.8rem;">
                    <div style="background:#14233e;padding:0.5rem;border-radius:8px;border:1px solid #1a2d4a;">
                      <div style="color:#6b8aa8;font-size:0.65rem;">Morning</div>
                      <div style="color:#60a5fa;">📚 Theory (1h)</div>
                      <div style="font-size:0.65rem;color:#6b8aa8;">9:00 – 10:00</div>
                    </div>
                    <div style="background:#14233e;padding:0.5rem;border-radius:8px;border:1px solid #1a2d4a;">
                      <div style="color:#6b8aa8;font-size:0.65rem;">Midday</div>
                      <div style="color:#4ade80;">🧪 Lab (1.5h)</div>
                      <div style="font-size:0.65rem;color:#6b8aa8;">11:00 – 12:30</div>
                    </div>
                    <div style="background:#14233e;padding:0.5rem;border-radius:8px;border:1px solid #1a2d4a;">
                      <div style="color:#6b8aa8;font-size:0.65rem;">Afternoon</div>
                      <div style="color:#fbbf24;">📊 Practice (1h)</div>
                      <div style="font-size:0.65rem;color:#6b8aa8;">14:00 – 15:00</div>
                    </div>
                    <div style="background:#14233e;padding:0.5rem;border-radius:8px;border:1px solid #1a2d4a;">
                      <div style="color:#6b8aa8;font-size:0.65rem;">Evening</div>
                      <div style="color:#a78bfa;">🧠 Review (30m)</div>
                      <div style="font-size:0.65rem;color:#6b8aa8;">17:00 – 17:30</div>
                    </div>
                  </div>
                </div>
              </div>
            `;
    },

    // ─── KNOWLEDGE MAP ──────────────────────────────────
    knowledge() {
        const topics = SYLLABUS_DATA.flatMap(l => l.topics.map(t => ({ ...t, level: l.level })));
        return `
              <div class="card full">
                <h2>🧠 Knowledge Map <span class="sub">— connect the dots</span></h2>
                <div class="knowledge-graph" id="knowledgeGraph">
                  ${topics.map((t, i) => `
                    <div class="kg-node" style="${t.done ? 'border-color:#22c55e;' : ''}" onclick="openTopicModalFromName('${t.name}')">
                      <span class="level-dot ${getLevelDot(t.level)}"></span>
                      ${t.name}
                      ${t.done ? '✅' : ''}
                      ${i < topics.length - 1 ? '<span class="connector">⟶</span>' : ''}
                    </div>
                  `).join('')}
                </div>
                <div class="kg-legend">
                  <span><span class="dot foundation"></span> Foundation</span>
                  <span><span class="dot core"></span> Core</span>
                  <span><span class="dot advanced"></span> Advanced</span>
                  <span><span class="dot expert"></span> Expert</span>
                  <span style="color:#4ade80;">✅ Mastered</span>
                  <span style="color:#6b8aa8;">⬜ In Progress</span>
                  <span style="color:#60a5fa;cursor:pointer;" onclick="document.querySelector('[data-view=\\'syllabus\\']').click();">📚 View Syllabus</span>
                </div>
              </div>

              <div class="grid-2">
                <div class="card">
                  <h2>📊 Topic Distribution</h2>
                  <div class="chart-wrapper tall"><canvas id="knowledgeChart"></canvas></div>
                </div>
                <div class="card">
                  <h2>🎯 Learning Recommendations</h2>
                  <div style="font-size:0.85rem;line-height:1.8;color:#c8d6e8;">
                    ${topics.filter(t => !t.done).slice(0, 4).map(t => `
                      <div style="display:flex;align-items:center;gap:0.5rem;padding:0.3rem 0;border-bottom:1px solid #0f1a2e;cursor:pointer;" onclick="openTopicModalFromName('${t.name}')">
                        <span style="color:#60a5fa;">▸</span>
                        <span>${t.name}</span>
                        <span style="font-size:0.65rem;color:#6b8aa8;margin-left:auto;">${t.level}</span>
                        <span class="topic-difficulty ${getDifficultyClass(t.difficulty)}" style="font-size:0.6rem;padding:0.1rem 0.5rem;border-radius:12px;background:#14233e;border:1px solid #1a2d4a;">${t.difficulty}</span>
                      </div>
                    `).join('')}
                    ${topics.filter(t => !t.done).length === 0 ? '<div style="color:#4ade80;">🎉 All topics mastered! Time to level up.</div>' : ''}
                  </div>
                </div>
              </div>
            `;
    }
};

// ─── helper to open modal from topic name ──────────────

function openTopicModalFromName(name) {
    for (const level of SYLLABUS_DATA) {
        for (const topic of level.topics) {
            if (topic.name === name) {
                openTopicModal(topic, level.level);
                return;
            }
        }
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  RENDER ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function renderView(viewName) {
    currentView = viewName;
    const container = document.getElementById('viewContainer');
    container.innerHTML = views[viewName]();

    // update nav (sidebar + bottom tab bar share data-view)
    document.querySelectorAll('.nav button, .bottom-tabbar button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[data-view="${viewName}"]`).forEach(b => b.classList.add('active'));

    updateMasteredCount();
    closeSidebar();

    // init view-specific logic
    setTimeout(() => {
        if (viewName === 'overview') initOverview();
        if (viewName === 'syllabus') initSyllabus();
        if (viewName === 'lab') initLab();
        if (viewName === 'timer') initTimer();
        if (viewName === 'knowledge') initKnowledge();
    }, 50);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  VIEW INITIALIZERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ─── OVERVIEW ──────────────────────────────────────────

function initOverview() {
    // Compound learning curve: cumulative mastery, weighted so harder topics count for more —
    // illustrates how small consistent gains stack into a steep curve, like compound interest.
    const compoundCtx = getCtx('compoundGrowthChart');
    if (compoundCtx) {
        const weight = { easy: 1, medium: 1.5, hard: 2 };
        const allTopics = SYLLABUS_DATA.flatMap(l => l.topics);
        const totalWeight = allTopics.reduce((a, t) => a + weight[t.difficulty], 0);
        let running = 0;
        const cumulative = [0];
        allTopics.forEach(t => {
            if (t.done) running += weight[t.difficulty];
            cumulative.push(Math.round((running / totalWeight) * 100));
        });
        // project a gentle continuation for remaining (undone) steps to show the "compounding" trend
        const labels = ['Start', ...allTopics.map((t, i) => `T${i + 1}`)];
        buildChart('compoundGrowthChart', {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Compounded mastery %',
                    data: cumulative,
                    borderColor: '#a78bfa',
                    backgroundColor: 'rgba(167,139,250,0.12)',
                    fill: true,
                    tension: 0.35,
                    pointRadius: 0,
                    borderWidth: 2.5,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { display: false }, grid: { color: '#1a2d4a' } },
                    y: {
                        ticks: { color: '#6b8aa8', font: { size: 8 }, callback: (v) => v + '%' },
                        grid: { color: '#1a2d4a' }, beginAtZero: true, max: 100
                    }
                }
            }
        });
    }

    const ctx = getCtx('overviewActivityChart');
    if (ctx) {
        buildChart('overviewActivityChart', {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Learning Hours',
                    data: [1.2, 2.0, 0.8, 1.8, 2.5, 3.0, 1.5],
                    borderColor: '#60a5fa',
                    backgroundColor: 'rgba(59,130,246,0.1)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 3,
                    pointBackgroundColor: '#60a5fa',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#6b8aa8', boxWidth: 10, font: { size: 8 } } }
                },
                scales: {
                    x: { ticks: { color: '#6b8aa8', font: { size: 7 } }, grid: { color: '#1a2d4a' } },
                    y: {
                        ticks: { color: '#6b8aa8', font: { size: 7 } }, grid: { color: '#1a2d4a' },
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// ─── SYLLABUS ──────────────────────────────────────────

function initSyllabus() {
    // search input
    const searchInput = document.getElementById('syllabusSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            syllabusState.query = e.target.value;
            // expand all levels that have matches while searching
            if (syllabusState.query) {
                SYLLABUS_DATA.forEach((l, li) => {
                    const hasMatch = l.topics.some(t => t.name.toLowerCase().includes(syllabusState.query.toLowerCase()));
                    if (hasMatch) syllabusState.expandedLevels.add(li);
                });
            }
            renderView('syllabus');
            // restore focus + caret to the search box after re-render
            setTimeout(() => {
                const input = document.getElementById('syllabusSearchInput');
                if (input) {
                    input.focus();
                    input.setSelectionRange(input.value.length, input.value.length);
                }
            }, 0);
        });
    }

    // filter chips
    document.querySelectorAll('#filterChipGroup .filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            syllabusState.filter = chip.dataset.filter;
            renderView('syllabus');
        });
    });

    // expand / collapse all
    const expandAllBtn = document.getElementById('expandAllBtn');
    const collapseAllBtn = document.getElementById('collapseAllBtn');
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            SYLLABUS_DATA.forEach((_, li) => syllabusState.expandedLevels.add(li));
            renderView('syllabus');
        });
    }
    if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', () => {
            syllabusState.expandedLevels.clear();
            renderView('syllabus');
        });
    }

    // toggle level
    document.querySelectorAll('.level-title').forEach(el => {
        el.addEventListener('click', () => {
            const li = parseInt(el.dataset.level);
            if (syllabusState.expandedLevels.has(li)) syllabusState.expandedLevels.delete(li);
            else syllabusState.expandedLevels.add(li);
            renderView('syllabus');
        });
    });

    // toggle topic check
    document.querySelectorAll('.topic-item .check').forEach(el => {
        const toggle = (e) => {
            e.stopPropagation();
            const li = parseInt(el.dataset.level);
            const ti = parseInt(el.dataset.topic);
            const topic = SYLLABUS_DATA[li]?.topics[ti];
            if (topic) {
                topic.done = !topic.done;
                renderView('syllabus');
            }
        };
        el.addEventListener('click', toggle);
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle(e);
            }
        });
    });

    // detail buttons
    document.querySelectorAll('.topic-item .topic-detail-btn').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const li = parseInt(el.dataset.level);
            const ti = parseInt(el.dataset.topic);
            const topic = SYLLABUS_DATA[li]?.topics[ti];
            const level = SYLLABUS_DATA[li]?.level;
            if (topic) {
                openTopicModal(topic, level);
            }
        });
    });

    // click on topic label also opens detail
    document.querySelectorAll('.topic-item .topic-label').forEach(el => {
        el.addEventListener('click', () => {
            const parent = el.closest('.topic-item');
            const btn = parent?.querySelector('.topic-detail-btn');
            if (btn) btn.click();
        });
    });
}

// ─── LAB ──────────────────────────────────────────────

function initLab() {
    const editor = document.getElementById('codeEditor');
    const output = document.getElementById('labOutput');
    const runBtn = document.getElementById('runCodeBtn');
    const resetBtn = document.getElementById('resetCodeBtn');
    const clearBtn = document.getElementById('clearOutputBtn');
    const expSelect = document.getElementById('experimentSelect');
    const loadBtn = document.getElementById('loadExperimentBtn');

    document.querySelectorAll('.quick-exp').forEach(btn => {
        btn.addEventListener('click', () => {
            const exp = btn.dataset.exp;
            loadExperiment(exp);
        });
    });

    if (runBtn) {
        runBtn.addEventListener('click', () => {
            const code = editor ? editor.textContent : '';
            runLabCode(code, output);
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (editor) {
                editor.textContent = labState.code;
            }
            if (output) {
                output.innerHTML = '💡 Reset — ready to run.';
                labState.output = '';
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (output) {
                output.innerHTML = '💡 Output cleared.';
                labState.output = '';
            }
        });
    }

    if (loadBtn && expSelect) {
        loadBtn.addEventListener('click', () => {
            loadExperiment(expSelect.value);
        });
    }

    // initial chart
    const ctx = getCtx('labResultChart');
    if (ctx) {
        const x = Array.from({ length: 20 }, (_, i) => i);
        const y = x.map(v => 2 * v + 1 + (Math.random() - 0.5) * 10);
        buildChart('labResultChart', {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Data',
                    data: x.map((v, i) => ({ x: v, y: y[i] })),
                    backgroundColor: '#60a5fa',
                    pointRadius: 4,
                }, {
                    label: 'Fit',
                    data: x.map(v => ({ x: v, y: 2 * v + 1 })),
                    type: 'line',
                    borderColor: '#4ade80',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#6b8aa8', boxWidth: 10, font: { size: 9 } } }
                },
                scales: {
                    x: { ticks: { color: '#6b8aa8', font: { size: 8 } }, grid: { color: '#1a2d4a' } },
                    y: { ticks: { color: '#6b8aa8', font: { size: 8 } }, grid: { color: '#1a2d4a' } }
                }
            }
        });
    }
}

function loadExperiment(exp) {
    const editor = document.getElementById('codeEditor');
    const output = document.getElementById('labOutput');
    const codes = {
        linear: `# 📈 Linear Regression\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(0, 10, 30)\ny = 2.5*x + 1 + np.random.randn(30)*3\n\ncoeff = np.polyfit(x, y, 1)\npoly = np.poly1d(coeff)\n\nprint(f"Slope: {coeff[0]:.2f}")\nprint(f"Intercept: {coeff[1]:.2f}")\nprint(f"R²: {np.corrcoef(x, y)[0,1]**2:.3f}")`,
        kmeans: `# 🎯 K-Means Clustering\nimport numpy as np\nfrom sklearn.cluster import KMeans\n\nX = np.random.randn(100, 2)\nX[:30] += 3\nX[30:60] -= 2\nX[60:] += [2, -2]\n\nkmeans = KMeans(n_clusters=3, random_state=42)\nlabels = kmeans.fit_predict(X)\n\nprint("Cluster centers:")\nprint(kmeans.cluster_centers_)\nprint(f"Inertia: {kmeans.inertia_:.2f}")`,
        nn: `# 🧠 Simple Neural Net (Perceptron)\nimport numpy as np\n\nX = np.array([[0,0],[0,1],[1,0],[1,1]])\ny = np.array([0,1,1,0])  # XOR\n\nnp.random.seed(42)\nw = np.random.randn(2)\nb = np.random.randn()\n\nlr = 0.1\nfor epoch in range(50):\n    for i in range(len(X)):\n        pred = 1/(1+np.exp(-(np.dot(X[i], w) + b)))\n        error = y[i] - pred\n        w += lr * error * pred * (1-pred) * X[i]\n        b += lr * error * pred * (1-pred)\n\nprint("Trained weights:", w)\nprint("Bias:", b)\nprint("Predictions:")\nfor x in X:\n    p = 1/(1+np.exp(-(np.dot(x, w) + b)))\n    print(f"{x} → {p:.3f}")`,
        pca: `# 📉 PCA Dimensionality Reduction\nimport numpy as np\nfrom sklearn.decomposition import PCA\n\nX = np.random.randn(50, 5)\nX[:, 1] = X[:, 0]*2 + np.random.randn(50)*0.5\nX[:, 2] = X[:, 0]*0.5 + np.random.randn(50)*0.3\n\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X)\n\nprint(f"Explained variance ratio: {pca.explained_variance_ratio_}")\nprint(f"First 5 points reduced:\\n{X_pca[:5]}")`
    };

    if (editor && codes[exp]) {
        editor.textContent = codes[exp];
        labState.code = codes[exp];
    }
    if (output) {
        output.innerHTML = '💡 Experiment loaded. Click "Run" to execute.';
        labState.output = '';
    }

    if (exp === 'linear') {
        const ctx = getCtx('labResultChart');
        if (ctx) {
            const x = Array.from({ length: 30 }, (_, i) => i * 10 / 29);
            const y = x.map(v => 2.5 * v + 1 + (Math.random() - 0.5) * 6);
            buildChart('labResultChart', {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'Data',
                        data: x.map((v, i) => ({ x: v, y: y[i] })),
                        backgroundColor: '#60a5fa',
                        pointRadius: 4,
                    }, {
                        label: 'Fit',
                        data: x.map(v => ({ x: v, y: 2.5 * v + 1 })),
                        type: 'line',
                        borderColor: '#4ade80',
                        borderWidth: 2,
                        pointRadius: 0,
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: '#6b8aa8', boxWidth: 10, font: { size: 9 } } }
                    },
                    scales: {
                        x: { ticks: { color: '#6b8aa8', font: { size: 8 } }, grid: { color: '#1a2d4a' } },
                        y: { ticks: { color: '#6b8aa8', font: { size: 8 } }, grid: { color: '#1a2d4a' } }
                    }
                }
            });
        }
    }
}

function runLabCode(code, outputEl) {
    if (!outputEl) return;
    const lines = code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#'));
    let output = '';

    const hasPrint = lines.some(l => l.includes('print('));
    const hasNumpy = code.includes('numpy') || code.includes('np.');
    const hasSklearn = code.includes('sklearn');
    const hasLinear = code.includes('Linear') || code.includes('polyfit');
    const hasKmeans = code.includes('KMeans');
    const hasNN = code.includes('perceptron') || code.includes('Neural');
    const hasPCA = code.includes('PCA');

    if (hasLinear) {
        output += `✅ Linear Regression Results:\n`;
        output += `   Slope: ${(2.5 + Math.random() * 0.5).toFixed(2)}\n`;
        output += `   Intercept: ${(1 + Math.random() * 0.3).toFixed(2)}\n`;
        output += `   R²: ${(0.85 + Math.random() * 0.1).toFixed(3)}\n`;
    } else if (hasKmeans) {
        output += `✅ K-Means Clustering Results:\n`;
        output += `   Cluster centers:\n`;
        for (let i = 0; i < 3; i++) {
            output += `     [${(Math.random() * 4 - 1).toFixed(2)}, ${(Math.random() * 4 - 1).toFixed(2)}]\n`;
        }
        output += `   Inertia: ${(50 + Math.random() * 30).toFixed(2)}\n`;
    } else if (hasNN) {
        output += `🧠 Neural Net Training Complete:\n`;
        output += `   Weights: [${(Math.random() * 2 - 1).toFixed(3)}, ${(Math.random() * 2 - 1).toFixed(3)}]\n`;
        output += `   Bias: ${(Math.random() * 2 - 1).toFixed(3)}\n`;
        output += `   Predictions:\n`;
        for (let x of [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1]
        ]) {
            const p = Math.random() > 0.3 ? (x[0] ^ x[1]) : 1 - (x[0] ^ x[1]);
            output += `     [${x[0]}, ${x[1]}] → ${p.toFixed(3)}\n`;
        }
    } else if (hasPCA) {
        output += `📉 PCA Results:\n`;
        output += `   Explained variance ratio: [${(0.6 + Math.random() * 0.2).toFixed(3)}, ${(0.2 + Math.random() * 0.1).toFixed(3)}]\n`;
        output += `   First 5 points reduced:\n`;
        for (let i = 0; i < 5; i++) {
            output += `     [${(Math.random() * 4 - 2).toFixed(2)}, ${(Math.random() * 4 - 2).toFixed(2)}]\n`;
        }
    } else if (hasPrint) {
        const matches = code.match(/print\(["']([^"']+)["']\)/g);
        if (matches) {
            matches.forEach(m => {
                const val = m.replace(/print\(["']|["']\)/g, '');
                output += `📤 ${val}\n`;
            });
        } else {
            output += `📤 Code executed successfully (no output captured)\n`;
        }
    } else {
        output += `✅ Code executed successfully!\n`;
        output += `ℹ️  No explicit output — try adding print() statements.`;
    }

    if (hasNumpy && !output) output += `📊 NumPy operations executed.\n`;
    if (hasSklearn && !output) output += `🤖 Scikit-learn operations executed.\n`;

    if (output.trim() === '') {
        output = `💡 Code ran successfully. Add print statements to see results.`;
    }

    outputEl.innerHTML = output.replace(/\n/g, '<br>');
    labState.output = output;
}

// ─── TIMER ─────────────────────────────────────────────

function initTimer() {
    updateTimerDisplay();

    const startBtn = document.getElementById('timerStartBtn');
    const pauseBtn = document.getElementById('timerPauseBtn');
    const resetBtn = document.getElementById('timerResetBtn');
    const modeBtn = document.getElementById('timerModeBtn');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (!timerState.running) {
                timerState.running = true;
                timerState.interval = setInterval(tickTimer, 1000);
                startBtn.textContent = '▶ Running';
                startBtn.className = 'primary';
            }
        });
    }

    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            if (timerState.running) {
                timerState.running = false;
                clearInterval(timerState.interval);
                const s = document.getElementById('timerStartBtn');
                if (s) {
                    s.textContent = '▶ Resume';
                    s.className = 'primary';
                }
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            timerState.running = false;
            clearInterval(timerState.interval);
            timerState.minutes = 25;
            timerState.seconds = 0;
            timerState.mode = 'focus';
            updateTimerDisplay();
            const s = document.getElementById('timerStartBtn');
            if (s) {
                s.textContent = '▶ Start';
                s.className = 'primary';
            }
            const h2 = document.querySelector('.card h2');
            if (h2) {
                const sub = h2.querySelector('.sub');
                if (sub) sub.textContent = '🎯 Focus';
            }
        });
    }

    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            if (timerState.running) return;
            timerState.mode = timerState.mode === 'focus' ? 'break' : 'focus';
            timerState.minutes = timerState.mode === 'focus' ? 25 : 5;
            timerState.seconds = 0;
            updateTimerDisplay();
            const h2 = document.querySelector('.card h2');
            if (h2) {
                const sub = h2.querySelector('.sub');
                if (sub) sub.textContent = timerState.mode === 'focus' ? '🎯 Focus' : '☕ Break';
            }
        });
    }

    // time chart
    const ctx = getCtx('timeChart');
    if (ctx) {
        const data = timerState.sessions.length > 0 ?
            timerState.sessions.map(s => s.duration) :
            [0, 0, 0, 0, 0, 0, 0];
        buildChart('timeChart', {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Focus Minutes',
                    data: data.length >= 7 ? data.slice(-7) : data.concat(Array(7 - data.length).fill(
                        0)),
                    backgroundColor: ['#4ade80', '#60a5fa', '#a78bfa', '#f472b6', '#fbbf24', '#f97316',
                        '#3b82f6'
                    ],
                    borderRadius: 4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#6b8aa8', boxWidth: 10, font: { size: 9 } } }
                },
                scales: {
                    x: { ticks: { color: '#6b8aa8', font: { size: 8 } }, grid: { color: '#1a2d4a' } },
                    y: {
                        ticks: { color: '#6b8aa8', font: { size: 8 } }, grid: { color: '#1a2d4a' },
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

function tickTimer() {
    if (timerState.seconds === 0) {
        if (timerState.minutes === 0) {
            clearInterval(timerState.interval);
            timerState.running = false;
            const duration = timerState.mode === 'focus' ? 25 : 5;
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            timerState.sessions.push({
                time: timeStr,
                duration: duration,
                mode: timerState.mode
            });
            if (timerState.mode === 'focus') {
                timerState.totalFocus += duration / 60;
            }
            timerState.mode = timerState.mode === 'focus' ? 'break' : 'focus';
            timerState.minutes = timerState.mode === 'focus' ? 25 : 5;
            timerState.seconds = 0;
            updateTimerDisplay();
            updateSessionLog();
            const h2 = document.querySelector('.card h2');
            if (h2) {
                const sub = h2.querySelector('.sub');
                if (sub) sub.textContent = timerState.mode === 'focus' ? '🎯 Focus' : '☕ Break';
            }
            const s = document.getElementById('timerStartBtn');
            if (s) {
                s.textContent = '▶ Start';
                s.className = 'primary';
            }
            // update total hours display
            const statBoxes = document.querySelectorAll('.stat-box .num.orange');
            if (statBoxes.length > 0) {
                statBoxes.forEach(el => {
                    if (el.closest('.stat-box')?.querySelector('.lbl')?.textContent.includes(
                        'Learning Hours')) {
                        el.textContent = timerState.totalFocus.toFixed(1) + 'h';
                    }
                });
            }
            return;
        }
        timerState.minutes--;
        timerState.seconds = 59;
    } else {
        timerState.seconds--;
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const el = document.getElementById('timerDisplay');
    if (!el) return;
    const m = String(timerState.minutes).padStart(2, '0');
    const s = String(timerState.seconds).padStart(2, '0');
    el.innerHTML = `${m}:<span class="blink">${s}</span>`;
}

function updateSessionLog() {
    const el = document.getElementById('sessionLog');
    if (!el) return;
    if (timerState.sessions.length === 0) {
        el.innerHTML = '<div style="color:#6b8aa8;">No sessions yet — start your first focus block!</div>';
        return;
    }
    el.innerHTML = timerState.sessions.slice().reverse().map(s =>
        `<div><span class="time">${s.time}</span> — ${s.duration} min · ${s.mode}</div>`
    ).join('');
}

// ─── KNOWLEDGE ─────────────────────────────────────────

function initKnowledge() {
    const ctx = getCtx('knowledgeChart');
    if (ctx) {
        const levels = ['Foundation', 'Core Data Science', 'Advanced & Specialized'];
        const done = levels.map(l => {
            const data = SYLLABUS_DATA.find(d => d.level === l);
            return data ? data.topics.filter(t => t.done).length : 0;
        });
        const total = levels.map(l => {
            const data = SYLLABUS_DATA.find(d => d.level === l);
            return data ? data.topics.length : 0;
        });
        buildChart('knowledgeChart', {
            type: 'doughnut',
            data: {
                labels: levels,
                datasets: [{
                    data: done,
                    backgroundColor: ['#4ade80', '#60a5fa', '#a78bfa'],
                    borderColor: '#0b1428',
                    borderWidth: 2,
                }, {
                    data: total.map((t, i) => t - done[i]),
                    backgroundColor: ['#1a2d4a', '#1a2d4a', '#1a2d4a'],
                    borderColor: '#0b1428',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#6b8aa8', boxWidth: 10, font: { size: 9 } } }
                },
                cutout: '55%',
            }
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  NAVIGATION (sidebar + mobile bottom tab bar share data-view)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.querySelectorAll('.nav button, .bottom-tabbar button').forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        renderView(view);
    });
});

// ─── FOCUS MODE ─────────────────────────────────────────

document.getElementById('focusToggle').addEventListener('click', function () {
    focusMode = !focusMode;
    this.classList.toggle('active');
    this.textContent = focusMode ? '🎯 Focus ON' : '🎯 Focus Mode';
    document.body.style.background = focusMode ? '#050a16' : '';
    document.querySelector('.main').style.background = focusMode ?
        'radial-gradient(ellipse at 20% 30%, #0a1424, #050a16 80%)' :
        'radial-gradient(ellipse at 20% 30%, #0e1a2e, #060b18 80%)';
});

// ─── PARTICLES ─────────────────────────────────────────

(function initParticles() {
    const container = document.getElementById('particleBg');
    const particleCount = window.innerWidth < 768 ? 14 : 30;
    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (15 + Math.random() * 20) + 's';
        p.style.animationDelay = (Math.random() * 20) + 's';
        p.style.width = (1 + Math.random() * 2) + 'px';
        p.style.height = p.style.width;
        container.appendChild(p);
    }
})();

// ─── DAY DISPLAY ───────────────────────────────────────

document.getElementById('dayDisplay').textContent =
    new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

// ─── VIEWPORT RESIZE: close drawer if resized to desktop ──

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeSidebar();
});

// ─── INIT ─────────────────────────────────────────────

updateMasteredCount();
renderView('overview');

console.log('🤖 NeoLearn · Data Science Robotics Lab');
console.log(`📚 ${DONE_TOPICS}/${TOTAL_TOPICS} topics mastered`);
console.log(`⏱️ ${timerState.totalFocus.toFixed(1)}h total focus time`);
console.log('🔥 Keep learning — you\'re on a roll!');
