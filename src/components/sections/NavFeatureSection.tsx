function NavFeatureSection({ setView }) {
    return (
        <section className="max-w-xs h-full flex-1 p-8 border border-black rounded-2xl">
            <div>
                <ul>
                    <li onClick={() => setView('articles')}>Articles</li>
                    <li onClick={() => setView('dynamic-test')}>Dynamic Test</li>
                </ul>
            </div>
        </section>
    );
}

export default NavFeatureSection;