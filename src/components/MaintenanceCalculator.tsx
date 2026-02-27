"use client";

import { useState } from "react";
import { Calculator, Zap, DollarSign } from "lucide-react";
import { cn } from "@/lib/cn";

export default function MaintenanceCalculator() {
  const [acAge, setAcAge] = useState(5);
  const [monthlyBill, setMonthlyBill] = useState(200);
  
  // Simple logic for demonstration: Newer units + lower bills = Less savings from repair vs replace
  // Just for engagement/interaction effect
  const efficiencyScore = Math.max(0, 100 - (acAge * 5) - (monthlyBill > 200 ? 10 : 0));
  const potentialSavings = Math.floor(monthlyBill * 12 * (acAge / 10)); 

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2">
        {/* Inputs */}
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent/10 p-2 rounded-lg text-accent">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary">Efficiency Estimator</h3>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-primary">AC Unit Age</label>
                <span className="text-sm font-bold text-accent">{acAge} Years</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="20" 
                value={acAge} 
                onChange={(e) => setAcAge(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <p className="text-xs text-muted mt-2">How old is your current system?</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-primary">Avg. Monthly Bill</label>
                <span className="text-sm font-bold text-accent">${monthlyBill}</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="500" 
                step="10"
                value={monthlyBill} 
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <p className="text-xs text-muted mt-2">Average summer cooling cost.</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-secondary p-8 md:p-10 flex flex-col justify-center border-l border-gray-100">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted mb-1">Estimated Annual Savings</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">${potentialSavings}</span>
                <span className="text-muted">/ year</span>
              </div>
              <p className="text-xs text-muted mt-2">Based on upgrading to a 16-SEER unit.</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted mb-3">Current Efficiency Rating</p>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-accent h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${efficiencyScore}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs font-semibold mt-2 text-primary">
                <span>Wasteful</span>
                <span>Optimal</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="block w-full text-center bg-primary hover:bg-primary-900 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary/20">
                Get Free Replacement Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}