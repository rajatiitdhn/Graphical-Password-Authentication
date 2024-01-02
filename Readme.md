# Graphical Password Authentication System

<h2>Project Overview :</h2> 
This project aims to develop a secure and user-friendly graphical password authentication system to enhance traditional text-based password security. Users will enroll by uploading and arranging a sequence of 9 pictures, which will serve as their graphical password for subsequent logins.

<h2>Features :</h2> 
<ul>
<li> Graphical Password Enrollment : Users will select and arrange 9 pictures as their 
password, enhancing memorability and reducing vulnerability to brute-force 
attacks.<br></li>
<li> Random Image Presentation : During login, the pictures will be presented in a 
randomized order to prevent shoulder-surfing attacks.<br></li>
<li> Secure Hashing: Strong hashing algorithms will be used to store password data 
securely, protecting against unauthorized access.<br></li>
<li> Real-Time Authentication : Verification of users during login by replicating the 
same picture sequence.<br></li>
<li> Security measures : Account locking after a defined number of failed login 
attempts, in our case it is 4 attempts.<br></li>
</ul>

<h2>Technology stack :</h2>
<ul>
<li> Visual Studio code : code editor for writing all the codes<br></li>
<li> HTML : for the frontend structuring<br></li>
<li> CSS : for the frontend designing<br></li>
<li> JavaScript : for making the project responsive<br></li>
<li> Firebase : firebase database for storing data<br></li>
</ul>
<h2>Implementation Details:-</h2> 
<ul>
 <li> Frontend development : Developing a frontend interface for picture uploading 
and arrangement for enrollment using HTML , CSS and JavaScript.</li>
<li> Data Storage : Using Firebase Databse for storing user data, including pictures 
and authentication details.</li>
<li> Authentication : Pictures are presented in a randomized order during login 
attempts to prevent shoulder-surfing attacks.</li>
<li> Verification : Logic is implemented using JavaScript to verify whether the user selected pictures match the stored sequence for authentication.
<li> Encryption : Strong encryption technique or hashing algorithms SHA-256 is implemented using JavaScript to securely store picture sequences.</li>
<li> Account locking : A mechanism is implemented using Javascript to lock user 
accounts temporarily after four failed login attempts to prevent brute-force 
attacks.</li>
</ul>

