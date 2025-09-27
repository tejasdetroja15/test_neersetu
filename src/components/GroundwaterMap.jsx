
// components/GroundwaterMap.jsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import './Features.css';

const GroundwaterMap = () => {
  const chartRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  // Groundwater data for Indian states (amCharts compatible)
  const groundwaterData = [
    { id: "IN-JK", name: "Jammu & Kashmir", groundwater: 20, metro: "Srinagar: 19m", status: "Low" },
    { id: "IN-LA", name: "Ladakh", groundwater: 18, metro: "Leh: 17m", status: "Low" },
    { id: "IN-HP", name: "Himachal Pradesh", groundwater: 22, metro: "Shimla: 20m", status: "Moderate" },
    { id: "IN-PB", name: "Punjab", groundwater: 19, metro: "Chandigarh: 18m", status: "Low" },
    { id: "IN-HR", name: "Haryana", groundwater: 24, metro: "Gurgaon: 22m", status: "Moderate" },
    { id: "IN-DL", name: "Delhi", groundwater: 20, metro: "Delhi: 20m", status: "Low" },
    { id: "IN-UT", name: "Uttarakhand", groundwater: 23, metro: "Dehradun: 22m", status: "Moderate" },
    { id: "IN-UP", name: "Uttar Pradesh", groundwater: 26, metro: "Lucknow: 25m", status: "Moderate" },
    { id: "IN-RJ", name: "Rajasthan", groundwater: 30, metro: "Jaipur: 29m", status: "Good" },
    { id: "IN-GJ", name: "Gujarat", groundwater: 18, metro: "Ahmedabad: 16m", status: "Low" },
    { id: "IN-MP", name: "Madhya Pradesh", groundwater: 27, metro: "Bhopal: 26m", status: "Good" },
    { id: "IN-BR", name: "Bihar", groundwater: 28, metro: "Patna: 29m", status: "Good" },
    { id: "IN-JH", name: "Jharkhand", groundwater: 27, metro: "Ranchi: 26m", status: "Good" },
    { id: "IN-WB", name: "West Bengal", groundwater: 21, metro: "Kolkata: 20m", status: "Moderate" },
    { id: "IN-CT", name: "Chhattisgarh", groundwater: 26, metro: "Raipur: 25m", status: "Moderate" },
    { id: "IN-OR", name: "Odisha", groundwater: 26, metro: "Bhubaneswar: 25m", status: "Moderate" },
    { id: "IN-MH", name: "Maharashtra", groundwater: 25, metro: "Mumbai: 24m, Pune: 23m", status: "Moderate" },
    { id: "IN-TG", name: "Telangana", groundwater: 24, metro: "Hyderabad: 23m", status: "Moderate" },
    { id: "IN-AP", name: "Andhra Pradesh", groundwater: 24, metro: "Visakhapatnam: 23m", status: "Moderate" },
    { id: "IN-KA", name: "Karnataka", groundwater: 23, metro: "Bengaluru: 21m", status: "Moderate" },
    { id: "IN-GA", name: "Goa", groundwater: 18, metro: "Panaji: 17m", status: "Low" },
    { id: "IN-KL", name: "Kerala", groundwater: 15, metro: "Kochi: 14m", status: "Low" },
    { id: "IN-TN", name: "Tamil Nadu", groundwater: 22, metro: "Chennai: 21m", status: "Moderate" },
    { id: "IN-AS", name: "Assam", groundwater: 28, metro: "Guwahati: 26m", status: "Good" },
    { id: "IN-AR", name: "Arunachal Pradesh", groundwater: 35, metro: "Itanagar: 34m", status: "Good" },
    { id: "IN-NL", name: "Nagaland", groundwater: 25, metro: "Kohima: 24m", status: "Moderate" },
    { id: "IN-MN", name: "Manipur", groundwater: 26, metro: "Imphal: 25m", status: "Moderate" },
    { id: "IN-MZ", name: "Mizoram", groundwater: 24, metro: "Aizawl: 23m", status: "Moderate" },
    { id: "IN-TR", name: "Tripura", groundwater: 25, metro: "Agartala: 24m", status: "Moderate" },
    { id: "IN-ML", name: "Meghalaya", groundwater: 30, metro: "Shillong: 29m", status: "Good" },
    { id: "IN-SK", name: "Sikkim", groundwater: 22, metro: "Gangtok: 21m", status: "Moderate" }
  ];

  const getColor = (level) => {
    if (level >= 30) return '#4ade80'; // Good - Green
    if (level >= 22) return '#3fb7ff'; // Moderate - Blue  
    if (level >= 18) return '#fbbf24'; // Low - Yellow
    return '#ef4444'; // Critical - Red
  };

  // Load amCharts scripts dynamically
  useEffect(() => {
    const loadAmChartsScripts = async () => {
      // Check if amCharts is already loaded
      if (window.am5 && window.am5map && window.am5geodata_indiaLow) {
        setIsLoaded(true);
        return;
      }

      const scripts = [
        'https://cdn.amcharts.com/lib/5/index.js',
        'https://cdn.amcharts.com/lib/5/map.js',
        'https://cdn.amcharts.com/lib/5/geodata/indiaLow.js',
        'https://cdn.amcharts.com/lib/5/themes/Animated.js'
      ];

      try {
        // Load scripts sequentially
        for (const scriptSrc of scripts) {
          // Check if script is already loaded
          if (document.querySelector(`script[src="${scriptSrc}"]`)) {
            continue;
          }

          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.async = true;
            script.onload = () => {
              console.log(`Loaded: ${scriptSrc}`);
              resolve();
            };
            script.onerror = (error) => {
              console.error(`Failed to load: ${scriptSrc}`, error);
              reject(error);
            };
            document.head.appendChild(script);
          });
        }

        // Small delay to ensure all scripts are initialized
        setTimeout(() => {
          if (window.am5 && window.am5map && window.am5geodata_indiaLow) {
            console.log('All amCharts scripts loaded successfully');
            setIsLoaded(true);
          } else {
            console.error('amCharts scripts not properly initialized');
            setLoadingError(true);
          }
        }, 200);

      } catch (error) {
        console.error('Error loading amCharts scripts:', error);
        setLoadingError(true);
      }
    };

    loadAmChartsScripts();
  }, []);

  // Initialize the amCharts map
  useEffect(() => {
    if (!isLoaded || !chartRef.current) return;

    let root = null;

    const createMap = () => {
      try {
        console.log('Initializing amCharts map...');
        
        // Create root element
        root = window.am5.Root.new(chartRef.current);
        
        // Set theme
        root.setThemes([window.am5themes_Animated.new(root)]);

        // Create the map chart
        const chart = root.container.children.push(
          window.am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            wheelY: "zoom",
            projection: window.am5map.geoMercator(),
            homeZoomLevel: 1,
            homeGeoPoint: { longitude: 78.9629, latitude: 20.5937 } // Center of India
          })
        );

        // Create polygon series for India states
        const polygonSeries = chart.series.push(
          window.am5map.MapPolygonSeries.new(root, {
            geoJSON: window.am5geodata_indiaLow,
            valueField: "groundwater",
            calculateAggregates: true
          })
        );

        // Configure polygon templates
        polygonSeries.mapPolygons.template.setAll({
          tooltipText: "{name}\nGroundwater Level: {groundwater}m\nStatus: {status}\nMajor Cities: {metro}",
          interactive: true,
          stroke: window.am5.color("#ffffff"),
          strokeWidth: 1,
          fillOpacity: 0.9,
          strokeOpacity: 1
        });

        // Set colors based on groundwater levels
        polygonSeries.mapPolygons.template.adapters.add("fill", function(fill, target) {
          const dataItem = target.dataItem;
          if (dataItem && dataItem.dataContext && dataItem.dataContext.groundwater) {
            const level = dataItem.dataContext.groundwater;
            return window.am5.color(getColor(level));
          }
          return window.am5.color("#6b7280"); // Default gray
        });

        // Add hover effects
        polygonSeries.mapPolygons.template.states.create("hover", {
          fillOpacity: 1,
          strokeWidth: 2,
          stroke: window.am5.color("#ffffff")
        });

        // Set the data
        polygonSeries.data.setAll(groundwaterData);

        console.log('amCharts map created successfully with', groundwaterData.length, 'states');

      } catch (error) {
        console.error('Error creating amCharts map:', error);
        setLoadingError(true);
      }
    };

    // Wait for next tick to ensure DOM is ready
    const timeoutId = setTimeout(createMap, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (root) {
        console.log('Disposing amCharts root');
        root.dispose();
      }
    };
  }, [isLoaded]);

  return (
    <section className="bg-[#0b0f17] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="features-header">
          {/* <span className="features-pill">Groundwater</span> */}
          <h2 className="features-title">India Groundwater Levels</h2>
          <p className="features-subtitle">
            Interactive map showing groundwater levels across Indian states. 
            Hover over states to view detailed information.
          </p>
        </header>

        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            
            {/* Map Area */}
            <div className="flex-1 relative">
              <div 
                ref={chartRef} 
                style={{ 
                  width: '100%', 
                  height: '600px',
                  background: '#04070A'
                }}
              />
              
              {/* Loading State */}
              {!isLoaded && !loadingError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-white text-lg font-medium">Loading Interactive Map...</p>
                    <p className="text-gray-400 text-sm mt-2">Please wait while we load the map data</p>
                  </div>
                </div>
              )}
              
              {/* Error State */}
              {loadingError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm">
                  <div className="text-center p-8">
                    <div className="text-red-400 text-6xl mb-6">⚠️</div>
                    <h3 className="text-white text-xl font-semibold mb-2">Failed to Load Interactive Map</h3>
                    <p className="text-gray-400 mb-6">Unable to load amCharts library. Please check your internet connection.</p>
                    <button 
                      onClick={() => {
                        setLoadingError(false);
                        setIsLoaded(false);
                        window.location.reload();
                      }} 
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      Retry Loading
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Info Panel */}
            {/* <div className="lg:w-80 bg-black border-l border-gray-800 p-6"> */}
              {/* <div className="space-y-6"> */}
                {/* Legend */}
                {/* <div> */}
                  {/* <h3 className="text-white font-semibold mb-4">Groundwater Level</h3> */}
                  {/* <div className="space-y-3">
                    {[
                      { range: '30m+', status: 'Good', color: '#4ade80' },
                      { range: '22-29m', status: 'Moderate', color: '#3fb7ff' },
                      { range: '18-21m', status: 'Low', color: '#fbbf24' },
                      { range: '<18m', status: 'Critical', color: '#ef4444' }
                    ].map(item => (
                      <div key={item.status} className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">{item.status}</div>
                          <div className="text-gray-400 text-xs">{item.range}</div>
                        </div>
                      </div>
                    ))}
                  </div> */}
                {/* </div> */}

                {/* Stats */}
                {/* <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800"> */}
                  {/* <h4 className="text-white font-medium mb-2">Quick Stats</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total States:</span>
                      <span className="text-white">28 + 8 UTs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Avg Level:</span>
                      <span className="text-white">23.2m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Last Updated:</span>
                      <span className="text-white">2025</span>
                    </div>
                  </div> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>

        {/* Footer Note */}
        {/* <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Values are illustrative. Hover over states to see groundwater data. 
            For official data, consult government sources.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default GroundwaterMap;