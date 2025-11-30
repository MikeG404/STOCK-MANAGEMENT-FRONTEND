function FeatureSection({ renderView }) {
    return (
        <section className="h-full grow p-8 border border-black rounded-2xl">
            <div>
                {renderView()}
            </div>
        </section>
    );
}

export default FeatureSection;