function NavFeatureSection({ setView }) {
    return (
        <section className="max-w-xs h-full flex-1 flex flex-col justify-center p-8 border border-black rounded-2xl">
            <div>
                <ul>
                    <li onClick={() => setView('articles')}>Articles</li>
                    <li onClick={() => setView('dynamic-test')}>Dynamic Test</li>
                </ul>
                <h1 className="text-5xl">FEATURES</h1>
            </div>
        </section>
    );
}

export default NavFeatureSection;