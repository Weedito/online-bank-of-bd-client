import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Swal from 'sweetalert2';


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
    fetch('https://bank-of-bd.herokuapp.com/feedbacks')
      .then(res => res.json())
      .then(result => {
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

  // const url = `https://bank-of-bd.herokuapp.com/feedback/:${feedbackId}`;

  const handleDelete = id => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bank-of-bd.herokuapp.com/feedback/${id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = ourFeedback.filter(feedback => feedback._id !== id)
              setOurFeedback(remaining)
            }

          })
      }
    })

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

    fetch('https://bank-of-bd.herokuapp.com/feedback', {
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
    <div className="max-w-7xl mx-auto my-5">
      <section className='bg-slate-100 text-gray-700'>
        <Slider>
          {
            ourFeedback.map((feedback, index) => {
              return (
                <div key={feedback._id} className="flex flex-col md:flex-row justify-center items-center">
                  <div className="">
                    <img src={feedback.img} alt="Customrs" className="object-cover w-32 h-32 rounded-full lg:mr-40" />
                  </div>
                  <div className="text-center md:text-left">
                    <button onClick={() => handleDelete(feedback._id)} className='btn btn-sm btn-square absolute right-2 top-2'>X</button>
                    <h2 className="text-2xl font-semibold text-gray-700">{feedback.name}</h2>
                    <p className="py-3 w-96">{feedback.feedbackComment}</p>
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
        </Slider>
      </section>


      <section>
        <div className='text-center'><label htmlFor="my-modal-6" className="btn btn-primary animate-bounce w-26 h-6 modal-button">Review Us</label></div>
        <div>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

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
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn" onClick={sendFeedback}>Submit</label>
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