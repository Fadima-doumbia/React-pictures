import React from 'react';
class Beaches extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            key:[]
        }
    }


    componentDidMount(){
        console.log('eeee');
        fetch("https://api.unsplash.com/search/photos?client_id=oH4qQpdTtDm8gCKO_7pC6zmaAV2LVjBwGErUms3MWD0&query=beaches")
        .then((response) => { return response.json(); })
        .then((data) => {
            this.setState({key: data.results});
            console.log(data)
        })
    }

    render(){
      const mapp = this.state.key.map((data, i) => <img key={i} src={data.urls.thumb} alt={data.tags.title}/>);
        return(
            <div className = "beaches">
                <h2>Beaches Pictures</h2>

                {mapp}                
            </div>
        )
        }
}

export default Beaches;