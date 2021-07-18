import React from "react";


// import styles from "./figma.css";
import './figma.css'

const SigninOnboard = () => {
  return (
    <div className='signinOnboard'>
      <div className='group1'>
        <p className='u'>U</p>
        <p className='uTwo'>U</p>
      </div>
      <div className='flexWrapperTwo'>
        <p className='union'>Union</p>
        <p
          className='
            workOnTheRealWorldProjectsWithEas
          '
        >
          Work on the real world projects with easy
          collaboration on different teams.
        </p>
        <p className='signInWith'>Sign-In with </p>
        <img
          alt=""
          className='vector'
          src="https://static.overlay-tech.com/assets/dc8cedd2-4afa-4dbf-b32c-80f1c7aa3ee0.svg"
        />
        <p className='alreadyHaveAnAccount'>
          Already have An account?
        </p>
        <p className='login'>Login.</p>
        <p className='termsOfService'>
          Terms of service
        </p>
      </div>
      <div className='relativeWrapperOne'>
        <div className='foundationsocialLinkedin' />
        <div className='flexWrapperOne'>
          <p className='whyLinkedIn'>
            Why Linked in?
          </p>
          <p
            className='
              collaborationOnProjectsMadeEasyWith
            '
          >
            Collaboration on projects made easy with Union.
          </p>
          <p
            className='
              findThePassionateTeamToKickStartY
            '
          >
            Find the passionate team to kick-start your
            ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninOnboard;