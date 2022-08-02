import React from 'react';

const SMSBanking = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold">Our SMS Banking</h3>
            <p className='mt-2'>Dare coustomer,The sms banking page. That's use for any our banking issue verifications</p>

            <div className='flex flex-col md:flex-row gap-x-20 justify-center items-center py-10 px-2'>
                <div>
                    <h2 className='text-2xl text-start font-bold'>SMS BANKING</h2>
                    <p className='text-start mt-2'>Through SMS banking, Bank clients can get different types of information like account balance, card payment, loan installment & other information by mobile SMS. SMS Banking provides both Push & Pull SMS. Push SMS are those that the bank chooses to send to a customer’s mobile phone without customer’s request. Pull SMS are those that are initiated by the customer by sending SMS to bank to get specific information like account balance enquiry, mini statement currency exchange rates, deposit interest rates, etc.</p>

                    <p className='text-start mt-5 pl-2'>Normally Push SMS provides following message...</p>

                </div>
                <div>
                    <img className='lg:pr-5' width={"1500px"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABhlBMVEX/x5v/dHkvMlf/yZz/y53/////zJ3/cnhOuuD/dXn/yVP/b3f/VmD/c3j/x5r/bHb/w5n/e3z/u5b/0J//w5P/v5j/t5T/WWH/0FP/XWb/hYD/fn0mMVf/po3/kIT/i4L/qI7/loYcMFcdJlP/p43/n4r/rpAoLVX/aXD/1LL/1FMqL1b/3cP/5dJNtdvMTl4TIVFkWGb/9/H/0a0SH1ewlVWQQlviUl8ALlbyxpoXI1JGQl5fOVk4OVosIUhZT2NIosdCia4zSWybhFW2Xm15alZ9P1qfRFvoU1//gHWBQFqjV2mcgnrAoYnQrI/wxlPRZ3LitJKMeHZ9bHCpin1HNVfrvJWySV0wOl4gNWV4vcanwaW4w5TCxYfEp1XVsVNiVlaTe3aJc1XDTF7/u1r/k2z/rGH/nmjfpFxUTVbQuatsO1hpbYX/w1bLrVT/iXRRU3GWXWLibnZcRl/ixaZdu9qYVWnDbnOnwL+wgHkJDUk5X4PakYPgalz/hFz/dV12Nlu5dVitGKGlAAASI0lEQVR4nO1di1/b2JWWdG9153Jly8LYxg8wtuNHMAkQGJ6mdDYZXgkBwis72zaZYTrdqTtNh0nTbXe37f7nex+SLVmyEGQAyfGX3xCTBI/0+bzPuUeSNMQQQwwxxBBDDDHEEEMMMcQQQ0QWAKhJO9T7vqC7Blw9Ozra3z85efHi1avj4+P5+fn9T4wE+HK9XqnMza2trVU46vTbI3Dfl3WnWF2vK3YUCopSOYH3fVl3itUNBwNKq1VQ6q8+DWWIm7+fNe0clDOZnVOlPr96r9d224gzN8BgknDmUIWCpu20lObmQHMw9uiJwC8echJAjxzMLp8rSnOw5SAx83AsTjH2yJMDbhIGXg5mxL1bHPTYRIHm+pCDgedgZsjBo5kxjg4H670GgeHsni/zVhGfefKI44mdg1+asCj45eRAB0lgRuCh+f3qZlN5/cWvOL7oiMRObaAzhjETZozEOPi3zwQed/zjTmOgBaEHq/N1NwflHW3qEyIBHnc5+Oy1xcGylr/vC7tDcDl47OZAL306guDg4N/X6s2NJueAoMRAm0U71GOTg6/+49e/+e2bg4ODt3WaOmmElD6ZQgr8uiI4+M34CMf4NxXGQQPj0U9FEFRPDi60LEbF5H1f3B1ByMHjzx7/2uLg6RznQMb6VOS1IT7Wgc+/gi8qivL69evK02lGwPjI+OeLSvk8k4nJMk7d2cXeEhZoREwTA/Zfp3roBjypcHe49g3l4Nvd342M/5ZysJ3RiCyTqKcN8ZlfdAD6c6CaHFS+pBzsEv130yYHDSoHJB1tbbBzsHC1HFTeTo98p8uy/t0bysFShhpFWUbFO7zgW8A1Oai/nR7/PZV/2fjPOc5Bhr6mFiHS/tHOwcMAHHw/PsI5QHijyTigEQK1CA8ibRHiD4NxsF8x62cHI98SzD78Q6W8RznIMkJyEeMAAEh/qSqEUFWTajA5ACYHysbByIiBuAI8W9miHGgx+h2KkjLA1bOzs6Ojl0cvGfYp/nBtDsZ/r8uchL0244B6BplEKE5ST5R6pVJZW1vjbfS5ubnFP3Y5mPHRhZcmB803IyM/cF2gdvGcUiA8w2RkOFD353rLw/WgHJgNxzrlgHtHjqzFQXRqKep8vYcCpfnHYLpgcVD50zTFOyI4QCYHETIIZ+vuHkHzzxQvFhYg8AmVJXBkycHbp998+f2PphzghskBiUphEXhxoNTr9bmvk1I87kMB/dHOP2eDOMql3NGGBucgKjU1bw5YJvTiyhpAcnOOktUsUJQpDi0OcJZHCygXEaPYn4Ovr+QAHL2an9/8qb21t7W3vX2B5Q7Ey6iEy305qLy6uhYE2EhiVcswCPl3gESk5fRRHPA3qGkCjV4KZFQKOwdxgdWP5EBKkVgj681BPuQcxN+/X32/SrHuig86HAAQ4CYApskByXroQugjhNW/iObIXx5/Yb91ZuFXmJVfO6ZykAjQLVEneXCU9eAg7KVViwNbv5RRsLS8s7NMf1E0stmsNnE1CWmeMjayLgpkEvKUwZuD8vb20tIWRbv1Yyo9mnoX4C5AjpEQ05BbF4w7uJGPQB8OzlvlAkflWAWSWnp3dawHazoPjLwMQjrMBiH+3qLgs1/ZObhoF0ybyOyBWtoNIs1cEBqamwNSDbMy2Dlo2uVgy+SgfkwlQK0GkAMJpLgaZLMuElAxzClDfPWrDgd1Tw7mOQeB5ABOMG1AbveI8mGWAynOBm8BjQ82Kw57sLdyem0OJPUB4UGCK07Sw9+Bprkx2Kw7OFj6cHlY6OpCMA4kmM4Rt2+kHEyEWhBMwM2mg4NLA+FnZSYHkAl5QA4koFa9SCCToZcDqbeWVn5OVRo/5xzQq4cPYoHvIWF4cIByt3ntPxccHBR+YjdiCHvAOWgE5gCWPAQBy+E3CD0clC+ZGHxYYZWheRXCZK3h03h2goZK7gCBRghh9o4m7ByUP7C7uNxqt5eW9p5PlEql3UZgmwYAcUfLciTGcpJdDpotRgGeXV6eXZ69uNjd3X33biq4KCdzXhyg0DuGuF0OyodMEy556lxeWV9NqqoKJSAFqSJIzJF6eYawRwgAJEByfq1g8wmy0RLfWieTzHJTkLcb9aBA1kOdMoBkLWfsVv962GYnVJXCKdeEQ5MRk4P4DDvK9igQB4m8lzLkwisHQE3ndMKGh7BxuVWgGTPvDxg/OTkYezIDFhaeBOIATnaVAXXoIKHNn6FURaihZWOYNceyl4dtrgn4smAZyHV+KmfsycLY2MITvxm97nuK1IndPpnqGEhSCqlnUGsGaWgZnuixcig2E19spY2KIjiI82OdjwJxIKV0/rnXiExqoxYHMRxOgwCrBGFRAUTZDGEFECHGHTHonFBbYAgYKAEZsXQ5WUQ0NDKNA8J6KJUBVvmwAPvkG3x4iJjdAWOrrDjlQAruFljZCTEbCNK6PpG0QueYHqAue+cw6z4yp4DfvGZqwqVFQH1jY/P6p/RADYnGSrWYgGnBc81AYYwQ1Ko1MyIj3iHOshFj7sxF/USpfP7mzcEPfsMH9O/c0gFSbCgvBSQIaWzFxrQwSkupMNoDWHT6ccsYyLHMktAFPl3zg++bLCw8dM+o0HfGOs2SQHoKwCqSwzuEkHLmd5ZPYE5yWXBQeTM9PT3i8xZ8hNEdNcApHZMilFRDn4K894LySQmGTxfgVE9cb1GCMlpWlNbrXz795ku/k8tilNX951QB2CyWilERiN6LnoLp8LXc1KJHSCt0QtO2TUGoVDbOfD4+zsET95/DB4RzUNVzImTC1ENUSegOeSW88nwmDqyBfthxjht+a34EBx42E1aNGv3UQZolZDIbVy3CWujyJqaznhQ8Y4PGWOly4PMm8YVHTx55zu3RVJv/Rr8CLnBGImGEbVQR9FGFy9MdGi4ZVq+tl4OeHDrePffc//9U49PsaaoZIQsRUp5SwIrJy8SsKQs4OIivvue4zr0AidVk2FRS7We+h4+EyytYHJwqO1R/O4ljz0aLuNmm/q8AYXOHpyRLphkH4ZICKemtCvhwZbYhVMJcfuZc/xY3m5NfXc0BSFluANAQAYex/657USDjH2cz4sXfXpzsn5zsHzlNucXB1XIARpFhqT9NzvSw2UOrzuHBQUMTOQOWkipU1Z46KgCWHIhzHgKeHk+leXnnDIs6VU3c9i1dH14FcJmNEwkKvBuESbhqcXAkjnnss72JR14VIsqBrWQAQxYZMKT7xIhmwOw9Urj6qvJ3k4Mv/r64OGdhcXPVfYsgTTkIc7s56dUU7CKGvQyYejyn1C0OOhtweEjtuR4tR0JZNrEAcKw/Axhhr1xffbGm9OFAWfOYZgWJYpgXIICat0UUIEWvuVKxG67pzYFS8frAAzam7gl9LKKgoOqZ6Ksv51g2bS5C+u+eyd7Fl6G+Xzdg2scaoD52THCg1JtNLg9OCpS5lyEWey+o/cUA6bU+RS91f07pj6hxAEb7U2D0Pauf9OVgMWIcwBJC3spAPB2CwGBxkKCWv+YlCiTnU+y6Qhf2o8VBSp/0nJMgvmlN8qU/B+GsnfeHKiG3HBDf+Tkw+j8VHw4WIyYHNHaZcIsBwn5VX5CKoeeF/hxETw6Ah3O8osZBf8I4HSAOYM0tBv6nkrn9wO3+gjC3n4xKoCgieNU9MER8zyBCPlWBP5T7crD2t1oqIpKQYNUtIEJlYRYRTyCvOJOc4LpjqzW7sHKhaSFtq/YA5vNJq99MSiXERuaKjARS8+PArDZcwUEjEmd64QRriIuMCRvMMKIHEhsP8NcEkBLmg8/ye6NZ2EE47MfXOBIGTliHMUk1pWMymeRtBv+Nl5YX6eWgKcBf84E+ErI2khcSeZoR0YyJbSlBaokgIwG5GPjucerElIbDJm58T/GW4vumsvKMlyHDO4LYBW/0sIEpXijJUyugMr3wHyEFEja9CG7ZfOPa0wMTbzaafLSVRVl3disfBTEjhXJSGqGcCieZXfQ9kt2ZOsWX9hhp8XNzY+TIwYZyKTgoRiReFrekp+EoIWkIKAfUKPj9QKfYgA+b3hyst0VBnmi+3iU0ALyxQIpJ+moUsm91/+1+atGKKZ0m0cYBn/WXMdG07B3dxcdB5a6ebyjhMSNIT/l2g4HUOaLlDA/scsD/CZvg0cJcTLcAJJmGRLpNZsEVV91NLWwzzE4OfqK+BXMKIiEI3CJeZx2BmC4U4CmT2P9TLi9+Pt2VAyykQGvoEQgV2aGzay0w445DiAFhrrHQ3tve3j6/OL/433/887tx0yY+I1wIENYnwp8zAAkRtv06cAcIdFPMRkthj+HaZushlrb+9X/f/uOf08I3lk8zmpZhoxsh50DlHhDWqtQeJoq5oGtacIeDLAsPyjunXBUKi0+nv7M4aM5SNYhh4XNv8x4+FhMlnhQA1kgzSMCwFox2TGKMc7Cy3BI2ca7LwXqbn4PhkeIt38RHQS3pnQlJSBMAIxHsaFK3OYuypwUbB9QmUg7GR8bHDwp7VhMbVUNsEkGVYGTtvKafbdDHAqjdOQWSbXEOrIJavfCv5RWlohTWzIyJqUuQdRn3BF4yIGYzVZ3QUdDHQ9hmmmOCg9mWFTHXt5ZXmjSBFmdCmePIalp47UHCiHWH45h8B3bjRjc8EBxctKwoqUA54C/EuVjEFoVpQfck3DmYAbBnyKNBnQIY7Q6zYlMXOtFiYStrcvCBHQzMiJVxYS2jJFj51BEgB/xBUEO4y0Gb68Jel4OdFbOc8oxvi2NhUiN8ZxQ4+EaCG22ztEfKKHPOOVjqcNA25YBKwh4jINOgiXhIp7DEZoobCGkc2vpRDe1yg9mDLQ8OVmaZCLAYIawbpSkHNw3k5e74WrZhtMtMDqwMutDKmi/L2xmxOlVG+ZA+eIMmi/qNVlnaokQaHsj4kHJw0dWFliY4aJ6SmGk2UGifuwFTN+uDwSnbCB+9S+NUWTnvyIHS2imbfsHoCsvPfe33DdU5zYpwu0nloMPBqXkCsGzFiTirZUOqCzdHT4sePy+Xz7e7HJhysCLiRBpJUt8wet/X/DMj1bPuqZeDrBhTFMtDOAVaZtDkIN0z1Iyf1cvbdjlQTJtoYF5Wpg4yxBs/bgTXxA4+LJSXllbKYsUm5eC0aUYKl5eEF9P0aHQYgkN05RwclMtLOxcXF7MUy8s7O530qVzOaA3CzzgPFlTDpQtUD9p7e22GVqt12im2F1qUgSg9biIgQKJ3wJ9zUDCXzRYKtnZDoZ1nveywJo03BnTNceIPfYeyypcyyYd8nfYN4F6EaLS9nugtsJ6uSYNmDMTh1B4OfAYU11cHTgjMOYVet9CXAmut2iABpAzXDKPhM59YPx44RQDQY5rXMYvTg7UXYU2ab46ix2x/Y2ulHwXNtYFTBdVtD9nGoJ09sV3QgXqzXq9sRG1k+0q4IwMGlhnP7p2enrbarXZ7q723tcca0PPz869OzkK6E+/G8F4PIarnmWw2K56/I75qu8lk0vvge6SRwjFZ71maY87a0Nww22gQQhr8K0GNCIxlXh9AyiOEH4w6o0RiNhAwdqxRIWFuNN8crIio15LO5QA4yxoILv0gg1YyEQBphMmECnuOeTQaMdceHUwi/uDifqBuUS9BOEF6btlrf3gx3AfbbwwwlZ+CbIeFh2twQo/CCvWbAjKzeBUDCD0YPI9oQ3cosR8IyY0OphRY24yc9WTkrCpiGRF5sjaYpgCwRX+SNdpuIYaK9iwaIx0XpxLqQDIggVROF0uR7PeMcFoV7SZ+FBCh3ANqLwaTAQkkDISKoLN02VJ81jTJsRc5g40XpOFgmgEOHh6yI1+OXSk0WhK6Qapqjq1IHVAJEFAndcTmaBy7UvjGsGQOYb2ksr3RA9c/cAJIEwnYowl8jgtMsB5akgbPelQeVn1j8GFuR1MBGSnANQHlExIs4cHMEV1wNBUIG7xVSzpia8MlqA66FJiwtVlZ9ijxXQn58A4h3wJsz1bC5qg/gInB66H5o8MB4ge/gJQabHfYC9B9vhQSiTFM58O2EvlWQT/yBAA1EmNPYzD4yC0YRf7bcgYMaprGgaOshKLr+WqCmwBYJKFbkX6LACVCo0H66UOYSlkLYGHNGPiwqAsaBcjWEgBbVgg+IZegFln9MBLPWLwtiPWqesifyn67SLCD62F/MP0tg6ZFsWg8eff2AEpybtCGbK8L9gzLT5yCIYYYYojo4f8Bee0yMbYTySQAAAAASUVORK5CYII=" alt="" />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-x-20 justify-center items-center py-10 px-2'>

                <div>
                    <img className='lg:pr-5' width={"500px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0i9vOZP-Eb9uRhKxLU8vabHynVukqvGuOw&usqp=CAU" alt="" />
                </div>

                <div>
                    <h2 className='text-2xl text-start font-bold'>Automatic Alerts</h2>
                    <p className='text-start'>Automatic alerts on registered mobile number for all the <br /> transactions done through card, internet banking, <br /> or mobile banking.</p>
                    <button className='link'>Read more</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-x-20 justify-center items-center py-10 px-2 card-body'>
                <div>
                    <h2 className='text-2xl text-start font-bold'>Features of SMS Banking</h2>
                    <p>Our SMS Banking Services are of two types:</p>
                    <p>1) Value Added SMS alters for bank account</p>
                    <p>2) Non-transactional service requests such as <br /> check your account balance, order cheque book etc.</p>
                    <button className='link mt-2'>Read more</button>
                </div>

                <div>
                    <img className='lg:pr-5' width={"500px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJu5OYjMG3t5uFgWyN43EsTo2PO9Fel7QSw&usqp=CAU" alt="" />
                </div>
            </div>

        </div>
    );
};

export default SMSBanking;