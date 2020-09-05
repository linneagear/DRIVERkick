import React from 'react';
import "./style.css";
import { useDriverKickContext } from '../../../utils/DriverKickContext';
import GlobalNavBar from '../../GlobalNavBar';
import SignUpMainWrapper from '../SignUpMainWrapper';
import SignUpForm from '../SignUpForm';

function SignUpPage() {
    const { setNavType } = useDriverKickContext();
    setNavType("signup");
    return (
        <div>
            <GlobalNavBar />
            <SignUpMainWrapper>
                <SignUpForm />
            </SignUpMainWrapper>
        </div>
    );
}

export default SignUpPage;