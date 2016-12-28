var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'img/darth.gif'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'img/leia.gif'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'img/luke.gif'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'img/chewbacca.gif'
    }
];

var Contact = React.createClass({
    render: function() {
        return (
            <li>
                <img src={this.props.image} width="60px" height="60px"/>
                <div>{this.props.name}</div>
                <div>{this.props.number}</div>
            </li>
        );
    }
});

var ContactList = React.createClass({

    render: function() {
        return (
            <div>
                <ul>
                    {CONTACTS.map(function(el) {
                        return (<Contact key={el.id} name={el.name} number={el.phoneNumber} image={el.image}/>);
                    })
}
                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <ContactList/>, document.getElementById('app'));
