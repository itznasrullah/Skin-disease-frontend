# ⭐ MediScan ⭐ | [ Live Link 🚀 ](https://mediscan-frontend.vercel.app/)
***
Software For Identification of Lung diseases Using Deep Learning
***

## Overview
Lung diseases remains a significant global health challenge, with an estimated 10 million new cases reported in 2021, affecting both adults and children. Prompt and reliable identification of lung diseases are crucial in mitigating the disease's impact, particularly in resource-limited settings. This project leverages deep learning techniques to build a robust model for lung diseases identification using chest X-ray images. The model achieves an impressive accuracy of nearly 98% on a separate test dataset, demonstrating its potential as a valuable tool in the fight against lung diseases.

## Project Background
The identification of lung diseases through chest X-ray images is a challenging task that requires sophisticated diagnostic methods. Traditional approaches can be time-consuming and prone to errors, which underscores the need for advanced techniques that can provide quick and reliable results. This project addresses this need by utilizing Convolutional Neural Networks (CNNs) combined with transfer learning and hyperparameter tuning. The dataset used comprises 7000 images, “Chest X-ray Database” on Kaggle.

## Methodology
### Model Design
The core of our model is based on the VGG19 pre-trained neural network, leveraging the principles of transfer learning. The architecture is enhanced with task-specific layers and regularization techniques to ensure robust classification. Key features of the model design include:

### Transfer Learning: 
Utilizes a pre-trained model to benefit from previously learned features, reducing the need for extensive training from scratch.
### Hyperparameter Tuning: 
Fine-tunes the model's parameters to achieve optimal performance.
### Layer Freezing: 
Selectively freezes certain layers of the pre-trained model to retain valuable learned features while adapting to the specific task.

## Performance
The model was rigorously trained and evaluated, achieving an accuracy of nearly 98% on the test dataset. While these results are promising, careful interpretation is required, particularly in understanding the potential challenges and limitations of such high accuracy.

## Frontend Overview
The frontend of this application is developed using Next.js. Although the focus of this project is on the utility and the background of the lung diseases identification model, the frontend serves as an intuitive interface for users to interact with the model and visualize results. Key features of the frontend include:

- ___User-Friendly Interface:___ Simplifies the process of uploading chest X-ray images and viewing diagnostic results.
- ___Real-Time Feedback:___ Provides immediate predictions and confidence scores, allowing for quick decision-making.
- ___Visualization Tools:___ Enhances understanding of the model's predictions through clear visual representations.

## Supporting Materials
This repository also includes the following supporting materials:

- ___Video Demonstration:___ A walkthrough of the application and model performance.


- ___Research Paper:___ Detailed documentation of the project's methodology, results, and analysis, titled "[Optimized tuberculosis classification system for chest X-ray images: Fusing hyperparameter tuning with transfer learning approaches](https://onlinelibrary.wiley.com/doi/10.1002/eng2.12906)"
  
- ___Colab Notebook:___ Access to the model code and implementation for replication and further exploration. [click here to visit](https://colab.research.google.com/drive/1C2-Bsngo6XcFNmUCwQpw2dTmJhInSp8h)




## Conclusion
This project demonstrates the potential of deep learning models in addressing global health challenges like tuberculosis. By combining advanced techniques such as CNNs, transfer learning, and hyperparameter tuning, we have developed a model that not only achieves high accuracy but also offers practical utility in real-world diagnostic scenarios. We invite the community to explore, contribute, and build upon this work.


# Getting Started
After setting up the backend, to run the frontend locally, follow these steps:

- Clone the repository:

        git clone https://github.com/your-username/lung diseases-identification.git

- Navigate to the frontend directory:

        cd mediscan-frontend/

- Install the dependencies:

        npm install

- Run the development server:

        npm run dev

- Open http://localhost:3000 in your browser to view the application.


### License
This project is licensed under the MIT License.

"# Skin-disease-frontend" 
