import { useState } from "react";
import FeatureSection from "../components/sections/FeatureSection";
import NavFeatureSection from "../components/sections/NavFeatureSection";

function DashboardRoute() {
    const [view, setView] = useState("articles");

    const renderView = () => {
        switch (view) {
            case "articles":
                return <div>Articles</div>;
            case "dynamic-test":
                return <div>Dynamic Test</div>;
            default:
                return <div>Articles</div>;
        }
    };


    return (
        <div className="h-full flex gap-4 p-4">
            <NavFeatureSection setView={setView}/>
            <FeatureSection renderView={renderView}/>
        </div>
    )
}

export default DashboardRoute;