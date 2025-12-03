import { Link, NavLink } from "react-router";

function NavFeatureSection() {
    return (
        <section className="max-w-xs h-full flex-1 p-8 border border-black rounded-2xl">
            <div>
                <ul>
                    <NavLink 
                        to="/dashboard/articles"
                        className={({ isActive }) => isActive ? 'text-blue-500' : ''}>
                        <li>Articles</li>
                    </NavLink>
                    <NavLink 
                        to="/dashboard/dynamic-test"
                        className={({ isActive }) => isActive ? 'text-blue-500' : ''}>
                        <li>Dynamic Test</li>
                    </NavLink>
                </ul>
            </div>
        </section>
    );
}

export default NavFeatureSection;