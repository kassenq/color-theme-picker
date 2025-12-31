import './TabSelector.css';

function TabSelector({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'theory', label: 'Classic Theory' },
    { id: 'harmonious', label: 'Harmonious' },
    { id: 'styled', label: 'Styled' }
  ];

  return (
    <div className="tab-selector">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabSelector;
