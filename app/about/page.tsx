import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>

<div className='flex justify-center items-center bg-indigo-200 p-5 md:p-8 rounded-xl mx-auto w-full sm:w-3/4 lg:w-3/4 lg:min-h-[75vh]'>
  <div className='py-6 px-4 sm:px-6 bg-white shadow-md rounded-md overflow-y-auto hide-scrollbar w-full my-8'>
        <section className="about-section">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 font-semi-bold navfont "> About Gamer Date</h3>
        <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-lg">
        
          <p>
            Welcome to Gamer Date, where gamers can connect, play, and build
            meaningful relationships.
          </p>
        <br></br>
          <p>
           We strive to provide you with the best opportunities to meet and connect with other gamers above the age of 18. Say goodbye to the days where your team is filled with children. 
          </p>
          </div>
        </section>
        <br></br>
        <section className="getting-started-section my-8">
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-center mb-2 font-semi-bold navfont ml-8 md:-mb-12 lg:mb-10 sm:-mb-8 sm:mt-8 sm:-ml-4"> Getting Started </h3>
        <img className=" h-[30vh] -mt-24 object-cover ml-2 md:-ml-6 sm:w-auto w-[35%] lg:w-[45vh] md:w-[35vh] -mb-14 sm:-mb-20 sm:-ml-10  md:-mb-12 lg:-mb-10 lg:ml-2" src="/5.png" alt="logo" />
        
          <div className="bg-indigo-50 p-6 rounded-lg shadow-lg ">
        <ul className="list-decimal ml-4">
            <li className="mb-4">
              <strong>Sign Up</strong>
              <p>Visit the Gamer Date website or download the app, and click on the Sign Up link to create your account.</p>
            </li>
            <li className="mb-4">
              <strong>Complete Your Registration</strong>
              <p>Enter additional details like your gaming nickname, age, and location to complete your registration.</p>
            </li>
            <li className="mb-4">
              <strong>Create Your Profile</strong>
              <p>Write about yourself, focusing on your gaming interests and personality, and specify your favorite games and consoles.</p>
            </li>
            <li className="mb-4">
              <strong>Express Your Gaming Preferences</strong>
              <p>Let others know your preferred way to connect and what you&apos;re looking for on Gamer Date, be it squads, friends, or followers.</p>
            </li>
            <li className="mb-4">
              <strong>Upload a Profile Photo</strong>
              <p>Choose a profile photo that showcases your personality or gaming persona.</p>
            </li>
            <li className="mb-4">
              <strong>Explore and Connect</strong>
              <p>Browse gamer profiles and show interest by clicking the heart button, or pass by clicking the X button.</p>
            </li>
            <li className="mb-4">
              <strong>Matching with Other Gamers</strong>
               <p>When mutual interest is shown, gamers appear on each other&apos;s &apos;Matches&apos; page, where you can view their full profile and connect.</p>
            </li>
            <li className="mb-4">
              <strong>Start Building Connections</strong>
              <p>Reach out to your matches and start building friendships, squads, or streaming partnerships.</p>
            </li>
          </ul>
          </div>
        </section>

       
        
        <br></br>
        <section className="endorsements-section ">
          <h2 className="text-3xl font-semi-bold text-center mb-6 navfont">What Gamers are saying about Gamer Date</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-4 rounded-lg shadow-lg">
              <p className="font-semibold">EpicRogueQueen</p>
              <p>&quot;Gamer Date is a game-changer! It&apos;s been amazing for finding my squad. We&apos;ve been dominating leaderboards ever since. Big shoutout to Gamer Date for making this possible!&quot;</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg shadow-lg">
              <p className="font-semibold">PixelPaladin42</p>
              <p>&quot;Never knew how many like-minded gamers were out there until I joined Gamer Date. I&apos;ve built so many incredible friendships and even found my perfect duo partner for co-op campaigns. Highly recommend it to any gamer looking to expand their network!&quot;</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg shadow-lg md:col-span-2">
              <p className="font-semibold">MysticMage88</p>
              <p>&quot;As someone who always struggled to find a reliable team for competitive play, Gamer Date has been a lifesaver. It&apos;s like a social network but just for gamers. I&apos;ve met some awesome people, and our team synergy is off the charts!&quot;</p>
            </div>
          </div>
        </section>
        <br></br>
        <section className="how-it-works-section">
       
          <h4 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-center mb-2 mt-4 navfont font-semi-bold">
        Contact Us
      </h4>
<div className="bg-indigo-50 p-6 rounded-lg shadow-lg mb-6 navfont">
   
      <p className="text-base sm:text-lg mb-4">
        We're here to help! If you have any questions, concerns, or need to report any suspicious behavior on our site, our dedicated team is ready to assist you. Ensuring a safe and positive experience for all our users is our top priority, and we welcome your feedback to help us achieve this goal.
      </p>
      <br></br>
      <p className= 'text-base sm:text-lg'>Fill out our online <Link href="/contact" className=" text-lg font-bold text-indigo-700"> contact form </Link> with your message, and one of our staff members will get back to you as soon as possible.</p>
      </div>
      <h4 className="sm:text-2xl text-center mb-8 font-bold"> Be sure to read the community standards</h4>
          <p className='text-center'>
            Read the Community Standards <Link href="/faqs" className="text-lg text-indigo-500 font-bold"> here. </Link>
          </p>
   
        </section>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;