# Blink-to-Text-minor-project-
<h3>Abstract</h3
<p>Paralysis is the loss of voluntary muscle control. Over 9.5 million suffer from paralysis in India[1]. Many paralysed people cannot move a single part of their body Even though these people are cognitively aware, they have no means of communication. They have lost their ability to talk, type, etc. These victims have their thoughts and ideas trapped inside of them. Generally, people with paralysis have control over their eye movement. Therefore, the purpose of this project is to build a real time interactive system that allows paralysed people to easily express themselves, via eye blinks.</p>

<h3>Introduction</h3>

<h4>The Problem</h4>
<p>Paralyzed people lack the ability to control muscle function in one or more muscle groups. The condition can be caused by stroke, ALS, multiple sclerosis, and many other diseases. Locked-in Syndrome (LIS) is a form of paralysis where patients have lost control of nearly all voluntary muscles. These people are unable to control any part of their body, besides eye movement and blinking. Due to their condition, these people are unable to talk, text, and communicate in general. Even though people that have LIS are cognitively aware, their thoughts and ideas are locked inside of them. These people depend on eye blinks to communicate. They rely on nurses and caretakers to interpret and decode their blinking. Whenever LIS patients do not have a person to read their eye blinks available, they have no means of self expression.</p>

<h4>The Solution</h4>
<p>This project offers a form of independence to paralyzed people. The software platform converts eye blinks to text. Every feature of the software can be controlled by eye movement. Thus, the software can be independently operated by paralyzed people. Using the software, patients can record messages, recite those messages aloud, and send the messages to others. The software can be run on any low end computer, from a Raspberry Pi to an IBM Thinkpad. The software uses computer vision and Haar cascades to detect eye blinking and convert the motion into text. The program uses language modelling to predict the next words that the user might blink. The software can be easily customized for each patient as well.
Literature survey<p>
Various research papers and algorithms were surveyed for the creation of this project.
A detailed explanation of all of them is given:-

[1] Provides us the statistical info of the number of indian population living with paralysis
[2] Incorporates and presents a viable approach towards facial landmark detection using the following:
OpenCV: OpenCV (Open Source Computer Vision Library) is released under a BSD license and hence it’s free for both academic and commercial use. It has C++, Python and Java interfaces and supports Windows, Linux, Mac OS, IOS and Android. OpenCV was designed for computational efficiency and with a strong focus on real-time applications. Written in optimized C/C++, the library can take advantage of multi-core processing. Enabled with OpenCL, it can take advantage of the hardware acceleration of the underlying heterogeneous compute platform.
Dlib: Dlib is a modern C++ toolkit containing machine learning algorithms and tools for creating complex software in C++ to solve real world problems. It is used in both industry and academia in a wide range of domains including robotics, embedded devices, mobile phones, and large high performance computing environments.
Python:Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.
[3] A real-time algorithm to detect eye blinks in a video sequence from a standard camera is proposed. Recent landmark detectors, trained on in-the wild datasets exhibit excellent robustness against a head orientation with respect to a camera, varying illumination and facial expressions.The proposed algorithm estimates the landmark positions, extracts a single scalar quantity – eye aspect ratio (EAR) – characterizing the eye opening in each frame. Finally, an SVM classifier detects eye blinks as a pattern of EAR values in a short temporal window.
[4] Addresses the problem of Face Alignment for a single image and shows how an ensemble of regression trees can be used to estimate the face’s landmark positions directly from a sparse subset of pixel intensities, achieving super-realtime performance with high quality predictions. It also presents a general framework based on gradient boosting for learning an ensemble of regression trees that optimizes the sum of square error loss and naturally handles missing or partially labelled data and shows how using appropriate priors exploiting the structure of image data helps with efficient feature selection.
[5] Presents a fast method for locating iris features in frontal face images based on the Hough transform. It consists of an initial iris detection step and a tracking step which uses iris features from initialisation for speeding up computation.
[6] Implements an adaptive template­ based blink detection algorithm which detects frames where people are blinking so that they can automatically be deleted from your device.
[7] Predicts that, although machines may elicit nonconscious impression management strategies, they do not generally elicit conscious impression management strategies. One such strategy is presenting oneself favorably to others, which can be measured as social desirability bias when comparing self-reported preferences with implicit preferences. This study uses both a questionnaire and an implicit association test (IAT) to compare attitudes toward human and machine speech.
[8] Submits a review of the way three bioelectrical signals - electromyographic, electrooculographic and electroencephalographic - have been utilised in alternative communication with patients suffering severe motor restrictions. It also offers a comparative study of the various methods applied to measure the performance of Alternative and Augmented Communication systems.


<h3>Objective</h3>
<p>Allow paralysis victims to communicate independently.
Many paralysis victims already use eye blinks as a form of communication. It is common for nurses and caretakers to read a patient’s eye blinks and decode the pattern. The ALS association even offers a communication guide that relies on eye blinks.The project automates this task. The software reads a person’s eye blinks and converts them into text. A key feature of the software is that it can be started, paused, and operated entirely with eye blinks. This allows patients to record their thoughts with complete independence. No nurses or caretakers are required to help patients express themselves. Not only does this reduce the financial burden on paralysis patients, but this form of independence can be morally uplifting as well.</p>

<p>Be accessible to people with financial constraints.
Many companies are developing technologies that are controlled by eye movement. These technologies rely on expensive hardware to track a user’s eyes. While these devices can absolutely help LIS victims, they are only available to people that can afford the technology.The project focuses on a different demographic that are often ignored.The software runs on wide variety of low end computers. The only required peripheral is a basic webcam. Not only is this software accessible to paralyzed people, but paralyzed people of almost all financial classes as well.</p>

<h3>Research Methodology</h3>
Step 1: Image capture
As the system works in, either online or offline stages, the capture stage have two phases. In offline phase, the video is captured and recorded, and then whole video is extracted into frames. On the other hand, the online phase is working by capture an instant image and decide directly if it is open or closed.

Step 2: Face Detection
Face detection is an indispensable step and it is the actual first step of the system framework. It determines if the later stages are going to run or not. In the proposed system Viola Jones algorithm is applied for face detection and tracking. The Viola Jones algorithm is more efficient for tracking than the AdaBoost Algorithm when working with multiple image frames. Viola Jones can detect more than face if the image contains multi faces (it can detect the correct face with the existing of other people or objects). It can track different types of facial views, not only the frontal view like AdaBoost that needs to a Lucas–Kanade–Tomasi (LKT) based method to support non-frontal faces. Viola Jones is characterized by being extremely fast and achieving high detection rates. The basic idea of this algorithm is to slide a window across the image and evaluate a face model at every location, this window or bounding box serves to restrict the region of the image that is searched for the eyes.

Step 3: Facial Landmark Detection:
Detecting facial landmarks is a subset of the shape prediction problem. Given an input image, a shape predictor attempts to localize key points of interest along the shape.
Our goal is detect important facial structures on the face using shape prediction methods.
There are a variety of facial landmark detectors, but all methods essentially try to localize and label the following facial regions:
Mouth
Right eyebrow
Left eyebrow
Right eye
Left eye
Nose
Jaw
Step 4:Iris Detection
We make the following assumptions for detecting and tracking irises:
• The image is a frontal view of the face, i.e. the two eyes are visible and have approximately the same distance from the camera.
• The iris in each eye is at least partially visible. • The brightness of the iris is lower than that of the visible part of the sclera.
• An average ratio between iris size and distance between eyes is known. • The line between the two centres of the irises must not deviate by more than 30° from the xaxis of the image.
• The subject may not be closer than 0.5 m to the camera and not further away than 5 m.

Step 5: Blink Detection
The algorithm works with both videos or with static images. In its most basic form, the algorithm begins by tracking the face and eye regions of the subject at hand and then applies image differencing, binary thresholding, and morphological operators on the eye regions to determine whether the eyes are open, and if they are open, it will grab the templates of the open eyes. Once the algorithm has the templates, for every subsequent frame it performs a template matching on the eye regions of that frame for both eyes. Since template matching metric is normalized squared­ difference, the smallest values in the template matching matrices are used as the similarity scores. If the similarity score exceeds a given threshold (in this case, the higher the similarity score, the greater the difference) for one of the 2 eyes, that frame will be classified as “blink”; if neither similarity score exceeded the threshold (or no face was found in the frame), the frame will be classified as “non­blink”.

References
[1] Statistics about Paralysis. [Online]. Available: https://www.eyecomtec.com/3016-Statistics-about-Paralysis
[2] A Rosebrock. (2017, Apr. 3). Facial landmarks with dlib, OpenCV, and Python [Online]. Available: https://www.pyimagesearch.com/2017/04/03/facial-landmarks-dlib-opencv-python/
[3] T. Soukupova and J. Cech. (2016, Feb. 3) Real-Time Eye Blink Detection using Facial Landmarks. Center for Machine Perception, Department of Cybernetics Faculty of Electrical Engineering, Czech Technical University in Prague. Prague, Czech Republic. [Electronic]. Availible: https://vision.fe.uni-lj.si/cvww2016/proceedings/papers/05.pdf
[4] V. Kazemi and J. Sullivan. (2014) One Millisecond Face Alignment with an Ensemble of Regression Trees. Royal Institute of Technology Computer Vision and Active Perception Lab. Stockholm, Sweden. [Electronic]. Availible: https://pdfs.semanticscholar.org/d78b/6a5b0dcaa81b1faea5fb0000045a62513567.pdf
[5] K. Toennies, F. Behrens, M. Aurnhammer. (2002, Dec. 10). Feasibility of Hough-Transform-based Iris Localisation for Real-Time-Application. Dept. of Computer Science, Otto-von-Guericke Universität. Magdeburg, Germany. [Electronic]. Available: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.69.3667&rep=rep1&type=pdf
[6] B. Raghavan. (2015). Real Time Blink Detection For Burst Capture. Stanford University. Stanford, CA. [Electronic]. Available: https://web.stanford.edu/class/cs231m/projects/final-report-raghavan.pdf
[7] W. Mitchell, C. Ho, H. Patel, K. MacDorman. (2010). Does social desirability bias favor humans? Explicit-implicit evaluations of synthesized speech support a new HCI model of impression management. School of Informatics, Indiana University. Indianapolis, IN. [Electronic]. Available:http://macdorman.com/kfm/writings/pubs/Mitchell2010DoesSocialDesirabilityBiasFavorHumans.pdf
[8] C. Pinheiro, E. Naves, P. Pino, E. Losson, A. Andrade, G. Bourhis. (2011). "Alternative communication systems for people with severe motor disabilities", BioMedical Engineering OnLine. 10:31. April 2011. [Electronic]. Available: https://biomedical-engineering-online.biomedcentral.com/articles/10.1186/1475-925X-10-31
[9] C. Sforza, M. Rango, D. Galante, N. Bresolin, V. Ferrario. (2008). Spontaneous blinking in healthy persons: an optoelectronic study of eyelid motion. Functional Anatomy Research Center, Università degli Studi. Milano, Italy. [Electronic]. Available:https://www.ncbi.nlm.nih.gov/pubmed/18565090
