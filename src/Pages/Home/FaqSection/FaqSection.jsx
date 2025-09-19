
const FaqSection = () => {
    return (
        <div className="join w-full my-10 join-vertical bg-base-100">
            <h1 className="text-2xl font-bold text-center mb-7">Frequently Asked Question (FAQ)</h1>
            <p className="text-center mb-5 text-sm">
                Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
            </p>
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
        </div>
    );
};

export default FaqSection;