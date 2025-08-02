import { useState } from 'react';
import './Viewer.scss';

export default function TabbedViewer({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <div className="tabbed-viewer">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {current.type === 'video' && (
          <video src={current.src} controls autoPlay loop muted className="tab-video" />
        )}

        {current.type === 'code' && (
          <pre className="tab-code">
            <code>{current.content}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
