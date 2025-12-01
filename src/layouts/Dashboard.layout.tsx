import FeatureSection from "../components/sections/FeatureSection";
import NavFeatureSection from "../components/sections/NavFeatureSection";

function DashboardLayout() {

    return (
        <main className="h-screen flex gap-4 p-4">
            <NavFeatureSection />
            <FeatureSection />
        </main>
    )
}

export default DashboardLayout;