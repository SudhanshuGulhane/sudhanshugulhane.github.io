import stock_pred from '../../assets/stock-prediction.webp'
import ecom from '../../assets/e_commerce.webp'
import review_analyzer from '../../assets/review_analyzer.webp'
import history_predictor from '../../assets/smoking_history_prediction.webp'
import layoff_lens from '../../assets/layoffs_lens.webp'
import bigdata from '../../assets/bigdata.png'

export const projectsData = [
    {
      image:bigdata,
      title: "StockVisionAI",
      description: "Utilized Hadoop HDFS, Hive, and Docker for scalable big data processing, combining stock data and CFPB customer complaints. Integrated Parquet for 3x faster queries and 3.33x storage efficiency. Built an interactive ReactJS + FastAPI web app for real-time insights.",
      url: "https://github.com/SudhanshuGulhane/Stock_Forecaster_Big_Data_Storage"
    },
    {
      image: ecom,
      title: "ShopTrek",
      description: "Built a full-stack e-commerce application with Java (Spring Boot backend, MVC architecture) and Vue.js (frontend), supporting 300+ developers through tutorials.",
      url: "https://github.com/webtutsplus/ecommerce-backend",
    },
    {
      image: history_predictor,
      title: "SmokeSense AI",
      description: "Built an Artificial Neural Network classifier to predict smoking habits from medical data of 9M+ patients, achieving 83% accuracy.",
      url: "https://github.com/SudhanshuGulhane/Smoking-History-Predictor",
    },
    {
      image: review_analyzer,
      title: "ReviewPulse",
      description: "Developed a Python Flask backend and React frontend to analyze product reviews with 90% accuracy using a linear SVM.",
      url: "https://github.com/SudhanshuGulhane/Amazon-Scraping-and-Sentiment-Analysis",
    },
    {
      image: layoff_lens,
      title: "LayoffLens",
      description: "Developed a search engine analyzing layoff trends using Python, FAISS, and Hugging Face Transformers.",
      url: "https://github.com/SudhanshuGulhane/Layoff_Lens",
    },
    {
      image: stock_pred,
      title: "Stock Price Forecasting",
      description: "Designed a LSTM model to predict stock prices with 81.19% accuracy for 2023, leveraging data from 500 companies.",
      url: "https://github.com/SudhanshuGulhane/Stock-Price-Prediction",
    }
];