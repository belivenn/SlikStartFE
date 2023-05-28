import React, { useState } from 'react';
import SelectableList from './SelectableList';
import logo from './logo1.png';

const App = () => {
  const items1 = ['Solana CLI', 'Yarn', 'Typescript', 'Rust', 'Anchor', 'Anchor Dependencies'];
  const items2 = ['Sugar CLI', 'Metaboss'];
  const codeSnippet = 'npm install -g solana-setup';

  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '150px', marginTop: '20px' }} />
        <p style={{ fontSize: '35px', marginTop: '10px' }}>SlikStart</p>
        <p style={{ fontSize: '18px', marginTop: '10px' }}>
          In your OS Terminal, copy and run the script for your preferred load.
        </p>
        <div style={{ margin: '0 auto', maxWidth: '400px' }}>
          <div style={{ background: 'rgb(255, 255, 255)', padding: '10px', marginBottom: '10px' }}>
            <pre style={{ backgroundColor: '#292d3e', padding: '20px' }}>
              <code className="language-bash" style={{ color: '#bfc7d5' }}>
                {selectedItem === 'Solana CLI' && (
                  <span>sh -c "$(curl -sSfL https://release.solana.com/v1.14.18/install)"</span>
                )}
                {selectedItem === 'Yarn' && <span>Run yarn commands here...</span>}
                {selectedItem === 'Typescript' && <span>Run Typescript commands here...</span>}
                {/* Add more conditions for other items */}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SelectableList title="Core Load" items={items1} onItemClick={handleItemClick} />
        <SelectableList title="Advanced Load" items={items2} onItemClick={handleItemClick} />
      </div>
    </div>
  );
};

export default App;
