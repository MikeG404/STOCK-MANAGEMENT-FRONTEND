import { Link } from "react-router";

function NavFeatureSection() {
    return (
        <section className="max-w-xs h-full flex-1 p-8 border border-black rounded-2xl">
            <div>
                <ul>
                    <Link to="/dashboard/articles">
                        <li>Articles</li>
                    </Link>
                    <Link to="/dashboard/dynamic-test">
                        <li>Dynamic Test</li>
                    </Link>
                </ul>
            </div>
        </section>
    );
}

export default NavFeatureSection;