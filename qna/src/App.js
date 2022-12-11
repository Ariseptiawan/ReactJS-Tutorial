import './App.css';

function App() {

  function Mouse() {
    return (
      <div className='mouse_scroll'>
        <div className='mouse'>
          <div className='wheel'></div>
        </div>
        <div>
          <span className='m_scroll_arrows one'></span>
          <span className='m_scroll_arrows one'></span>
          <span className='m_scroll_arrows one'></span>
        </div>
      </div>
    );
  }

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='heading-1'>Halo Kontol</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Mouse />
      </div>

      <div className='container reveal'>
        <h1 className='heading-1'>Let's goo</h1>
        <div className='row'>
          <div className='col-25'>
            <label>Question</label>
          </div>
          <div className='col-75'>
            <input type='text' id="question-box" name="question-box" placeholder='Type here...'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <label>Context</label>
          </div>
          <div className='col-75'>
            <textarea id='context-box' name='context-box' placeholder='Write something...'/>
          </div>
        </div>
        <div className='row'>
          <input type='submit' value='Submit'/>
        </div>
        </div>
        {
          post?
          <Print className='container'/>
          :null
        };
      </div>
    </div>
  );
}
export default App;
