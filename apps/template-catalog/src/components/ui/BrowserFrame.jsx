import React from 'react'
import { Coffee } from 'lucide-react'

const BrowserFrame = ({ children, templateInfo }) => {
  return (
    <div className="mx-6 mt-4 mb-8 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      {/* Browser header clean */}
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="bg-white px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 font-mono">
              <div className="flex items-center gap-2">
                <Coffee size={12} className="text-gray-500" />
                klikylisto.com
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Descripción eliminada */}
          </div>
        </div>
      </div>
      
      {/* Template content with enhanced container */}
      <div className="template-container relative bg-white">
        {children}
      </div>
    </div>
  )
}

export default BrowserFrame
