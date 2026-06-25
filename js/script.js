// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DATA — SYLLABUS WITH DEFINITIONS, EXAMPLES & RESOURCES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const SYLLABUS_DATA = [{
    level: 'Foundation',
    icon: '🌱',
    topics: [{
        name: 'Python for Data Science',
        difficulty: 'easy',
        done: true,
        definition: 'Python is the most widely used programming language in data science. It offers a rich ecosystem of libraries (NumPy, Pandas, Matplotlib, Scikit-learn) that make data manipulation, analysis, and modeling efficient and intuitive.',
        example: `import pandas as pd\nimport numpy as np\n\n# Create a DataFrame\ndata = {'Name': ['Alice', 'Bob', 'Charlie'],\n        'Age': [25, 30, 35],\n        'Salary': [50000, 60000, 70000]}\ndf = pd.DataFrame(data)\n\n# Basic operations\nprint(df.head())\nprint(df.describe())\nprint(df[df['Age'] > 28])`,
        resources: [
            { name: 'Python.org Docs', url: 'https://docs.python.org/3/', icon: '📘' },
            { name: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/', icon: '🐼' },
            { name: 'NumPy Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', icon: '🔢' },
        ]
    }, {
        name: 'Linear Algebra Essentials',
        difficulty: 'easy',
        done: true,
        definition: 'Linear algebra is the mathematical foundation of machine learning. It deals with vectors, matrices, and linear transformations, which are essential for understanding algorithms like PCA, neural networks, and support vector machines.',
        example: `import numpy as np\n\n# Vectors and matrices\nv = np.array([2, 3, 5])\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n\n# Matrix multiplication\nC = np.dot(A, B)\nprint("Matrix product:\\n", C)\n\n# Eigenvalues and eigenvectors\neigvals, eigvecs = np.linalg.eig(A)\nprint("Eigenvalues:", eigvals)\nprint("Eigenvectors:\\n", eigvecs)`,
        resources: [
            { name: 'MIT 18.06 Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', icon: '🎓' },
            { name: '3Blue1Brown Essence of LA', url: 'https://www.3blue1brown.com/topics/linear-algebra', icon: '📺' },
            { name: 'Khan Academy LA', url: 'https://www.khanacademy.org/math/linear-algebra', icon: '📚' },
        ]
    }, {
        name: 'Calculus for ML',
        difficulty: 'easy',
        done: false,
        definition: 'Calculus is used to optimize machine learning models. Derivatives and gradients power backpropagation in neural networks, while integrals appear in probabilistic models. Understanding differentiation and optimization is key.',
        example: `import numpy as np\nimport matplotlib.pyplot as plt\n\n# Gradient descent for a simple function f(x) = x^2 + 2x + 1\ndef f(x): return x**2 + 2*x + 1\ndef df(x): return 2*x + 2\n\nx = 5.0  # start\nlr = 0.1\nfor step in range(20):\n    grad = df(x)\n    x = x - lr * grad\n    print(f"Step {step+1}: x={x:.4f}, f(x)={f(x):.4f}")\n\nprint(f"Minimum at x={x:.4f}")`,
        resources: [
            { name: 'DeepLearning.AI Calculus', url: 'https://www.deeplearning.ai/courses/', icon: '🧠' },
            { name: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-1', icon: '📚' },
            { name: '3Blue1Brown Calculus', url: 'https://www.3blue1brown.com/topics/calculus', icon: '📺' },
        ]
    }, {
        name: 'Statistics & Probability',
        difficulty: 'easy',
        done: true,
        definition: 'Statistics and probability are fundamental to data science. They help us describe data, make predictions, and quantify uncertainty. Key concepts include distributions, hypothesis testing, and Bayesian inference.',
        example: `import numpy as np\nfrom scipy import stats\n\n# Generate normal distribution\ndata = np.random.normal(loc=0, scale=1, size=1000)\n\n# Descriptive statistics\nmean = np.mean(data)\nstd = np.std(data)\nmedian = np.median(data)\n\nprint(f"Mean: {mean:.3f}")\nprint(f"Std: {std:.3f}")\nprint(f"Median: {median:.3f}")\n\n# Hypothesis test (t-test)\nsample = np.random.normal(loc=0.2, scale=1, size=100)\nt_stat, p_value = stats.ttest_1samp(sample, 0)\nprint(f"T-test p-value: {p_value:.4f}")`,
        resources: [
            { name: 'StatQuest with Josh Starmer', url: 'https://statquest.org/', icon: '📺' },
            { name: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability', icon: '📚' },
            { name: 'Scipy Stats Docs', url: 'https://docs.scipy.org/doc/scipy/reference/stats.html', icon: '📘' },
        ]
    }, {
        name: 'Data Wrangling (Pandas)',
        difficulty: 'easy',
        done: false,
        definition: 'Data wrangling is the process of cleaning, transforming, and preparing raw data for analysis. Pandas is the go-to Python library for this, offering powerful data structures and operations to handle messy real-world datasets.',
        example: `import pandas as pd\nimport numpy as np\n\n# Sample messy data\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', None, 'Charlie', 'Eve'],\n    'Age': [25, np.nan, 30, 35, '29'],\n    'Salary': [50000, 60000, None, 70000, 65000]\n})\n\n# Clean and transform\ndf['Age'] = pd.to_numeric(df['Age'], errors='coerce')\ndf['Salary'] = df['Salary'].fillna(df['Salary'].mean())\ndf = df.dropna(subset=['Name'])\n\nprint("Cleaned data:")\nprint(df)`,
        resources: [
            { name: 'Pandas Docs (10 min)', url: 'https://pandas.pydata.org/docs/getting_started/10min.html', icon: '🐼' },
            { name: 'Kaggle Pandas Course', url: 'https://www.kaggle.com/learn/pandas', icon: '🏆' },
            { name: 'Real Python Pandas', url: 'https://realpython.com/pandas-python-explore-dataset/', icon: '📖' },
        ]
    }, {
        name: 'Data Visualization (Matplotlib)',
        difficulty: 'easy',
        done: true,
        definition: 'Data visualization is the art of presenting data in a graphical format. Matplotlib is the foundational Python library for creating static, animated, and interactive visualizations. It\'s essential for exploratory data analysis and communicating insights.',
        example: `import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 100)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\nplt.figure(figsize=(10, 5))\nplt.plot(x, y1, label='sin(x)', color='blue', linewidth=2)\nplt.plot(x, y2, label='cos(x)', color='red', linestyle='--')\nplt.xlabel('x')\nplt.ylabel('y')\nplt.title('Sine and Cosine Functions')\nplt.legend()\nplt.grid(alpha=0.3)\nplt.show()`,
        resources: [
            { name: 'Matplotlib Gallery', url: 'https://matplotlib.org/stable/gallery/index.html', icon: '🎨' },
            { name: 'Seaborn Docs', url: 'https://seaborn.pydata.org/', icon: '📊' },
            { name: 'Plotly Docs', url: 'https://plotly.com/python/', icon: '📈' },
        ]
    }]
}, {
    level: 'Core Data Science',
    icon: '⚙️',
    topics: [{
        name: 'Supervised Learning',
        difficulty: 'medium',
        done: false,
        definition: 'Supervised learning is a type of machine learning where models learn from labeled data. The goal is to map inputs to outputs, enabling prediction on new, unseen data. Common tasks include regression (predicting numbers) and classification (predicting categories).',
        example: `from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\n# Load data\niris = load_iris()\nX, y = iris.data, iris.target\n\n# Split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Train model\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\n\n# Predict & evaluate\ny_pred = model.predict(X_test)\nprint(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")`,
        resources: [
            { name: 'Scikit-learn Supervised', url: 'https://scikit-learn.org/stable/supervised_learning.html', icon: '🤖' },
            { name: 'Coursera ML (Andrew Ng)', url: 'https://www.coursera.org/learn/machine-learning', icon: '🎓' },
            { name: 'Kaggle Learn ML', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', icon: '🏆' },
        ]
    }, {
        name: 'Unsupervised Learning',
        difficulty: 'medium',
        done: false,
        definition: 'Unsupervised learning finds patterns in unlabeled data. Unlike supervised learning, there are no target outputs. Common techniques include clustering (grouping similar items) and dimensionality reduction (simplifying data while preserving important information).',
        example: `from sklearn.cluster import KMeans\nfrom sklearn.datasets import make_blobs\nimport matplotlib.pyplot as plt\n\n# Generate synthetic data\nX, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.6, random_state=42)\n\n# Apply K-Means\nkmeans = KMeans(n_clusters=4, random_state=42)\ny_pred = kmeans.fit_predict(X)\n\n# Visualize\nplt.scatter(X[:, 0], X[:, 1], c=y_pred, cmap='viridis')\nplt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], \n            marker='X', s=200, c='red', label='Centers')\nplt.legend()\nplt.title('K-Means Clustering')\nplt.show()`,
        resources: [
            { name: 'Scikit-learn Unsupervised', url: 'https://scikit-learn.org/stable/unsupervised_learning.html', icon: '🤖' },
            { name: 'Coursera Unsupervised', url: 'https://www.coursera.org/learn/unsupervised-learning', icon: '🎓' },
            { name: 'Towards Data Science Clustering', url: 'https://towardsdatascience.com/clustering-algorithms-59910e4b0b1d', icon: '📖' },
        ]
    }, {
        name: 'Feature Engineering',
        difficulty: 'medium',
        done: true,
        definition: 'Feature engineering is the process of creating new features or transforming existing ones to improve model performance. It involves domain knowledge, data understanding, and creativity. Good features can make even simple models perform well.',
        example: `import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\n\n# Sample data\ndf = pd.DataFrame({\n    'age': [25, 30, 35, 40, 45],\n    'income': [50000, 60000, 70000, 80000, 90000],\n    'city': ['NYC', 'SF', 'NYC', 'LA', 'SF']\n})\n\n# Feature creation\ndf['income_per_age'] = df['income'] / df['age']\ndf['age_squared'] = df['age'] ** 2\n\n# Encoding categorical\nencoder = OneHotEncoder(sparse_output=False)\ncity_encoded = encoder.fit_transform(df[['city']])\ncity_df = pd.DataFrame(city_encoded, columns=encoder.get_feature_names_out(['city']))\ndf = pd.concat([df, city_df], axis=1).drop('city', axis=1)\n\nprint("Engineered features:")\nprint(df)`,
        resources: [
            { name: 'Kaggle Feature Engineering', url: 'https://www.kaggle.com/learn/feature-engineering', icon: '🏆' },
            { name: 'Feature Engineering Book', url: 'https://www.featureengineeringbook.com/', icon: '📚' },
            { name: 'Scikit-learn Preprocessing', url: 'https://scikit-learn.org/stable/modules/preprocessing.html', icon: '🔧' },
        ]
    }, {
        name: 'Model Evaluation & Validation',
        difficulty: 'medium',
        done: false,
        definition: 'Model evaluation is critical for understanding how well your model will perform on new data. Techniques include cross-validation, train-test splits, and metrics like accuracy, precision, recall, F1-score, and ROC-AUC. Proper validation prevents overfitting.',
        example: `from sklearn.datasets import load_iris\nfrom sklearn.model_selection import cross_val_score, StratifiedKFold\nfrom sklearn.ensemble import RandomForestClassifier\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\n\n# Cross-validation\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\nscores = cross_val_score(model, X, y, cv=cv, scoring='accuracy')\n\nprint(f"CV Scores: {scores}")\nprint(f"Mean Accuracy: {scores.mean():.3f} (+/- {scores.std():.3f})")`,
        resources: [
            { name: 'Scikit-learn Model Evaluation', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html', icon: '📊' },
            { name: 'Coursera ML Evaluation', url: 'https://www.coursera.org/learn/machine-learning', icon: '🎓' },
            { name: 'ML Metrics Explained', url: 'https://towardsdatascience.com/performance-metrics-for-classification-problems-7ac295dba4a7', icon: '📖' },
        ]
    }, {
        name: 'Decision Trees & Random Forest',
        difficulty: 'medium',
        done: false,
        definition: 'Decision trees are simple, interpretable models that split data based on feature values. Random Forests are ensembles of many decision trees that average their predictions, improving accuracy and reducing overfitting. They are widely used for both classification and regression.',
        example: `from sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\n\ndata = load_breast_cancer()\nX, y = data.data, data.target\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Decision Tree\ndt = DecisionTreeClassifier(random_state=42)\ndt.fit(X_train, y_train)\nprint(f"Decision Tree Acc: {accuracy_score(y_test, dt.predict(X_test)):.3f}")\n\n# Random Forest\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\nrf.fit(X_train, y_train)\nprint(f"Random Forest Acc: {accuracy_score(y_test, rf.predict(X_test)):.3f}")`,
        resources: [
            { name: 'Scikit-learn Tree', url: 'https://scikit-learn.org/stable/modules/tree.html', icon: '🌳' },
            { name: 'Random Forest Explained', url: 'https://www.randomforestclassifier.com/', icon: '📖' },
            { name: 'Kaggle Random Forest', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', icon: '🏆' },
        ]
    }, {
        name: 'Neural Networks Basics',
        difficulty: 'hard',
        done: false,
        definition: 'Neural networks are a class of models inspired by the brain. They consist of layers of interconnected neurons that learn to map inputs to outputs through backpropagation. They form the basis of deep learning and excel at tasks like image recognition and language modeling.',
        example: `from sklearn.neural_network import MLPClassifier\nfrom sklearn.datasets import load_digits\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\n# Load digits dataset\ndigits = load_digits()\nX, y = digits.data, digits.target\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Simple neural net\nmlp = MLPClassifier(hidden_layer_sizes=(64, 32), max_iter=500, random_state=42)\nmlp.fit(X_train, y_train)\n\nprint(f"Neural Net Acc: {accuracy_score(y_test, mlp.predict(X_test)):.3f}")`,
        resources: [
            { name: 'DeepLearning.AI Course', url: 'https://www.deeplearning.ai/courses/', icon: '🧠' },
            { name: 'TensorFlow Docs', url: 'https://www.tensorflow.org/learn', icon: '⚡' },
            { name: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', icon: '🔥' },
        ]
    }]
}, {
    level: 'Advanced & Specialized',
    icon: '🚀',
    topics: [{
        name: 'Deep Learning (CNNs, RNNs)',
        difficulty: 'hard',
        done: false,
        definition: 'Deep learning extends neural networks to many layers. CNNs (Convolutional Neural Networks) excel at image processing, using filters to detect patterns. RNNs (Recurrent Neural Networks) handle sequential data like text and time series, with memory of previous inputs.',
        example: `# Simplified CNN using TensorFlow/Keras style\nimport numpy as np\n\n# Simulating a convolution operation\ndef conv2d_simple(input_image, kernel):\n    h, w = input_image.shape\n    kh, kw = kernel.shape\n    output = np.zeros((h-kh+1, w-kw+1))\n    for i in range(h-kh+1):\n        for j in range(w-kw+1):\n            output[i, j] = np.sum(input_image[i:i+kh, j:j+kw] * kernel)\n    return output\n\n# Example\nimage = np.random.randn(5, 5)\nkernel = np.array([[1, 0, -1], [1, 0, -1], [1, 0, -1]])\nresult = conv2d_simple(image, kernel)\nprint("Convolution result shape:", result.shape)\nprint(result)`,
        resources: [
            { name: 'DeepLearning.AI Specialization', url: 'https://www.deeplearning.ai/courses/', icon: '🧠' },
            { name: 'TensorFlow Core', url: 'https://www.tensorflow.org/learn', icon: '⚡' },
            { name: 'PyTorch Vision', url: 'https://pytorch.org/vision/stable/index.html', icon: '🔥' },
        ]
    }, {
        name: 'NLP & Transformers',
        difficulty: 'hard',
        done: false,
        definition: 'Natural Language Processing (NLP) teaches computers to understand and generate human language. Transformers are the current state-of-the-art architecture, powering models like BERT, GPT, and T5. They use attention mechanisms to process sequences efficiently.',
        example: `# Using Hugging Face transformers (conceptual)\n# from transformers import pipeline\n\n# Simulated output\nprint("Loading sentiment analysis model...")\nprint("Result: {'label': 'POSITIVE', 'score': 0.999}'")\nprint()\nprint("Example text: 'I love learning data science!'\")\nprint("→ Sentiment: Positive (99.9%)")\n\n# Tokenization concept\ntext = "Hello world!"\ntokens = text.lower().split()\nprint(f"Tokens: {tokens}")`,
        resources: [
            { name: 'Hugging Face', url: 'https://huggingface.co/learn', icon: '🤗' },
            { name: 'NLTK Docs', url: 'https://www.nltk.org/', icon: '📘' },
            { name: 'SpaCy Docs', url: 'https://spacy.io/usage', icon: '⚡' },
        ]
    }, {
        name: 'Big Data (Spark, Hadoop)',
        difficulty: 'hard',
        done: false,
        definition: 'Big data technologies like Apache Spark and Hadoop enable processing of massive datasets across clusters of computers. Spark provides fast, in-memory data processing with APIs in Python (PySpark), Scala, and Java. It\'s essential for enterprise-scale data science.',
        example: `# PySpark style (conceptual)\n# from pyspark.sql import SparkSession\n# from pyspark.sql.functions import col\n\n# spark = SparkSession.builder.appName("Example").getOrCreate()\n# df = spark.read.csv("huge_dataset.csv", header=True)\n# df_filtered = df.filter(col("age") > 30)\n# df_filtered.show()\n\nprint("PySpark DataFrame operations:")\nprint("- Read CSV: spark.read.csv(...)")\nprint("- Filter: df.filter(col('age') > 30)")\nprint("- Group by: df.groupBy('category').count()")`,
        resources: [
            { name: 'Apache Spark Docs', url: 'https://spark.apache.org/docs/latest/', icon: '⚡' },
            { name: 'Databricks Learning', url: 'https://databricks.com/learn', icon: '📚' },
            { name: 'Hadoop Docs', url: 'https://hadoop.apache.org/docs/current/', icon: '🐘' },
        ]
    }, {
        name: 'MLOps & Deployment',
        difficulty: 'hard',
        done: false,
        definition: 'MLOps (Machine Learning Operations) brings DevOps principles to machine learning. It covers the entire lifecycle: model training, versioning, testing, deployment, monitoring, and governance. Tools like MLflow, Kubeflow, and Docker help automate and scale ML in production.',
        example: `# MLflow style tracking\n# import mlflow\n# import mlflow.sklearn\n# \n# with mlflow.start_run():\n#     model = RandomForestClassifier(...)\n#     model.fit(X_train, y_train)\n#     mlflow.log_param("n_estimators", 100)\n#     mlflow.log_metric("accuracy", 0.95)\n#     mlflow.sklearn.log_model(model, "model")\n\nprint("MLOps workflow:")\nprint("1. Experiment tracking (MLflow, Weights & Biases)")\nprint("2. Model versioning (DVC, Git)")\nprint("3. CI/CD pipeline (GitHub Actions, Jenkins)")\nprint("4. Model serving (FastAPI, Flask, TorchServe)")`,
        resources: [
            { name: 'MLflow Docs', url: 'https://mlflow.org/docs/latest/index.html', icon: '📈' },
            { name: 'Kubeflow Docs', url: 'https://www.kubeflow.org/docs/', icon: '☸️' },
            { name: 'Made With ML', url: 'https://madewithml.com/', icon: '📖' },
        ]
    }, {
        name: 'Reinforcement Learning',
        difficulty: 'hard',
        done: false,
        definition: 'Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by interacting with an environment. The agent receives rewards or penalties and learns to maximize cumulative reward. It\'s used in robotics, games, and autonomous systems.',
        example: `# Simple Q-learning conceptual example\nimport numpy as np\n\n# Simple grid world with 4 actions (up, down, left, right)\nn_states = 16\nn_actions = 4\nQ = np.zeros((n_states, n_actions))\n\n# Episode simulation\nstate = 0\ntotal_reward = 0\nfor step in range(10):\n    # Choose action (epsilon-greedy)\n    if np.random.rand() < 0.1:\n        action = np.random.randint(n_actions)\n    else:\n        action = np.argmax(Q[state])\n    \n    # Simulate transition\n    next_state = (state + action) % n_states\n    reward = 1 if next_state == n_states - 1 else 0\n    total_reward += reward\n    \n    # Update Q (simple)\n    Q[state, action] += 0.1 * (reward + 0.9 * np.max(Q[next_state]) - Q[state, action])\n    state = next_state\n\nprint(f"Total reward: {total_reward}")`,
        resources: [
            { name: 'DeepMind RL', url: 'https://deepmind.com/learning-resources', icon: '🧠' },
            { name: 'OpenAI Spinning Up', url: 'https://spinningup.openai.com/', icon: '🤖' },
            { name: 'RL Course (David Silver)', url: 'https://www.davidsilver.uk/teaching/', icon: '🎓' },
        ]
    }, {
        name: 'AI Ethics & Responsible AI',
        difficulty: 'medium',
        done: false,
        definition: 'AI Ethics focuses on building fair, transparent, and accountable AI systems. Responsible AI practices address bias, privacy, explainability, and the societal impact of AI. It\'s essential for building trust and ensuring AI benefits everyone.',
        example: `# Evaluating fairness in a model\n# Simulated fairness metrics\n\nimport numpy as np\n\n# Simulated predictions\ny_true = np.array([0, 1, 1, 0, 1, 0, 0, 1])\ny_pred = np.array([0, 1, 0, 0, 1, 1, 0, 1])\n\n# Confusion matrix\ntp = np.sum((y_true == 1) & (y_pred == 1))\ntn = np.sum((y_true == 0) & (y_pred == 0))\nfp = np.sum((y_true == 0) & (y_pred == 1))\nfn = np.sum((y_true == 1) & (y_pred == 0))\n\n# Fairness metrics\naccuracy = (tp + tn) / len(y_true)\nprecision = tp / (tp + fp) if (tp + fp) > 0 else 0\nrecall = tp / (tp + fn) if (tp + fn) > 0 else 0\n\nprint(f"Accuracy: {accuracy:.2f}")\nprint(f"Precision: {precision:.2f}")\nprint(f"Recall: {recall:.2f}")\nprint("Consider fairness across demographic groups")`,
        resources: [
            { name: 'Responsible AI (Google)', url: 'https://ai.google/responsibility/', icon: '🌐' },
            { name: 'AI Fairness 360', url: 'https://aif360.mybluemix.net/', icon: '⚖️' },
            { name: 'Ethics in AI (MIT)', url: 'https://www.media.mit.edu/groups/ethics-of-artificial-intelligence/overview/', icon: '🎓' },
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

function updateMasteredCount() {
    DONE_TOPICS = SYLLABUS_DATA.reduce((acc, l) => acc + l.topics.filter(t => t.done).length, 0);
    const el = document.getElementById('masteredCount');
    if (el) el.textContent = DONE_TOPICS;
    const notif = document.getElementById('syllabusNotif');
    if (notif) {
        const remaining = TOTAL_TOPICS - DONE_TOPICS;
        notif.textContent = remaining > 0 ? remaining : '✓';
        notif.style.background = remaining === 0 ? '#22c55e' : '#3b82f6';
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MODAL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function openTopicModal(topic, levelName) {
    const modal = document.getElementById('topicModal');
    document.getElementById('modalTitle').textContent = topic.name;
    document.getElementById('modalDefinition').textContent = topic.definition;

    const diffEl = document.getElementById('modalDifficulty');
    diffEl.textContent = topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1);
    diffEl.className = 'diff-badge ' + getDifficultyClass(topic.difficulty);

    document.getElementById('modalLevel').textContent = '📍 ' + levelName;
    document.getElementById('modalStatus').textContent = topic.done ? '✅ Mastered' : '⏳ In Progress';
    document.getElementById('modalStatus').style.color = topic.done ? '#4ade80' : '#fbbf24';

    // example with syntax highlighting
    const exampleEl = document.getElementById('modalExample');
    let exampleCode = topic.example || '# No example provided.';
    // simple syntax highlight simulation
    exampleCode = exampleCode
        .replace(/(import|from|def|class|return|if|elif|else|for|while|try|except|with|as|lambda|yield|print)/g,
            '<span class="keyword">$1</span>')
        .replace(/(\"[^\"]*\"|\'[^\']*\')/g, '<span class="string">$1</span>')
        .replace(/(\b\d+\.?\d*\b)/g, '<span class="number">$1</span>')
        .replace(/(#.*$)/gm, '<span class="comment">$1</span>')
        .replace(/(np\.|pd\.|plt\.|sklearn\.|mlflow\.)/g, '<span class="func">$1</span>');
    exampleEl.innerHTML = exampleCode;

    // resources
    const resList = document.getElementById('modalResources');
    resList.innerHTML = '';
    if (topic.resources && topic.resources.length > 0) {
        topic.resources.forEach(r => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${r.url}" target="_blank"><span class="icon">${r.icon || '🔗'}</span> ${r.name}</a>`;
            resList.appendChild(li);
        });
    } else {
        resList.innerHTML = '<li style="color:#6b8aa8;">No resources listed for this topic.</li>';
    }

    modal.classList.add('open');
}

function closeTopicModal() {
    document.getElementById('topicModal').classList.remove('open');
}

document.getElementById('modalCloseBtn').addEventListener('click', closeTopicModal);
document.getElementById('topicModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeTopicModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTopicModal();
});

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
        let html = `
              <div class="card full">
                <h2>📚 Data Science Syllabus <span class="sub">— ${DONE_TOPICS}/${TOTAL_TOPICS} completed</span></h2>
                <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:0.8rem;">
                  <div style="background:#14233e;padding:0.3rem 1rem;border-radius:30px;font-size:0.75rem;color:#4ade80;">✅ ${DONE_TOPICS} mastered</div>
                  <div style="background:#14233e;padding:0.3rem 1rem;border-radius:30px;font-size:0.75rem;color:#fbbf24;">⏳ ${TOTAL_TOPICS - DONE_TOPICS} remaining</div>
                  <div style="background:#14233e;padding:0.3rem 1rem;border-radius:30px;font-size:0.75rem;color:#60a5fa;">🎯 ${Math.round((DONE_TOPICS / TOTAL_TOPICS) * 100)}% complete</div>
                  <div style="background:#14233e;padding:0.3rem 1rem;border-radius:30px;font-size:0.75rem;color:#a78bfa;">📖 Click any topic for details</div>
                </div>
                <div class="progress-item"><div class="label"><span>Overall Progress</span><span>${Math.round((DONE_TOPICS / TOTAL_TOPICS) * 100)}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${Math.round((DONE_TOPICS / TOTAL_TOPICS) * 100)}%"></div></div></div>
              </div>
            `;

        SYLLABUS_DATA.forEach((level, li) => {
            const done = level.topics.filter(t => t.done).length;
            const total = level.topics.length;
            const p = Math.round((done / total) * 100);
            const open = li === 0 ? 'open' : '';
            const arrowOpen = li === 0 ? 'open' : '';
            html += `
                <div class="card syllabus-level">
                  <div class="level-title" data-level="${li}">
                    <span>${level.icon}</span>
                    <span>${level.level}</span>
                    <span class="count">${done}/${total} · ${p}%</span>
                    <span style="margin-left:auto;font-size:0.7rem;color:#6b8aa8;">${p}%</span>
                    <span class="arrow ${arrowOpen}">▶</span>
                  </div>
                  <div class="topic-list ${open}" data-level="${li}">
                    ${level.topics.map((t, ti) => `
                      <div class="topic-item" data-level="${li}" data-topic="${ti}">
                        <div class="check ${t.done ? 'done' : ''}" data-level="${li}" data-topic="${ti}">✓</div>
                        <span class="topic-label">${t.name}</span>
                        <span class="topic-difficulty ${getDifficultyClass(t.difficulty)}">${t.difficulty}</span>
                        <button class="topic-detail-btn" data-level="${li}" data-topic="${ti}" title="View details">📖</button>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
        });

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

    // update nav
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.nav button[data-view="${viewName}"]`);
    if (btn) btn.classList.add('active');

    updateMasteredCount();

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
    // toggle level
    document.querySelectorAll('.level-title').forEach(el => {
        el.addEventListener('click', () => {
            const li = el.dataset.level;
            const list = document.querySelector(`.topic-list[data-level="${li}"]`);
            const arrow = el.querySelector('.arrow');
            if (list) {
                list.classList.toggle('open');
                if (arrow) arrow.classList.toggle('open');
            }
        });
    });

    // toggle topic check
    document.querySelectorAll('.topic-item .check').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const li = parseInt(el.dataset.level);
            const ti = parseInt(el.dataset.topic);
            const topic = SYLLABUS_DATA[li]?.topics[ti];
            if (topic) {
                topic.done = !topic.done;
                renderView('syllabus');
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
//  NAVIGATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.querySelectorAll('.nav button').forEach(btn => {
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
    for (let i = 0; i < 30; i++) {
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

// ─── INIT ─────────────────────────────────────────────

updateMasteredCount();
renderView('overview');

console.log('🤖 NeoLearn · Data Science Robotics Lab');
console.log(`📚 ${DONE_TOPICS}/${TOTAL_TOPICS} topics mastered`);
console.log(`⏱️ ${timerState.totalFocus.toFixed(1)}h total focus time`);
console.log('🔥 Keep learning — you\'re on a roll!');