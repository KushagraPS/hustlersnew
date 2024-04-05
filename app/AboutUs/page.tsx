import React from 'react';


export default function About() {
    // Define a functional component instead of a class component
    const MainComponent = () => {
        return (
            <div className="main">
                {/* Render the InnerForm component */}
                <InnerForm />
            </div>
        );
    };

    // Define the InnerForm component
    const InnerForm = () => {
        return (
            <div>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nulla eget ex fermentum consequat eu a libero. Phasellus rhoncus tellus id est congue, sit amet faucibus urna gravida.</p>
                <div className="about-us-images">
                    
                </div>
            </div>
        );
    };

    // Return the MainComponent
    return <MainComponent />;
}
