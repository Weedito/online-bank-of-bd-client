import React, { useRef } from 'react';
import {BsFacebook,BsLinkedin,BsTwitter} from 'react-icons/bs'

const TeamMember = ({team}) => {
   
    return (
        <div  className="card team-card duration-500 cursor-pointer lg:w-96 mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <div className="avatar online">
        <div className="w-24 rounded-full">
          <img src={team.image} alt="" />
        </div>
      </div>
        </figure>
        <div  className="card-body   gap-0 items-center text-center">
          <h2 className="card-title">{team.name}</h2>
          <p className='text-[#A8A8A8] text-sx'><small>Web Developer</small></p>
          <p className='mt-5 text-[#A8A8A8] text-sx'>{team.desc.length>200?`${team.desc.slice(0,150)}...`:team.desc}</p>
          <div className="card-actions mt-8">
                <div className='flex gap-x-7'>
                  <a href={team.facebook} target="_blank"><BsFacebook  className='w-6 team-icon h-6 text-[#27589D]' /> </a>
                  <a href={team.linkedin}> <BsLinkedin className='w-6 h-6 team-icon text-[#0075B7]' /> </a>
                  <a href={team.twitter}><BsTwitter  className='w-6 team-icon h-6 text-[#06AFFF]'/> </a>
                </div>
          </div>
        </div>
      </div>
    );
};

export default TeamMember;