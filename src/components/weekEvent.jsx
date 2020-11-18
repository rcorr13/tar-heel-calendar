import React, { Component } from 'react';

class WeekEvent extends Component {
    state = {}
    catcolors = ["#ffd4d4", "#ffe6d4", "#fffbd4", "#e2ffd4", "#d4ffec", "#d4f6ff", "#d4dfff", "#f0d4ff", "#ffd4ee"]

    toggleEventBox(event) {
        event.persist();
        let td = event.nativeEvent.path[0];
        let edit_box = document.getElementById("event-box");
        if (edit_box.className === "is-hidden") {
            edit_box.className = "";
        } else {
            edit_box.className = "is-hidden";
        }
    }

    createEventBox() {
        return (
            <div id="event-box" className="is-hidden">
                <div className="card">
                    <header className="card-head">
                        <p className="card-title">Here is this event!</p>
                    </header>
                </div>
            </div>

        )
    }

    /*toggleEventEditBox(event) {
        event.persist();
        let td = event.nativeEvent.path[0];
        let edit_box = document.getElementById("edit-box");
        let content = document.getElementById("edit-box-content");
        if (edit_box.className === "modal is-active") {
            edit_box.className = "modal";
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
        } else {
            edit_box.className = "modal is-active";
            let task = document.createElement("p");
            task.innerHTML = td.innerHTML;
            content.append(task);
        }
    }

    createEventEditBox() {
        return (
            <div id="edit-box" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Edit this task!</p>
                        <button onClick={this.toggleEditBox} className="delete" aria-label="close"></button>
                    </header>
                    <section id="edit-box-content" className="modal-card-body">
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-warning">Edit</button>
                        <button className="button is-success">Save changes</button>
                        <button onClick={this.toggleEditBox} className="button">Cancel</button>
                    </footer>
                </div>
            </div>

        )
    }*/


    render() {
        const event_style = {
            width: "150px",
            position: "absolute",
            height: `${(this.props.eventstate.end - this.props.eventstate.start) * 80}px`,
            backgroundColor: this.catcolors[this.props.eventstate.category % 9],
            margin: "0px",

        }

        return (
            <div style={event_style} className="box week-event" /*onDoubleClick={this.toggleEventEditBox}*/ onClick={this.toggleEventBox}>
                <p className="has-text-left">{this.props.eventstate.name}</p>
                {this.createEventBox()}
            </div>

        )
    }
}

export default WeekEvent;