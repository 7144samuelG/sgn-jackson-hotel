import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { Header } from "../components/Header";
const Story = () => {
  return (
    <div>
      
      <div className="z-0 h-[300px] border">
        <Image
          src="/images/story.jpg"
          width={400}
          height={200}
          className="w-full h-[500px]"
          alt=""
        />
      </div>
      <div className="mt-[200px] w-[95%] text-left md:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="mb-9 pt-5 text-2xl font-semibold">PRIVACY POLICY</h1>
        <h3 className="pb-5 font-semibold">23 May 2018</h3>
        <h3 className="pb-5 font-semibold">Privancy Policy</h3>
        <p className="pb-5">
          At Jackson&#39;s Hotel, we are committed to protecting and respecting
          the privacy of guests who use our website and our services. We have
          updated our Privacy Policy in line with the new GDPR legislation
          coming into effect on 25th May 2018. Please read this Privacy Policy
          carefully and ensure that you understand it. By using our website, you
          are agreeing to be bound by this Policy. Please note that the Policy
          relates only to living individuals in relation to personal data
          relating directly to themselves, and not to persons in any other
          capacity.
        </p>
        <h3 className="Information About Us">Privancy Policy</h3>
        <p className="pb-5">
          This site is owned by Jackson&#39;ss Hotel, a limited company
          registered in Ireland trading as Rose Hospitality. When we talk about
          “Jackson&#39;s Hotel”, or “us” or “we” in this policy, we are talking
          about Jackson&#39;ss Hotel.
        </p>
        <h3 className="pb-5 font-semibold">
          Information we may collect from you
        </h3>
        <p className="pb-5">
          We collect personal data from you which you volunteer when you provide
          such personal data to us, or via our services with which you interact.
          We may also be given other personal data relating to you by other
          persons, or we may obtain such other personal data about you as may be
          provided to us in the course of our legitimate business activities. We
          may collect and process Data. Including the following in the course of
          providing services to you, which could contain your personal data:
          Your full name; your address; your various email addresses; your
          various phone numbers including mobile phone numbers; your
          nationality; your address; financial information about you, including
          your bank account details, credit card details, or other payment
          details; details of contracts you have entered with third parties for
          us to provide services to you; details of your relationship to other
          parties; details of your membership of professional or other
          organisations; your date of birth; details of your children and other
          relations; medical details, including details of allergies; details of
          your car registration number; details of your driving licence; details
          of your passport and all other Data which you ask us to process on
          your behalf, or which is necessary for us to process in order for us
          to fulfil our role as providing accommodation, gym, leisure. Retail or
          food related services to you. We may also process other data, which is
          not personal data. When you access our website or wi-fi facilities,
          your device&#39;s browser provides us with information such as your IP
          address, browser type, access time and referring URL which is
          collected and used to compile statistical data. This information may
          be used to help us to improve our website and the services we offer,
          and to offer services to you.
        </p>
        <h3 className="pb-5 font-semibold">Contact us</h3>
        <p className="pb-5">
          Questions, comments, requests and complaints regarding this Policy and
          the information we hold are welcome and should be addressed to us at
          samutech144@gmail.com
        </p>
      </div>
    </div>
  );
};
export default Story;
