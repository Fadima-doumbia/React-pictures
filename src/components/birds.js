import React from 'react';
class birds extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images:[]
        }
    }


    componentDidMount(){
        console.log('eeee');
        fetch("https://api.unsplash.com/search/photos?client_id=oH4qQpdTtDm8gCKO_7pC6zmaAV2LVjBwGErUms3MWD0&query=birds")
        .then((response) => { return response.json(); })
        .then((data) => {
            this.setState({images: data.results});
            console.log(data)
        })
    }

    render(){
      const mapp = this.state.images.map((image, i) => <img key={i} src={image.urls.thumb} alt={image.tags.title}/>);
        return(
            <div className = "birds">
                <h2>Birds Pictures</h2>

                {mapp}                
            </div>
        )
        }
}

export default birds;