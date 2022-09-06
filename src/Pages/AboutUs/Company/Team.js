import React from 'react';
import './team.css'
import TeamMember from './TeamMember';



const Team = () => {
    const teamData=[
        {id:1,name:"Ali Ibne Msud",designation:"Web Developer",desc:"",facebook:"",linkedin:"",twitter:"",image:""},
        {id:2,name:"MD. NAHID",designation:"Web Developer",desc:"",facebook:"",linkedin:"",twitter:"",image:""},
        {id:3,name:"MD. Tanvir Alam",designation:"Web Developer",desc:"",facebook:"",linkedin:"",twitter:"",image:""},
        {id:4,name:"Rijon Ahmed",designation:"Web Developer",desc:"",facebook:"",linkedin:"",twitter:"",image:""},
        {id:5,name:"Anis Hussain Arif",designation:"Web Developer",desc:"",facebook:"",linkedin:"",twitter:"",image:""},
        {id:6,name:"Sabbir Ahmed Shuvo",designation:"Web Developer",desc:"",facebook:"",linkedin:"",twitter:"",image:""},
        {id:6,name:"Nahidul Islam",designation:"Web Developer",desc:"",facebook:"",linkedin:"",twitter:"",image:""},
    ]
    return (
        <>
        
        <main className='team-container min-h-screen w-full lg:p-10 py-5 px-2  mt-2'>
             <h1 className='text-3xl mb-10 text-white uppercase lg:ml-12'>Our team</h1>

             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        teamData.map(team=><TeamMember key={team.id} team={team} />)
                    }
             </div>
        </main>
        </>
    );
};

export default Team;