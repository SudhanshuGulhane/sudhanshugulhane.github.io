import stock_pred from '../../assets/stock-prediction.webp'
import ecom from '../../assets/e_commerce.webp'
import review_analyzer from '../../assets/review_analyzer.webp'
import history_predictor from '../../assets/smoking_history_prediction.png'
import insight_lens from '../../assets/insight_lens.png'
import bigdata from '../../assets/bigdata.png'
import medbot from '../../assets/medbot.png'
import multimodal from '../../assets/multimodal.png'

export const projectsData = [
    {
      image:bigdata,
      title: "StockVisionAI",
      description: "Utilized Hadoop HDFS, Hive, and Docker for scalable big data processing, combining stock data and CFPB customer complaints. Integrated Parquet for 3x faster queries and 3.33x storage efficiency. Built an interactive ReactJS + FastAPI web app for real-time insights.",
      url: "https://github.com/SudhanshuGulhane/Stock_Forecaster_WebApp"
    },
    {
      image: multimodal,
      title: "MultiModal Rag ChatApp",
      description: "Developed a scalable GenAI pipeline with RAG, multi-vector retrieval, and modular architecture (Chroma, LangChain) for contextual Q&A over structured PDFs, leveraging multimodal embeddings and summarization workflows with GPT-4o-mini and Groq LLaMA-3.1.",
      url: "https://github.com/SudhanshuGulhane/MultiModalRag-App"
    },
    {
      image: history_predictor,
      title: "SmokeSense AI",
      description: "Developed SmokeSenseAI, an end-to-end MLOps pipeline with PyTorch, Flask, and MLflow, achieving 83%+ accuracy on a 9M+ patient dataset, automated CI/CD with GitHub Actions, and deployed via Docker & Azure Container Instances (ACI) for real-time smoking prediction.",
      url: "https://github.com/SudhanshuGulhane/Smoking-History-Predictor",
    },
    {
      image: insight_lens,
      title: "InsightLens",
      description: "Developed a search engine analyzing job market trends using Python, FAISS, and Hugging Face Transformers.",
      url: "https://github.com/SudhanshuGulhane/InsightLens",
    },
    {
      image: ecom,
      title: "ShopTrek",
      description: "Built a full-stack e-commerce application with Java (Spring Boot backend, MVC architecture) and Vue.js (frontend), supporting 300+ developers through tutorials.",
      url: "https://github.com/webtutsplus/ecommerce-backend",
    },
    {
      image: medbot,
      title: "MedLlama",
      description: "Developed a generative AI chatbot using LLaMA for language generation and conversational flows with LangChain, integrating Chroma vector store to index medical PDF knowledge base.",
      url: "https://github.com/SudhanshuGulhane/GenAI_ChatBot",
    },
    {
      image: review_analyzer,
      title: "ReviewPulse",
      description: "Developed a Python Flask backend and React frontend to analyze product reviews with 90% accuracy using a linear SVM.",
      url: "https://github.com/SudhanshuGulhane/Amazon-Scraping-and-Sentiment-Analysis",
    },
    {
      image: stock_pred,
      title: "Stock Price Forecasting",
      description: "Designed a LSTM model to predict stock prices with 81.19% accuracy for 2023, leveraging data from 500 companies.",
      url: "https://github.com/SudhanshuGulhane/Stock-Price-Prediction",
    }
];