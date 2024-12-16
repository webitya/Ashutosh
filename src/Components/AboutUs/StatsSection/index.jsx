const StatsSection = () => {
    return (
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-5xl font-bold text-blue-600">350+</h3>
            <p className="mt-2 text-gray-600">Employee-Owners</p>
          </div>
  
          {/* Stat 2 */}
          <div>
            <h3 className="text-5xl font-bold text-blue-600">12</h3>
            <p className="mt-2 text-gray-600">Offices</p>
          </div>
  
          {/* Stat 3 */}
          <div>
            <h3 className="text-5xl font-bold text-blue-600">4</h3>
            <p className="mt-2 text-gray-600">States</p>
          </div>
  
          {/* Stat 4 */}
          <div>
            <h3 className="text-5xl font-bold text-blue-600">1945</h3>
            <p className="mt-2 text-gray-600">Founded in Montana</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  