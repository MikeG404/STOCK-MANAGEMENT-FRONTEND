function FeatureSection({ renderView }) {
    return (
        <section className="h-full grow flex justify-center items-center p-8 border border-black rounded-2xl">
            <div>
                <h1 className="text-5xl">DATATABLE OF ARTICLES</h1>
                {renderView()}
            </div>
        </section>
    );
}

export default FeatureSection;