# Blink to Text (Minor project)
<h3>Abstract</h3
<p>Paralysis is the loss of voluntary muscle control. Over 9.5 million suffer from paralysis in India[1]. Many paralysed people cannot move a single part of their body Even though these people are cognitively aware, they have no means of communication. They have lost their ability to talk, type, etc. These victims have their thoughts and ideas trapped inside of them. Generally, people with paralysis have control over their eye movement. Therefore, the purpose of this project is to build a real time interactive system that allows paralysed people to easily express themselves, via eye blinks.</p>

<h3>Introduction</h3>

<h4>The Problem</h4>
<p>Paralyzed people lack the ability to control muscle function in one or more muscle groups. The condition can be caused by stroke, ALS, multiple sclerosis, and many other diseases. Locked-in Syndrome (LIS) is a form of paralysis where patients have lost control of nearly all voluntary muscles. Due to their condition, these people are unable to talk, text, and communicate in general. Even though people that have LIS are cognitively aware, their thoughts and ideas are locked inside of them. These people depend on eye blinks to communicate. They rely on nurses and caretakers to interpret and decode their blinking. Whenever LIS patients do not have a person to read their eye blinks available, they have no means of self expression.</p>

<h4>The Solution</h4>
<p>This project offers a form of independence to paralyzed people. The software platform converts eye blinks to text. Every feature of the software can be controlled by eye movement. Thus, the software can be independently operated by paralyzed people. Using the software, patients can record messages, recite those messages aloud, and send the messages to others. The software can be run on any low end computer, from a Raspberry Pi to an IBM Thinkpad. The software uses computer vision and Haar cascades to detect eye blinking and convert the motion into text. The program uses language modelling to predict the next words that the user might blink. The software can be easily customized for each patient as well.

<h3>Objective</h3>
<p>Allow paralysis victims to communicate independently.
Many paralysis victims already use eye blinks as a form of communication. It is common for nurses and caretakers to read a patient’s eye blinks and decode the pattern. The ALS association even offers a communication guide that relies on eye blinks.The project automates this task. The software reads a person’s eye blinks and converts them into text. A key feature of the software is that it can be started, paused, and operated entirely with eye blinks. This allows patients to record their thoughts with complete independence. No nurses or caretakers are required to help patients express themselves. Not only does this reduce the financial burden on paralysis patients, but this form of independence can be morally uplifting as well.</p>

<p>Be accessible to people with financial constraints.
Many companies are developing technologies that are controlled by eye movement. These technologies rely on expensive hardware to track a user’s eyes. While these devices can absolutely help LIS victims, they are only available to people that can afford the technology.The project focuses on a different demographic that are often ignored.The software runs on wide variety of low end computers. The only required peripheral is a basic webcam. Not only is this software accessible to paralyzed people, but paralyzed people of almost all financial classes as well.</p>

<h3>Research Methodology</h3>
<<<<<<< HEAD
Step 1: Image capture
As the system works in, either online or offline stages, the capture stage have two phases. In offline phase, the video is captured and recorded, and then whole video is extracted into frames. On the other hand, the online phase is working by capture an instant image and decide directly if it is open or closed.
<br><br>
Step 2: Face Detection
Face detection is an indispensable step and it is the actual first step of the system framework. It determines if the later stages are going to run or not. In the proposed system Viola Jones algorithm is applied for face detection and tracking. The Viola Jones algorithm is more efficient for tracking than the AdaBoost Algorithm when working with multiple image frames. Viola Jones can detect more than face if the image contains multi faces (it can detect the correct face with the existing of other people or objects). It can track different types of facial views, not only the frontal view like AdaBoost that needs to a Lucas–Kanade–Tomasi (LKT) based method to support non-frontal faces. Viola Jones is characterized by being extremely fast and achieving high detection rates. The basic idea of this algorithm is to slide a window across the image and evaluate a face model at every location, this window or bounding box serves to restrict the region of the image that is searched for the eyes.
<br><br>
Step 3: Facial Landmark Detection:
Detecting facial landmarks is a subset of the shape prediction problem. Given an input image, a shape predictor attempts to localize key points of interest along the shape.
Our goal is detect important facial structures on the face using shape prediction methods.
There are a variety of facial landmark detectors, but all methods essentially try to localize and label the following facial regions:
=======
>>>>>>> 3b036f165d907b46efb29a6463971f10115bc2fa
<ul>
  <li>
  Step 1: Image capture
  As the system works in, either online or offline stages, the capture stage have two phases. In offline phase, the video is captured     and recorded, and then whole video is extracted into frames. On the other hand, the online phase is working by capture an instant       image and decide directly if it is open or closed.
  </li>
  <br>
  <li>
  Step 2: Face Detection
  Face detection is an indispensable step and it is the actual first step of the system framework. It determines if the later stages are   going to run or not. In the proposed system Viola Jones algorithm is applied for face detection and tracking. The Viola Jones           algorithm is more efficient for tracking than the AdaBoost Algorithm when working with multiple image frames. Viola Jones can detect more than face if the image contains multi faces (it can detect the correct face with the existing of other people or objects). It can track different types of facial views, not only the frontal view like AdaBoost that needs to a Lucas–Kanade–Tomasi (LKT) based method to support non-frontal faces. Viola Jones is characterized by being extremely fast and achieving high detection rates. The basic idea of this algorithm is to slide a window across the image and evaluate a face model at every location, this window or bounding box serves to restrict the region of the image that is searched for the eyes.
  </li>
  <br>
  <li>
    Step 3: Facial Landmark Detection:
  Detecting facial landmarks is a subset of the shape prediction problem. Given an input image, a shape predictor attempts to localize key points of interest along the shape.
  Our goal is detect important facial structures on the face using shape prediction methods.
  There are a variety of facial landmark detectors, but all methods essentially try to localize and label the following facial regions:
  <ul>
<li>Mouth
<li>Right eyebrow</li>
<li>Left eyebrow</li>
<li>Right eye</li>
<li>Left eye</li>
<li>Nose</li>
<li>Jaw</li>
</ul>
<<<<<<< HEAD
<br><br>
Step 4:Iris Detection
We make the following assumptions for detecting and tracking irises:
• The image is a frontal view of the face, i.e. the two eyes are visible and have approximately the same distance from the camera.
• The iris in each eye is at least partially visible. • The brightness of the iris is lower than that of the visible part of the sclera.
• An average ratio between iris size and distance between eyes is known. • The line between the two centres of the irises must not deviate by more than 30° from the xaxis of the image.
• The subject may not be closer than 0.5 m to the camera and not further away than 5 m.
<br><br>
Step 5: Blink Detection
The algorithm works with both videos or with static images. In its most basic form, the algorithm begins by tracking the face and eye regions of the subject at hand and then applies image differencing, binary thresholding, and morphological operators on the eye regions to determine whether the eyes are open, and if they are open, it will grab the templates of the open eyes. Once the algorithm has the templates, for every subsequent frame it performs a template matching on the eye regions of that frame for both eyes. Since template matching metric is normalized squared­ difference, the smallest values in the template matching matrices are used as the similarity scores. If the similarity score exceeds a given threshold (in this case, the higher the similarity score, the greater the difference) for one of the 2 eyes, that frame will be classified as “blink”; if neither similarity score exceeded the threshold (or no face was found in the frame), the frame will be classified as “non­blink”.
=======
</li>
  <br>
  <li>
  Step 4:Iris Detection
  We make the following assumptions for detecting and tracking irises:
  <ul>
    <li>• The image is a frontal view of the face, i.e. the two eyes are visible and have approximately the same distance from the camera.</li><li>
    • The iris in each eye is at least partially visible. </li>
  <li>• The brightness of the iris is lower than that of the visible part of the sclera.</li>
  <li>• An average ratio between iris size and distance between eyes is known. </li>
  <li>• The line between the two centres of the irises must not deviate by more than 30° from the xaxis of the image.</li>
  <li>• The subject may not be closer than 0.5 m to the camera and not further away than 5 m.</li>
    </ul>
  </li>
    <br>
  <li>
  Step 5: Blink Detection
  The algorithm works with both videos or with static images. In its most basic form, the algorithm begins by tracking the face and eye regions of the subject at hand and then applies image differencing, binary thresholding, and morphological operators on the eye regions to determine whether the eyes are open, and if they are open, it will grab the templates of the open eyes. Once the algorithm has the templates, for every subsequent frame it performs a template matching on the eye regions of that frame for both eyes. Since template matching metric is normalized squared­ difference, the smallest values in the template matching matrices are used as the similarity scores. If the similarity score exceeds a given threshold (in this case, the higher the similarity score, the greater the difference) for one of the 2 eyes, that frame will be classified as “blink”; if neither similarity score exceeded the threshold (or no face was found in the frame), the frame will be classified as “non­blink”.
  </li>
  </ul>
  
 <h3> Screenshots</h3>
 <img src="https://image.ibb.co/kz6aG9/Screenshot_from_2018_10_10_21_28_56.png" alt="Screenshot1" width="640" height="360">
 <h3> References </h3>
[1] Statistics about Paralysis. [Online]. Available: https://www.eyecomtec.com/3016-Statistics-about-Paralysis<br>
[2] A Rosebrock. (2017, Apr. 3). Facial landmarks with dlib, OpenCV, and Python [Online]. Available: https://www.pyimagesearch.com/2017/04/03/facial-landmarks-dlib-opencv-python/<br>
[3] T. Soukupova and J. Cech. (2016, Feb. 3) Real-Time Eye Blink Detection using Facial Landmarks. Center for Machine Perception, Department of Cybernetics Faculty of Electrical Engineering, Czech Technical University in Prague. Prague, Czech Republic. [Electronic]. Available: https://vision.fe.uni-lj.si/cvww2016/proceedings/papers/05.pdf<br>
[4] V. Kazemi and J. Sullivan. (2014) One Millisecond Face Alignment with an Ensemble of Regression Trees. Royal Institute of Technology Computer Vision and Active Perception Lab. Stockholm, Sweden. [Electronic]. Available: https://pdfs.semanticscholar.org/d78b/6a5b0dcaa81b1faea5fb0000045a62513567.pdf<br>
[5] K. Toennies, F. Behrens, M. Aurnhammer. (2002, Dec. 10). Feasibility of Hough-Transform-based Iris Localisation for Real-Time-Application. Dept. of Computer Science, Otto-von-Guericke Universität. Magdeburg, Germany. [Electronic]. Available: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.69.3667&rep=rep1&type=pdf<br>
[6] B. Raghavan. (2015). Real-Time Blink Detection For Burst Capture. Stanford University. Stanford, CA. [Electronic]. Available: https://web.stanford.edu/class/cs231m/projects/final-report-raghavan.pdf<br>
[7] W. Mitchell, C. Ho, H. Patel, K. MacDorman. (2010). Does social desirability bias favor humans? Explicit-implicit evaluations of synthesized speech support a new HCI model of impression management. School of Informatics, Indiana University. Indianapolis, IN. [Electronic]. Available:http://macdorman.com/kfm/writings/pubs/Mitchell2010DoesSocialDesirabilityBiasFavorHumans.pdf<br>
[8] C. Pinheiro, E. Naves, P. Pino, E. Losson, A. Andrade, G. Bourhis. (2011). "Alternative communication systems for people with severe motor disabilities", BioMedical Engineering OnLine. 10:31. April 2011. [Electronic]. Available: https://biomedical-engineering-online.biomedcentral.com/articles/10.1186/1475-925X-10-31<br>
[9] C. Sforza, M. Rango, D. Galante, N. Bresolin, V. Ferrario. (2008). Spontaneous blinking in healthy persons: an optoelectronic study of eyelid motion. Functional Anatomy Research Center, Università degli Studi. Milano, Italy. [Electronic]. Available:https://www.ncbi.nlm.nih.gov/pubmed/18565090<br>
 <h4> Team </h4>
 <ul>
  <li>
    Harshit Kumar (Lcukerd)
    </li>
  <li>
    Arnav Sahai
  </li>
  <li>
    Ayush Rawat
  </li>
  <li>
    Atishay Jain
  </li>
  </ul>
>>>>>>> 3b036f165d907b46efb29a6463971f10115bc2fa
