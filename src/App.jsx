import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";
import TabButton from "./components/TabButton";
import CoreConcept from"./components/CoreConcept"
import Header from "./components/Header/Header"
function App() {
  const [selectedTopic, setSelected] = useState();
  function handleClick(selectedButton){
      setSelected(selectedButton);
  }
  let tabContent = <p>Please choose a topic.</p>

  if(selectedTopic){
    tabContent =(
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].discription}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  )}
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key ={item.title} {...item}/>
        ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected ={selectedTopic === 'components'}
             onSelect={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton isSelected ={selectedTopic === 'jsx'}
             onSelect={() => handleClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton isSelected ={selectedTopic === 'props'}
             onSelect={() => handleClick('props')}
            >
              Props
            </TabButton>
            <TabButton isSelected ={selectedTopic === 'state'}
             onSelect={() => handleClick('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
