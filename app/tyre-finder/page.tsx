"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, Car, Bike, Shield, Info, ArrowRight } from "lucide-react";
import {
  VehicleModel,
  TyreOption,
  getManufacturers,
  getModels,
  getTyreOptions,
  searchVehicles,
} from "@/lib/vehicleData";
import Link from "next/link";

// Premium Custom Select Component
function CustomSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  disabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${disabled ? "opacity-50 pointer-events-none" : ""}`} ref={dropdownRef}>
      <label className="block text-xs font-semibold text-brand-chrome uppercase tracking-wider mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border ${
          isOpen ? "border-brand-red ring-4 ring-brand-red/10" : "border-black/15 hover:border-black/30 hover:shadow-sm"
        } rounded-xl px-4 py-3.5 text-sm font-body text-left flex items-center justify-between transition-all`}
      >
        <span className={selectedOption ? "text-brand-white font-semibold" : "text-brand-muted"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isOpen ? "bg-brand-red/10 text-brand-red" : "bg-gray-50 text-brand-muted"}`}>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        className={`absolute z-30 top-[calc(100%+8px)] left-0 w-full bg-white border border-black/10 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="max-h-60 overflow-y-auto custom-scrollbar p-1.5 flex flex-col gap-0.5">
          {options.length === 0 ? (
            <div className="px-3 py-3 text-sm text-brand-muted text-center bg-gray-50 rounded-lg">No options available</div>
          ) : (
            options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 text-sm font-body rounded-lg transition-all flex items-center justify-between group ${
                  value === opt.value
                    ? "bg-brand-red/5 text-brand-red font-bold"
                    : "text-brand-white hover:bg-gray-50 hover:text-brand-red"
                }`}
              >
                <span>{opt.label}</span>
                {value === opt.value && (
                  <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                )}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default function TyreFinderPage() {
  const [vehicleType, setVehicleType] = useState<"car" | "bike">("car");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<VehicleModel | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>("");

  // Get dynamic options based on selections
  const manufacturers = useMemo(
    () => getManufacturers(vehicleType),
    [vehicleType],
  );
  const availableModels = useMemo(
    () => (selectedManufacturer ? getModels(selectedManufacturer) : []),
    [selectedManufacturer],
  );

  // Search results
  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return [];
    return searchVehicles(searchQuery).filter((v) =>
      vehicleType === "car"
        ? !["Bike", "Scooter"].includes(v.category)
        : ["Bike", "Scooter"].includes(v.category),
    );
  }, [searchQuery, vehicleType]);

  // Derived tyre size and options based on selected variant
  const currentVariant = selectedModel?.variants.find(
    (v) => v.name === selectedVariant,
  );
  const currentTyreSize = currentVariant?.tyreSize;
  const recommendedTyres = useMemo(
    () => (currentTyreSize ? getTyreOptions(currentTyreSize) : []),
    [currentTyreSize],
  );

  // Reset flows when type changes
  const handleTypeChange = (type: "car" | "bike") => {
    setVehicleType(type);
    setSelectedManufacturer("");
    setSelectedModel(null);
    setSelectedVariant("");
    setSearchQuery("");
  };

  // Select a vehicle from direct search
  const handleSelectVehicle = (vehicle: VehicleModel) => {
    setVehicleType(
      ["Bike", "Scooter"].includes(vehicle.category) ? "bike" : "car",
    );
    setSelectedManufacturer(vehicle.manufacturer);
    setSelectedModel(vehicle);
    setSelectedVariant(vehicle.variants[0]?.name || "");
    setSearchQuery(""); // Clear search to hide dropdown
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-dark to-brand-dark-2 relative overflow-hidden">
        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-black/5 text-sm font-body font-semibold text-brand-red mb-6 shadow-sm backdrop-blur-md">
            RECOMMENDATION ENGINE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brand-white mb-6">
            Find the Perfect Tyre for Your <br className="hidden md:block" />
            <span className="text-brand-red">Model & Variant.</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto font-body">
            Search your vehicle or select from the dropdowns below to instantly
            view OEM tyre specifications and top-rated upgrade options from
            global brands.
          </p>
        </div>
      </section>

      {/* Main Finder / Configurator Section */}
      <section className="py-12 border-b border-black/5 relative -mt-8">
        <div className="section-container max-w-5xl">
          <div className="glass-card bg-white shadow-xl shadow-black/5 rounded-3xl p-6 md:p-10 border border-black/10">
            {/* Vehicle Type Toggle */}
            <div className="flex p-1 bg-brand-dark-2 rounded-xl w-full max-w-sm mx-auto mb-10 border border-black/5">
              <button
                onClick={() => handleTypeChange("car")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-body font-semibold transition-all duration-300 ${
                  vehicleType === "car"
                    ? "bg-white text-brand-white shadow-sm"
                    : "text-brand-muted hover:text-brand-white"
                }`}
              >
                <Car size={18} />
                Car / SUV
              </button>
              <button
                onClick={() => handleTypeChange("bike")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-body font-semibold transition-all duration-300 ${
                  vehicleType === "bike"
                    ? "bg-white text-brand-white shadow-sm"
                    : "text-brand-muted hover:text-brand-white"
                }`}
              >
                <Bike size={18} />
                Two Wheeler
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Selection Flow */}
              <div className="space-y-6">
                <h3 className="text-xl font-display font-semibold text-brand-white">
                  Tell us what you drive
                </h3>

                {/* 1. Global Search */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-brand-muted" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="E.g. Maruti Swift, Hyundai Creta..."
                    className="block w-full pl-11 pr-4 py-4 border border-black/15 hover:border-black/30 bg-white rounded-xl font-body text-brand-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                  {/* Search Results Dropdown */}
                  {searchQuery.length > 1 && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-black/10 rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                      {searchResults.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => handleSelectVehicle(v)}
                          className="w-full text-left px-4 py-3 hover:bg-brand-dark-2 border-b border-black/5 last:border-0 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <span className="font-semibold font-body text-brand-white">
                              {v.manufacturer} {v.name}
                            </span>
                            <span className="text-xs text-brand-muted ml-2">
                              {v.year}
                            </span>
                          </div>
                          <span className="text-xs font-semibold bg-brand-dark-2 px-2 py-1 rounded text-brand-chrome">
                            {v.category}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                  {searchQuery.length > 1 && searchResults.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-black/10 rounded-xl shadow-xl z-20 p-4 text-center text-sm text-brand-muted font-body">
                      No matching vehicles found. Try selecting manually.
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-black/10"></div>
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                    OR SELECT MANUALLY
                  </span>
                  <div className="flex-1 h-px bg-black/10"></div>
                </div>

                {/* Step 1: Manufacturer */}
                <CustomSelect
                  label="1. Brand / Manufacturer"
                  placeholder="Select Manufacturer"
                  value={selectedManufacturer}
                  onChange={(val) => {
                    setSelectedManufacturer(val);
                    setSelectedModel(null);
                    setSelectedVariant("");
                  }}
                  options={manufacturers.map(m => ({ value: m, label: m }))}
                />

                {/* Step 2: Model */}
                <CustomSelect
                  label="2. Vehicle Model"
                  placeholder="Select Model"
                  value={selectedModel?.id || ""}
                  onChange={(val) => {
                    const model = availableModels.find((m) => m.id === val);
                    setSelectedModel(model || null);
                    setSelectedVariant(model?.variants[0]?.name || "");
                  }}
                  options={availableModels.map(m => ({ value: m.id, label: `${m.name} (${m.year})` }))}
                  disabled={!selectedManufacturer}
                />

                {/* Step 3: Variant */}
                <CustomSelect
                  label="3. Trim / Variant"
                  placeholder="Select Variant"
                  value={selectedVariant}
                  onChange={(val) => setSelectedVariant(val)}
                  options={(selectedModel?.variants || []).map(v => ({ value: v.name, label: v.name }))}
                  disabled={!selectedModel}
                />
              </div>

              {/* Right Column: Results & Info */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-8 md:p-10 border border-black/[0.03] shadow-inner shadow-black/[0.02] flex flex-col justify-center relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-brand-red/5 rounded-full blur-[40px] pointer-events-none"></div>
                
                {!selectedModel || !selectedVariant ? (
                  <div className="text-center py-10 relative z-10">
                    <div className="w-20 h-20 bg-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-black/5 transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center text-brand-red">
                        <Car strokeWidth={2.5} className="w-6 h-6" />
                      </div>
                    </div>
                    <h4 className="text-brand-white font-display font-bold text-2xl mb-3 tracking-tight">
                      Ready for Recommendations
                    </h4>
                    <p className="text-sm font-body text-brand-muted max-w-sm mx-auto leading-relaxed">
                      Select your vehicle details on the left to instantly
                      reveal the exact tyre size specifications and hand-picked premium upgrade options.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start justify-between mb-6 pb-6 border-b border-black/5">
                      <div>
                        <span className="inline-block px-2.5 py-1 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wide rounded-md mb-3">
                          OEM Specification
                        </span>
                        <h2 className="text-2xl font-display font-bold text-brand-white leading-tight">
                          {selectedModel.manufacturer} {selectedModel.name}
                        </h2>
                        <p className="text-sm text-brand-chrome mt-1 flex items-center gap-2">
                          <span className="font-semibold text-brand-white">
                            Variant:
                          </span>{" "}
                          {selectedVariant}
                        </p>
                      </div>
                      <div className="text-right bg-white p-3 rounded-xl border border-black/5 shadow-sm min-w-32">
                        <span className="block text-[10px] font-bold text-brand-chrome uppercase tracking-widest mb-1">
                          TYRE SIZE
                        </span>
                        <span className="block text-2xl font-display font-black text-brand-red">
                          {currentTyreSize}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4 flex items-center gap-2 text-sm font-body text-brand-muted">
                      <Shield size={16} className="text-green-500" />
                      <span>
                        Viewing verified {selectedModel.year} fitments
                      </span>
                      <div className="flex-1"></div>
                      <span className="font-semibold text-brand-white">
                        {recommendedTyres.length} Options Found
                      </span>
                    </div>

                    {recommendedTyres.length === 0 ? (
                      <div className="bg-white/50 border border-black/5 rounded-xl p-5 text-center">
                        <Info className="w-8 h-8 text-brand-chrome mx-auto mb-3" />
                        <p className="text-sm text-brand-white font-semibold mb-1">
                          Size not currently stocked online
                        </p>
                        <p className="text-xs text-brand-muted mb-4">
                          We can usually source {currentTyreSize} within 24
                          hours.
                        </p>
                        <a
                          href="https://wa.me/91XXXXXXXXXX"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-bold rounded-lg hover:bg-brand-red-dark transition-colors"
                        >
                          Enquire on WhatsApp
                        </a>
                      </div>
                    ) : (
                      <div className="space-y-3 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                        {recommendedTyres.map((tyre, idx) => (
                          <div
                            key={idx}
                            className="group bg-white rounded-xl p-4 border border-black/5 hover:border-brand-red/30 transition-all flex items-center justify-between shadow-sm hover:shadow-md"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-black font-display text-lg tracking-tight text-brand-white">
                                  {tyre.brand}
                                </span>
                                <span className="text-xs font-semibold px-2 py-0.5 bg-brand-dark-2 text-brand-muted rounded-full">
                                  {tyre.type}
                                </span>
                              </div>
                              <div className="font-body text-sm font-semibold text-brand-chrome">
                                {tyre.model}
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="block font-bold font-body text-brand-red mb-1">
                                {tyre.priceRange}
                              </span>
                              <span className="block text-xs font-medium text-brand-muted">
                                {tyre.warranty}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {recommendedTyres.length > 0 && (
                      <div className="mt-6">
                        <a
                          href={`https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I'm%20looking%20for%20${encodeURIComponent(
                            currentTyreSize || "",
                          )}%20tyres%20for%20my%20${encodeURIComponent(
                            selectedModel.manufacturer +
                              " " +
                              selectedModel.name,
                          )}`}
                          className="w-full flex items-center justify-center gap-2 bg-brand-red text-white py-4 rounded-xl font-body font-bold text-base hover:bg-brand-red-dark hover:shadow-lg transition-all"
                        >
                          Check Availability & Book
                          <ArrowRight size={18} />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-white mb-4">
              Why Upgrade Your OEM Tyres?
            </h2>
            <p className="text-brand-muted font-body">
              Factory tyres are designed for cost-efficiency. Upgrading to
              premium models from Michelin, Pirelli, or CEAT can transform your
              driving experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-dark-2 p-8 rounded-2xl border border-black/5 hover:border-black/10 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-white mb-3">
                Shorter Braking Distance
              </h3>
              <p className="text-brand-muted font-body text-sm">
                Premium compounds grip the road better, reducing braking
                distance by up to several meters in wet conditions, keeping you
                and your family safer.
              </p>
            </div>

            <div className="bg-brand-dark-2 p-8 rounded-2xl border border-black/5 hover:border-black/10 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Car className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-white mb-3">
                Enhanced Comfort & Silence
              </h3>
              <p className="text-brand-muted font-body text-sm">
                Advanced tread designs significantly reduce road noise entering
                the cabin, while better sidewall flexibility absorbs bumps for a
                plush ride.
              </p>
            </div>

            <div className="bg-brand-dark-2 p-8 rounded-2xl border border-black/5 hover:border-black/10 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Bike className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-white mb-3">
                Improved Handling
              </h3>
              <p className="text-brand-muted font-body text-sm">
                Performance-oriented tyres offer stiffer sidewalls and
                asymmetric tread patterns for superior cornering stability and
                steering precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
