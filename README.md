<p align="center">
  <img 
    alt="Inland Empire Software Development Logo" 
    src="https://user-images.githubusercontent.com/36907562/55706662-9ae24f80-5996-11e9-9557-3a8440c5926a.png" 
    width="100px" >
</p>
<h1 align="center"> 
  Hack Day
</h1>
<p align="center">
  <a href="https://www.facebook.com/iesdinc/">
    <img 
      alt="Facebook logo" 
      src="https://en.facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png" 
      width="35px">
  </a>
  <a href="https://join.slack.com/t/ie-sd/shared_invite/enQtNTY1NDU3MTg4NDE5LWZiNjViZmQ0ODhmN2Q0NTg1NWQwZTcyODEyYmM4ZGYxNjZkM2UxYzU5OTZkMDY4YzljYjIwZGY4YmEyNzRlNjA">
    <img 
      alt="Slack logo"
      src="https://cdn-images-1.medium.com/max/1600/1*rncLjp_nxRi08Y8AKZCJVA.png"
      width="40px">
  </a>
</p>

<p align="center">
  Welcome to the official repository for the IESD Hack Day event.
</p>


# Hack Day October 2019

## Challenge

**Description**: DNA is a very stable and compact storage medium. The language of DNA consists of four bases, each of which may be thought of as a character in the DNA alphabet. For our purposes, these characters (in order) are: A, T, G, and C. We would like to store digital data in DNA!

**Challenge**: Construct a program in the language of your choice that satisfies as many of the following objectives as possible.

## Tasks

**Objective 1 (COMPLETED)**: (20 pts) Provide a mechanism to encode arbitrary standard ASCII text strings as DNA. Recall that ASCII characters have numeric values of 0 to 255.

Input: a, Output: TGAT

Input: cat, Output: TGACTGATTCTA

**Objective 2 (COMPLETED)**: (30 pts) Using your favorite unit test framework, write the unit tests you feel are necessary to adequately test the code you wrote as your answer to object one.

**Objective 3 (COMPLETED)**: (30 pts) Create a simple user interface for users to interact with your program - input/output for your program.

**Objective 4 (COMPLETED)**: (30 pts) RNA is very similar to DNA, but it replaces T with U. Make your program capable of encoding as either DNA or RNA.

**Objective 5**: (40 pts) Provide an interface for identifying standard ASCII text substrings encoded as DNA; the interface should provide the zero-based index where the substring begins or -1 if it does not exist.

**Objective 6**: (40 pts) DNA actually consists of two, complementary strands that are attached in such a way that every A matches T and G matches C (and the inverses). Given a complementary strand of DNA, output the ASCII equivalent of the primary strand.

Examples:

Input: ACTGACTAAGAT, Output: cat

**Objective 7 (COMPLETED)**: (50 pts) Add the ability to log all requests. Store the input, the time it took to convert it from ASCII text to DNA or RNA, output and a time stamp.

Objective 8: (80 pts) Given two (single) strands of DNA, provide an interface that allows finding the longest common subsequence of the two. Recall that common subsequences need not be consecutive.

## Team

* Rebecca Hom - Team Lead, Backend
* Jimmy Chen - Test Writer, Backend
* Daniel Jacquez - Frontend
