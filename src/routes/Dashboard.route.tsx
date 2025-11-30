import FeatureSection from "../components/sections/FeatureSection";
import NavFeatureSection from "../components/sections/NavFeatureSection";

function DashboardRoute() {
 
    return (
        <div className="h-full flex gap-4 p-4">
            <NavFeatureSection />
            <FeatureSection />
        </div>
    )
}

export default DashboardRoute;