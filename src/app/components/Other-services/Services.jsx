import "./Services.scss";

const Services = () => {
    const services =[
        {
            id:1,   
             name:"Pet Photography",
            des:"We capture beautiful timeless portraits of your pets included cats, dogs and birds!…",
        },
        {
            id:2,   
            name:"Engagrment",
            des:"  Getting engaged is a special event for any couple and a great reason to have…",
        },
        {
            id:3,   
            name:"Sweet 16 Portraits",
            des:"   We capture beautiful timeless portraits of your pets included cats, dogs and birds!…",
        },
        {
            id:4,   
            name:"Valentines Day Photography",
            des:"   Fill your heart and your home with beautiful professional Valentine’s Day photos!…",
        },
        {
            id:5,   
            name:"Business & Corprorate Shots",
            des:"   A dynamic headshot sends the right message about you, your personality,…",
        },
        {
            id:6,   
            name:"Birthday Party Photography",
            des:" No matter what age the guest of honor is turning, whether one or one-hundred…",
        },
    ]

    
  return (

    <div className='services-container'>
        <div className="services-heading">
        Other Services
        </div>
        <div className="service-wrapper">

            {services.map((item)=>{
                return <div key={item.id} className="photography">
                    <div className="service-name">
                        {item.name}
                    </div>
                    <div className="service-des">
                        {item.des}
                    </div>
                    <div className="link">view service</div>
                </div>
            })}     
        </div>
    </div>
  )
}

export default Services