/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import './Portfolio.css';
export default function Portfolio(){
    const data = [{
        id:1,
        img:"https://cdn.dribbble.com/users/1885069/screenshots/17681335/media/a7272afd0d23522797ad19d4e9720dee.jpg",
        title:"Pottery Landing Page - Apottery"
    },
    {
        id:2,
        img:"https://cdn.dribbble.com/users/4710151/screenshots/17686652/media/77057c3ac096737d2a60e941ae747877.png",
        title:"CrypTop - Crypto Curency "
    },
    {
        id:3,
        img:"https://cdn.dribbble.com/users/1832625/screenshots/17683517/media/ff6ca2a95106ac8e81cbd81f2e5897e9.png",
        title:"Game news"
    },
    {
    id:4,
    img:"https://cdn.dribbble.com/users/10971/screenshots/17641777/media/4fde9c30af028edea0d11df4464def73.png",
    title:"Sherbet UI's"
    }
    ,{
        id:5,
        img:"https://cdn.dribbble.com/users/4870223/screenshots/17683831/media/405dc3a299c198f787b712396103fcc7.jpg",
        title:"Coin Exchange App UI"
    },{
        id:6,
        img:'https://cdn.dribbble.com/users/6047818/screenshots/17686848/media/a2e550f55bb7f30df8461fb85b41edc9.png',
        title:"Alarm Clock App UI"
    }] 

    const Myarray=data.map(({id,img,title})=>{
        return(
        <div className="Portfolio-box" key={id}>
        <div className="img"><img src={img} alt={title}/></div>
        <h3>{title}</h3>
        <div className="buttons">
        <a href="https://www.github.com" target="_blank" className='btn btn-ligt' rel="noreferrer">github</a>
        <a href="https://www.github.com" target="_blank" className='btn' rel="noreferrer">live dom</a>
        </div>
        </div>
        )
    })
    console.log(Myarray)


    return(
        <section id='Portfolio'>
            <h5 className='text-light'>my recet work</h5>
            <h2>portfolio</h2>
        <div className="continear Portfolio">
            {Myarray}
        </div>
        </section>
    )
    }