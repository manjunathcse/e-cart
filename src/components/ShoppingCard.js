import React from 'react';

class ShoppingCard extends React.Component {
    constructor(props){
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans});
    }

    render(){
        //const {description, urls} = this.props.image;
        console.log(this.props);
        const {name,price,img_url,discount} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans+10}`}}>
                <img ref={this.imageRef} alt={name} src={img_url}/>
                <div>
                    <h4>{name}</h4>
    <div>Price: {price-discount} <del>{price}</del> Discount:{discount}%</div>
                    <button>Add to cart</button>
                </div>
            </div>
        );
    }
}

export default ShoppingCard;