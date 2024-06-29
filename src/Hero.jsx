import devices from './images/illustration-devices.svg'

function Hero() {
  return (
    <div>
        <div className="reverse">
            <div className='hero-img'>
                <img src={devices} alt="image of phone and laptop" />
            </div>
            <div className='cta'>
                <div className='h__'>
                    <p className='n__p'>
                        <span>New</span>
                        Monograph Dashboard
                        </p>
                    <h1>Powerful insights <br />
                     into your team </h1>
                    <p className='ls-p'> 
                        Project planning and time 
                        tracking for agile teams
                    </p>
                </div>
                <div className="demo">
                    <p><a href="">Schedule a demo</a><span className='demo-span'>to see a live preview</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero