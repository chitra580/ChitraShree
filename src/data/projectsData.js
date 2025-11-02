// import eight from '../assets/svg/projects/eight.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import six from '../assets/svg/projects/six.svg'
// import face from '../assets/png/face.jpg'
// import land from '../assets/png/land.jpg'

import Votingapp from '../assets/png/Votingapp.png'
import campushub from '../assets/png/campushub.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Iris Recognition using AI',
        projectDesc: 'An iris recognition project involves developing a system to identify individuals by analyzing the unique patterns in their irises. The project typically involves capturing an eye image, segmenting the iris to isolate it from other eye features, extracting its unique patterns into a template, and then matching this template against a database for verification.',
        tags: ['Python', 'MachineLearning', 'CNN', 'SVM', 'KNN'],
        
        image: Votingapp
    },
    {
        id: 2,
        projectName: 'Plant disease detection using CNN',
        projectDesc: 'This project uses a Convolutional Neural Network (CNN) to automatically detect plant diseases from images of leaves, helping to increase crop yields and ensure food security. The system involves collecting and pre-processing images, training a CNN model to distinguish between healthy and diseased leaves, and then deploying it as a web or mobile application for user-friendly access.',
        tags: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'JavaScript'],
        
        image: campushub
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/