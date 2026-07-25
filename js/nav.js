const TOPICS = [
  { n: "0", id: "stats-probability", title: "Statistics & Probability Primer", ready: true },
  { n: "1", id: "preprocessing", title: "Data Preprocessing & Cleaning" },
  { n: "2", id: "foundations", title: "Foundations: Bias-Variance & Regularization" },
  { n: "3", id: "regression", title: "Regression: Linear & Polynomial", ready: true },
  { n: "4", id: "classification", title: "Classification: Logistic, KNN, NB, SVM" },
  { n: "5", id: "trees", title: "Decision Trees" },
  { n: "6", id: "ensemble", title: "Ensemble Learning" },
  { n: "7", id: "unsupervised", title: "Unsupervised: K-Means, PCA" },
  { n: "8", id: "evaluation", title: "Model Evaluation & Validation" },
  { n: "9", id: "pipeline", title: "End-to-End ML Pipeline" },
  { n: "10", id: "nn-foundations", title: "Neural Network Foundations" },
  { n: "11", id: "backprop-optimization", title: "Backpropagation & Optimization" },
  { n: "12", id: "regularization-dl", title: "Regularization in Deep Learning" },
  { n: "13", id: "cnn", title: "Convolutional Neural Networks" },
  { n: "14", id: "rnn-lstm-gru", title: "RNNs, LSTM & GRU" },
  { n: "15", id: "attention-transformers", title: "Attention & Transformers" },
  { n: "16", id: "nlp-preprocessing", title: "NLP: Text Preprocessing & BoW/TF-IDF" },
  { n: "17", id: "word-embeddings", title: "Word Embeddings: Word2Vec, GloVe, Contextual" },
  { n: "18", id: "nlp-tasks", title: "Core NLP Tasks: NER, POS, Sentiment" },
  { n: "19", id: "language-models-bert-gpt", title: "Language Models: BERT vs GPT" },
  { n: "20", id: "applied-llms", title: "Applied LLMs: Embeddings, LangChain, Mistral 7B" }
];

function renderSidebar(activeId, base) {
  base = base || "";
  var mount = document.getElementById("sidebar-mount");
  if (!mount) return;
  var html = '<div class="brand">ML <span class="brand-ml">Interview</span><br>Notes</div>' +
             '<div class="brand-sub">Core ML &mdash; 10 sections</div><ul class="nav-list">';
  html += '<li class="nav-item"><a href="' + base + 'index.html" class="' +
          (activeId === "" ? "active" : "") + '"><span class="nav-sec">&middot;</span><span>Home</span></a></li>';
  TOPICS.forEach(function (t) {
    html += '<li class="nav-item' + (t.ready ? "" : " stub") + '">' +
            '<a href="' + base + 'topics/' + t.id + '.html" class="' + (t.id === activeId ? "active" : "") + '">' +
            '<span class="nav-sec">&sect;' + t.n + '</span><span>' + t.title + '</span></a></li>';
  });
  mount.innerHTML = html + "</ul>";
}
