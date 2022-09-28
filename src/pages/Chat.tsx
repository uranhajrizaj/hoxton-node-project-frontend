
import "./chat.css"

export function Chat() {
  return (

    <div className="chat-container">
      <div className="row">
        <nav className="menu">
          <ul className="items">
            <li className="item item-active">
              <i className="fa fa-home" aria-hidden="true" />
            </li>
            <li className="item">
              <span className="material-symbols-outlined">
                person_add
              </span>
            </li>


            <li className="item">
              <span className="material-symbols-outlined">
                exit_to_app
              </span>
            </li>
          </ul>

        </nav>
        <section className="discussions">
          <div className="discussion search">
            <div className="searchbar">
              <i className="fa fa-search" aria-hidden="true" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="discussion message-active">
            <div
              className="photo"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg)"
              }}
            >
              <div className="online" />
            </div>
            <div className="desc-contact">
              <p className="name">Uran </p>
              <p className="message">
               Ckemi ergi 
              </p>
            </div>

          </div>
          
          <div className="discussion">
            <div
              className="photo"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)"
              }}
            ></div>
            <div className="desc-contact">
              <p className="name">Ergi Boja</p>
              <p className="message">MEsazhi i fundit i ergit </p>
            </div>


          </div>




        </section>
        <section className="chat">
  <div className="header-chat">
    
    <p className="name">Uran </p>
   
  </div>
  <div className="messages-chat">
    <div className="message">
      <div
        className="photo"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)"
        }}
      >
        <div className="online" />
      </div>
      <p className="text">Ckemi  </p>
    </div>
    <div className="message text-only">
      <p className="text">
        {" "}
       Ckemi 
      </p>
    </div>
    <p className="time"> 14h58</p>
    <div className="message text-only">
      <div className="response">
        <p className="text"> HeyUran ckemi </p>
      </div>
    </div>
    <div className="message text-only">
      <div className="response">
        <p className="text"> yooo supp bro</p>
      </div>
    </div>
    <p className="response-time time"> 15h04</p>
    <div className="message">
      <div
        className="photo"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)"
        }}
      >
        <div className="online" />
      </div>
      <p className="text"> Lets finish dis app man </p>
    </div>
    <p className="time"> 15h09</p>
  </div>
  
  <div className="footer-chat">
   
    <input
      type="text"
      className="write-message"
      placeholder="Type your message here"
    />
    <i className="icon send fa fa-paper-plane-o clickable" aria-hidden="true" />
  </div>
</section>



      </div>
    </div>


  )
}