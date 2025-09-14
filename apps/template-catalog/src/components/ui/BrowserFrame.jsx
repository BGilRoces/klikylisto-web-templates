import React from 'react'
import { Coffee } from 'lucide-react'

const BrowserFrame = ({ children, templateInfo }) => {
  return (
    <div className="mx-6 mt-4 mb-8 rounded-xl shadow-sm overflow-hidden border border-black/20">
      {/* Browser header clean */}
      <div className="px-6 py-3 border-b border-black/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="px-4 py-2 rounded-md border border-black/20 text-sm text-black/60 font-mono">
              <div className="flex items-center gap-2">
                <Coffee size={12} className="text-black/60"/>
                klikylisto.com
              </div>
            </div>
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
