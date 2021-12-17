import './TagInput.css';
import { useState } from 'react';

function TagInput(props){
    
    const {tagData,setTagData}=props;


    const removeTagData = indexToRemove => {
        setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
    };

    const addTagData = event => {
        if (event.target.value !== '') {
          setTagData([...tagData, event.target.value]);
          event.target.value = '';
        }
    };

    return (
    <div>
        <div className="tag-input">
          <ul className="tags">
            {tagData.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <span
                  className="tag-close-icon"
                  onClick={() => removeTagData(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            onKeyUp={event => (event.key === 'Enter' ? addTagData(event) : null)}
            placeholder="Press enter to add a tag"
          />
        </div>
    </div>
    );
}

export default TagInput;