import React from 'react';
import AgentBank from '../../../Components/Components.Rijon/AgentBank';
import PageTitle from '../../PageTitle/PageTitle';

const AgentBanking = () => {
    return (
        <div>
            {/* title */}

            <PageTitle title="AgentBanking"></PageTitle>

            {/* end */}


            <div className='flex flex-col md:flex-row gap-12 lg:gap-96 justify-center items-center bg-slate-100 py-20 px-2'>

                <div data-aos="fade-down-right" data-aos-duration="1000" className="text-center">
                    <div className='pl-20'>
                        <h2 className='text-4xl font-semibold'>Agent Banking</h2>
                        <p className="text-gray text-sm mt-3 w-96">Agent Banking is defined as the banking services provided (outside of regular bank branches) by engaging agents under a valid agreement. An Agent is the owner of an outlet who conducts banking transaction on behalf of a Bank. It was first introduced by Bangladesh Bank (BB) in 2013. The aim is to provide financial services to the vastly unbanked segments of the population, especially those from the geographically dispersed locations.</p>
                    </div>
                </div>

                <div data-aos="fade-down-left" data-aos-duration="1000">
                    <img className='object-cover' src="https://i.ibb.co/QXcmY6v/Group-91.jpg" alt="Group-91" />
                </div>

            </div>

            <AgentBank></AgentBank>

            <section className='mx-20 lg:pl-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-8 gap-10 py-10'>

                    <div class="card w-72 h-52 hover:bg-lime-100 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_428_619)">
                                        <path d="M43.9998 21.5508C43.9397 31.6562 36.4107 40.6034 26.3594 42.5763C21.598 43.5101 16.6551 42.881 12.2955 40.7865C7.93591 38.6919 4.40251 35.2487 2.24197 30.9893C-3.10493 20.4026 1.44851 7.31896 12.3241 2.20107C17.4598 -0.216855 22.7734 -0.609178 28.247 0.911271C28.9368 1.10305 29.4116 1.49287 29.5409 2.20107C29.6458 2.77516 29.4231 3.24772 28.9675 3.60621C28.5119 3.9647 27.9847 3.99478 27.4318 3.83057C25.5416 3.27404 23.6091 2.96695 21.6319 3.04341C14.3371 3.32419 8.77139 6.53931 5.29039 12.8004C-0.549227 23.3056 5.24049 36.2777 17.0298 39.4189C27.4702 42.2003 38.347 35.6184 40.4318 25.2685C40.933 22.8429 40.9404 20.3442 40.4535 17.9157C40.2667 16.9882 40.8016 16.2047 41.7231 16.0355C42.5268 15.8876 43.342 16.4554 43.47 17.3279C43.6735 18.7317 43.8258 20.1419 43.9998 21.5508Z" fill="#027358" />
                                        <path d="M23.425 30.7762C23.425 31.0157 23.4327 31.2475 23.425 31.4794C23.3892 32.3869 22.7199 33.0651 21.8701 33.0638C21.0203 33.0626 20.3612 32.3894 20.3228 31.4744C20.3126 31.2425 20.3228 31.0106 20.3228 30.7625C18.8562 30.4629 17.6763 29.7772 16.8252 28.599C16.2642 27.8517 15.9338 26.9625 15.8731 26.0369C15.827 25.2347 16.3735 24.5578 17.1247 24.4513C17.5229 24.3831 17.9326 24.4701 18.2662 24.6938C18.5998 24.9175 18.8308 25.26 18.91 25.6483C19.3054 27.2979 19.9786 27.8243 21.7178 27.8168C22.1635 27.8298 22.6095 27.8067 23.0513 27.7479C23.5433 27.6681 23.9933 27.428 24.3287 27.0665C24.6641 26.7051 24.8651 26.2434 24.8993 25.7561C24.9595 24.628 24.3234 23.7055 23.2471 23.4159C22.2489 23.1464 21.243 22.9058 20.2371 22.6638C17.5598 22.0371 15.8641 20.0541 15.8487 17.5246C15.8334 14.9952 17.4805 13.021 20.1258 12.3453L20.3228 12.294C20.3228 12.0608 20.3126 11.8151 20.3228 11.5694C20.3664 10.6582 21.037 9.98884 21.888 10.0001C22.7391 10.0114 23.393 10.6895 23.4237 11.6033C23.4237 11.8201 23.4237 12.0383 23.4237 12.2864C24.596 12.5058 25.6198 12.9733 26.4453 13.8044C27.3219 14.6818 27.8531 15.7297 27.9554 16.9618C28.0258 17.8167 27.464 18.5161 26.6757 18.6114C25.7798 18.7192 25.0555 18.1765 24.9019 17.2827C24.6792 15.9791 23.8089 15.2471 22.4703 15.2459C21.929 15.2459 21.3774 15.2145 20.8463 15.296C20.3353 15.3629 19.8644 15.6033 19.5157 15.9753C19.167 16.3472 18.9626 16.8272 18.9381 17.3316C18.8895 18.4785 19.5447 19.3672 20.6722 19.6568C21.7997 19.9463 22.899 20.1945 23.9996 20.4866C25.1529 20.7777 26.1732 21.4394 26.8971 22.3656C27.621 23.2919 28.0067 24.4293 27.9925 25.5957C27.9851 26.7699 27.5739 27.9074 26.8253 28.8246C26.0767 29.7418 25.0343 30.3852 23.8665 30.6509C23.7309 30.6923 23.5965 30.7311 23.425 30.7762Z" fill="#027358" />
                                        <path d="M39.8188 5.30967C39.8188 7.34027 39.8188 9.37088 39.8188 11.4015C39.8188 12.4281 39.0612 13.1187 38.0873 13.0134C37.7518 12.9798 37.4379 12.8358 37.1966 12.605C36.9554 12.3742 36.8011 12.0701 36.7589 11.7424C36.7369 11.5405 36.727 11.3375 36.7294 11.1345C36.7294 9.35208 36.7294 7.57049 36.7294 5.78974V5.29713L36.5759 5.21315C36.1919 5.62554 35.8169 6.04921 35.4138 6.44531C34.7061 7.13973 33.7501 7.16981 33.1205 6.53806C32.4908 5.90632 32.533 5.00884 33.2267 4.32445C34.5065 3.06096 35.7931 1.80122 37.0865 0.545256C37.8313 -0.180498 38.7003 -0.183005 39.449 0.545256C40.7535 1.80958 42.0516 3.08018 43.3433 4.35704C44.0203 5.02639 44.0306 5.95771 43.3894 6.56689C42.7482 7.17607 41.8396 7.13219 41.1677 6.47914C40.7518 6.07552 40.3602 5.64936 39.957 5.23321L39.8188 5.30967Z" fill="#027358" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_619">
                                            <rect width="44" height="43" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h2 className='text-xl font-bold mt-3'>Money Exchange</h2>
                            <h2 className='text-xl font-bold text-green-500 mt-3'>$ 125632569</h2>

                        </div>
                    </div>


                    <div class="card w-72 h-52 hover:bg-lime-100 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_428_619)">
                                        <path d="M43.9998 21.5508C43.9397 31.6562 36.4107 40.6034 26.3594 42.5763C21.598 43.5101 16.6551 42.881 12.2955 40.7865C7.93591 38.6919 4.40251 35.2487 2.24197 30.9893C-3.10493 20.4026 1.44851 7.31896 12.3241 2.20107C17.4598 -0.216855 22.7734 -0.609178 28.247 0.911271C28.9368 1.10305 29.4116 1.49287 29.5409 2.20107C29.6458 2.77516 29.4231 3.24772 28.9675 3.60621C28.5119 3.9647 27.9847 3.99478 27.4318 3.83057C25.5416 3.27404 23.6091 2.96695 21.6319 3.04341C14.3371 3.32419 8.77139 6.53931 5.29039 12.8004C-0.549227 23.3056 5.24049 36.2777 17.0298 39.4189C27.4702 42.2003 38.347 35.6184 40.4318 25.2685C40.933 22.8429 40.9404 20.3442 40.4535 17.9157C40.2667 16.9882 40.8016 16.2047 41.7231 16.0355C42.5268 15.8876 43.342 16.4554 43.47 17.3279C43.6735 18.7317 43.8258 20.1419 43.9998 21.5508Z" fill="#027358" />
                                        <path d="M23.425 30.7762C23.425 31.0157 23.4327 31.2475 23.425 31.4794C23.3892 32.3869 22.7199 33.0651 21.8701 33.0638C21.0203 33.0626 20.3612 32.3894 20.3228 31.4744C20.3126 31.2425 20.3228 31.0106 20.3228 30.7625C18.8562 30.4629 17.6763 29.7772 16.8252 28.599C16.2642 27.8517 15.9338 26.9625 15.8731 26.0369C15.827 25.2347 16.3735 24.5578 17.1247 24.4513C17.5229 24.3831 17.9326 24.4701 18.2662 24.6938C18.5998 24.9175 18.8308 25.26 18.91 25.6483C19.3054 27.2979 19.9786 27.8243 21.7178 27.8168C22.1635 27.8298 22.6095 27.8067 23.0513 27.7479C23.5433 27.6681 23.9933 27.428 24.3287 27.0665C24.6641 26.7051 24.8651 26.2434 24.8993 25.7561C24.9595 24.628 24.3234 23.7055 23.2471 23.4159C22.2489 23.1464 21.243 22.9058 20.2371 22.6638C17.5598 22.0371 15.8641 20.0541 15.8487 17.5246C15.8334 14.9952 17.4805 13.021 20.1258 12.3453L20.3228 12.294C20.3228 12.0608 20.3126 11.8151 20.3228 11.5694C20.3664 10.6582 21.037 9.98884 21.888 10.0001C22.7391 10.0114 23.393 10.6895 23.4237 11.6033C23.4237 11.8201 23.4237 12.0383 23.4237 12.2864C24.596 12.5058 25.6198 12.9733 26.4453 13.8044C27.3219 14.6818 27.8531 15.7297 27.9554 16.9618C28.0258 17.8167 27.464 18.5161 26.6757 18.6114C25.7798 18.7192 25.0555 18.1765 24.9019 17.2827C24.6792 15.9791 23.8089 15.2471 22.4703 15.2459C21.929 15.2459 21.3774 15.2145 20.8463 15.296C20.3353 15.3629 19.8644 15.6033 19.5157 15.9753C19.167 16.3472 18.9626 16.8272 18.9381 17.3316C18.8895 18.4785 19.5447 19.3672 20.6722 19.6568C21.7997 19.9463 22.899 20.1945 23.9996 20.4866C25.1529 20.7777 26.1732 21.4394 26.8971 22.3656C27.621 23.2919 28.0067 24.4293 27.9925 25.5957C27.9851 26.7699 27.5739 27.9074 26.8253 28.8246C26.0767 29.7418 25.0343 30.3852 23.8665 30.6509C23.7309 30.6923 23.5965 30.7311 23.425 30.7762Z" fill="#027358" />
                                        <path d="M39.8188 5.30967C39.8188 7.34027 39.8188 9.37088 39.8188 11.4015C39.8188 12.4281 39.0612 13.1187 38.0873 13.0134C37.7518 12.9798 37.4379 12.8358 37.1966 12.605C36.9554 12.3742 36.8011 12.0701 36.7589 11.7424C36.7369 11.5405 36.727 11.3375 36.7294 11.1345C36.7294 9.35208 36.7294 7.57049 36.7294 5.78974V5.29713L36.5759 5.21315C36.1919 5.62554 35.8169 6.04921 35.4138 6.44531C34.7061 7.13973 33.7501 7.16981 33.1205 6.53806C32.4908 5.90632 32.533 5.00884 33.2267 4.32445C34.5065 3.06096 35.7931 1.80122 37.0865 0.545256C37.8313 -0.180498 38.7003 -0.183005 39.449 0.545256C40.7535 1.80958 42.0516 3.08018 43.3433 4.35704C44.0203 5.02639 44.0306 5.95771 43.3894 6.56689C42.7482 7.17607 41.8396 7.13219 41.1677 6.47914C40.7518 6.07552 40.3602 5.64936 39.957 5.23321L39.8188 5.30967Z" fill="#027358" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_619">
                                            <rect width="44" height="43" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h2 className='text-xl font-bold mt-3'>Partners</h2>
                            <h2 className='text-xl font-bold text-green-500 mt-3'>10</h2>
                        </div>
                    </div>

                    <div class="card w-72 h-52 hover:bg-lime-100 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_428_619)">
                                        <path d="M43.9998 21.5508C43.9397 31.6562 36.4107 40.6034 26.3594 42.5763C21.598 43.5101 16.6551 42.881 12.2955 40.7865C7.93591 38.6919 4.40251 35.2487 2.24197 30.9893C-3.10493 20.4026 1.44851 7.31896 12.3241 2.20107C17.4598 -0.216855 22.7734 -0.609178 28.247 0.911271C28.9368 1.10305 29.4116 1.49287 29.5409 2.20107C29.6458 2.77516 29.4231 3.24772 28.9675 3.60621C28.5119 3.9647 27.9847 3.99478 27.4318 3.83057C25.5416 3.27404 23.6091 2.96695 21.6319 3.04341C14.3371 3.32419 8.77139 6.53931 5.29039 12.8004C-0.549227 23.3056 5.24049 36.2777 17.0298 39.4189C27.4702 42.2003 38.347 35.6184 40.4318 25.2685C40.933 22.8429 40.9404 20.3442 40.4535 17.9157C40.2667 16.9882 40.8016 16.2047 41.7231 16.0355C42.5268 15.8876 43.342 16.4554 43.47 17.3279C43.6735 18.7317 43.8258 20.1419 43.9998 21.5508Z" fill="#027358" />
                                        <path d="M23.425 30.7762C23.425 31.0157 23.4327 31.2475 23.425 31.4794C23.3892 32.3869 22.7199 33.0651 21.8701 33.0638C21.0203 33.0626 20.3612 32.3894 20.3228 31.4744C20.3126 31.2425 20.3228 31.0106 20.3228 30.7625C18.8562 30.4629 17.6763 29.7772 16.8252 28.599C16.2642 27.8517 15.9338 26.9625 15.8731 26.0369C15.827 25.2347 16.3735 24.5578 17.1247 24.4513C17.5229 24.3831 17.9326 24.4701 18.2662 24.6938C18.5998 24.9175 18.8308 25.26 18.91 25.6483C19.3054 27.2979 19.9786 27.8243 21.7178 27.8168C22.1635 27.8298 22.6095 27.8067 23.0513 27.7479C23.5433 27.6681 23.9933 27.428 24.3287 27.0665C24.6641 26.7051 24.8651 26.2434 24.8993 25.7561C24.9595 24.628 24.3234 23.7055 23.2471 23.4159C22.2489 23.1464 21.243 22.9058 20.2371 22.6638C17.5598 22.0371 15.8641 20.0541 15.8487 17.5246C15.8334 14.9952 17.4805 13.021 20.1258 12.3453L20.3228 12.294C20.3228 12.0608 20.3126 11.8151 20.3228 11.5694C20.3664 10.6582 21.037 9.98884 21.888 10.0001C22.7391 10.0114 23.393 10.6895 23.4237 11.6033C23.4237 11.8201 23.4237 12.0383 23.4237 12.2864C24.596 12.5058 25.6198 12.9733 26.4453 13.8044C27.3219 14.6818 27.8531 15.7297 27.9554 16.9618C28.0258 17.8167 27.464 18.5161 26.6757 18.6114C25.7798 18.7192 25.0555 18.1765 24.9019 17.2827C24.6792 15.9791 23.8089 15.2471 22.4703 15.2459C21.929 15.2459 21.3774 15.2145 20.8463 15.296C20.3353 15.3629 19.8644 15.6033 19.5157 15.9753C19.167 16.3472 18.9626 16.8272 18.9381 17.3316C18.8895 18.4785 19.5447 19.3672 20.6722 19.6568C21.7997 19.9463 22.899 20.1945 23.9996 20.4866C25.1529 20.7777 26.1732 21.4394 26.8971 22.3656C27.621 23.2919 28.0067 24.4293 27.9925 25.5957C27.9851 26.7699 27.5739 27.9074 26.8253 28.8246C26.0767 29.7418 25.0343 30.3852 23.8665 30.6509C23.7309 30.6923 23.5965 30.7311 23.425 30.7762Z" fill="#027358" />
                                        <path d="M39.8188 5.30967C39.8188 7.34027 39.8188 9.37088 39.8188 11.4015C39.8188 12.4281 39.0612 13.1187 38.0873 13.0134C37.7518 12.9798 37.4379 12.8358 37.1966 12.605C36.9554 12.3742 36.8011 12.0701 36.7589 11.7424C36.7369 11.5405 36.727 11.3375 36.7294 11.1345C36.7294 9.35208 36.7294 7.57049 36.7294 5.78974V5.29713L36.5759 5.21315C36.1919 5.62554 35.8169 6.04921 35.4138 6.44531C34.7061 7.13973 33.7501 7.16981 33.1205 6.53806C32.4908 5.90632 32.533 5.00884 33.2267 4.32445C34.5065 3.06096 35.7931 1.80122 37.0865 0.545256C37.8313 -0.180498 38.7003 -0.183005 39.449 0.545256C40.7535 1.80958 42.0516 3.08018 43.3433 4.35704C44.0203 5.02639 44.0306 5.95771 43.3894 6.56689C42.7482 7.17607 41.8396 7.13219 41.1677 6.47914C40.7518 6.07552 40.3602 5.64936 39.957 5.23321L39.8188 5.30967Z" fill="#027358" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_619">
                                            <rect width="44" height="43" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </div>
                            <h2 className='text-xl font-bold mt-3'>District</h2>
                            <h2 className='text-xl font-bold text-green-500 mt-3'>100</h2>

                        </div>
                    </div>


                    <div class="card w-72 h-52 hover:bg-lime-100 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_428_619)">
                                        <path d="M43.9998 21.5508C43.9397 31.6562 36.4107 40.6034 26.3594 42.5763C21.598 43.5101 16.6551 42.881 12.2955 40.7865C7.93591 38.6919 4.40251 35.2487 2.24197 30.9893C-3.10493 20.4026 1.44851 7.31896 12.3241 2.20107C17.4598 -0.216855 22.7734 -0.609178 28.247 0.911271C28.9368 1.10305 29.4116 1.49287 29.5409 2.20107C29.6458 2.77516 29.4231 3.24772 28.9675 3.60621C28.5119 3.9647 27.9847 3.99478 27.4318 3.83057C25.5416 3.27404 23.6091 2.96695 21.6319 3.04341C14.3371 3.32419 8.77139 6.53931 5.29039 12.8004C-0.549227 23.3056 5.24049 36.2777 17.0298 39.4189C27.4702 42.2003 38.347 35.6184 40.4318 25.2685C40.933 22.8429 40.9404 20.3442 40.4535 17.9157C40.2667 16.9882 40.8016 16.2047 41.7231 16.0355C42.5268 15.8876 43.342 16.4554 43.47 17.3279C43.6735 18.7317 43.8258 20.1419 43.9998 21.5508Z" fill="#027358" />
                                        <path d="M23.425 30.7762C23.425 31.0157 23.4327 31.2475 23.425 31.4794C23.3892 32.3869 22.7199 33.0651 21.8701 33.0638C21.0203 33.0626 20.3612 32.3894 20.3228 31.4744C20.3126 31.2425 20.3228 31.0106 20.3228 30.7625C18.8562 30.4629 17.6763 29.7772 16.8252 28.599C16.2642 27.8517 15.9338 26.9625 15.8731 26.0369C15.827 25.2347 16.3735 24.5578 17.1247 24.4513C17.5229 24.3831 17.9326 24.4701 18.2662 24.6938C18.5998 24.9175 18.8308 25.26 18.91 25.6483C19.3054 27.2979 19.9786 27.8243 21.7178 27.8168C22.1635 27.8298 22.6095 27.8067 23.0513 27.7479C23.5433 27.6681 23.9933 27.428 24.3287 27.0665C24.6641 26.7051 24.8651 26.2434 24.8993 25.7561C24.9595 24.628 24.3234 23.7055 23.2471 23.4159C22.2489 23.1464 21.243 22.9058 20.2371 22.6638C17.5598 22.0371 15.8641 20.0541 15.8487 17.5246C15.8334 14.9952 17.4805 13.021 20.1258 12.3453L20.3228 12.294C20.3228 12.0608 20.3126 11.8151 20.3228 11.5694C20.3664 10.6582 21.037 9.98884 21.888 10.0001C22.7391 10.0114 23.393 10.6895 23.4237 11.6033C23.4237 11.8201 23.4237 12.0383 23.4237 12.2864C24.596 12.5058 25.6198 12.9733 26.4453 13.8044C27.3219 14.6818 27.8531 15.7297 27.9554 16.9618C28.0258 17.8167 27.464 18.5161 26.6757 18.6114C25.7798 18.7192 25.0555 18.1765 24.9019 17.2827C24.6792 15.9791 23.8089 15.2471 22.4703 15.2459C21.929 15.2459 21.3774 15.2145 20.8463 15.296C20.3353 15.3629 19.8644 15.6033 19.5157 15.9753C19.167 16.3472 18.9626 16.8272 18.9381 17.3316C18.8895 18.4785 19.5447 19.3672 20.6722 19.6568C21.7997 19.9463 22.899 20.1945 23.9996 20.4866C25.1529 20.7777 26.1732 21.4394 26.8971 22.3656C27.621 23.2919 28.0067 24.4293 27.9925 25.5957C27.9851 26.7699 27.5739 27.9074 26.8253 28.8246C26.0767 29.7418 25.0343 30.3852 23.8665 30.6509C23.7309 30.6923 23.5965 30.7311 23.425 30.7762Z" fill="#027358" />
                                        <path d="M39.8188 5.30967C39.8188 7.34027 39.8188 9.37088 39.8188 11.4015C39.8188 12.4281 39.0612 13.1187 38.0873 13.0134C37.7518 12.9798 37.4379 12.8358 37.1966 12.605C36.9554 12.3742 36.8011 12.0701 36.7589 11.7424C36.7369 11.5405 36.727 11.3375 36.7294 11.1345C36.7294 9.35208 36.7294 7.57049 36.7294 5.78974V5.29713L36.5759 5.21315C36.1919 5.62554 35.8169 6.04921 35.4138 6.44531C34.7061 7.13973 33.7501 7.16981 33.1205 6.53806C32.4908 5.90632 32.533 5.00884 33.2267 4.32445C34.5065 3.06096 35.7931 1.80122 37.0865 0.545256C37.8313 -0.180498 38.7003 -0.183005 39.449 0.545256C40.7535 1.80958 42.0516 3.08018 43.3433 4.35704C44.0203 5.02639 44.0306 5.95771 43.3894 6.56689C42.7482 7.17607 41.8396 7.13219 41.1677 6.47914C40.7518 6.07552 40.3602 5.64936 39.957 5.23321L39.8188 5.30967Z" fill="#027358" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_619">
                                            <rect width="44" height="43" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h2 className='text-xl font-bold mt-3'>Sub-District</h2>
                            <h2 className='text-xl font-bold text-green-500 mt-3'>$ 125632569</h2>

                        </div>
                    </div>


                    <div class="card w-72 h-52 hover:bg-lime-100 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_428_619)">
                                        <path d="M43.9998 21.5508C43.9397 31.6562 36.4107 40.6034 26.3594 42.5763C21.598 43.5101 16.6551 42.881 12.2955 40.7865C7.93591 38.6919 4.40251 35.2487 2.24197 30.9893C-3.10493 20.4026 1.44851 7.31896 12.3241 2.20107C17.4598 -0.216855 22.7734 -0.609178 28.247 0.911271C28.9368 1.10305 29.4116 1.49287 29.5409 2.20107C29.6458 2.77516 29.4231 3.24772 28.9675 3.60621C28.5119 3.9647 27.9847 3.99478 27.4318 3.83057C25.5416 3.27404 23.6091 2.96695 21.6319 3.04341C14.3371 3.32419 8.77139 6.53931 5.29039 12.8004C-0.549227 23.3056 5.24049 36.2777 17.0298 39.4189C27.4702 42.2003 38.347 35.6184 40.4318 25.2685C40.933 22.8429 40.9404 20.3442 40.4535 17.9157C40.2667 16.9882 40.8016 16.2047 41.7231 16.0355C42.5268 15.8876 43.342 16.4554 43.47 17.3279C43.6735 18.7317 43.8258 20.1419 43.9998 21.5508Z" fill="#027358" />
                                        <path d="M23.425 30.7762C23.425 31.0157 23.4327 31.2475 23.425 31.4794C23.3892 32.3869 22.7199 33.0651 21.8701 33.0638C21.0203 33.0626 20.3612 32.3894 20.3228 31.4744C20.3126 31.2425 20.3228 31.0106 20.3228 30.7625C18.8562 30.4629 17.6763 29.7772 16.8252 28.599C16.2642 27.8517 15.9338 26.9625 15.8731 26.0369C15.827 25.2347 16.3735 24.5578 17.1247 24.4513C17.5229 24.3831 17.9326 24.4701 18.2662 24.6938C18.5998 24.9175 18.8308 25.26 18.91 25.6483C19.3054 27.2979 19.9786 27.8243 21.7178 27.8168C22.1635 27.8298 22.6095 27.8067 23.0513 27.7479C23.5433 27.6681 23.9933 27.428 24.3287 27.0665C24.6641 26.7051 24.8651 26.2434 24.8993 25.7561C24.9595 24.628 24.3234 23.7055 23.2471 23.4159C22.2489 23.1464 21.243 22.9058 20.2371 22.6638C17.5598 22.0371 15.8641 20.0541 15.8487 17.5246C15.8334 14.9952 17.4805 13.021 20.1258 12.3453L20.3228 12.294C20.3228 12.0608 20.3126 11.8151 20.3228 11.5694C20.3664 10.6582 21.037 9.98884 21.888 10.0001C22.7391 10.0114 23.393 10.6895 23.4237 11.6033C23.4237 11.8201 23.4237 12.0383 23.4237 12.2864C24.596 12.5058 25.6198 12.9733 26.4453 13.8044C27.3219 14.6818 27.8531 15.7297 27.9554 16.9618C28.0258 17.8167 27.464 18.5161 26.6757 18.6114C25.7798 18.7192 25.0555 18.1765 24.9019 17.2827C24.6792 15.9791 23.8089 15.2471 22.4703 15.2459C21.929 15.2459 21.3774 15.2145 20.8463 15.296C20.3353 15.3629 19.8644 15.6033 19.5157 15.9753C19.167 16.3472 18.9626 16.8272 18.9381 17.3316C18.8895 18.4785 19.5447 19.3672 20.6722 19.6568C21.7997 19.9463 22.899 20.1945 23.9996 20.4866C25.1529 20.7777 26.1732 21.4394 26.8971 22.3656C27.621 23.2919 28.0067 24.4293 27.9925 25.5957C27.9851 26.7699 27.5739 27.9074 26.8253 28.8246C26.0767 29.7418 25.0343 30.3852 23.8665 30.6509C23.7309 30.6923 23.5965 30.7311 23.425 30.7762Z" fill="#027358" />
                                        <path d="M39.8188 5.30967C39.8188 7.34027 39.8188 9.37088 39.8188 11.4015C39.8188 12.4281 39.0612 13.1187 38.0873 13.0134C37.7518 12.9798 37.4379 12.8358 37.1966 12.605C36.9554 12.3742 36.8011 12.0701 36.7589 11.7424C36.7369 11.5405 36.727 11.3375 36.7294 11.1345C36.7294 9.35208 36.7294 7.57049 36.7294 5.78974V5.29713L36.5759 5.21315C36.1919 5.62554 35.8169 6.04921 35.4138 6.44531C34.7061 7.13973 33.7501 7.16981 33.1205 6.53806C32.4908 5.90632 32.533 5.00884 33.2267 4.32445C34.5065 3.06096 35.7931 1.80122 37.0865 0.545256C37.8313 -0.180498 38.7003 -0.183005 39.449 0.545256C40.7535 1.80958 42.0516 3.08018 43.3433 4.35704C44.0203 5.02639 44.0306 5.95771 43.3894 6.56689C42.7482 7.17607 41.8396 7.13219 41.1677 6.47914C40.7518 6.07552 40.3602 5.64936 39.957 5.23321L39.8188 5.30967Z" fill="#027358" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_619">
                                            <rect width="44" height="43" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h2 className='text-xl font-bold mt-3'>Village</h2>
                            <h2 className='text-xl font-bold text-green-500 mt-3'>10</h2>

                        </div>
                    </div>


                    <div class="card w-72 h-52 hover:bg-lime-100 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_428_619)">
                                        <path d="M43.9998 21.5508C43.9397 31.6562 36.4107 40.6034 26.3594 42.5763C21.598 43.5101 16.6551 42.881 12.2955 40.7865C7.93591 38.6919 4.40251 35.2487 2.24197 30.9893C-3.10493 20.4026 1.44851 7.31896 12.3241 2.20107C17.4598 -0.216855 22.7734 -0.609178 28.247 0.911271C28.9368 1.10305 29.4116 1.49287 29.5409 2.20107C29.6458 2.77516 29.4231 3.24772 28.9675 3.60621C28.5119 3.9647 27.9847 3.99478 27.4318 3.83057C25.5416 3.27404 23.6091 2.96695 21.6319 3.04341C14.3371 3.32419 8.77139 6.53931 5.29039 12.8004C-0.549227 23.3056 5.24049 36.2777 17.0298 39.4189C27.4702 42.2003 38.347 35.6184 40.4318 25.2685C40.933 22.8429 40.9404 20.3442 40.4535 17.9157C40.2667 16.9882 40.8016 16.2047 41.7231 16.0355C42.5268 15.8876 43.342 16.4554 43.47 17.3279C43.6735 18.7317 43.8258 20.1419 43.9998 21.5508Z" fill="#027358" />
                                        <path d="M23.425 30.7762C23.425 31.0157 23.4327 31.2475 23.425 31.4794C23.3892 32.3869 22.7199 33.0651 21.8701 33.0638C21.0203 33.0626 20.3612 32.3894 20.3228 31.4744C20.3126 31.2425 20.3228 31.0106 20.3228 30.7625C18.8562 30.4629 17.6763 29.7772 16.8252 28.599C16.2642 27.8517 15.9338 26.9625 15.8731 26.0369C15.827 25.2347 16.3735 24.5578 17.1247 24.4513C17.5229 24.3831 17.9326 24.4701 18.2662 24.6938C18.5998 24.9175 18.8308 25.26 18.91 25.6483C19.3054 27.2979 19.9786 27.8243 21.7178 27.8168C22.1635 27.8298 22.6095 27.8067 23.0513 27.7479C23.5433 27.6681 23.9933 27.428 24.3287 27.0665C24.6641 26.7051 24.8651 26.2434 24.8993 25.7561C24.9595 24.628 24.3234 23.7055 23.2471 23.4159C22.2489 23.1464 21.243 22.9058 20.2371 22.6638C17.5598 22.0371 15.8641 20.0541 15.8487 17.5246C15.8334 14.9952 17.4805 13.021 20.1258 12.3453L20.3228 12.294C20.3228 12.0608 20.3126 11.8151 20.3228 11.5694C20.3664 10.6582 21.037 9.98884 21.888 10.0001C22.7391 10.0114 23.393 10.6895 23.4237 11.6033C23.4237 11.8201 23.4237 12.0383 23.4237 12.2864C24.596 12.5058 25.6198 12.9733 26.4453 13.8044C27.3219 14.6818 27.8531 15.7297 27.9554 16.9618C28.0258 17.8167 27.464 18.5161 26.6757 18.6114C25.7798 18.7192 25.0555 18.1765 24.9019 17.2827C24.6792 15.9791 23.8089 15.2471 22.4703 15.2459C21.929 15.2459 21.3774 15.2145 20.8463 15.296C20.3353 15.3629 19.8644 15.6033 19.5157 15.9753C19.167 16.3472 18.9626 16.8272 18.9381 17.3316C18.8895 18.4785 19.5447 19.3672 20.6722 19.6568C21.7997 19.9463 22.899 20.1945 23.9996 20.4866C25.1529 20.7777 26.1732 21.4394 26.8971 22.3656C27.621 23.2919 28.0067 24.4293 27.9925 25.5957C27.9851 26.7699 27.5739 27.9074 26.8253 28.8246C26.0767 29.7418 25.0343 30.3852 23.8665 30.6509C23.7309 30.6923 23.5965 30.7311 23.425 30.7762Z" fill="#027358" />
                                        <path d="M39.8188 5.30967C39.8188 7.34027 39.8188 9.37088 39.8188 11.4015C39.8188 12.4281 39.0612 13.1187 38.0873 13.0134C37.7518 12.9798 37.4379 12.8358 37.1966 12.605C36.9554 12.3742 36.8011 12.0701 36.7589 11.7424C36.7369 11.5405 36.727 11.3375 36.7294 11.1345C36.7294 9.35208 36.7294 7.57049 36.7294 5.78974V5.29713L36.5759 5.21315C36.1919 5.62554 35.8169 6.04921 35.4138 6.44531C34.7061 7.13973 33.7501 7.16981 33.1205 6.53806C32.4908 5.90632 32.533 5.00884 33.2267 4.32445C34.5065 3.06096 35.7931 1.80122 37.0865 0.545256C37.8313 -0.180498 38.7003 -0.183005 39.449 0.545256C40.7535 1.80958 42.0516 3.08018 43.3433 4.35704C44.0203 5.02639 44.0306 5.95771 43.3894 6.56689C42.7482 7.17607 41.8396 7.13219 41.1677 6.47914C40.7518 6.07552 40.3602 5.64936 39.957 5.23321L39.8188 5.30967Z" fill="#027358" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_619">
                                            <rect width="44" height="43" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h2 className='text-xl font-bold mt-2'>District</h2>
                            <h2 className='text-xl font-bold text-green-500 mt-2'>100</h2>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <section className='mx-auto' style={{ backgroundColor: '#F5FFE9' }}>
                    <div className='flex flex-col md:flex-row lg:gap-24 justify-center items-center py-2 px-2'>

                        <div data-aos="zoom-in" data-aos-duration="1000">
                            <img className='object-cover' src="https://i.ibb.co/272JRxm/pexels-roman-pohorecki-230554-1.jpg" alt="" />
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="text-left pl-5">
                            <h2 className='text-4xl font-semibold'>Agent Banking Services</h2>
                            <p className="text-gray text-sm py-3 text-left w-96">Through SMS banking, Bank clients can get different types of information like account balance, card payment, loan installment & other information by mobile SMS. SMS Banking provides both Push & Pull SMS. Push SMS are those that the bank chooses to send to a customer’s mobile phone without customer’s request. Pull SMS are those that are initiated by the customer by sending SMS to bank to get specific information like account balance enquiry, mini statement, currency exchange rates, deposit interest rates, etc.</p>
                            <button className='px-5 py-2 bg-green-500 rounded-full'>Learn More</button>
                        </div>


                    </div>
                </section>
            </section>

        </div>
    );
};

export default AgentBanking;