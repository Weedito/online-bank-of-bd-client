import React, { useEffect, useRef, useState } from 'react';
import { TrustedCFeedbackData } from '../../Components/Components.Nahid/Data';
import { FaStar } from "react-icons/fa";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};

const TrustedCFeedback = () => {

  const [user] = useAuthState(auth);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const [ourFeedback, setOurFeedback] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/feedback')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setOurFeedback(result)
      })
  }, []);


  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const feedbackRef = useRef('');

  let newImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLhGXqNvuYnsiYsH4yExdezxz3ePUS0t7dg&usqp=CAU'


  const sendFeedback = () => {
    const feedback = feedbackRef.current.value
    const userName = user.displayName
    let userImg = user?.photoURL
    console.log(currentValue, feedback, userName, userImg);


    if (!userImg) {
      userImg = newImg;
    }


    const feedbackDetails = {
      name: userName,
      img: userImg,
      feedbackStarts: currentValue,
      feedbackComment: feedback
    }
    console.log(feedbackDetails)

    fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(feedbackDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('feedback submited')
        }
        else {
          toast.error('Something Wrong')
        }
      })
  }



  return (
    <div className="flex justify-center items-center bg-base-100 flex-col py-20  px-2">
      <div className="title">
        <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
          Trusted Customers <span className="text-green-700">Feedback</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 items-center justify-center p-10 md:grid-cols-2 mt-12 gap-8">
        {/* partner summary  */}
        {
          ourFeedback.map((feedback, index) => {
            return (
              <div key={feedback._id} className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-2/5 mx-auto">
                  <img src={feedback.img} alt="Customrs" className="object-cover w-32 h-32 rounded-full mx-auto" />
                </div>
                <div className="w-3/5 text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-gray-700">{feedback.name}</h2>
                  <p className="py-3">{feedback.feedbackComment}</p>
                  {/* <img src="" alt="stars" className="object-cover w-32 mx-auto md:mx-0" /> */}
                  <div className='flex gap-2'>
                    <FaStar
                      color={feedback.feedbackStarts >= index ? colors.orange : colors.grey}
                      className='' /> <p>{feedback.feedbackStarts} Stars</p>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>

      <section>
        <div><label for="my-modal-6" class="btn btn-primary animate-bounce w-26 h-6 modal-button">Review Us</label></div>
        <div>
          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

              <div style={styles.container}>
                <h2> Feedback Ratings </h2>
                <div style={styles.stars}>
                  {stars.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                        style={{
                          marginRight: 10,
                          cursor: "pointer"
                        }}
                      />
                    )
                  })}
                </div>
                <textarea placeholder="What's your experience?" ref={feedbackRef} style={styles.textarea} />
                <div class="modal-action">
                  <label for="my-modal-6" class="btn" onClick={sendFeedback}>Submit</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};



export default TrustedCFeedback;