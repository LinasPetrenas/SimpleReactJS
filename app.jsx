var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'img/darth.gif',
        email: 'DarthVader@gmail.com'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'img/leia.gif',
        email: 'PrincessLeia@gmail.com'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'img/luke.gif',
        email: 'LukeSkywalker@gmail.com'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'img/chewbacca.gif',
        email: 'Chewbacca@gmail.com'
    }
];

var Contact = React.createClass({
    getInitialState: function() {
        return {isOpened: false}
    },
    handleOnClick: function() {

        if (this.state.isOpened === false) {
            this.setState({isOpened: true});
        } else {
            this.setState({isOpened: false});
        }

    },
    render: function() {
        return (

            <li className="contact" onClick={this.handleOnClick} style={{cursor: 'pointer'}}>
                <img className="contact-image" src={this.props.image} width="60px" height="60px"/>
                <div className="contact-info">
                    <div className="contact-name">
                        {this.props.name}
                    </div>
                    <div className="contact-number">
                        {this.props.phoneNumber}
                    </div>
                    <div style={{display: this.state.isOpened ? 'unset' : 'none'}}>
                        {this.props.email}
                    </div>
                </div >
            </li>
        );
    }
});

var ContactsList = React.createClass({
    getInitialState: function() {
        return {displayedContacts: CONTACTS};
    },
    handleSearch: function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({displayedContacts: displayedContacts});
    },
    render: function() {
        return (
            <div className="contacts">
                <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch}/>
                <ul className="contacts-list">
                    {this.state.displayedContacts.map(function(el) {
                        return <Contact key={el.id} name={el.name} phoneNumber={el.phoneNumber} image={el.image} email={el.email}/>;
                    })}
                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <ContactsList/>, document.getElementById("app"));
