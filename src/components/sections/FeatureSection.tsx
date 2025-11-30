import { Outlet } from 'react-router';

function FeatureSection() {
    return (
        <section className="h-full grow p-8 border border-black rounded-2xl">
            <Outlet />
        </section>
    );
}

export default FeatureSection;